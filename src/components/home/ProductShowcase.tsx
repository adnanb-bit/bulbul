'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ShoppingBag } from 'lucide-react';
import { products, formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cart';

export default function ProductShowcase() {
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
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary">
            6 Books. 6 Subjects. One Smarter Child.
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Each book covers an essential early learning topic — alphabets, numbers, colors, shapes, animals, and more.
            Your child learns while playing for 30+ minutes straight.
          </p>
        </motion.div>

        {/* Horizontal Scrollable on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto scroll-container pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[280px] lg:min-w-0 bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-all"
            >
              {/* Image */}
              <Link href={`/shop/${product.slug}`}>
                <div className="relative aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
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
                </div>
              </Link>

              {/* Content */}
              <div className="p-5">
                <Link href={`/shop/${product.slug}`}>
                  <h3 className="font-heading font-bold text-lg text-text-primary group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-1 text-sm text-text-secondary font-body line-clamp-2">
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
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-4">
                  <span className="font-heading font-bold text-xl text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-heading font-semibold rounded-xl hover:bg-primary hover:text-white transition-all text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add
                  </button>
                </div>

                {/* Age Range */}
                <p className="mt-3 text-xs text-text-secondary font-body">
                  Ages {product.ageRange} • {product.size} size
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
