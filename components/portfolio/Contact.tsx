"use client";

import { useState } from "react";
import { FormInput } from "@/components/ui/FormInput";
import { ButtonDefault } from "@/components/ui/Button";
import { RiPhoneFill, RiMailFill, RiSkypeFill, RiMap2Fill, RiArrowRightUpLine } from "@/components/ui/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <RiPhoneFill />,
      label: "Phone Number",
      value: "+1-234-567-8901",
    },
    {
      icon: <RiMailFill />,
      label: "Email",
      value: "contact@james.dev",
    },
    {
      icon: <RiSkypeFill />,
      label: "Skype",
      value: "JamesDev24",
    },
    {
      icon: <RiMap2Fill />,
      label: "Address",
      value: "0811 Erdman Prairie, Joaville CA",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-16 transition-colors duration-300">
      <div className="max-w-[1271px] mx-auto">
        <div className="grid grid-cols-[743px,1fr] gap-16">
          {/* Form */}
          <div>
            <h2 className="text-[var(--foreground)] text-[32px] font-urbanist font-bold mb-8">
              Let&apos;s connect
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Your name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormInput
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+1-234-567-8901"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormInput
                  label="Subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <FormInput
                label="Message"
                name="message"
                required
                isTextarea
                rows={8}
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
              />

              {/* Submit Button */}
              <ButtonDefault icon={<RiArrowRightUpLine />}>
                SUBMIT NOW
              </ButtonDefault>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-[22px] p-6 backdrop-blur-[10px] bg-[var(--neutral-800)] dark:bg-[var(--neutral-900)] border-2 border-[var(--theme-primary-1)] rounded-2xl transition-colors duration-300"
              >
                <div className="w-[66px] h-[66px] flex items-center justify-center backdrop-blur-[10px] bg-[var(--neutral-800)] dark:bg-[var(--card)] border-2 border-[var(--theme-primary-1)] rounded-2xl text-[var(--foreground)] shrink-0">
                  {info.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-urbanist font-medium text-[19px] leading-[1.5] text-[var(--neutral-400)]">
                    {info.label}
                  </p>
                  <p className="font-urbanist font-bold text-[20px] leading-[1.2] text-[var(--foreground)]">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
