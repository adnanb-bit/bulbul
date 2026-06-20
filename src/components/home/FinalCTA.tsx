'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight">
            Every Day Without These Books Is a{' '}
            <span className="text-primary">Day of Missed Learning</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary font-body max-w-xl mx-auto leading-relaxed">
            While other kids are mastering ABCs and 123s through play, yours is watching cartoons.
            Bulbul Busy Books turn idle time into education — starting from just Rs.1,499.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-medium text-lg"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/bundles/complete-collection"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-heading font-bold rounded-2xl border-2 border-gray-200 hover:border-primary hover:text-primary transition-all text-lg"
            >
              Get the Complete Set — Save 28%
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary font-body">
            <span>✓ Free Delivery Over Rs.3,000</span>
            <span>✓ COD Available</span>
            <span>✓ Same Day Dispatch</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
