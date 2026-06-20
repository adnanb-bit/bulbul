'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-heading font-semibold text-text-primary">
                Launch Sale — Limited Time
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight">
              They Think It&apos;s Play.{' '}
              <span className="text-primary">They&apos;re Actually Learning.</span>{' '}
              You Finally Get a Moment of Peace.
            </h1>

            <p className="mt-6 text-lg text-text-secondary font-body leading-relaxed max-w-lg">
              Montessori-inspired busy books that sneak education into play. Your child masters alphabets, numbers,
              and problem-solving — while thinking they&apos;re just having fun. 30+ minutes of screen-free learning, guaranteed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-medium text-lg"
              >
                Shop Best Sellers
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-heading font-bold rounded-2xl border-2 border-gray-200 hover:border-primary hover:text-primary transition-all text-lg"
              >
                Take the 30-Second Quiz
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-text-secondary font-body">
              <span className="flex items-center gap-1">✓ Free Delivery 3,000+</span>
              <span className="flex items-center gap-1">✓ COD Available</span>
              <span className="flex items-center gap-1">✓ 127+ Happy Parents</span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-large flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">📚</div>
                  <p className="font-heading font-bold text-xl text-text-primary">Bulbul Busy Books</p>
                   <p className="text-text-secondary font-body mt-2">Where Play Becomes Education</p>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-0 bg-white px-4 py-2 rounded-xl shadow-medium"
              >
                <span className="font-heading font-bold text-primary">⭐ 4.9/5</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-0 bg-white px-4 py-2 rounded-xl shadow-medium"
              >
                <span className="font-heading font-bold text-secondary">🧠 12+ Skills Taught</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
