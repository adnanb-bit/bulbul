'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary"
          >
            The Bulbul Blog
          </motion.h1>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Tips, guides, and insights for mindful parenting and screen-free learning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <span className="text-5xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-heading font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h2 className="mt-4 font-heading font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-text-secondary font-body leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary font-body">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
