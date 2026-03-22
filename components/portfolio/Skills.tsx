'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { getSkills } from '@/services'

const SkillsGlobe = dynamic(
  () => import('@/components/portfolio/SkillsGlobe'),
  { ssr: false }
)

type SkillIconItem = {
  name: string
  icon: string
  row?: number
}

type SkillCategory = {
  label: string
  value: string
}

const fallbackSkillsData: SkillIconItem[] = [
  { name: 'Node.js', icon: '/nodejs.svg', row: 1 },
  { name: 'Next.js', icon: '/nextjs.svg', row: 1 },
  { name: 'Firebase', icon: '/firebase.svg', row: 1 },
  { name: 'MongoDB', icon: '/mongodb.svg', row: 1 },
  { name: 'React', icon: '/React.svg', row: 1 },
  { name: 'Vue.js', icon: '/vuejs.svg', row: 1 },
  { name: 'Tailwind', icon: '/tailwind.svg', row: 1 },
]

const fallbackSkillCategories: SkillCategory[] = [
  { label: 'Front-End', value: 'HTML, CSS, JavaScript, React, Vue.js' },
  { label: 'Back-End', value: 'Node.js, Express' },
  { label: 'Databases', value: 'MySQL, MongoDB' },
  { label: 'Tools & Platforms', value: 'Git' },
  { label: 'Others', value: 'RESTful APIs, GraphQL' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 } as const,
  },
}

const textVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    } as const,
  }),
}

function SkillIcon({ skill }: { skill: SkillIconItem }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute -top-11 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="bg-[#1f1f24] dark:bg-[#e5e5e6] text-white dark:text-[#1f1f24] px-3 py-1 rounded text-xs sm:text-sm whitespace-nowrap font-medium shadow-lg">
              {skill.name}
            </div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1f1f24] dark:bg-[#e5e5e6] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon Card */}
      <motion.div
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] bg-white dark:bg-[#1a1a1a] rounded-lg border border-[#c0dcbc] dark:border-[#2a2a2a] flex items-center justify-center hover:border-[#129840] dark:hover:border-[#33a381] hover:shadow-[0_0_20px_rgba(18,152,64,0.15)] dark:hover:shadow-[0_0_20px_rgba(51,163,129,0.15)] transition-all duration-300 cursor-pointer"
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={48}
          height={48}
          className="w-8 h-8 sm:w-12 sm:h-12 object-contain select-none"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const [skillsData, setSkillsData] =
    useState<SkillIconItem[]>(fallbackSkillsData)
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(
    fallbackSkillCategories
  )

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills<unknown>()
        const payload = data as
          | SkillIconItem[]
          | {
              icons?: SkillIconItem[]
              skills?: SkillIconItem[]
              categories?: SkillCategory[]
              grouped?: SkillCategory[]
            }

        const icons = Array.isArray(payload)
          ? payload
          : Array.isArray(payload.skills)
            ? payload.skills
            : Array.isArray(payload.icons)
              ? payload.icons
              : []

        const categories =
          !Array.isArray(payload) &&
          (Array.isArray(payload.categories)
            ? payload.categories
            : Array.isArray(payload.grouped)
              ? payload.grouped
              : [])

        if (icons.length > 0) {
          setSkillsData(
            icons.map((skill, index) => ({
              ...skill,
              row: skill.row ?? (index < Math.ceil(icons.length / 2) ? 1 : 2),
            }))
          )
        }

        if (categories && categories.length > 0) {
          setSkillCategories(categories)
        }
      } catch (error) {
        console.error('Failed to fetch skills:', error)
      }
    }

    fetchSkills()
  }, [])

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-10 lg:p-16 relative overflow-hidden transition-colors duration-300">
      {/* Background Circle */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none opacity-20">
        <motion.svg
          viewBox="0 0 377 386"
          fill="none"
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <path
            d="M127 130c0 35 28 63 63 63s63-28 63-63-28-63-63-63-63 28-63 63Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840] dark:text-[#33a381]"
          />
          <path
            d="M147 151c0 24 19 43 43 43s43-19 43-43-19-43-43-43-43 19-43 43Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840] dark:text-[#33a381]"
          />
          <path
            d="M83 85c0 71 58 129 129 129s129-58 129-129S283 -44 212 -44 83 14 83 14Z"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#129840] dark:text-[#33a381]"
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
        </motion.svg>
      </div>

      <div className="relative max-w-[1314px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Skills Icons */}
          <div>
            {/* Header */}
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
                  Projects
                </span>
              </div>
              <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[32px] leading-tight font-medium">
                My Skills
              </h2>
            </motion.div>

            {/* 3D Skills Globe */}
            <SkillsGlobe />
          </div>

          {/* Right: Skills Text */}
          <div className="flex items-center">
            <motion.div
              className="border-l-2 border-[#c0dcbc] dark:border-[#2a2a2a] pl-6 sm:pl-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="text-[#5e5e65] dark:text-[#9999a1] text-base leading-relaxed space-y-4">
                {skillCategories.map((cat, i) => (
                  <motion.span
                    key={cat.label}
                    className="block"
                    custom={i}
                    variants={textVariants}
                  >
                    <strong className="text-[#1f1f24] dark:text-[#e5e5e6]">
                      {cat.label}:
                    </strong>{' '}
                    {cat.value}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
