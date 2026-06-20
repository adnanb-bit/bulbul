'use client';

import { motion } from 'framer-motion';
import { Package, Truck, Heart } from 'lucide-react';

const steps = [
  {
    icon: Package,
    step: '1',
    title: 'Choose Their Curriculum',
    description: 'Pick books by learning goal — ABCs, numbers, colors, shapes. Or save with a bundle that covers everything.',
    color: 'bg-primary',
  },
  {
    icon: Truck,
    step: '2',
    title: 'We Deliver Fast',
    description: 'Same-day dispatch before 2 PM. Free delivery on orders over Rs.3,000. COD available.',
    color: 'bg-secondary',
  },
  {
    icon: Heart,
    step: '3',
    title: 'They Learn. You Rest.',
    description: 'Your child dives into 30+ minutes of hands-on learning — thinking it\'s just play. You finally breathe.',
    color: 'bg-accent',
  },
];

export default function HowItWorks() {
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
            How It Works
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body">
            Three simple steps to a smarter, happier child — and a calmer you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-200" />
              )}
              
              <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative z-10`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-200 rounded-full font-heading font-bold text-sm text-text-primary mb-3">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary font-body text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
