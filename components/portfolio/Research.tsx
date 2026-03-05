export default function Research() {
  const research = [
    {
      year: "2025-2026:",
      title: "Real-Time Video Streaming & Frontend Optimization",
      description:
        "Researched HLS/DASH adaptive streaming protocols and WebSocket-based real-time communication to deliver low-latency live streaming experiences on web and Smart TV platforms.",
    },
    {
      year: "2024-2025:",
      title: "Cross-Platform Smart TV App Development",
      description:
        "Explored building performant applications for Smart TV platforms (Tizen, WebOS) with optimized navigation, remote control UX, and adaptive rendering for large-screen devices.",
    },
    {
      year: "2024:",
      title: "OTT User Analytics & Tracking Systems",
      description:
        "Studied and implemented event-driven tracking SDKs for OTT platforms, including session management, offline queuing, and user behavior analytics to improve content engagement.",
    },
    {
      year: "2023-2024:",
      title: "Modern Frontend Architecture with Next.js & TypeScript",
      description:
        "Researched server-side rendering, static site generation, and incremental static regeneration patterns in Next.js to build scalable, SEO-friendly web applications.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden border border-[#c0dcbc] dark:border-[#2a2a2a] transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M20 4H28V10.6667H25.3333V6.66667H20V4ZM12 4V6.66667H6.66667V10.6667H4V4H12ZM20 28V25.3333H25.3333V21.3333H28V28H20ZM12 28H4V21.3333H6.66667V25.3333H12V28ZM4 14.6667H28V17.3333H4V14.6667Z"
            fill="#A8FF53"
          />
        </svg>
        <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[24px] sm:text-[32px] font-medium">
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
