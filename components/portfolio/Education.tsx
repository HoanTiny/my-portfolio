export default function Education() {
  const education = [
    {
      year: "2020-2024:",
      school: "MIT",
      degree: "Bachelor's Degree in Computer Science",
    },
    {
      year: "2018-2019:",
      school: "Harvard University",
      degree: "Certification in React and Redux, Node.js Developer Course",
    },
    {
      year: "2015-2016:",
      school: "Stanford University",
      degree: "Certification in Full Stack Web Development",
    },
    {
      year: "2013-2015:",
      school: "University of Washington",
      degree: "Certification in React and Redux, Node.js Developer Course",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-12 relative overflow-hidden border border-[#c0dcbc] dark:border-[#2a2a2a] transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12">
        <svg
          className="w-8 h-8 text-[#129840] dark:text-[#33a381]"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 2L4 8v10c0 7.73 5.13 13.62 12 15 6.87-1.38 12-7.27 12-15V8L16 2zm0 2.89L26 9.54v8.46c0 6.67-4.46 11.73-10 13-5.54-1.27-10-6.33-10-13V9.54l10-4.65z" />
          <path d="M12 14h8v2h-8v-2zm0 4h8v2h-8v-2z" />
        </svg>
        <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[32px] font-medium">
          Education
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-8 relative pl-4">
        {/* Vertical Line */}
        <div className="absolute left-[2px] top-3 bottom-3 w-px bg-[#c0dcbc] dark:bg-[#2a2a2a]" />

        {education.map((item, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute left-[-14px] top-3 w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />

            <div className="flex gap-3">
              <div className="text-[#5e5e65] dark:text-[#9999a1] text-sm font-medium w-24 flex-shrink-0 pt-1">
                {item.year}
              </div>
              <div className="flex-1">
                <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold mb-2">
                  {item.school}
                </h3>
                <p className="text-[#5e5e65] dark:text-[#9999a1] text-base leading-relaxed">
                  {item.degree}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
