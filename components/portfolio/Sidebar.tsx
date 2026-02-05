"use client";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed sideBar__info left-0 top-0 h-full w-71.75 bg-[#1f1f24] dark:bg-[#0a0a0a] z-50 shadow-2xl  ${
          isOpen ? "active" : ""
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute cursor-pointer right-4 top-4 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110 ${
            isOpen ? "opacity-100 delay-300" : "opacity-0"
          }`}
          aria-label="Close menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Content */}
        <div className="p-8 pt-16">
          <div className={`mb-8 transition-all duration-500`}>
            <h2 className="text-2xl font-['DM_Mono'] font-medium text-white mb-4 border-b border-[#a8ff53] pb-3">
              Liên hệ
            </h2>
            <p className="text-white/60 text-sm mb-6">
              {/* Tiếng việt */}
              Tôi luôn hào hứng nhận các dự án mới và hợp tác với những bộ óc
              sáng tạo.
            </p>
          </div>

          <div
            className={`space-y-6 transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-x-0 delay-300"
                : "opacity-0 -translate-x-4"
            }`}
          >
            <div>
              <h3 className="text-white/50 text-xs uppercase mb-2">
                Phone Number
              </h3>
              <p className="text-white/70 text-sm">+84-968-652-789</p>
            </div>

            <div>
              <h3 className="text-white/50 text-xs uppercase mb-2">Email</h3>
              <p className="text-white/70 text-sm">hoantiny01@gmail.com</p>
            </div>

            <div>
              <h3 className="text-white/50 text-xs uppercase mb-2">Facebook</h3>
              <p className="text-white/70 text-sm">Trần Ngọc Hoàn</p>
            </div>

            <div>
              <h3 className="text-white/50 text-xs uppercase mb-2">Address</h3>
              <p className="text-white/70 text-sm">
                Hà Nội, Việt Nam
                <br />
                Việt Nam
              </p>
            </div>

            <div>
              <h3 className="text-white/50 text-xs uppercase mb-3">Social</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                >
                  <img src="/facebook.png" alt="Facebook" />
                </a>
                <a
                  href="#"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                >
                  <img src="/X.png" alt="X" />
                </a>
                <a
                  href="#"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                >
                  <img src="/linkedin.png" alt="LinkedIn" />
                </a>
                <a
                  href="#"
                  className="w-6 h-6 hover:opacity-80 transition-opacity"
                >
                  <img src="/github.png" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
