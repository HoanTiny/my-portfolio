import { ButtonSmall } from "@/components/ui/Button";
import { RiDownloadLine } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <div className="bg-white border-animation dark:bg-[#0e0e0f] border border-green-300  rounded-lg overflow-hidden relative min-h-143.5 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="inner">
        <div className="absolute -top-[480px] left-0 w-full h-[1108px] opacity-10 dark:opacity-5 pointer-events-none">
          <div className="absolute left-0 w-1/2 h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />
          <div className="absolute right-0 w-1/2 h-full bg-gradient-to-bl from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />
        </div>

        <div className="relative mx-auto px-[36px] py-[50px] flex gap-12 bg-white dark:bg-[#0e0e0f] ">
          {/* Left Side - Image */}
          <div className="relative w-[512px] h-[461px] flex-shrink-0">
            <div className="absolute inset-0 rounded-2xl">
              <img
                src="/avt.jpg"
                className="w-full h-full object-cover rounded-2xl rounded-full"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[81px] h-[73px]">
              <img src="/dev-2.png" alt="Decorative Bottom" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 pt-[44px]">
            {/* Name Tag */}
            <p className="font-dm-mono text-[16px] mb-2">
              <span className="text-[var(--theme-primary-1)]">
                &lt;span&gt;
              </span>
              <span className="text-[var(--foreground)] text-[20px]">
                Hey, I&apos;m Hoàn
              </span>
              <span className="text-[var(--theme-primary-1)]">
                &lt;/span&gt;
              </span>
            </p>

            {/* Title */}
            <h1 className="font-urbanist font-bold text-[50px] leading-[1.2] mb-6">
              <span className="text-[var(--foreground)]">Junior </span>
              <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                {`{Full Stack}`}
              </span>
              <br />
              <span className="text-[var(--foreground)]">
                Web & App developer_
              </span>
            </h1>

            {/* Description */}
            <p className="font-dm-mono text-[16px] leading-[1.5] text-[var(--neutral-300)] dark:text-[var(--secondary)] mb-8">
              <span className="text-[var(--theme-primary-1)]">&lt;p&gt;</span>
              With expertise in cutting-edge technologies such as{" "}
              <span className="text-[var(--theme-primary-1)]">
                NodeJS
              </span>,{" "}
              <span className="text-[var(--theme-primary-1)]">React</span>,{" "}
              <span className="text-[var(--theme-primary-1)]">Angular</span>,
              and <span className="text-[var(--theme-primary-1)]">Laravel</span>
              ... I deliver web solutions that are both innovative and robust.
              <span className="text-[var(--theme-primary-1)]">&lt;/p&gt;</span>
            </p>

            {/* Tech Stack Icons */}
            <div className="flex gap-[8px] items-center mb-6">
              <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-gray-800 dark:text-gray-200"
                >
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.049-.106.005-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
                </svg>
              </div>
              <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-orange-500"
                >
                  <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14.203a.542.542 0 00-.919-.295l-2.543 4.771z" />
                </svg>
              </div>
              <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-green-600"
                >
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                </svg>
              </div>
              <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-green-700"
                >
                  <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.17c0 .63-.65 1.25-1.77.72l-2.04-1.18a.1.1 0 01-.05-.09V7.5c0-.04.02-.07.05-.09l7.44-4.29c.04-.02.09-.02.13 0l7.44 4.29c.03.02.05.05.05.09v8.58c0 .04-.02.07-.05.09l-7.44 4.29c-.04.02-.09.02-.13 0l-1.89-1.09c-.08-.05-.18-.06-.28-.02-.82.38-.98.46-1.75.67-.13.03-.32.09.07.25l2.46 1.45c.24.14.51.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.5c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z" />
                </svg>
              </div>
              <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-cyan-500"
                >
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              </div>
              <span className="font-dm-mono text-[16px] text-[var(--neutral-300)] dark:text-[var(--secondary)]">
                ...and more
              </span>
            </div>

            {/* Download CV Button */}
            <ButtonSmall icon={<RiDownloadLine />}>[ Download CV ]</ButtonSmall>
          </div>
        </div>

        {/* Decorative Border Gradient */}
        <div className="absolute top-[133.5px] right-0 w-[164px] h-[163.5px] bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-tl-full" />
      </div>
    </div>
  );
}
