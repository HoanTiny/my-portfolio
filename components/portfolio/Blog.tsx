export default function Blog() {
  const posts = [
    {
      tag: "CEO",
      date: "March 28, 2023",
      readTime: "3 min read",
      title: "Optimize Your Web Application for Speed",
      excerpt:
        "Stay ahead of the curve with these emerging trends in UI/UX design.",
      featured: true,
    },
    {
      tag: "Development",
      date: "March 28, 2023",
      readTime: "3 min read",
      title: "Best Practices for Secure Web Development",
      excerpt:
        "Stay ahead of the curve with these emerging trends in UI/UX design.",
      featured: false,
    },
    {
      tag: "Trending",
      date: "March 28, 2023",
      readTime: "3 min read",
      title: "10 JavaScript Frameworks for Web Development in 2024",
      excerpt:
        "Stay ahead of the curve with these emerging trends in UI/UX design.",
      featured: false,
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0e0e0f] rounded-2xl p-16 transition-colors duration-300">
      <div className="max-w-[1305px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#129840] dark:bg-[#33a381]" />
            <span className="text-[#5e5e65] dark:text-[#9999a1] text-base">
              Latest Posts
            </span>
          </div>
          <h2 className="text-[#1f1f24] dark:text-[#e5e5e6] text-[32px] leading-tight font-medium">
            From Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-[#f5f5f5] dark:bg-[#1a1a1a] rounded-2xl p-4 group hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[274px] bg-gradient-to-br from-[#129840] to-[#33a381] dark:from-[#33a381] dark:to-[#129840] rounded-xl overflow-hidden mb-6">
                {/* Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-1 bg-white/90 dark:bg-black/80 text-[#1f1f24] dark:text-[#e5e5e6] text-sm rounded backdrop-blur-sm">
                    {post.tag}
                  </span>
                </div>

                {/* Hover Arrow */}
                {post.featured && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-[#1a1a1a] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 text-[#1f1f24] dark:text-[#e5e5e6]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 3.293a1 1 0 0 0-1.414 1.414L15.586 11H3a1 1 0 1 0 0 2h12.586l-6.293 6.293a1 1 0 0 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Date & Read Time */}
                <div className="flex items-center justify-center gap-2 text-[#5e5e65] dark:text-[#9999a1] text-sm">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#1f1f24] dark:text-[#e5e5e6] text-xl font-semibold leading-tight line-clamp-2 hover:text-[#129840] dark:hover:text-[#33a381] transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#129840] dark:bg-[#33a381] mt-2 flex-shrink-0" />
                  <p className="text-[#5e5e65] dark:text-[#9999a1] text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
