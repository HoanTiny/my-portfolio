'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { getStats } from '@/services'

type StatItem = {
  value: number
  label: string
}

const FALLBACK_STATS: StatItem[] = [
  { value: 2, label: 'Year Experience' },
  { value: 10, label: 'Projects Completed' },
  { value: 8, label: 'Tech Stacks' },
  { value: 500, label: 'GitHub Commits' },
]

const STAT_ICONS = [
  <svg
    key="experience"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    />
  </svg>,
  <svg
    key="projects"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>,
  <svg
    key="tech"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>,
  <svg
    key="commits"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>,
]

const normalizeStats = (payload: unknown): StatItem[] => {
  const source = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { stats?: unknown[] } | null)?.stats)
      ? ((payload as { stats: unknown[] }).stats ?? [])
      : []

  return source
    .map(item => {
      const stat = item as {
        value?: number | string
        count?: number | string
        total?: number | string
        label?: string
        title?: string
        name?: string
      }

      const rawValue = stat.value ?? stat.count ?? stat.total
      const value = Number(rawValue)
      const label = stat.label ?? stat.title ?? stat.name

      if (!Number.isFinite(value) || !label) {
        return null
      }

      return { value, label }
    })
    .filter((item): item is StatItem => item !== null)
}

function CountUp({
  target,
  duration = 2,
  inView,
}: {
  target: number
  duration?: number
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = Math.round(eased * target)
      setCount(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return <>{count}</>
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [stats, setStats] = useState<StatItem[]>(FALLBACK_STATS)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats<unknown>()
        const normalized = normalizeStats(data)
        if (normalized.length > 0) {
          setStats(normalized)
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      }
    }

    fetchStats()
  }, [])

  return (
    <div
      className="bg-white dark:bg-[#0e0e0f] border border-[#c0dcbc] dark:border-[#2a2a2a] rounded-lg overflow-hidden relative py-8 sm:py-[61px]"
      style={{
        backgroundImage: 'url(/bg-static.png)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
      </div>

      <div className="relative max-w-[1083px] mx-auto px-4 sm:px-8" ref={ref}>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              className="flex flex-col gap-2 sm:gap-[13px] items-start group cursor-default"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="text-[#1f1f24] dark:text-[#e5e5e6]"
                whileHover={{
                  rotate: [0, -10, 10, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {STAT_ICONS[index] ?? STAT_ICONS[STAT_ICONS.length - 1]}
              </motion.div>
              <div className="flex flex-col pb-px">
                <div className="flex items-center font-['DM_Mono'] font-medium text-[32px] sm:text-[50px] leading-[1.2] -mb-px">
                  <p className="text-[#1f1f24] dark:text-[#e5e5e6]">
                    <CountUp target={stat.value} inView={isInView} />
                  </p>
                  <p className="text-[#5e5e65] dark:text-[#9999a1]">+</p>
                </div>
                <div className="flex flex-col items-start justify-center -mb-px w-full">
                  <p className="font-['DM_Mono'] text-[13px] sm:text-[16px] leading-[1.5] text-[#1f1f24] dark:text-[#e5e5e6]">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
