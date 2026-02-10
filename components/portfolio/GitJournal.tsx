export default function GitJournal({ className }: { className?: string }) {
  const commits = [
    { date: "15 Jul:", title: "Muzzilla-streaming-API-services-for-Python" },
    { date: "30 Jun:", title: "ChatHub-Chat-application-VueJs-Mongodb" },
    { date: "26 May:", title: "DineEasy-coffee-tea-reservation-system" },
    { date: "17 Apr:", title: "FinanceBuddy-Personal-finance-tracker" },
    { date: "05 Mar:", title: "TuneStream-Music-streaming-service-API" },
  ];

  return (
    <section
      className={`bg-white dark:bg-[#0e0e0f] rounded-2xl p-12 relative overflow-hidden transition-colors duration-300 ${className}`}
    >
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[383px] bg-gradient-to-t from-white dark:from-[#0e0e0f] to-transparent pointer-events-none" />

      <div className="relative max-w-[370px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-base">
            Git Journaling
          </h2>
        </div>

        {/* Commits List */}
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-[2px] top-2 bottom-2 w-px bg-[#c0dcbc] dark:bg-[#2a2a2a]" />

          {commits.map((commit, index) => (
            <div key={index} className="flex gap-4 relative pl-4">
              {/* Dot */}
              <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />

              {/* Content */}
              <div className="flex-1">
                <div className="text-[#5e5e65] dark:text-[#9999a1] text-sm mb-1">
                  {commit.date}
                </div>
                <p className="text-[#1f1f24] dark:text-[#e5e5e6] text-base leading-relaxed">
                  {commit.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
