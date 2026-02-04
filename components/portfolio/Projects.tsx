"use client";

import { useState } from "react";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description:
        "A comprehensive redesign of an online marketplace to improve user experience and increase conversions.",
      client: "TechCorp Inc.",
      year: "2023-2024",
      role: "Lead Developer & UI/UX Designer",
      image: "/project-1.jpg",
    },
    {
      title: "Mobile Banking App",
      description:
        "Developed a secure and intuitive mobile banking application for iOS and Android platforms.",
      client: "FinanceHub",
      year: "2022-2023",
      role: "Full Stack Developer",
      image: "/project-2.jpg",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Built an advanced analytics platform using machine learning for real-time data insights.",
      client: "DataViz Pro",
      year: "2023",
      role: "Frontend Developer & Data Engineer",
      image: "/project-3.jpg",
    },
  ];

  const project = projects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
              Projects
            </span>
          </div>
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[32px] leading-tight font-medium">
            My Recent Works
          </h2>
        </div>

        {/* Project Display */}
        <div className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-12 transition-colors duration-300">
          <div className="grid grid-cols-[472px,1fr] gap-16">
            {/* Project Image */}
            <div className="relative h-[458px] bg-gradient-to-br from-[#129840] to-[#33a381] dark:from-[#33a381] dark:to-[#129840] rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
                Project Preview
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[40px] leading-tight font-bold mb-6">
                  {project.title}
                </h3>
                <p className="text-[#5e5e65] dark:text-[#9999a1] text-lg leading-relaxed mb-12">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-6 mb-12">
                  <h4 className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
                    Project Info
                  </h4>

                  <div className="flex justify-between items-center py-3 border-b border-[#c0dcbc] dark:border-[#2a2a2a]">
                    <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
                      Client:
                    </span>
                    <span className="text-[#1f1f24] dark:text-[#e5e5e6] text-base font-medium">
                      {project.client}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#c0dcbc] dark:border-[#2a2a2a]">
                    <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
                      Completed Date:
                    </span>
                    <span className="text-[#1f1f24] dark:text-[#e5e5e6] text-base font-medium">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#c0dcbc] dark:border-[#2a2a2a]">
                    <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
                      Project Role:
                    </span>
                    <span className="text-[#1f1f24] dark:text-[#e5e5e6] text-base font-medium">
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-[#1f1f24] dark:text-[#e5e5e6] hover:text-[#129840] dark:hover:text-[#33a381] transition-colors">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
                  </svg>
                  <span className="text-base font-medium">Live Preview</span>
                </button>

                <button className="flex items-center gap-2 text-[#1f1f24] dark:text-[#e5e5e6] hover:text-[#129840] dark:hover:text-[#33a381] transition-colors">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-base font-medium">Check on Github</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mt-8">
          <button
            onClick={prevProject}
            className="w-[50px] h-[50px] bg-white dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#129840] hover:text-white dark:hover:bg-[#33a381] transition-colors"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>
          <button
            onClick={nextProject}
            className="w-[50px] h-[50px] bg-white dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#129840] hover:text-white dark:hover:bg-[#33a381] transition-colors"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="absolute left-0 right-0 bottom-[-108px] h-px">
        <div className="w-px h-[216px] bg-[#c0dcbc] dark:bg-[#2a2a2a] mx-auto" />
      </div>
    </section>
  );
}
