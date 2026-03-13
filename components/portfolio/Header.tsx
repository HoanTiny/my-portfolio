'use client'

import { useState } from 'react'
import { ThemeSwitch } from '@/components/ui/ThemeSwitch'
import Sidebar from './Sidebar'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="bg-[#333A32] dark:bg-[#010101] border border-[#c0dcbc] dark:border-[#2a2a2a] rounded-lg relative overflow-hidden flex justify-center h-[60px] sm:h-[80px]">
        <div
          className="absolute -left-px -top-px cursor-pointer bg-[#FFFFFF0D]"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src="/menu.png" alt="" />
        </div>
        {/* Main Content */}
        <div className="w-full max-w-262.5 h-full flex items-center justify-between px-14 sm:px-16 lg:px-4">
          {/* Logo */}
          <div className="flex items-center gap-4 sm:gap-9">
            <img src="/dev.png" alt="dev" className="w-8 sm:w-auto" />
            <p
              className="text-lg sm:text-2xl font-['DM_Mono'] font-medium text-[#ffff] dark:text-[#e5e5e6]"
              style={{
                background:
                  'linear-gradient(270deg, hsla(0, 0%, 100%, .32), #fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Tiny.dev
            </p>
          </div>

          {/* Navigation - hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center gap-[37px] font-['DM_Mono'] text-[16px] text-[#ffff] dark:text-[#e5e5e6] leading-[1.5]">
            <a
              href="#about"
              onClick={e => {
                e.preventDefault()
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:opacity-100 transition-opacity"
            >
              About me
            </a>
            <a
              href="#resume"
              onClick={e => {
                e.preventDefault()
                document
                  .getElementById('resume')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              Resume
            </a>
            <a
              href="#services"
              onClick={e => {
                e.preventDefault()
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={e => {
                e.preventDefault()
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              onClick={e => {
                e.preventDefault()
                document
                  .getElementById('blog')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </nav>

          {/* Social Links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.facebook.com/hoandz93/"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
              target="__blank"
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
              className="w-6 h-6 hover:opacity-80 transition-opacity"
              target="__blank"
            >
              <img src="/X.png" alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/hoantiny/"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
              target="__blank"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/HoanTiny"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
              target="__blank"
            >
              <img src="/github.png" alt="GitHub" />
            </a>
          </div>
        </div>

        {/* Theme Switch Button (top right corner) */}
        <div className="absolute -right-px -top-px cursor-pointer bg-[#FFFFFF0D]">
          <ThemeSwitch />
        </div>
      </div>
    </>
  )
}
