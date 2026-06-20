'use client';

import { motion } from 'framer-motion';

export default function UGCGallery() {
  const placeholderImages = [
    { emoji: '👶📚', caption: '@mama_ayesha' },
    { emoji: '🧒✨', caption: '@fatima_mom' },
    { emoji: '👧🎨', caption: '@sarah_pk' },
    { emoji: '🧒📖', caption: '@hina_reads' },
    { emoji: '👶🦁', caption: '@zainab_t' },
    { emoji: '👧🔤', caption: '@amna_edu' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary">
            #BulbulMoments
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body">
            Real moments from real families. Tag us to be featured!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholderImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex flex-col items-center justify-center hover:shadow-medium transition-shadow cursor-pointer group"
            >
              <span className="text-5xl group-hover:scale-110 transition-transform">
                {img.emoji}
              </span>
              <span className="mt-3 text-sm text-text-secondary font-body">
                {img.caption}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
