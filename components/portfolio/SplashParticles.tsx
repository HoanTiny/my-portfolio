"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WarpParticles({ count = 800 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const { positions, speeds, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute in a cylinder around the camera
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 3;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      speeds[i] = 0.5 + Math.random() * 1.5;
      offsets[i] = Math.random() * Math.PI * 2;
    }

    return { positions, speeds, offsets };
  }, [count]);

  const shader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#33a381") },
        uColor2: { value: new THREE.Color("#129840") },
        uOpacity: { value: 0.7 },
      },
      vertexShader: `
      attribute float aSpeed;
      attribute float aOffset;
      uniform float uTime;
      varying float vAlpha;
      varying float vMix;

      void main() {
        vec3 pos = position;
        // Move particles toward camera (z direction)
        pos.z = mod(pos.z + uTime * aSpeed * 3.0, 20.0) - 10.0;

        // Slight spiral motion
        float t = uTime * 0.3 + aOffset;
        pos.x += sin(t) * 0.1;
        pos.y += cos(t) * 0.1;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        // Size based on distance — closer = larger
        float depth = -mvPosition.z;
        gl_PointSize = (30.0 / depth) * aSpeed;

        // Alpha based on z position — fade at edges
        float zNorm = (pos.z + 10.0) / 20.0;
        vAlpha = smoothstep(0.0, 0.2, zNorm) * smoothstep(1.0, 0.8, zNorm);
        vMix = zNorm;
      }
    `,
      fragmentShader: `
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform float uOpacity;
      varying float vAlpha;
      varying float vMix;

      void main() {
        // Circle shape
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;

        float alpha = smoothstep(0.5, 0.1, dist) * vAlpha * uOpacity;
        vec3 color = mix(uColor1, uColor2, vMix);

        gl_FragColor = vec4(color, alpha);
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
          attach="attributes-aSpeed"
          args={[speeds, 1]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-aOffset"
          args={[offsets, 1]}
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

export default function SplashParticles() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
      >
        <WarpParticles />
      </Canvas>
    </div>
  );
}
