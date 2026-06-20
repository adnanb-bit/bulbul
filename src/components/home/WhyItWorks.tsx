'use client';

import { motion } from 'framer-motion';
import { Hand, Eraser, BookOpen, Briefcase, BatteryCharging, Brain } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: 'Learn by Doing',
    description: 'Velcro peel-and-stick activities teach through touch. Children absorb concepts 3x faster with hands-on learning.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Eraser,
    title: 'Practice Makes Perfect',
    description: 'Wipe-clean laminated pages let children practice letters, numbers, and matching — over and over until they master it.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: BookOpen,
    title: 'Montessori Curriculum',
    description: 'Each book follows proven early education principles — ABCs, counting, colors, shapes — disguised as play.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Briefcase,
    title: 'Classroom in a Bag',
    description: 'B5 portable size means learning happens everywhere — restaurants, car rides, waiting rooms. No setup needed.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: BatteryCharging,
    title: 'Screen-Free Education',
    description: 'No batteries, no WiFi, no ads. Just focused, distraction-free learning that actually sticks.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Brain,
    title: '12+ Skills Per Book',
    description: 'Letter recognition, number sense, color theory, problem-solving, fine motor skills — all in one sitting.',
    color: 'bg-accent/10 text-accent',
  },
];

export default function WhyItWorks() {
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
            Education Disguised as Play
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body">
            Designed by educators, tested by toddlers. They won&apos;t realize they&apos;re learning — but you&apos;ll see the results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
