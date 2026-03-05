export default function Education() {
  const education = [
    {
      year: "2019-2023:",
      school: "HAUI",
      degree: "Ha Noi University of Industry, Sofftware Engineering ",
    },
    // THPT Cam Ly, Bac Giang, Vietnam (2016-2019)
    {
      year: "2016-2019:",
      school: "THPT Cam Ly",
      degree: "High School Diploma",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden border border-[#c0dcbc] dark:border-[#2a2a2a] transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="27"
          viewBox="0 0 24 27"
          fill="none"
        >
          <path
            d="M0 22V4C0 1.79087 1.79087 0 4 0H22.6667C23.4031 0 24 0.59696 24 1.33333V25.3333C24 26.0697 23.4031 26.6667 22.6667 26.6667H4.66667C2.08933 26.6667 0 24.5773 0 22ZM21.3333 24V20H4.66667C3.56209 20 2.66667 20.8955 2.66667 22C2.66667 23.1045 3.56209 24 4.66667 24H21.3333ZM9.33333 2.66667H4C3.26363 2.66667 2.66667 3.26363 2.66667 4V17.7824C3.27284 17.4944 3.95093 17.3333 4.66667 17.3333H21.3333V2.66667H18.6667V13.3333L14 10.6667L9.33333 13.3333V2.66667Z"
            fill="#A8FF53"
          />
        </svg>
        <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[24px] sm:text-[32px] font-medium">
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
