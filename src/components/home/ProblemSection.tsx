'use client';

import { motion } from 'framer-motion';
import { Smartphone, Puzzle, Drama, GraduationCap, Coffee, Users } from 'lucide-react';

const painPoints = [
  {
    icon: Smartphone,
    title: 'Screen Time = Zero Learning',
    description: 'They\'re glued to the iPad, but absorbing nothing useful. You know it, and the guilt is real.',
  },
  {
    icon: Puzzle,
    title: 'Toys That Don\'t Teach',
    description: 'Expensive toys that entertain for 5 minutes but develop zero skills. Money wasted.',
  },
  {
    icon: Drama,
    title: 'The "Keep Them Busy" Struggle',
    description: 'Restaurants, car rides, waiting rooms — you need something that engages AND educates.',
  },
  {
    icon: GraduationCap,
    title: 'Falling Behind Other Kids',
    description: 'Other children know their ABCs and 123s already. You wonder if you\'re doing enough at home.',
  },
  {
    icon: Coffee,
    title: 'No Time to Sit & Teach',
    description: 'You want to teach them, but life is hectic. You need something that teaches FOR you.',
  },
  {
    icon: Users,
    title: 'The Parenting Pressure',
    description: '"Is your child learning enough?" — the question that haunts every parent.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary">
            Sound Familiar?
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body">
            You want your child entertained AND educated. But finding something that does both? That&apos;s the real challenge.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-background rounded-2xl border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                {point.title}
              </h3>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
