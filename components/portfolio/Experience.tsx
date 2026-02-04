"use client";

import { useState } from "react";
import Image from "next/image";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Google",
      period: "2018 - Present",
      logo: "google",
      role: "Senior Software Engineer",
      description:
        "Led development of scalable web applications, improving performance and user experience for millions of users. Implemented machine learning algorithms to enhance search functionality. Collaborated with cross-functional teams to integrate new features seamlessly.",
      skills: ["Python", "TensorFlow", "Angular", "Kubernetes", "GCP"],
    },
    {
      company: "Twitter (X)",
      period: "2012 - 2015",
      logo: "twitter",
      role: "Backend Engineer",
      description:
        "Optimized server-side operations and database management, ensuring reliable and fast tweet processing. Implemented caching mechanisms to reduce server load. Enhanced data security measures to protect user information.",
      skills: ["Scala", "Redis", "PostgreSQL", "Docker", "Apache Kafka"],
    },
    {
      company: "Amazon",
      period: "2018 - Present",
      logo: "amazon",
      role: "Software Development Engineer",
      description:
        "Developed and maintained e-commerce platform features, enhancing functionality and efficiency. Designed APIs to streamline communication between services. Optimized database queries, reducing latency and improving load times.",
      skills: ["Java", "AWS", "DynamoDB", "Node.js", "React"],
    },
    {
      company: "PayPal",
      period: "2010 - 2012",
      logo: "paypal",
      role: "Database Engineer",
      description:
        "Designed and optimized database schemas to support high-volume transaction processing. Developed and maintained data migration scripts to ensure data integrity and consistency. Implemented database security measures to protect sensitive user information.",
      skills: [
        "MySQL",
        "PL/SQL",
        "MongoDB",
        "PostgreSQL",
        "ETL Processes",
        "MS SQL",
      ],
    },
  ];

  const activeExperience = experiences[activeTab];

  return (
    <section className="bg-[#f5f5f5] dark:bg-[#0a0a0a] rounded-2xl p-16 relative overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg
          className="absolute top-1/4 right-1/4 w-[1106px] h-[1106px]"
          viewBox="0 0 1106 1106"
          fill="none"
        >
          <circle
            cx="553"
            cy="553"
            r="553"
            fill="currentColor"
            className="text-[#129840] dark:text-[#33a381]"
          />
        </svg>
      </div>

      <div className="relative max-w-[1314px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />
            <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
              Expericence
            </span>
          </div>
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[48px] leading-tight font-medium">
            +12 years of passion for programming techniques
          </h2>
        </div>

        <div className="grid grid-cols-[397px,1fr] gap-12">
          {/* Tabs */}
          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full p-6 rounded-lg text-left transition-colors ${
                  activeTab === index
                    ? "bg-white dark:bg-[#1a1a1a] border-l-4 border-[#129840] dark:border-[#33a381]"
                    : "bg-transparent hover:bg-white/50 dark:hover:bg-[#1a1a1a]/50 border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Logo Placeholder */}
                  <div className="w-12 h-12 rounded-lg bg-[#f1f5f9] dark:bg-[#2a2a2a] flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-[#129840] dark:bg-[#33a381]" />
                  </div>

                  {/* Company Info */}
                  <div>
                    <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
                      {exp.company}
                    </h3>
                    <p className="text-[#5e5e65] dark:text-[#9999a1] text-base">
                      {exp.period}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-[#0e0e0f] rounded-xl p-8 transition-colors duration-300">
            <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-2xl font-semibold mb-6">
              {activeExperience.role}
            </h3>
            <p className="text-[#5e5e65] dark:text-[#9999a1] text-base leading-relaxed mb-8">
              {activeExperience.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {activeExperience.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#f1f5f9] dark:bg-[#1a1a1a] text-[#1f1f24] dark:text-[#e5e5e6] text-base rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="absolute left-0 right-0 bottom-[-108px] h-px">
        <div className="w-px h-[216px] bg-[#c0dcbc] dark:bg-[#2a2a2a] mx-auto" />
      </div>
    </section>
  );
}
