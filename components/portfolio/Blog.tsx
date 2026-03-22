'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { getPosts } from '@/services'
import fallbackPosts from '@/lib/blog-posts.json'

type BlogPost = {
  slug: string
  tag: string
  date: string
  readTime: string
  title: string
  excerpt: string
  image: string | undefined
  gradient: string
  content: string | undefined
}

const getTagName = (value: unknown): string => {
  if (typeof value === 'string') {
    return value
  }

  if (value && typeof value === 'object') {
    const category = value as { name?: string; slug?: string }
    return category.name ?? category.slug ?? 'Development'
  }

  return 'Development'
}

const normalizePosts = (payload: unknown): BlogPost[] => {
  const source = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { posts?: unknown[] } | null)?.posts)
      ? ((payload as { posts: unknown[] }).posts ?? [])
      : []

  return source
    .map(item => {
      const post = item as {
        slug?: string
        tag?: string | { name?: string; slug?: string }
        category?: string | { name?: string; slug?: string }
        date?: string
        readTime?: string
        title?: string
        excerpt?: string
        summary?: string
        image?: string
        thumbnail?: string
        gradient?: string
        content?: string
      }

      if (!post.slug || !post.title) {
        return null
      }

      return {
        slug: post.slug,
        tag: getTagName(post.tag ?? post.category),
        date: post.date ?? '',
        readTime: post.readTime ?? '5 min read',
        title: post.title,
        excerpt: post.excerpt ?? post.summary ?? '',
        image: post.image ?? post.thumbnail,
        gradient: post.gradient ?? 'from-emerald-400/40 to-cyan-500/40',
        content: post.content,
      }
    })
    .filter((item): item is BlogPost => item !== null)
}

const tagColors: Record<string, string> = {
  Performance:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Development:
    'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  Trending:
    'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 150, damping: 20 } as const,
  },
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts<unknown>()
        const normalized = normalizePosts(data)
        if (normalized.length > 0) {
          setPosts(normalized)
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-10 lg:p-16 transition-colors duration-300">
      <div className="max-w-[1305px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
              Latest Posts
            </span>
          </div>
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[32px] leading-tight font-medium">
            From Blog
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-[#f5f5f5] dark:bg-[#1a1a1a] rounded-2xl p-4 group cursor-pointer hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(51,163,129,0.08)] transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Image */}
                <div
                  className={`relative h-[200px] sm:h-[274px] rounded-xl overflow-hidden mb-4 sm:mb-6 bg-gradient-to-br ${post.gradient}`}
                >
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover mix-blend-overlay opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                  )}

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${tagColors[post.tag] || 'bg-white/90 text-gray-700'}`}
                    >
                      {post.tag}
                    </span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-[#1f1f24] dark:text-[#e5e5e6]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-1">
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-4 text-[#5e5e65] dark:text-[#9999a1] text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-lg sm:text-xl font-semibold leading-snug line-clamp-2 group-hover:text-[#129840] dark:group-hover:text-[#33a381] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#5e5e65] dark:text-[#9999a1] text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[#129840] dark:text-[#33a381] text-sm font-medium group-hover:gap-2.5 group-hover:underline underline-offset-4 transition-all duration-300">
                      Read More
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
