export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description:
        'Building modern web applications with React, Next.js, TypeScript, and Tailwind CSS to deliver fast, interactive user experiences.',
    },
    {
      title: 'UI/UX Implementation',
      description:
        'Translating Figma and design mockups into pixel-perfect, accessible code with clean component architecture and design systems.',
    },
    {
      title: 'Responsive Design',
      description:
        'Creating mobile-first, fully responsive layouts that look great on every screen size and work seamlessly across all modern browsers.',
    },
    {
      title: 'Animation & Interaction',
      description:
        'Crafting smooth animations and micro-interactions using Framer Motion and CSS to enhance user engagement and delight.',
    },
    {
      title: 'Performance Optimization',
      description:
        'Improving Core Web Vitals through lazy loading, code splitting, image optimization, and efficient rendering strategies.',
    },
    {
      title: 'API Integration',
      description:
        'Connecting frontend applications with REST and GraphQL APIs, handling state management and data fetching with modern tools.',
    },
  ]

  return (
    <div className="bg-white dark:bg-[#0e0e0f] border border-[#c0dcbc] dark:border-[#2a2a2a] rounded-lg overflow-hidden relative py-8 sm:py-[60px] px-4 sm:px-8 lg:px-[64px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 dark:from-gray-800/20 dark:to-gray-900/20" />
      </div>

      <div className="relative max-w-[1185px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[6px] mb-8 sm:mb-[48px]">
          <div className="flex items-center gap-[8px]">
            <div className="size-[5px] rounded-full bg-gradient-to-l from-[#33a381] to-[#129840]" />
            <p className="font-['DM_Mono'] text-[16px] leading-[1.5] bg-gradient-to-l from-[#33a381] to-[#129840] bg-clip-text text-transparent">
              What do I offer
            </p>
          </div>
          <h2 className="font-['DM_Mono'] font-medium text-[22px] sm:text-[28px] lg:text-[35px] leading-[1.2] text-center max-w-[644px]">
            <span className="text-[#1f1f24] dark:text-[#e5e5e6]">
              Designing solutions
            </span>
            <span className="text-[#5e5e65] dark:text-[#9999a1]">
              {' '}
              customized to meet your requirements
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[30px] mb-8 sm:mb-[64px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#0e0e0f] border border-[#969698] dark:border-[#3a3a3a] h-auto min-h-[220px] sm:h-[298px] overflow-hidden flex items-center justify-center p-6 sm:p-4 hover:border-[#33a381] transition-colors"
            >
              <div className="flex flex-col gap-[16px] items-start max-w-[291px]">
                <div className="size-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="size-6 text-[#1f1f24] dark:text-[#e5e5e6]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-['DM_Mono'] font-medium text-[20px] leading-[1.2] text-[#1f1f24] dark:text-[#e5e5e6]">
                    {service.title}
                  </h3>
                  <p className="font-['DM_Mono'] text-[14px] leading-[1.5] text-[#5e5e65] dark:text-[#9999a1]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="font-['DM_Mono'] text-[16px] leading-[1.5] text-[#5e5e65] dark:text-[#9999a1]">
            Excited to take on{' '}
            <span className="text-[#1f1f24] dark:text-[#e5e5e6]">
              new projects
            </span>{' '}
            and collaborate.
            <br />
            Let&apos;s chat about your ideas.{' '}
            <span className="text-[#62a92b] dark:text-[#33a381]">
              Reach out!
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
