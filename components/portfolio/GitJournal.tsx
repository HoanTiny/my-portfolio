"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GitCommit {
  date: string;
  title: string;
  url?: string;
  description?: string | null;
  language?: string | null;
}

const INITIAL_COUNT = 5;
const LOAD_MORE_COUNT = 5;

const FALLBACK_COMMITS: GitCommit[] = [
  { date: "15 Jul:", title: "Muzzilla-streaming-API-services-for-Python" },
  { date: "30 Jun:", title: "ChatHub-Chat-application-VueJs-Mongodb" },
  { date: "26 May:", title: "DineEasy-coffee-tea-reservation-system" },
  { date: "17 Apr:", title: "FinanceBuddy-Personal-finance-tracker" },
  { date: "05 Mar:", title: "TuneStream-Music-streaming-service-API" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const commitVariants = {
  hidden: { opacity: 0, x: -16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function GitJournal({ className }: { className?: string }) {
  const [commits, setCommits] = useState<GitCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleCommits = commits.slice(0, visibleCount);
  const hasMore = visibleCount < commits.length;

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, commits.length));
  };

  const handleCollapse = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCommits(data);
        }
      })
      .catch(() => {
        // Keep fallback data on error
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      className={`bg-white dark:bg-[#0e0e0f] rounded-2xl p-12 relative overflow-hidden transition-colors duration-300 ${className}`}
    >
      <div className="relative max-w-[370px]">
        {/* Header */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-base">
            Git Journaling
          </h2>
        </motion.div>

        {loading && (
        <div className="mt-4">
          <p className="text-[#5e5e65] dark:text-[#9999a1] text-sm mb-4">
            Loading recent commits...
          </p>
        </div>
        )}

        {/* Commits List */}
        <div className="relative">
          <motion.div
            className="space-y-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Vertical Line - draws downward */}
            <motion.div
              className="absolute left-[2px] top-2 bottom-2 w-px bg-[#c0dcbc] dark:bg-[#2a2a2a] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />

            <AnimatePresence initial={false}>
              {visibleCommits.map((commit, index) => (
                <motion.div
                  key={commit.title}
                  className="flex gap-4 relative pl-4"
                  variants={commitVariants }
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -16, filter: "blur(4px)", transition: { duration: 0.3 } }}
                  layout
                >
                  {/* Dot - pops in */}
                  <motion.div
                    className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index >= visibleCount - LOAD_MORE_COUNT ? 0.1 * (index - (visibleCount - LOAD_MORE_COUNT)) : 0,
                      type: "spring",
                      stiffness: 300,
                    }}
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-[#5e5e65] dark:text-[#9999a1] text-sm mb-1">
                      {commit.date}
                    </div>
                    {commit.url ? (
                      <a
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1f1f24] dark:text-[#e5e5e6] text-base leading-relaxed hover:text-[#129840] dark:hover:text-[#33a381] transition-colors"
                      >
                        {commit.title}
                      </a>
                    ) : (
                      <p className="text-[#1f1f24] dark:text-[#e5e5e6] text-base leading-relaxed">
                        {commit.title}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Gradient fade at bottom when there are more items */}
          {hasMore && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#0e0e0f] to-transparent pointer-events-none" />
          )}
        </div>

        {/* See More / Collapse Button */}
        {commits.length > INITIAL_COUNT && (
          <motion.div
            className="mt-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {hasMore ? (
              <button
                onClick={handleSeeMore}
                className="text-sm text-[#129840] dark:text-[#33a381] hover:underline cursor-pointer flex items-center gap-1 transition-colors"
              >
                See more ({commits.length - visibleCount} remaining)
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleCollapse}
                className="text-sm text-[#5e5e65] dark:text-[#9999a1] hover:text-[#129840] dark:hover:text-[#33a381] hover:underline cursor-pointer flex items-center gap-1 transition-colors"
              >
                Collapse
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
