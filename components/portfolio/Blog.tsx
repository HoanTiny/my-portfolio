"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    tag: "Performance",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    title: "Optimize Your Next.js App: From 3s to 0.8s Load Time",
    excerpt:
      "Practical techniques I used to dramatically improve performance — lazy loading, image optimization, code splitting, and edge caching strategies.",
    image: "/dev_logo_icon.webp",
    gradient: "from-emerald-600 to-cyan-500",
  },
  {
    tag: "Development",
    date: "Nov 02, 2025",
    readTime: "4 min read",
    title: "Building a Real-time Dashboard with Firebase & React",
    excerpt:
      "A step-by-step guide to creating live data dashboards using Firestore listeners, React hooks, and Recharts for beautiful data visualization.",
    image: "/dev_logo_icon.webp",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    tag: "Trending",
    date: "Oct 18, 2025",
    readTime: "6 min read",
    title: "Why I Switched from REST to GraphQL (And When You Shouldn't)",
    excerpt:
      "My honest experience migrating a production API to GraphQL — the wins, the pain points, and the cases where REST is still the better choice.",
    image: "/dev_logo_icon.webp",
    gradient: "from-amber-500 to-orange-600",
  },
];

const tagColors: Record<string, string> = {
  Performance:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  Development:
    "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  Trending:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 } as const,
  },
};

export default function Blog() {
  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-6 sm:p-10 lg:p-16 transition-colors duration-300">
      <div className="max-w-[1305px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
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
          viewport={{ once: true, margin: "-80px" }}
        >
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#f5f5f5] dark:bg-[#1a1a1a] rounded-2xl p-4 group cursor-pointer hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(51,163,129,0.08)] transition-shadow duration-300"
            >
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
                    className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${tagColors[post.tag] || "bg-white/90 text-gray-700"}`}
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
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[#129840] dark:text-[#33a381] text-sm font-medium hover:gap-2.5 hover:underline underline-offset-4 transition-all duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
