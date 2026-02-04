export default function Research() {
  const research = [
    {
      year: "2023-2024:",
      title: "Advanced Data Analytics with Big Data Tools",
      description:
        "Utilized big data tools for advanced analytics and insights.",
    },
    {
      year: "2021-2013:",
      title: "Cloud-Native Application Architectures",
      description:
        "Studied best practices for designing cloud-native applications.",
    },
    {
      year: "2019-2020:",
      title: "AI-Driven User Experience Personalization",
      description:
        "Leveraged AI to personalize user experiences based on behavior.",
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
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26c-6.617 0-12-5.383-12-12S9.383 4 16 4s12 5.383 12 12-5.383 12-12 12z" />
          <path d="M16 8c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1s1-.448 1-1V9c0-.552-.448-1-1-1zm-5 4H9c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm10 0h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1z" />
        </svg>
        <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[32px] font-medium">
          Researched
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-8 relative pl-4">
        {/* Vertical Line */}
        <div className="absolute left-[2px] top-3 bottom-3 w-px bg-[#c0dcbc] dark:bg-[#2a2a2a]" />

        {research.map((item, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute left-[-14px] top-3 w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />

            <div className="flex gap-3">
              <div className="text-[#5e5e65] dark:text-[#9999a1] text-sm font-medium w-24 flex-shrink-0 pt-1">
                {item.year}
              </div>
              <div className="flex-1">
                <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#5e5e65] dark:text-[#9999a1] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
