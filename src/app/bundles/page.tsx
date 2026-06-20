'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Crown, ShoppingBag } from 'lucide-react';
import { bundles, formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cart';

export default function BundlesPage() {
  const { addItem, openCart } = useCartStore();

  const handleAddBundle = (bundle: typeof bundles[0]) => {
    addItem({
      id: bundle.id,
      name: bundle.name,
      price: bundle.price,
      image: bundle.image,
      type: 'bundle',
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary"
          >
            Bundle & Save
          </motion.h1>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-2xl mx-auto">
            The more you bundle, the more you save. Choose the perfect combination for your child.
          </p>
        </div>
      </div>

      {/* Bundles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl overflow-hidden ${
                bundle.isPopular
                  ? 'border-2 border-primary shadow-large ring-2 ring-primary/20'
                  : 'border border-gray-100 shadow-soft'
              }`}
            >
              {bundle.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-heading font-bold flex items-center justify-center gap-1">
                  <Crown className="w-4 h-4" />
                  Most Popular — Best Value
                </div>
              )}

              <div className={`p-6 ${bundle.isPopular ? 'pt-12' : ''}`}>
                {bundle.badge && !bundle.isPopular && (
                  <span className="inline-block bg-accent/10 text-accent text-xs font-heading font-bold px-3 py-1 rounded-full mb-3">
                    {bundle.badge}
                  </span>
                )}

                <h3 className="font-heading font-bold text-xl text-text-primary">
                  {bundle.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary font-body">
                  {bundle.description}
                </p>

                {/* Price */}
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

                {/* Products included */}
                {bundle.products.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {bundle.products.map((productId) => (
                      <li key={productId} className="flex items-center gap-2 text-sm font-body text-text-primary">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        {productId.replace(/-/g, ' ').replace(/busy book/i, 'Busy Book').replace(/\b\w/g, l => l.toUpperCase())}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Actions */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => handleAddBundle(bundle)}
                    className={`w-full flex items-center justify-center gap-2 py-3 font-heading font-bold rounded-xl transition-all ${
                      bundle.isPopular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <Link
                    href={`/bundles/${bundle.slug}`}
                    className="block w-full text-center py-2 text-sm text-text-secondary hover:text-primary font-body transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="font-heading text-2xl font-bold text-text-primary text-center mb-8">
            Compare Bundles
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <thead>
                <tr className="bg-background">
                  <th className="text-left p-4 font-heading font-semibold text-text-primary">Bundle</th>
                  <th className="text-center p-4 font-heading font-semibold text-text-primary">Books</th>
                  <th className="text-center p-4 font-heading font-semibold text-text-primary">Price</th>
                  <th className="text-center p-4 font-heading font-semibold text-text-primary">Savings</th>
                  <th className="text-center p-4 font-heading font-semibold text-text-primary">Per Book</th>
                </tr>
              </thead>
              <tbody>
                {bundles.map((bundle) => (
                  <tr key={bundle.id} className={`border-t border-gray-100 ${bundle.isPopular ? 'bg-primary/5' : ''}`}>
                    <td className="p-4 font-heading font-semibold text-text-primary text-sm">
                      {bundle.name}
                      {bundle.isPopular && <span className="ml-2 text-xs text-primary">★ Best Value</span>}
                    </td>
                    <td className="p-4 text-center font-body text-sm">{bundle.products.length || 3}</td>
                    <td className="p-4 text-center font-heading font-bold text-primary">{formatPrice(bundle.price)}</td>
                    <td className="p-4 text-center font-heading font-semibold text-secondary">{formatPrice(bundle.savings)}</td>
                    <td className="p-4 text-center font-body text-sm">
                      {formatPrice(Math.round(bundle.price / (bundle.products.length || 3)))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
