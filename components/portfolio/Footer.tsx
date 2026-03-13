export default function Footer() {
  return (
    <div className="relative pt-[44px] pb-[44px]">
      {/* Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c0dcbc] dark:via-[#2a2a2a] to-transparent" />

      <div className="max-w-[1314px] mx-auto px-8">
        <div className="flex flex-col items-center gap-[16px]">
          {/* Logo */}
          <div className="flex items-center gap-[9px]">
            <div className="size-[36px] rounded-full bg-gradient-to-br from-emerald-500 to-green-600" />
            <p className="text-[24px] font-['DM_Mono'] font-medium text-[#1f1f24] dark:text-[#e5e5e6]">
              Tiny.dev
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-[20px]">
            <a
              href="https://www.facebook.com/hoandz93/"
              className="size-[24px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1f1f24] dark:text-[#e5e5e6]"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://x.com/HoanTiny"
              target="__blank"
              className="size-[24px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <img src="/X.png" alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/hoantiny/"
              target="__blank"
              className="size-[24px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/HoanTiny"
              target="__blank"
              className="size-[24px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <img src="/github.png" alt="GitHub" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-[37px] font-['DM_Mono'] text-[14px] sm:text-[16px] text-[#1f1f24] dark:text-[#e5e5e6] p-[10px]">
            <a href="#about" className="hover:opacity-100">
              About me
            </a>
            <a href="#resume" className="opacity-50 hover:opacity-100">
              Resume
            </a>
            <a href="#services" className="opacity-50 hover:opacity-100">
              Services
            </a>
            <a href="#portfolio" className="opacity-50 hover:opacity-100">
              Portfolio
            </a>
            <a href="#blog" className="opacity-50 hover:opacity-100">
              Blog
            </a>
            <a href="#contact" className="opacity-50 hover:opacity-100">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
