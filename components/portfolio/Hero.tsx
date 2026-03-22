/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import { ButtonSmall } from '@/components/ui/Button'
import { RiDownloadLine } from '@/components/ui/Icons'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { getProfile } from '@/services/profile'

type ProfileResponse = {
  profile?: {
    name?: string
    title?: string
    description?: string
    cvLink?: string
  }
}

function Tilt3D({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  )
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * 20
    const rotateX = (0.5 - y) * 20
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`
    )
    // setGlare({ x: x * 100, y: y * 100, opacity: 0.15 });
  }, [])

  const handleLeave = useCallback(() => {
    setTransform(
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    )
    setGlare({ x: 50, y: 50, opacity: 0 })
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
          transition: 'background 0.15s ease-out',
        }}
      />
    </div>
  )
}

function TypingText({
  text,
  delay = 0,
  speed = 30,
  className,
}: {
  text: string
  delay?: number
  speed?: number
  className?: string
}) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const timeout = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed
    )
    return () => clearTimeout(timeout)
  }, [started, displayed, text, speed])

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-[var(--theme-primary-1)] ml-[1px] align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      )}
    </span>
  )
}

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5 + i * 0.03,
      ease: 'easeOut',
    } as const,
  }),
}

function AnimatedText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const [profile, setProfile] = useState<ProfileResponse | null>(null)

  const titleParts = useMemo(() => {
    const rawTitle = profile?.profile?.title?.trim()

    if (!rawTitle) {
      return {
        level: 'Junior',
        stack: 'Full Stack',
        role: 'Web & App Developer',
      }
    }

    const normalized = rawTitle.replace(/FullStack/gi, 'Full Stack')
    const parts = normalized.split(' ')
    const level = parts[0] ?? 'Junior'
    const rest = normalized.slice(level.length).trim()
    const roleMatch = rest.match(/(Web\s*&\s*App\s*Developer)$/i)
    const role = roleMatch?.[1]?.replace(/\s+/g, ' ') ?? 'Web & App Developer'
    const stack = rest.replace(/Web\s*&\s*App\s*Developer$/i, '').trim()

    return {
      level,
      stack: stack || 'Full Stack',
      role,
    }
  }, [profile])

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile<ProfileResponse>()
        setProfile(data)
      } catch (error) {
        console.error('Failed to fetch profile:', error)
      }
    }

    fetchProfile()
  }, [])

  return (
    <div className="bg-white border-animation dark:bg-[#0e0e0f] border border-[#d0d0d0] dark:border-[#272730] rounded-lg overflow-hidden relative min-h-0 md:min-h-143.5 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="inner">
        <div className="absolute -top-120 left-0 w-full h-[1108px] opacity-10 dark:opacity-5 pointer-events-none">
          <div className="absolute left-0 w-1/2 h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />
          <div className="absolute right-0 w-1/2 h-full bg-gradient-to-bl from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />
        </div>

        <div className="relative mx-auto px-4 sm:px-[36px] py-8 sm:py-[54px] flex flex-col md:flex-row gap-6 md:gap-12 bg-white dark:bg-[#0e0e0f] ">
          {/* Left Side - Image */}
          <motion.div
            className="relative w-full md:w-[320px] lg:w-[512px] h-[280px] sm:h-[350px] md:h-[461px] flex-shrink-0 mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Tilt3D className="relative w-full h-full">
              <div className="absolute inset-0 rounded-2xl">
                <img
                  src="/avt.jpg"
                  className="w-full h-full object-cover rounded-2xl rounded-full"
                  alt=""
                />
              </div>
            </Tilt3D>
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[81px] h-[73px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img src="/dev-2.png" alt="Decorative Bottom" />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="flex-1 pt-0 md:pt-11">
            {/* Name Tag */}
            <motion.p
              className="font-dm-mono text-[16px] mb-2"
              variants={fadeUp(0.2) as any}
              initial="hidden"
              animate="visible"
            >
              <span className="text-[var(--theme-primary-1)]">
                &lt;span&gt;
              </span>
              <span className="text-[var(--foreground)] text-[20px]">
                Hey, I&apos;m {profile?.profile?.name ?? 'Tiny.dev'}
              </span>
              <span className="text-[var(--theme-primary-1)]">
                &lt;/span&gt;
              </span>
            </motion.p>

            {/* Title */}
            <motion.h1
              className="font-urbanist font-bold text-[28px] sm:text-[36px] lg:text-[50px] leading-[1.2] mb-4 sm:mb-6"
              initial="hidden"
              animate="visible"
            >
              <AnimatedText
                text={`${titleParts.level} `}
                className="text-[var(--foreground)]"
              />
              <AnimatedText
                text={`{${titleParts.stack}}`}
                className="bg-[var(--gradient-primary)] bg-clip-text text-transparent"
              />
              <br />
              <AnimatedText
                text={`${titleParts.role}_`}
                className="text-[var(--foreground)]"
              />
            </motion.h1>

            {/* Description */}
            <div className="font-dm-mono text-[14px] sm:text-[16px] leading-[1.5] text-[var(--neutral-300)] dark:text-[var(--secondary)] mb-6 sm:mb-8">
              <span className="text-[var(--theme-primary-1)]">&lt;p&gt;</span>
              <TypingText
                text={
                  profile?.profile?.description ??
                  'With expertise in cutting-edge technologies such as NodeJS, React, Nextjs, and Vue... I deliver web solutions that are both innovative and robust.'
                }
                delay={1500}
                speed={25}
              />
              <span className="text-[var(--theme-primary-1)]">&lt;/p&gt;</span>
            </div>

            {/* Tech Stack Icons */}
            <motion.div
              className="flex gap-[8px] items-center mb-6"
              variants={fadeUp(0.8) as any}
              initial="hidden"
              animate="visible"
            >
              <div className="w-full max-w-[280px] sm:max-w-[400px] overflow-hidden">
                <Marquee speed={30} gradient={false} pauseOnHover={true}>
                  <div className="size-[50px] sm:size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/nextjs.svg" alt="" />
                  </div>
                  <div className="size-[50px] sm:size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/nodejs.svg" alt="" />
                  </div>
                  <div className="size-[50px] sm:size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/firebase.svg" alt="" />
                  </div>
                  <div className="size-[50px] sm:size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/mongodb.svg" alt="" />
                  </div>
                  <div className="size-[50px] sm:size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/Photoshop.svg" alt="" />
                  </div>
                  <div className="size-[50px] sm:size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/tailwind.svg" alt="" />
                  </div>
                  <div className="size-[50px] sm:size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/React.svg" alt="" />
                  </div>
                </Marquee>
              </div>
              <span className="font-dm-mono text-[14px] sm:text-[16px] text-[var(--neutral-300)] dark:text-[var(--secondary)] flex-shrink-0">
                ...and more
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp(1.0) as any}
              initial="hidden"
              animate="visible"
            >
              <button
                className="download_btn"
                onClick={() => {
                  const cvLink = profile?.profile?.cvLink
                  if (!cvLink) return
                  window.open(cvLink, '_blank', 'noopener,noreferrer')
                }}
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <RiDownloadLine />
                  </div>
                </div>
                <span className="font-dm-mono">[ Download CV ]</span>
              </button>
            </motion.div>
            {/* Download CV Button */}
            {/* <ButtonSmall icon={<RiDownloadLine />}>[ Download CV ]</ButtonSmall> */}
          </div>
        </div>

        {/* Decorative Border Gradient */}
        <div className="absolute top-[133.5px] right-0 w-[164px] h-[163.5px] bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-tl-full" />
      </div>
    </div>
  )
}
