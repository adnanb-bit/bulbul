'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ShoppingBag, Filter } from 'lucide-react';
import { products, formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cart';

export default function ShopPage() {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'product',
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary"
          >
            Shop All Books
          </motion.h1>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Each book teaches a core subject — alphabets, numbers, colors, shapes, animals — through hands-on velcro activities.
            Your child learns for 30+ minutes without realizing it.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-text-secondary font-body">
            <span className="flex items-center gap-1">🚚 Free delivery over Rs.3,000</span>
            <span className="flex items-center gap-1">💰 COD Available</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-text-secondary font-body">
            Showing {products.length} products
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-body hover:border-primary transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-all"
            >
              {/* Image */}
              <Link href={`/shop/${product.slug}`}>
                <div className="relative aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {product.slug.includes('alphabet') ? '🔤' :
                     product.slug.includes('number') ? '🔢' :
                     product.slug.includes('color') ? '🎨' :
                     product.slug.includes('shape') ? '🔷' :
                     product.slug.includes('fruit') ? '🍎' : '🦁'}
                  </div>
                  {product.isLaunchSale && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-heading font-bold px-3 py-1 rounded-full">
                      Launch Sale
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-white/90 text-text-primary text-xs font-heading font-semibold px-2 py-1 rounded-full">
                    {product.size}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <Link href={`/shop/${product.slug}`}>
                  <h3 className="font-heading font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-text-secondary font-body line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-gray-200'}`}
                    />
                  ))}
                  <span className="text-xs text-text-secondary font-body ml-1">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Age & Skills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-body">
                    Ages {product.ageRange}
                  </span>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-body">
                    {product.skills.length} skills
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <span className="font-heading font-bold text-2xl text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-heading font-semibold rounded-xl hover:bg-primary/90 transition-all text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle Nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center"
        >
          <h3 className="font-heading font-bold text-2xl text-text-primary">
            💡 Save up to 28% with bundles
          </h3>
          <p className="mt-2 text-text-secondary font-body">
            Get the Complete Collection (all 6 books) for just {formatPrice(6499)} instead of {formatPrice(8994)}
          </p>
          <Link
            href="/bundles"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white font-heading font-bold rounded-xl hover:bg-primary/90 transition-all"
          >
            View Bundles
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
