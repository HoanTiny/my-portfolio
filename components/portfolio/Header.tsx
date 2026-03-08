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
            <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src="/X.png" alt="" />
            </a>
            <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src="/linkedin.png" alt="" />
            </a>
            <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src="/github.png" alt="" />
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
