'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '@/lib/data';

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
            Loved by Pakistani Parents
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body">
            Real reviews from real parents. No fake testimonials.
          </p>
        </motion.div>

        {/* Review Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-lg text-text-primary font-body leading-relaxed mb-6">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-text-primary">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-sm text-text-secondary font-body">
                    {reviews[currentIndex].location}
                    {reviews[currentIndex].verified && ' • Verified Purchase ✓'}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < reviews[currentIndex].rating ? 'text-accent fill-accent' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-white shadow-soft hover:shadow-medium transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-text-primary" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-white shadow-soft hover:shadow-medium transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
