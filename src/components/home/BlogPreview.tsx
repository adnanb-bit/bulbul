'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock } from 'lucide-react';

export default function BlogPreview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary">
            From the Blog
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body">
            Tips, guides, and insights for mindful parenting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-heading font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-heading font-bold text-lg text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary font-body line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary font-body">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-text-primary font-heading font-bold rounded-xl border-2 border-gray-200 hover:border-primary hover:text-primary transition-all"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
