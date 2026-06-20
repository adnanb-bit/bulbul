'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary">
              About Bulbul
            </h1>
            <p className="mt-6 text-lg text-text-secondary font-body leading-relaxed">
              We&apos;re a team of parents and educators who believe learning shouldn&apos;t feel like a chore.
              Bulbul was born from a simple truth: children absorb the most when they don&apos;t realize they&apos;re being taught.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-text-secondary font-body leading-relaxed">
              <p>
                Bulbul started in 2023 when our founder, a mother of two, realized her children were spending
                hours on screens — entertained, but learning nothing. She wanted something that would keep them
                engaged AND educate them at the same time.
              </p>
              <p>
                Working with early childhood educators and Montessori experts, she designed books that disguise
                education as play. Children think they&apos;re just peeling and sticking — but they&apos;re actually
                mastering alphabets, numbers, colors, and critical thinking skills.
              </p>
              <p>
                Today, Bulbul serves hundreds of families across Pakistan. Our books have helped children
                learn their ABCs weeks earlier, recognize numbers faster, and develop fine motor skills —
                all while their parents finally get a moment of peace.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-white rounded-3xl shadow-soft flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-8xl mb-4">🌸</div>
              <p className="font-logo text-4xl text-primary">Bulbul</p>
              <p className="text-text-secondary font-body mt-2">Where play becomes education</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Made with Love', description: 'Every book is crafted with care, designed to delight both children and parents.' },
              { icon: Target, title: 'Purpose-Driven', description: 'Each activity targets specific developmental milestones backed by research.' },
              { icon: Users, title: 'Family First', description: 'We design for real families — busy parents who want the best for their kids.' },
              { icon: Award, title: 'Quality Promise', description: 'Premium materials that last. If it breaks, we replace it. No questions asked.' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary font-body">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
