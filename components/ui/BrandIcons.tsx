// Brand icon components from design system

export const BrandFigma = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg
      className="absolute inset-[21.11%_31.11%_21.11%_30.37%]"
      viewBox="0 0 35 53"
      fill="none"
    >
      <path
        d="M8.75 52.5C13.5825 52.5 17.5 48.5825 17.5 43.75V35H8.75C3.9175 35 0 38.9175 0 43.75C0 48.5825 3.9175 52.5 8.75 52.5Z"
        fill="#0ACF83"
      />
      <path
        d="M0 26.25C0 21.4175 3.9175 17.5 8.75 17.5H17.5V35H8.75C3.9175 35 0 31.0825 0 26.25Z"
        fill="#A259FF"
      />
      <path
        d="M0 8.75C0 3.9175 3.9175 0 8.75 0H17.5V17.5H8.75C3.9175 17.5 0 13.5825 0 8.75Z"
        fill="#F24E1E"
      />
      <path
        d="M17.5 0H26.25C31.0825 0 35 3.9175 35 8.75C35 13.5825 31.0825 17.5 26.25 17.5H17.5V0Z"
        fill="#FF7262"
      />
      <path
        d="M35 26.25C35 31.0825 31.0825 35 26.25 35C21.4175 35 17.5 31.0825 17.5 26.25C17.5 21.4175 21.4175 17.5 26.25 17.5C31.0825 17.5 35 21.4175 35 26.25Z"
        fill="#1ABCFE"
      />
    </svg>
  </div>
);

export const BrandReact = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[25%]" viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="5" fill="#61DAFB" />
      <ellipse
        cx="25"
        cy="25"
        rx="18"
        ry="7"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        cx="25"
        cy="25"
        rx="18"
        ry="7"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
        transform="rotate(60 25 25)"
      />
      <ellipse
        cx="25"
        cy="25"
        rx="18"
        ry="7"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
        transform="rotate(-60 25 25)"
      />
    </svg>
  </div>
);

export const BrandNextjs = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[20%]" viewBox="0 0 54 54" fill="none">
      <path
        d="M27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0ZM20.25 40.5V13.5H22.5V40.5H20.25ZM33.75 40.5L24.75 27L33.75 13.5H36L27 27L36 40.5H33.75Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export const BrandVuejs = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[24%]" viewBox="0 0 50 44" fill="none">
      <path
        d="M31.25 0L25 11.25L18.75 0H0L25 43.75L50 0H31.25Z"
        fill="#41B883"
      />
      <path
        d="M31.25 0L25 11.25L18.75 0H10L25 27.5L40 0H31.25Z"
        fill="#35495E"
      />
    </svg>
  </div>
);

export const BrandAngular = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[20%]" viewBox="0 0 54 58" fill="none">
      <path
        d="M27 0L0 9.5L4.05 47.5L27 58L49.95 47.5L54 9.5L27 0Z"
        fill="#DD0031"
      />
      <path d="M27 0V6.45V6.4V35.8V58L49.95 47.5L54 9.5L27 0Z" fill="#C3002F" />
      <path
        d="M27 6.4L10.8 45.5H15.3L18.9 36.3H35.1L38.7 45.5H43.2L27 6.4ZM32.4 31.8H21.6L27 18.9L32.4 31.8Z"
        fill="white"
      />
    </svg>
  </div>
);

export const BrandTailwind = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[28%]" viewBox="0 0 40 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C7.33333 0 5.66667 1.33333 5 4C6.66667 2.66667 8.66667 2.16667 11 2.5C11.9778 2.65556 12.6889 3.37778 13.4667 4.16667C14.6889 5.4 16.1333 6.83333 19 6.83333C21.6667 6.83333 23.3333 5.5 24 2.83333C22.3333 4.16667 20.3333 4.66667 18 4.33333C17.0222 4.17778 16.3111 3.45556 15.5333 2.66667C14.3111 1.43333 12.8667 0 10 0ZM5 6.83333C2.33333 6.83333 0.666667 8.16667 0 10.8333C1.66667 9.5 3.66667 9 6 9.33333C6.97778 9.48889 7.68889 10.2111 8.46667 11C9.68889 12.2333 11.1333 13.6667 14 13.6667C16.6667 13.6667 18.3333 12.3333 19 9.66667C17.3333 11 15.3333 11.5 13 11.1667C12.0222 11.0111 11.3111 10.2889 10.5333 9.5C9.31111 8.26667 7.86667 6.83333 5 6.83333Z"
        fill="#06B6D4"
      />
    </svg>
  </div>
);

export const BrandLaravel = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[23%]" viewBox="0 0 50 50" fill="none">
      <path
        d="M48.5 12.5L38.5 0L28.5 12.5V37.5L20 45L11.5 37.5V12.5L1.5 0L48.5 12.5Z"
        fill="#FF2D20"
      />
      <path d="M28.5 12.5V37.5L20 45V20L28.5 12.5Z" fill="#FF5D4F" />
    </svg>
  </div>
);

export const BrandMongodb = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[19%]" viewBox="0 0 28 60" fill="none">
      <path
        d="M15.9 0C15.9 0 13.05 11.4 12.3 15C11.4 19.2 13.5 24.6 13.8 28.2C14.1 31.8 14.7 36 14.7 36L13.2 60H14.7L16.2 36C16.2 36 16.8 31.8 17.1 28.2C17.4 24.6 19.5 19.2 18.6 15C17.85 11.4 15.9 0 15.9 0Z"
        fill="#599636"
      />
      <path
        d="M13.2 60C13.2 60 7.5 42.3 4.5 34.8C1.5 27.3 0 23.1 0 18.9C0 14.7 1.2 10.5 2.7 7.2C4.2 3.9 7.8 0.3 13.5 0L13.2 60Z"
        fill="#6CAC48"
      />
      <path
        d="M16.5 0C22.2 0.3 25.8 3.9 27.3 7.2C28.8 10.5 30 14.7 30 18.9C30 23.1 28.5 27.3 25.5 34.8C22.5 42.3 16.8 60 16.8 60L16.5 0Z"
        fill="#C2BFBF"
      />
    </svg>
  </div>
);

export const BrandNodejs = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[21%]" viewBox="0 0 52 58" fill="none">
      <path d="M26 0L0 14.5V43.5L26 58L52 43.5V14.5L26 0Z" fill="#8CC84B" />
      <path
        d="M26 15L13 22V37L26 44L39 37V22L26 15ZM26 18L35 23V34L26 39L17 34V23L26 18Z"
        fill="#333333"
      />
    </svg>
  </div>
);

export const BrandFirebase = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[22%]" viewBox="0 0 50 70" fill="none">
      <path
        d="M8.5 62.5L25 70L41.5 62.5L47.5 10L25 0L8.5 62.5Z"
        fill="#FFA000"
      />
      <path d="M25 0L8.5 62.5L25 70V0Z" fill="#F57F17" />
      <path d="M41.5 62.5L25 42.5L8.5 62.5L25 70L41.5 62.5Z" fill="#FFCA28" />
    </svg>
  </div>
);

export const BrandPhotoshop = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <div className="absolute inset-[6.67%_5.56%] bg-[#001E36] rounded-[4px] flex items-center justify-center">
      <span className="text-[#31A8FF] font-bold text-[28px]">Ps</span>
    </div>
  </div>
);

export const BrandIllustrator = ({
  className = "",
}: {
  className?: string;
}) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <div className="absolute inset-[6.67%_5.56%] bg-[#330000] rounded-[4px] flex items-center justify-center">
      <span className="text-[#FF9A00] font-bold text-[28px]">Ai</span>
    </div>
  </div>
);

export const BrandAdobeXd = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <div className="absolute inset-[5.55%] bg-[#470137] rounded-[4px] flex items-center justify-center">
      <span className="text-[#FF61F6] font-bold text-[28px]">Xd</span>
    </div>
  </div>
);

export const BrandSketch = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[21%]" viewBox="0 0 50 45" fill="none">
      <path d="M25 45L0 15L12.5 0H37.5L50 15L25 45Z" fill="#FDB300" />
      <path d="M25 0L12.5 15H37.5L25 0Z" fill="#EA6C00" />
      <path d="M25 15L0 15L25 45L50 15H25Z" fill="#FDAD00" />
      <path d="M25 15L12.5 15L25 0L37.5 15H25Z" fill="#FDD231" />
    </svg>
  </div>
);

export const BrandWebflow = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[5.56%]" viewBox="0 0 80 80" fill="none">
      <path
        d="M55 20C49.4772 20 45 24.4772 45 30C45 35.5228 49.4772 40 55 40C60.5228 40 65 35.5228 65 30C65 24.4772 60.5228 20 55 20ZM25 40C19.4772 40 15 44.4772 15 50C15 55.5228 19.4772 60 25 60C30.5228 60 35 55.5228 35 50C35 44.4772 30.5228 40 25 40Z"
        fill="#4353FF"
      />
    </svg>
  </div>
);

export const BrandFramer = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <div className="absolute inset-[5.56%] bg-[#000008] rounded-[8px] overflow-hidden">
      <svg className="absolute inset-[25%]" viewBox="0 0 33 50" fill="none">
        <path d="M0 0H33V16.67H16.5L0 33.33V16.67V0Z" fill="white" />
        <path
          d="M16.5 16.67H33L16.5 33.33V50L0 33.33L16.5 16.67Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
);

export const BrandShopify = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <svg className="absolute inset-[10%]" viewBox="0 0 70 80" fill="none">
      <path
        d="M55 15C55 15 54 5 44 5C34 5 30 15 30 15L15 20L20 70L50 75L65 70L60 20L55 15Z"
        fill="#95BF47"
      />
      <path
        d="M44 5C44 5 41 8 41 15V75L50 75L65 70L60 20C60 20 54 15 44 5Z"
        fill="#5E8E3E"
      />
      <path d="M35 25C35 25 32 26 30 30L35 32L35 25Z" fill="white" />
    </svg>
  </div>
);

export const BrandProcreate = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-[90px] h-[90px] ${className}`}>
    <div className="absolute inset-[4.04%_5.91%_7.14%_5.2%] bg-[#242424] rounded-[16px]">
      <div
        className="absolute inset-[15%] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #FF9A00 0deg, #F24E1E 90deg, #A259FF 180deg, #1ABCFE 270deg, #0ACF83 360deg)",
        }}
      />
    </div>
  </div>
);
