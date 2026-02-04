import Image from "next/image";

export default function Cooperation() {
  const brands = [
    { name: "Stripe", row: 1 },
    { name: "Google", row: 1 },
    { name: "Samsung", row: 1 },
    { name: "Monzo", row: 1 },
    { name: "Visa", row: 1 },
    { name: "Spotify", row: 2 },
    { name: "Intercom", row: 2 },
    { name: "GoCardless", row: 2 },
    { name: "Bravado", row: 2 },
  ];

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-16 relative overflow-hidden transition-colors duration-300">
      {/* Background Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
        <svg viewBox="0 0 377 376" fill="none" className="w-full h-full">
          <path
            d="M127 130c0 35 28 63 63 63s63-28 63-63-28-63-63-63-63 28-63 63Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840]/20 dark:text-[#33a381]/20"
          />
          <path
            d="M147 147c0 24 19 43 43 43s43-19 43-43-19-43-43-43-43 19-43 43Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840]/30 dark:text-[#33a381]/30"
          />
          <path
            d="M83 83c0 71 58 129 129 129s129-58 129-129S283 -46 212 -46 83 12 83 83Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840]/20 dark:text-[#33a381]/20"
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

      <div className="relative max-w-[866px]">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />
            <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
              Cooperation
            </span>
          </div>
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[40px] leading-tight font-medium">
            More than +168 companies trusted worldwide_
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="mb-14">
          <div className="grid grid-cols-5 gap-8 mb-8 opacity-50 dark:opacity-40">
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Stripe
            </div>
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Google
            </div>
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Samsung
            </div>
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Monzo
            </div>
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Visa
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 opacity-50 dark:opacity-40">
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Spotify
            </div>
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Intercom
            </div>
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              GoCardless
            </div>
            <div className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
              Bravado
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-start gap-6">
          {/* Avatar with Circle */}
          <div className="relative w-[114px] h-[114px] flex-shrink-0">
            <div className="absolute inset-0">
              <svg viewBox="0 0 114 114" fill="none" className="w-full h-full">
                <path
                  d="M-5 -5c0 68 55 123 123 123S241 63 241 -5 186-128 118-128 -5-73 -5 -5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[#129840]/20 dark:text-[#33a381]/20"
                />
                <path
                  d="M16 16c0 45 37 82 82 82s82-37 82-82-37-82-82-82-82 37-82 37Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[#129840]/30 dark:text-[#33a381]/30"
                />
                <circle
                  cx="68"
                  cy="77"
                  r="4.5"
                  fill="currentColor"
                  className="text-[#129840] dark:text-[#33a381]"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-[#129840] dark:bg-[#33a381] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#129840] to-[#33a381] dark:from-[#33a381] dark:to-[#129840]" />
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-[#5e5e65] dark:text-[#9999a1]">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C5.829 0 4 1.829 4 4c0 2.171 1.829 4 4 4s4-1.829 4-4c0-2.171-1.829-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>[skype] james.dev</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#5e5e65] dark:text-[#9999a1]">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
              </svg>
              <span>[phone] +1-234-567-8901</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#5e5e65] dark:text-[#9999a1]">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>
              <span>[email] contact@james.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
