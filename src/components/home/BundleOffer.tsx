'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Crown } from 'lucide-react';
import { bundles, formatPrice } from '@/lib/data';

export default function BundleOffer() {
  const displayBundles = bundles.filter(b => 
    ['literacy-starter', 'complete-collection', 'ultimate-bundle'].includes(b.id)
  );

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
            Save More With Bundles
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-2xl mx-auto">
            The more you bundle, the more you save. Most parents choose the Complete Collection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {displayBundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 p-6 ${
                bundle.isPopular
                  ? 'border-primary shadow-large scale-105'
                  : 'border-gray-100 shadow-soft'
              }`}
            >
              {bundle.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-heading font-bold flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <h3 className="font-heading font-bold text-xl text-text-primary mt-2">
                {bundle.name}
              </h3>
              <p className="text-sm text-text-secondary font-body mt-2">
                {bundle.shortDescription}
              </p>

              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-extrabold text-3xl text-primary">
                    {formatPrice(bundle.price)}
                  </span>
                  <span className="text-sm text-text-secondary line-through font-body">
                    {formatPrice(bundle.originalPrice)}
                  </span>
                </div>
                <p className="text-sm text-secondary font-heading font-semibold mt-1">
                  Save {formatPrice(bundle.savings)}
                </p>
              </div>

              <ul className="mt-4 space-y-2">
                {bundle.products.slice(0, 4).map((productId) => (
                  <li key={productId} className="flex items-center gap-2 text-sm font-body text-text-primary">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    {productId.replace(/-/g, ' ').replace(/busy book/i, '').replace(/\b\w/g, l => l.toUpperCase()).trim()}
                  </li>
                ))}
                {bundle.products.length > 4 && (
                  <li className="text-sm font-body text-text-secondary pl-6">
                    +{bundle.products.length - 4} more books
                  </li>
                )}
              </ul>

              <Link
                href={`/bundles/${bundle.slug}`}
                className={`block w-full mt-6 py-3 text-center font-heading font-bold rounded-xl transition-all ${
                  bundle.isPopular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                View Bundle
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/bundles"
            className="text-primary font-heading font-semibold hover:underline"
          >
            View all 6 bundle options →
          </Link>
        </div>
      </div>
    </section>
  );
}
