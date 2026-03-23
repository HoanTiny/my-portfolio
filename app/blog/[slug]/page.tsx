'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { getPosts } from '@/services'
import postsData from '@/lib/blog-posts.json'

type BlogCategory = {
  _id: string
  name: string
  slug: string
}

type BlogAuthor = {
  _id: string
  username: string
  email: string
  avatar: string
}

type BlogPost = {
  _id: string
  slug: string
  title: string
  content: string
  thumbnail: string
  category: BlogCategory
  tags: string[]
  author: BlogAuthor
  status: string
  createdAt: string
  updatedAt: string
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

const stripHtml = (value: string): string =>
  value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

const getReadTime = (content: string): string => {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 220))
  return `${minutes} min read`
}

const formatBlogDate = (value: string): string => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

const normalizePosts = (payload: unknown): Record<string, BlogPost> => {
  const source = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { posts?: unknown[] } | null)?.posts)
      ? ((payload as { posts: unknown[] }).posts ?? [])
      : []

  return Object.fromEntries(
    source
      .map(item => {
        const post = item as {
          _id?: string
          slug?: string
          title?: string
          content?: string
          image?: string
          thumbnail?: string
          category?: string | { _id?: string; name?: string; slug?: string }
          tag?: string | { name?: string; slug?: string }
          tags?: string[]
          author?: {
            _id?: string
            username?: string
            email?: string
            avatar?: string
          }
          status?: string
          createdAt?: string
          updatedAt?: string
        }

        if (!post.slug || !post.title) {
          return null
        }

        const normalizedCategory = post.category
        const tagName = getTagName(post.tag ?? post.category)
        const category: BlogCategory =
          normalizedCategory && typeof normalizedCategory === 'object'
            ? {
                _id: normalizedCategory._id ?? '',
                name: normalizedCategory.name ?? tagName,
                slug:
                  normalizedCategory.slug ??
                  tagName.toLowerCase().replace(/\s+/g, '-'),
              }
            : {
                _id: '',
                name: tagName,
                slug: tagName.toLowerCase().replace(/\s+/g, '-'),
              }

        const now = new Date().toISOString()

        return [
          post.slug,
          {
            _id: post._id ?? post.slug,
            slug: post.slug,
            title: post.title,
            content: post.content ?? '',
            thumbnail: post.thumbnail ?? post.image ?? '/dev_logo_icon.webp',
            category,
            tags: Array.isArray(post.tags) ? post.tags : tagName ? [tagName] : [],
            author: {
              _id: post.author?._id ?? '',
              username: post.author?.username ?? 'editor',
              email: post.author?.email ?? '',
              avatar: post.author?.avatar ?? '',
            },
            status: post.status ?? 'published',
            createdAt: post.createdAt ?? now,
            updatedAt: post.updatedAt ?? post.createdAt ?? now,
          },
        ] as const
      })
      .filter((item): item is readonly [string, BlogPost] => item !== null)
  )
}

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
  const [posts, setPosts] = useState<Record<string, BlogPost>>(
    normalizePosts(postsData)
  )

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts<unknown>()
        const normalized = normalizePosts(data)
        if (Object.keys(normalized).length > 0) {
          setPosts(normalized)
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
    }

    fetchPosts()
  }, [])

  const post = posts[slug]
  const postTag = post ? getTagName(post.category) : 'Development'
  const postGradient =
    postTag === 'Performance'
      ? 'from-emerald-600 to-cyan-500'
      : postTag === 'Trending'
        ? 'from-amber-500 to-orange-600'
        : 'from-violet-600 to-indigo-500'

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#1f1f24] transition-colors duration-300 py-6 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#5e5e65] dark:text-[#9999a1] hover:text-[#129840] dark:hover:text-[#33a381] font-medium transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </Link>
          <div className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-10 text-[#5e5e65] dark:text-[#9999a1]">
            Bài viết không tồn tại hoặc đang được cập nhật.
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#1f1f24] transition-colors duration-300 py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
          className={`relative h-62.5 sm:h-100 rounded-2xl overflow-hidden mb-8 bg-linear-to-br `}
        >
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover "
              priority
            />
          )}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${tagColors[postTag] || 'bg-white/90 text-gray-700'}`}
            >
              {postTag}
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
              {formatBlogDate(post.updatedAt || post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {getReadTime(post.content)}
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
          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-[#1f1f24] dark:prose-headings:text-[#e5e5e6] prose-p:text-[#5e5e65] dark:prose-p:text-[#9999a1] prose-a:text-[#129840] dark:prose-a:text-[#33a381] prose-strong:text-[#1f1f24] dark:prose-strong:text-[#e5e5e6] prose-li:text-[#5e5e65] dark:prose-li:text-[#9999a1] prose-code:before:content-none prose-code:after:content-none [&_code]:font-mono [&_code]:text-[0.95em] [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:bg-cyan-100 [&_:not(pre)>code]:text-cyan-800 dark:[&_:not(pre)>code]:bg-cyan-900/30 dark:[&_:not(pre)>code]:text-cyan-200 [&_pre]:rounded-2xl [&_pre]:px-5 [&_pre]:py-4 [&_pre]:bg-slate-200 [&_pre]:text-slate-700 dark:[&_pre]:bg-slate-800 dark:[&_pre]:text-slate-100 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </div>
  )
}
