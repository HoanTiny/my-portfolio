"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTime,
  useTransform,
} from "framer-motion";
import React from "react";
import { Check, Copy, Mail, MessageCircle, Phone } from "lucide-react";

const technologies = [
  {
    category: "Frontend Frameworks",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "CSS3/SASS", "Styled Components", "Framer Motion"],
  },
  {
    category: "Tools & Other",
    items: ["Git", "Webpack", "Vite", "Figma", "Redux"],
  },
];
export default function Cooperation({ className }: { className?: string }) {
  const [isDropped, setIsDropped] = useState(false);
  const [activeType, setActiveType] = useState("default"); // default, skype, phone, email

  const time = useTime();
  // Tạo chuyển động xoay tròn liên tục
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });

  // Theo dõi vị trí chuột (ví dụ đơn giản hóa)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tạo hiệu ứng "parallax" ngược chiều chuột
  const moveX = useTransform(mouseX, [-100, 100], [20, -20]);
  const moveY = useTransform(mouseY, [-100, 100], [20, -20]);

  // Hàm giả lập cập nhật vị trí chuột trên container
  const handleMouseMove = (e: any) => {
    // (Cần tính toán vị trí tương đối chính xác hơn trong thực tế)
    mouseX.set(e.clientX / 10);
    mouseY.set(e.clientY / 10);
  };
  return (
    <section
      className={`bg-white dark:bg-[#0e0e0f] rounded-2xl p-12 relative overflow-hidden transition-colors duration-300 ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background Circle */}

      <div className="relative w-full">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />
            <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
              Technologies & Tools
            </span>
          </div>
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[40px] leading-tight font-medium">
            My technical expertise and tools_
          </h2>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-8 mb-14">
          {technologies.map((tech, idx) => (
            <div key={idx}>
              <h3 className="text-[#5e5e65] dark:text-[#9999a1] text-sm font-medium mb-4 uppercase tracking-wider">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tech.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="px-5 py-2.5 bg-[#f5f5f5] dark:bg-[#1a1a1b] rounded-lg text-[#1f1f24] dark:text-[#e5e5e6] text-base font-medium hover:bg-[#129840]/10 dark:hover:bg-[#33a381]/10 hover:text-[#129840] dark:hover:text-[#33a381] transition-all duration-300 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-6">
          {/* 1. THE MORPHING HUB (Vòng tròn xanh biến hình) */}
          <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
            {/* Các vòng tròn trang trí background (giống radar) */}
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-emerald-500/10 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Core chính thay đổi màu và icon */}
            <motion.div
              layout
              className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                activeType === "default"
                  ? "bg-emerald-500 shadow-emerald-500/50"
                  : activeType === "email"
                    ? "bg-blue-500 shadow-blue-500/50"
                    : activeType === "phone"
                      ? "bg-orange-500 shadow-orange-500/50"
                      : "bg-sky-500 shadow-sky-500/50" // skype
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="text-black"
                >
                  {activeType === "default" && (
                    <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                  )}
                  {activeType === "skype" && (
                    <MessageCircle size={24} strokeWidth={2.5} />
                  )}
                  {activeType === "phone" && (
                    <Phone size={24} strokeWidth={2.5} />
                  )}
                  {activeType === "email" && (
                    <Mail size={24} strokeWidth={2.5} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* 2. THE INFO LIST (Danh sách thông tin) */}
          <div className="flex flex-col gap-3">
            <ContactItem
              type="skype"
              value="Tiny.dev"
              label="skype"
              setActive={setActiveType}
            />
            <ContactItem
              type="phone"
              value="+84-968-652-789"
              label="phone"
              setActive={setActiveType}
            />
            <ContactItem
              type="email"
              value="hoantiny01@gmail.com"
              label="email"
              setActive={setActiveType}
            />
          </div>
          <div className="relative w-[700px] h-[400px] flex items-center justify-center overflow-hidden rounded-full ">
            {/* --- BACKGROUND EFFECTS --- */}
            {/* Lưới mờ phía sau */}
            <div className="absolute inset-0 "></div>

            {/* Ánh sáng nền (Glow) - Thu nhỏ phạm vi */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none"></div>

            {/* --- CORE (TÂM) - Thu nhỏ --- */}
            <div className="relative z-10">
              <div className="relative flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full border border-emerald-500/30 shadow-[0_0_30px_-8px_rgba(16,185,129,0.5)] z-20">
                <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-[ping_3s_linear_infinite]"></div>
                {/* Avatar nhỏ */}
                <div className="text-center">
                  <span className="text-[8px] font-mono text-emerald-400 font-bold tracking-widest block -mt-1">
                    DEV
                  </span>
                </div>
              </div>
            </div>

            {/* --- VÒNG QUỸ ĐẠO 1 (Bên trong) - Radius nhỏ hơn --- */}
            <OrbitRing radius={40} duration={20} reverse={true}>
              <OrbitItem
                icon={<img src="/nextjs.svg" />}
                color="text-cyan-400"
                label="React"
              />
              <OrbitItem
                icon={<img src="/nodejs.svg" />}
                color="text-yellow-400"
                label="Vite"
              />
              <OrbitItem
                icon={<img src="/tailwind.svg" />}
                color="text-emerald-400"
                label="Node"
              />
            </OrbitRing>

            {/* --- VÒNG QUỸ ĐẠO 2 (Bên ngoài) - Radius nhỏ hơn --- */}
            <OrbitRing radius={80} duration={35} reverse={false}>
              <OrbitItem
                icon={<img src="/React.svg" />}
                color="text-blue-400"
                label="NextJS"
              />
              <OrbitItem
                icon={<img src="/Photoshop.svg" />}
                color="text-purple-400"
                label="SQL"
              />
              <OrbitItem
                icon={<img src="/mongodb.svg" />}
                color="text-pink-400"
                label="Framer"
              />
              <OrbitItem
                icon={<img src="/github.png" />}
                color="text-orange-400"
                label="System"
              />
              <OrbitItem
                icon={<img src="/firebase.svg" />}
                color="text-white"
                label="ThreeJS"
              />
            </OrbitRing>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB COMPONENTS ---

// --- SUB COMPONENTS ---

/**
 * OrbitRing: Vòng tròn quỹ đạo
 */
const OrbitRing = ({ radius, duration, reverse, children }: any) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
      {/* Đường kẻ đứt nét (Visual only) */}
      <div
        style={{ width: radius * 2, height: radius * 2 }}
        className="absolute rounded-full border border-dashed border-zinc-800 opacity-50"
      />

      {/* Container Xoay */}
      <motion.div
        style={{ width: radius * 2, height: radius * 2 }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        {React.Children.map(children, (child, index) => {
          const totalItems = React.Children.count(children);
          const angleStep = 360 / totalItems;
          const rotateAngle = angleStep * index;

          return (
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                transform: `rotate(${rotateAngle}deg) translateY(-${radius}px)`,
                transformOrigin: `50% ${radius}px`,
                height: "0px",
              }}
            >
              {/* Counter-Rotation để icon luôn đứng thẳng */}
              <motion.div
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {child}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

/**
 * OrbitItem: Chi tiết từng Icon (Size nhỏ)
 */
const OrbitItem = ({ icon, color, label }: any) => {
  return (
    <div className="group relative flex items-center justify-center w-8 h-8 bg-zinc-900 border border-zinc-700 rounded-full hover:scale-110 hover:border-emerald-500 hover:shadow-[0_0_15px_-5px_rgba(16,185,129,0.5)] transition-all cursor-pointer z-50">
      <div
        className={`${color} transition-transform duration-300 group-hover:rotate-12`}
      >
        {icon}
      </div>

      {/* Tooltip nhỏ hơn */}
      <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-white text-[9px] px-1.5 py-0.5 rounded border border-zinc-700 whitespace-nowrap pointer-events-none">
        {label}
      </div>
    </div>
  );
};

// Item con xử lý logic copy và hover
const ContactItem = ({ type, value, label, setActive }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      onHoverStart={() => setActive(type)}
      onHoverEnd={() => setActive("default")}
      onClick={handleCopy}
      className="group relative flex items-center gap-3 cursor-pointer p-2 -ml-2 rounded-lg hover:bg-zinc-900/50 transition-colors"
    >
      {/* Icon nhỏ bên trái text */}
      <div className="text-zinc-600 group-hover:text-emerald-400 font-mono text-sm transition-colors">
        [{label}]
      </div>

      {/* Text giá trị */}
      <div className="text-zinc-300 font-mono text-sm group-hover:text-white transition-colors relative">
        {value}

        {/* Đường gạch chân chạy chạy khi hover */}
        <span className="absolute left-0 -bottom-1 h-[1px] bg-emerald-500 w-0 group-hover:w-full transition-all duration-300" />
      </div>

      {/* Nút Copy hiện ra khi hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500">
        {copied ? (
          <Check size={14} className="text-emerald-500" />
        ) : (
          <Copy size={14} />
        )}
      </div>

      {/* Toast thông báo "Copied" */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 20 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-0 translate-x-full bg-emerald-500 text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
