export default function Skills() {
  const skills = [
    { name: "Node.js", row: 1, col: 1 },
    { name: "Next.js", row: 1, col: 2 },
    { name: "Firebase", row: 1, col: 3 },
    { name: "MongoDB", row: 1, col: 4 },
    { name: "React", row: 1, col: 5 },
    { name: "Vue.js", row: 2, col: 1 },
    { name: "Angular", row: 2, col: 2 },
    { name: "Laravel", row: 2, col: 3 },
    { name: "Tailwind", row: 2, col: 4 },
  ];

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-16 relative overflow-hidden transition-colors duration-300">
      {/* Background Circle */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none opacity-20">
        <svg viewBox="0 0 377 386" fill="none" className="w-full h-full">
          <path
            d="M127 130c0 35 28 63 63 63s63-28 63-63-28-63-63-63-63 28-63 63Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840] dark:text-[#33a381]"
          />
          <path
            d="M147 151c0 24 19 43 43 43s43-19 43-43-19-43-43-43-43 19-43 43Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840] dark:text-[#33a381]"
          />
          <path
            d="M83 85c0 71 58 129 129 129s129-58 129-129S283 -44 212 -44 83 14 83 14Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840] dark:text-[#33a381]"
          />
          <circle
            cx="208"
            cy="151"
            r="4.5"
            fill="currentColor"
            className="text-[#129840] dark:text-[#33a381]"
          />
          <circle
            cx="125"
            cy="202"
            r="4.5"
            fill="currentColor"
            className="text-[#129840] dark:text-[#33a381]"
          />
        </svg>
      </div>

      <div className="relative max-w-[1314px] mx-auto">
        <div className="grid grid-cols-2 gap-16">
          {/* Left: Skills Icons */}
          <div>
            {/* Header */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />
                <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
                  Projects
                </span>
              </div>
              <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[32px] leading-tight font-medium">
                My Skills
              </h2>
            </div>

            {/* Skills Grid */}
            <div className="space-y-8">
              {/* Tooltip */}
              <div className="relative mx-auto w-fit">
                <div className="bg-[#1f1f24] dark:bg-[#e5e5e6] text-white dark:text-[#1f1f24] px-4 py-1 rounded text-sm">
                  MongoDB
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1f1f24] dark:bg-[#e5e5e6] rotate-45" />
              </div>

              {/* Row 1 */}
              <div className="flex justify-center gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-[90px] h-[90px] bg-white dark:bg-[#1a1a1a] rounded-lg border border-[#c0dcbc] dark:border-[#2a2a2a] flex items-center justify-center hover:border-[#129840] dark:hover:border-[#33a381] transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#129840] to-[#33a381] rounded" />
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex justify-center gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-[90px] h-[90px] bg-white dark:bg-[#1a1a1a] rounded-lg border border-[#c0dcbc] dark:border-[#2a2a2a] flex items-center justify-center hover:border-[#129840] dark:hover:border-[#33a381] transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#129840] to-[#33a381] rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Skills Text */}
          <div className="flex items-center">
            <div className="border-l-2 border-[#c0dcbc] dark:border-[#2a2a2a] pl-12">
              <p className="text-[#5e5e65] dark:text-[#9999a1] text-base leading-relaxed space-y-4">
                <span className="block">
                  <strong className="text-[#1f1f24] dark:text-[#e5e5e6]">
                    Front-End:
                  </strong>{" "}
                  HTML, CSS, JavaScript, React, Angular
                </span>
                <span className="block">
                  <strong className="text-[#1f1f24] dark:text-[#e5e5e6]">
                    Back-End:
                  </strong>{" "}
                  Node.js, Express, Python, Django
                </span>
                <span className="block">
                  <strong className="text-[#1f1f24] dark:text-[#e5e5e6]">
                    Databases:
                  </strong>{" "}
                  MySQL, PostgreSQL, MongoDB
                </span>
                <span className="block">
                  <strong className="text-[#1f1f24] dark:text-[#e5e5e6]">
                    Tools & Platforms:
                  </strong>{" "}
                  Git, Docker, AWS, Heroku
                </span>
                <span className="block">
                  <strong className="text-[#1f1f24] dark:text-[#e5e5e6]">
                    Others:
                  </strong>{" "}
                  RESTful APIs, GraphQL, Agile Methodologies
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
