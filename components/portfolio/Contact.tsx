"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiPhoneFill,
  RiMailFill,
  RiSkypeFill,
  RiMap2Fill,
  RiArrowRightUpLine,
} from "@/components/ui/Icons";

const contactInfo = [
  {
    icon: <RiPhoneFill />,
    label: "Phone Number",
    value: "+84-968-652-789",
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
  },
  {
    icon: <RiMailFill />,
    label: "Email",
    value: "th",
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
  },
  {
    icon: <RiSkypeFill />,
    label: "Skype",
    value: "JamesDev24",
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
  },
  {
    icon: <RiMap2Fill />,
    label: "Address",
    value: "0811 Erdman Prairie, Joaville CA",
    color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 } as const,
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = (name: string) =>
    `w-full bg-[#1a1a1f] dark:bg-[#1a1a1f] border rounded-xl px-5 py-4 text-white placeholder:text-[#6b6b70] font-medium text-[15px] outline-none transition-all duration-300 ${
      focused === name
        ? "border-[#a3e635] ring-1 ring-[#a3e635]/30"
        : "border-[#2a2a2f] hover:border-[#3a3a3f]"
    }`;

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-10 lg:p-16 transition-colors duration-300">
      <div className="max-w-[1271px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] xl:grid-cols-[743px,1fr] gap-8 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#e5e5e6] text-[32px] font-urbanist font-bold mb-8 text-color">
              Let&apos;s connect
            </h2>

            <div className="flex content-between flex-col md:flex-row items-start gap-6 mb-12">
              <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("name")}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("phone")}
                  />
                </div>

                {/* Row 2: Email + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="email"
                    type="email"
                    placeholder="Emaill"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("email")}
                  />
                  <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("subject")}
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("message")} resize-none`}
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#a3e635] hover:bg-[#bef264] text-[#1a1a1f] font-bold text-sm tracking-wide rounded-xl px-6 py-4 transition-colors duration-300"
                >
                  Send Message
                  <RiArrowRightUpLine />
                </motion.button>
              </form>
              {/* Contact Info Cards */}
              <motion.div
                className="flex flex-col justify-center gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-5 cursor-default group"
                  >
                    {/* Icon */}
                    <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl bg-[#129840]/10 dark:bg-[#33a381]/10 border border-[#129840]/30 dark:border-[#33a381]/30 text-[#129840] dark:text-[#33a381] text-xl shrink-0 group-hover:bg-[#129840]/20 dark:group-hover:bg-[#33a381]/20 group-hover:border-[#129840]/50 dark:group-hover:border-[#33a381]/50 transition-all duration-300">
                      {info.icon}
                    </div>
                    {/* Text */}
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[#6b6b70] text-sm font-medium">
                        {info.label}
                      </p>
                      <p className="text-[#e5e5e6] text-base font-bold group-hover:text-[#129840] dark:group-hover:text-[#33a381] transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
