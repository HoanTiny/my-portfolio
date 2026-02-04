export default function Services() {
  const services = [
    {
      title: "Web & App Development",
      description:
        "Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
    },
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Express, Python, and various databases to ensure seamless functionality.",
    },
    {
      title: "Database Management",
      description:
        "Designing and optimizing database schemas with MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval.",
    },
    {
      title: "API Development",
      description:
        "Creating RESTful and GraphQL APIs to enable smooth communication between different services and applications.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Deploying and managing applications on cloud platforms like AWS, Azure, and GCP for scalability and reliability.",
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Implementing continuous integration and deployment pipelines using Docker, Kubernetes, and modern DevOps practices.",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0e0e0f] border border-[#c0dcbc] dark:border-[#2a2a2a] rounded-lg overflow-hidden relative py-[60px] px-[64px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 dark:from-gray-800/20 dark:to-gray-900/20" />
      </div>

      <div className="relative max-w-[1185px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[6px] mb-[48px]">
          <div className="flex items-center gap-[8px]">
            <div className="size-[5px] rounded-full bg-gradient-to-l from-[#33a381] to-[#129840]" />
            <p className="font-['DM_Mono'] text-[16px] leading-[1.5] bg-gradient-to-l from-[#33a381] to-[#129840] bg-clip-text text-transparent">
              What do I offer
            </p>
          </div>
          <h2 className="font-['DM_Mono'] font-medium text-[35px] leading-[1.2] text-center max-w-[644px]">
            <span className="text-[#1f1f24] dark:text-[#e5e5e6]">
              Designing solutions
            </span>
            <span className="text-[#5e5e65] dark:text-[#9999a1]">
              {" "}
              customized to meet your requirements
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-[30px] mb-[64px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#0e0e0f] border border-[#969698] dark:border-[#3a3a3a] h-[298px] overflow-hidden flex items-center justify-center hover:border-[#33a381] transition-colors"
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
            Excited to take on{" "}
            <span className="text-[#1f1f24] dark:text-[#e5e5e6]">
              new projects
            </span>{" "}
            and collaborate.
            <br />
            Let&apos;s chat about your ideas.{" "}
            <span className="text-[#62a92b] dark:text-[#33a381]">
              Reach out!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
