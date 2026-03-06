"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "GraphQL",
  "REST API",
  "Git",
  "HTML5",
  "CSS3",
  "Express",
  "MySQL",
];

// Fibonacci sphere points distribution
function fibonacciSphere(count: number, radius: number) {
  const points: { x: number; y: number; z: number }[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    points.push({
      x: Math.cos(theta) * radiusAtY * radius,
      y: y * radius,
      z: Math.sin(theta) * radiusAtY * radius,
    });
  }

  return points;
}

export default function SkillsGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const points = fibonacciSphere(skills.length, 160);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const labels = container.querySelectorAll<HTMLSpanElement>(".skill-label");
    const dots = container.querySelectorAll<HTMLSpanElement>(".skill-dot");

    let animationId: number;

    const animate = () => {
      if (!isDragging.current) {
        rotationRef.current.y += 0.003;
      }

      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      labels.forEach((label, i) => {
        const p = points[i];

        // Rotate around Y axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y1 = p.y;

        // Rotate around X axis
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Depth factor (z mapped to 0-1)
        const depth = (z2 + 160) / 320;
        const scale = 0.6 + depth * 0.6;
        const opacity = 0.3 + depth * 0.7;

        label.style.transform = `translate(-50%, -50%) translate(${x1}px, ${y2}px) scale(${scale})`;
        label.style.opacity = `${opacity}`;
        label.style.zIndex = `${Math.round(depth * 100)}`;
      });

      // Animate dots
      dots.forEach((dot, i) => {
        const angle = (i / dots.length) * Math.PI * 2 + rotationRef.current.y * 0.5;
        const radius = 140 + Math.sin(angle * 3) * 20;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.3;
        const depth = (Math.sin(angle) + 1) / 2;

        dot.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        dot.style.opacity = `${0.2 + depth * 0.4}`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse drag interaction
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      rotationRef.current.y += dx * 0.005;
      rotationRef.current.x += dy * 0.005;
      // Clamp X rotation
      rotationRef.current.x = Math.max(-0.5, Math.min(0.5, rotationRef.current.x));
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [points]);

  return (
    <div className="w-full h-[350px] sm:h-[400px] flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] cursor-grab active:cursor-grabbing"
        style={{ perspective: "800px" }}
      >
        {/* Orbital rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#33a381]/15"
            style={{ transform: "rotateX(70deg)" }}
          />
          <div
            className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#33a381]/10"
            style={{ transform: "rotateX(70deg) rotateZ(60deg)" }}
          />
          <div
            className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#33a381]/10"
            style={{ transform: "rotateX(70deg) rotateZ(-45deg)" }}
          />
        </div>

        {/* Glowing core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            className="w-3 h-3 rounded-full bg-[#33a381]/40 blur-sm"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Ambient floating dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={`dot-${i}`}
            className="skill-dot absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#33a381] pointer-events-none"
          />
        ))}

        {/* Skill labels */}
        {skills.map((skill, i) => (
          <span
            key={skill}
            className="skill-label absolute top-1/2 left-1/2 whitespace-nowrap select-none cursor-pointer font-mono text-[13px] sm:text-[15px] font-medium text-[#33a381] hover:text-[#a3e635] hover:scale-125 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
