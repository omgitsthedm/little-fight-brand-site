import { motion, useReducedMotion } from 'framer-motion';

const blogPosts = [
  {
    href: '/blog/what-google-looks-for-business-website/',
    category: 'Search Strategy',
    title: 'What Google Actually Looks For',
    description:
      'Structure, trust signals, and the basics most small business sites still get wrong.',
  },
  {
    href: '/blog/small-business-website-cost/',
    category: 'Website Investment',
    title: 'What a Small Business Website Should Actually Cost',
    description:
      'A transparent breakdown of pricing, value, and why cheap sites cost more in the long run.',
  },
  {
    href: '/blog/trust-score-explained/',
    category: 'Trust & Credibility',
    title: 'Trust Scores: What They Are and Why They Matter',
    description:
      'How Lighthouse audits, speed, and security combine into the number that shapes first impressions.',
  },
];

export default function BlogTeaser() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-midnight">
      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lf-orange)] mb-3">
            From the Blog
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ideas worth reading.
          </h2>
          <p className="text-white/50 max-w-xl">
            Practical thinking on websites, search visibility, and the systems behind businesses that earn trust.
          </p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.href}
              href={post.href}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-6 rounded-2xl block"
            >
              <div className="relative z-[1]">
                <p className="text-xs uppercase tracking-wider text-[var(--lf-orange)] mb-2">
                  {post.category}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--lf-orange)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-white/40">{post.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Browse all link */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/blog/"
            className="text-[var(--lf-orange)] text-sm font-medium hover:text-white transition-colors"
          >
            Browse all insights &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
