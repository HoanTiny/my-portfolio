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
              James.dev
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-[20px]">
            <a
              href="#"
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
              href="#"
              className="size-[24px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1f1f24] dark:text-[#e5e5e6]"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="size-[24px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1f1f24] dark:text-[#e5e5e6]"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="#"
              className="size-[24px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1f1f24] dark:text-[#e5e5e6]"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-[37px] font-['DM_Mono'] text-[16px] text-[#1f1f24] dark:text-[#e5e5e6] p-[10px]">
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
  );
}
