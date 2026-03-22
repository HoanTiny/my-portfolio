'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { getExperiences } from '@/services'

type ExperienceItem = {
  company: string
  period: string
  logo: string
  role: string
  description: string
  skills: string[]
}

const FALLBACK_EXPERIENCES: ExperienceItem[] = [
  {
    company: 'FPT Software',
    period: '2023 - 2024',
    logo: '/fpt.png',
    role: 'Intern Software Engineer',
    description:
      'Developed and deployed a machine learning model for image classification, achieving 95% accuracy. Collaborated with cross-functional teams to integrate the model into a web application, improving user experience. Optimized model performance by implementing techniques such as data augmentation and hyperparameter tuning.',
    skills: ['JavaScript', 'React'],
  },
  {
    company: 'VTV Live',
    period: '2024 - Present',
    logo: '/vtv.png',
    role: 'Frontend Developer',
    description:
      'Designed and implemented responsive user interfaces for live streaming platforms, enhancing user engagement. Collaborated with backend developers to integrate APIs, ensuring seamless data flow and real-time updates. Optimized frontend performance, reducing load times by 30% through code splitting and lazy loading techniques.',
    skills: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'WebSocket',
      'MongoDB',
    ],
  },
]

const normalizeExperiences = (payload: unknown): ExperienceItem[] => {
  const source = Array.isArray(payload)
    ? payload
    : Array.isArray(
          (payload as { experiences?: unknown[] } | null)?.experiences
        )
      ? ((payload as { experiences: unknown[] }).experiences ?? [])
      : []

  return source
    .map(item => {
      const experience = item as {
        company?: string
        period?: string
        duration?: string
        logo?: string
        image?: string
        role?: string
        title?: string
        description?: string
        skills?: string[]
        technologies?: string[]
      }

      const company = experience.company
      const period = experience.period ?? experience.duration
      const logo = experience.logo ?? experience.image ?? '/window.svg'
      const role = experience.role ?? experience.title
      const description = experience.description
      const skills = experience.skills ?? experience.technologies ?? []

      if (!company || !period || !role || !description) {
        return null
      }

      return {
        company,
        period,
        logo,
        role,
        description,
        skills: Array.isArray(skills) ? skills : [],
      }
    })
    .filter((item): item is ExperienceItem => item !== null)
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const [experiences, setExperiences] =
    useState<ExperienceItem[]>(FALLBACK_EXPERIENCES)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await getExperiences<unknown>()
        const normalized = normalizeExperiences(data)
        if (normalized.length > 0) {
          setExperiences(normalized)
          setActiveTab(0)
        }
      } catch (error) {
        console.error('Failed to fetch experiences:', error)
      }
    }

    fetchExperiences()
  }, [])

  const activeExperience = experiences[activeTab]

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' } as const,
    },
  }

  const tabContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 } as const,
    },
  }

  const tabItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' } as const,
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' } as const,
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 } as const,
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' } as const,
    }),
  }

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f5] dark:bg-[#0a0a0a] rounded-2xl p-6 sm:p-10 lg:p-16 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        animate={
          isInView ? { scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] } : {}
        }
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          className="absolute top-1/4 right-1/4 w-[1106px] h-[1106px]"
          viewBox="0 0 1106 1106"
          fill="none"
        >
          <circle
            cx="553"
            cy="553"
            r="553"
            fill="currentColor"
            className="text-[#129840] dark:text-[#33a381]"
          />
        </svg>
      </motion.div>

      <div className="relative max-w-[1314px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]"
              animate={isInView ? { scale: [1, 1.5, 1] } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
              Expericence
            </span>
          </div>
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[28px] sm:text-[36px] lg:text-[48px] leading-tight font-medium">
            +2 years of passion for programming techniques
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] lg:grid-cols-[397px,1fr] gap-6 lg:gap-12">
          {/* Tabs */}
          <motion.div
            className="space-y-2"
            variants={tabContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                variants={tabItemVariants}
                onClick={() => setActiveTab(index)}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-lg text-left transition-colors cursor-pointer relative ${
                  activeTab === index
                    ? 'bg-white dark:bg-[#1a1a1a]'
                    : 'bg-transparent hover:bg-white/50 dark:hover:bg-[#1a1a1a]/50'
                }`}
              >
                {/* Animated sliding border indicator */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-[#129840] dark:bg-[#33a381]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-4">
                  {/* Logo Placeholder */}
                  <motion.div
                    className="w-16 h-16 px-2 rounded-lg bg-[#f1f5f9]  flex items-center justify-center"
                    animate={
                      activeTab === index ? { rotate: [0, 5, -5, 0] } : {}
                    }
                    transition={{ duration: 0.4 }}
                  >
                    <div className="rounded ">
                      {/* Placeholder for logo */}
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full"
                      />
                    </div>
                  </motion.div>

                  {/* Company Info */}
                  <div>
                    <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold">
                      {exp.company}
                    </h3>
                    <p className="text-[#5e5e65] dark:text-[#9999a1] text-base">
                      {exp.period}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <div className="animated-border bg-white dark:bg-[#0e0e0f] rounded-xl p-8 transition-colors duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-2xl font-semibold mb-6">
                  {activeExperience.role}
                </h3>
                <p className="text-[#5e5e65] dark:text-[#9999a1] text-base leading-relaxed mb-8">
                  {activeExperience.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {activeExperience.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      custom={index}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: 'rgba(18, 152, 64, 0.15)',
                      }}
                      className="px-4 py-2 bg-[#f1f5f9] dark:bg-[#1a1a1a] text-[#1f1f24] dark:text-[#e5e5e6] text-base rounded-lg cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="absolute left-0 right-0 bottom-[-108px] h-px">
        <div className="w-px h-[216px] bg-[#c0dcbc] dark:bg-[#2a2a2a] mx-auto" />
      </div>
    </section>
  )
}
