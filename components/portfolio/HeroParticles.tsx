"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- Small floating particles ---
function SmallParticles({ count = 80 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      randoms[i * 3] = Math.random();
      randoms[i * 3 + 1] = Math.random();
      randoms[i * 3 + 2] = 0.3 + Math.random() * 0.7;
    }

    return { positions, randoms };
  }, [count]);

  const shader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor1: { value: new THREE.Color("#33a381") },
        uColor2: { value: new THREE.Color("#a3e635") },
      },
      vertexShader: `
      attribute vec3 aRandom;
      uniform float uTime;
      uniform vec2 uMouse;
      varying float vAlpha;

      void main() {
        vec3 pos = position;

        float t = uTime * 0.2;
        pos.x += sin(t * aRandom.x * 2.0 + aRandom.y * 6.28) * 0.4;
        pos.y += cos(t * aRandom.y * 2.0 + aRandom.x * 6.28) * 0.4;

        // Mouse repulsion
        vec2 mouseOffset = pos.xy - uMouse * vec2(7.0, 4.0);
        float mouseDist = length(mouseOffset);
        float mouseInfluence = smoothstep(3.0, 0.0, mouseDist) * 0.8;
        pos.xy += normalize(mouseOffset + 0.001) * mouseInfluence;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        gl_PointSize = (2.0 + aRandom.z * 3.0) * (200.0 / -mvPosition.z);
        gl_PointSize *= (1.0 + mouseInfluence * 0.5);

        vAlpha = 0.4 + aRandom.z * 0.4 + mouseInfluence * 0.3;
      }
    `,
      fragmentShader: `
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      varying float vAlpha;

      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;

        float glow = smoothstep(0.5, 0.0, dist);
        vec3 color = mix(uColor1, uColor2, glow);

        gl_FragColor = vec4(color, glow * vAlpha * 0.5);
      }
    `,
    }),
    [],
  );

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      const u = materialRef.current.uniforms.uMouse.value;
      u.x += (mouseRef.current.x - u.x) * 0.05;
      u.y += (mouseRef.current.y - u.y) * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[randoms, 3]}
          count={count}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        args={[shader]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// --- Large bokeh-style floating orbs ---
function BokehOrbs() {
  const count = 6;
  const mesh = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = -1 + Math.random() * 2;
      randoms[i] = Math.random();
    }

    return { positions, randoms };
  }, []);

  const shader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#33a381") },
      },
      vertexShader: `
      attribute float aRandom;
      uniform float uTime;
      varying float vAlpha;

      void main() {
        vec3 pos = position;

        // Slow drift
        float t = uTime * 0.15;
        pos.x += sin(t + aRandom * 6.28) * 1.5;
        pos.y += cos(t * 0.8 + aRandom * 3.14) * 1.0;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        // Big fuzzy circles
        gl_PointSize = (40.0 + aRandom * 60.0) * (200.0 / -mvPosition.z);

        vAlpha = 0.03 + sin(uTime * 0.5 + aRandom * 6.28) * 0.015;
      }
    `,
      fragmentShader: `
      uniform vec3 uColor;
      varying float vAlpha;

      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;

        // Soft radial gradient
        float glow = smoothstep(0.5, 0.0, dist);
        glow = pow(glow, 2.0);

        gl_FragColor = vec4(uColor, glow * vAlpha);
      }
    `,
    }),
    [],
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[randoms, 1]}
          count={count}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        args={[shader]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// --- Connection lines between nearby particles ---
function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const particleCount = 30;
  const maxConnections = particleCount * (particleCount - 1) / 2;
  const connectionDistance = 3.5;

  const { basePositions, speeds } = useMemo(() => {
    const basePositions: { x: number; y: number; z: number; sx: number; sy: number }[] = [];
    const speeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      basePositions.push({
        x: (Math.random() - 0.5) * 14,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 3,
        sx: (Math.random() - 0.5) * 0.3,
        sy: (Math.random() - 0.5) * 0.3,
      });
      speeds.push(0.5 + Math.random());
    }

    return { basePositions, speeds };
  }, []);

  const linePositions = useMemo(() => new Float32Array(maxConnections * 6), [maxConnections]);
  const lineAlphas = useMemo(() => new Float32Array(maxConnections * 2), [maxConnections]);

  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    geom.setAttribute("aAlpha", new THREE.BufferAttribute(lineAlphas, 1));
    return geom;
  }, [linePositions, lineAlphas]);

  const shader = useMemo(
    () => ({
      uniforms: {
        uColor: { value: new THREE.Color("#33a381") },
      },
      vertexShader: `
      attribute float aAlpha;
      varying float vAlpha;

      void main() {
        vAlpha = aAlpha;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      uniform vec3 uColor;
      varying float vAlpha;

      void main() {
        gl_FragColor = vec4(uColor, vAlpha);
      }
    `,
    }),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.2;
    const current: { x: number; y: number; z: number }[] = [];

    // Update positions
    for (let i = 0; i < particleCount; i++) {
      const bp = basePositions[i];
      current.push({
        x: bp.x + Math.sin(t * speeds[i] + i) * 1.2,
        y: bp.y + Math.cos(t * speeds[i] * 0.8 + i * 0.5) * 0.8,
        z: bp.z,
      });
    }

    // Build connection lines
    let lineIdx = 0;
    const posAttr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
    const alphaAttr = lineGeometry.getAttribute("aAlpha") as THREE.BufferAttribute;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = current[i].x - current[j].x;
        const dy = current[i].y - current[j].y;
        const dz = current[i].z - current[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.12;

          posAttr.array[lineIdx * 6] = current[i].x;
          posAttr.array[lineIdx * 6 + 1] = current[i].y;
          posAttr.array[lineIdx * 6 + 2] = current[i].z;
          posAttr.array[lineIdx * 6 + 3] = current[j].x;
          posAttr.array[lineIdx * 6 + 4] = current[j].y;
          posAttr.array[lineIdx * 6 + 5] = current[j].z;

          alphaAttr.array[lineIdx * 2] = alpha;
          alphaAttr.array[lineIdx * 2 + 1] = alpha;

          lineIdx++;
        }
      }
    }

    // Hide unused lines
    for (let k = lineIdx; k < maxConnections; k++) {
      alphaAttr.array[k * 2] = 0;
      alphaAttr.array[k * 2 + 1] = 0;
    }

    posAttr.needsUpdate = true;
    alphaAttr.needsUpdate = true;
    lineGeometry.setDrawRange(0, lineIdx * 2);
  });

  return (
    <lineSegments ref={lineRef} geometry={lineGeometry}>
      <shaderMaterial
        ref={materialRef}
        args={[shader]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: "transparent", pointerEvents: "none" }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
      >
        <SmallParticles />
        <BokehOrbs />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
