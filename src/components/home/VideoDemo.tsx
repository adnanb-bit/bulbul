'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoDemo() {
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
            See the Learning Happen
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body">
            Watch children master new concepts — while thinking they&apos;re just playing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl overflow-hidden shadow-large">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-transform mb-4 mx-auto">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
                <p className="font-heading font-semibold text-text-primary">
                  Watch Demo Video
                </p>
                <p className="text-sm text-text-secondary font-body mt-1">
                  2 minutes • See education through play
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 text-4xl opacity-20">📚</div>
            <div className="absolute bottom-6 right-6 text-4xl opacity-20">✨</div>
            <div className="absolute top-6 right-6 text-4xl opacity-20">🧒</div>
            <div className="absolute bottom-6 left-6 text-4xl opacity-20">🎯</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
