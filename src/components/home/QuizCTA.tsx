'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';

export default function QuizCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary">
            Which Learning Book Does Your Child Need First?
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-xl mx-auto">
            Answer 3 quick questions about your child&apos;s age and learning gaps — we&apos;ll recommend the perfect book to start their education journey.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-medium text-lg"
          >
            Take the Quiz
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-text-secondary font-body">
            Takes 30 seconds • No email required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
