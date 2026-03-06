"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const SplashParticles = dynamic(
  () => import("@/components/portfolio/SplashParticles"),
  { ssr: false },
);

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const text =
    "Xin chào, tôi là Hoàn\nrất vui khi bạn ghé qua trang web của tôi";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length < text.length) {
      const timeout = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        50,
      );
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setDone(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e0e0f]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <SplashParticles />
          <div className="relative z-10 text-center px-6">
            <p className="font-['DM_Mono'] text-xl sm:text-3xl md:text-4xl text-white leading-relaxed whitespace-pre-line">
              {displayed.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              <motion.span
                className="inline-block w-[3px] h-[1em] bg-[#33a381] ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
