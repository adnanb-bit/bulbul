'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Star, ShoppingBag, Zap, ChevronDown, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { products, getProductBySlug, getProductById, formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cart';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem, openCart } = useCartStore();
  const [openAccordion, setOpenAccordion] = useState<string | null>('whats-inside');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold">Product not found</h1>
          <Link href="/shop" className="text-primary hover:underline mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'product',
    });
    openCart();
  };

  const pairsWellWith = product.pairsWellWith
    .map(id => getProductById(id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm font-body text-text-secondary">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-24">
              <div className="aspect-square bg-white rounded-3xl shadow-soft flex items-center justify-center relative overflow-hidden">
                <div className="text-[120px]">
                  {product.slug.includes('alphabet') ? '🔤' :
                   product.slug.includes('number') ? '🔢' :
                   product.slug.includes('color') ? '🎨' :
                   product.slug.includes('shape') ? '🔷' :
                   product.slug.includes('fruit') ? '🍎' : '🦁'}
                </div>
                {product.isLaunchSale && (
                  <span className="absolute top-4 left-4 bg-primary text-white text-sm font-heading font-bold px-4 py-2 rounded-full">
                    🎉 Launch Sale
                  </span>
                )}
              </div>
              {/* Thumbnail strip */}
              <div className="flex gap-3 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 bg-white rounded-xl shadow-soft flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                    <span className="text-2xl">📚</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-heading font-semibold">
                  Ages {product.ageRange}
                </span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-heading font-semibold">
                  {product.size} Size
                </span>
                {product.inStock && (
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-heading font-semibold">
                    ✓ In Stock
                  </span>
                )}
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary font-body">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading font-extrabold text-4xl text-primary">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Description */}
            <p className="text-text-secondary font-body leading-relaxed">
              {product.description}
            </p>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-medium text-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <Link
                href="/checkout"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-text-primary text-white font-heading font-bold rounded-2xl hover:bg-text-primary/90 transition-all text-lg"
              >
                <Zap className="w-5 h-5" />
                Buy Now
              </Link>
            </div>

            {/* Bundle Nudge */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-4">
              <p className="font-heading font-semibold text-text-primary text-sm">
                💡 Save 25% → <Link href="/bundles/complete-collection" className="text-primary hover:underline">Buy the Complete Set</Link>
              </p>
              <p className="text-xs text-text-secondary font-body mt-1">
                Get all 6 books for {formatPrice(6499)} (save {formatPrice(2495)})
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-xl">
                <Truck className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-xs font-body text-text-secondary">Free Delivery 3K+</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <Shield className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-xs font-body text-text-secondary">Premium Quality</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <RotateCcw className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-xs font-body text-text-secondary">Easy Returns</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              {/* What's Inside */}
              <div className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'whats-inside' ? null : 'whats-inside')}
                  className="w-full flex items-center justify-between p-4"
                >
                  <span className="font-heading font-semibold text-text-primary">What&apos;s Inside</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'whats-inside' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openAccordion === 'whats-inside' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="px-4 pb-4 space-y-2">
                        {product.whatsInside.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm font-body text-text-secondary">
                            <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Skills Developed */}
              <div className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'skills' ? null : 'skills')}
                  className="w-full flex items-center justify-between p-4"
                >
                  <span className="font-heading font-semibold text-text-primary">Skills Developed</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'skills' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openAccordion === 'skills' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
                        {product.skills.map((skill, i) => (
                          <span key={i} className="text-sm font-body text-text-secondary bg-background px-3 py-2 rounded-lg">
                            🎯 {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'faq' ? null : 'faq')}
                  className="w-full flex items-center justify-between p-4"
                >
                  <span className="font-heading font-semibold text-text-primary">FAQ</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'faq' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openAccordion === 'faq' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 space-y-4">
                        {product.faq.map((item, i) => (
                          <div key={i}>
                            <p className="font-heading font-semibold text-sm text-text-primary">{item.question}</p>
                            <p className="text-sm font-body text-text-secondary mt-1">{item.answer}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Pairs Well With */}
            {pairsWellWith.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
                  Pairs Well With
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {pairsWellWith.map((p) => p && (
                    <Link
                      key={p.id}
                      href={`/shop/${p.slug}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-soft transition-shadow"
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-2xl">
                        {p.slug.includes('alphabet') ? '🔤' :
                         p.slug.includes('number') ? '🔢' :
                         p.slug.includes('color') ? '🎨' :
                         p.slug.includes('shape') ? '🔷' :
                         p.slug.includes('fruit') ? '🍎' : '🦁'}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-sm text-text-primary">{p.shortName}</p>
                        <p className="text-xs text-primary font-heading font-semibold">{formatPrice(p.price)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 lg:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-lg text-primary">{formatPrice(product.price)}</p>
            <p className="text-xs text-text-secondary font-body">Free delivery over Rs.3,000</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-heading font-bold rounded-xl hover:bg-primary/90 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
