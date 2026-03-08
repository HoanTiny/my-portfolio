'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import postsData from '@/lib/blog-posts.json'

type BlogPost = {
  slug: string
  tag: string
  date: string
  readTime: string
  title: string
  excerpt: string
  image: string
  gradient: string
  content: string
}

const posts: Record<string, BlogPost> = Object.fromEntries(
  postsData.map(post => [post.slug, post])
)

const tagColors: Record<string, string> = {
  Performance:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Development:
    'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  Trending:
    'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = posts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#1f1f24] flex items-center justify-center transition-colors duration-300">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#1f1f24] dark:text-[#e5e5e6]">
            404
          </h1>
          <p className="text-[#5e5e65] dark:text-[#9999a1]">
            Bài viết không tồn tại.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#129840] dark:text-[#33a381] font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#1f1f24] transition-colors duration-300 py-6 sm:py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#5e5e65] dark:text-[#9999a1] hover:text-[#129840] dark:hover:text-[#33a381] font-medium transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`relative h-[250px] sm:h-[400px] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br ${post.gradient}`}
        >
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover mix-blend-overlay opacity-60"
              priority
            />
          )}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${tagColors[post.tag] || 'bg-white/90 text-gray-700'}`}
            >
              {post.tag}
            </span>
          </div>
        </motion.div>

        {/* Title & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-[#1f1f24] dark:text-[#e5e5e6] text-2xl sm:text-4xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#5e5e65] dark:text-[#9999a1] text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-10"
        >
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-[#1f1f24] dark:prose-headings:text-[#e5e5e6] prose-p:text-[#5e5e65] dark:prose-p:text-[#9999a1] prose-a:text-[#129840] dark:prose-a:text-[#33a381] prose-strong:text-[#1f1f24] dark:prose-strong:text-[#e5e5e6] prose-code:text-[#129840] dark:prose-code:text-[#33a381] prose-pre:bg-[#1a1a1a] dark:prose-pre:bg-[#111] prose-li:text-[#5e5e65] dark:prose-li:text-[#9999a1]">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </motion.div>
      </div>
    </div>
  )
}
