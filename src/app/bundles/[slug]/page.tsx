'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ShoppingBag, Check, Truck, Shield, Gift } from 'lucide-react';
import { bundles, getBundleBySlug, getProductById, formatPrice } from '@/lib/data';
import { useCartStore } from '@/store/cart';

export default function BundlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const bundle = getBundleBySlug(slug);
  const { addItem, openCart } = useCartStore();

  if (!bundle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold">Bundle not found</h1>
          <Link href="/bundles" className="text-primary hover:underline mt-4 inline-block">
            Back to Bundles
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: bundle.id,
      name: bundle.name,
      price: bundle.price,
      image: bundle.image,
      type: 'bundle',
    });
    openCart();
  };

  const includedProducts = bundle.products.map(id => getProductById(id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm font-body text-text-secondary">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/bundles" className="hover:text-primary">Bundles</Link>
          <span>/</span>
          <span className="text-text-primary">{bundle.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-square bg-white rounded-3xl shadow-soft flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-[100px]">📦</div>
                <p className="font-heading font-bold text-xl text-text-primary mt-2">{bundle.name}</p>
                <p className="text-text-secondary font-body">{bundle.products.length || 3} books included</p>
              </div>
              {bundle.badge && (
                <span className="absolute top-4 left-4 bg-primary text-white text-sm font-heading font-bold px-4 py-2 rounded-full">
                  {bundle.badge}
                </span>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              {bundle.isPopular && (
                <span className="inline-block bg-primary/10 text-primary text-xs font-heading font-bold px-3 py-1 rounded-full mb-3">
                  ⭐ Most Popular Choice
                </span>
              )}
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary">
                {bundle.name}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(bundle.rating) ? 'text-accent fill-accent' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary font-body">
                  {bundle.rating} ({bundle.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-secondary/5 rounded-2xl p-4">
              <div className="flex items-baseline gap-3">
                <span className="font-heading font-extrabold text-4xl text-primary">
                  {formatPrice(bundle.price)}
                </span>
                <span className="text-lg text-text-secondary line-through font-body">
                  {formatPrice(bundle.originalPrice)}
                </span>
              </div>
              <p className="text-secondary font-heading font-bold mt-1">
                You save {formatPrice(bundle.savings)}!
              </p>
            </div>

            <p className="text-text-secondary font-body leading-relaxed">
              {bundle.description}
            </p>

            {/* Included Products */}
            {includedProducts.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-3">
                  What&apos;s Included:
                </h3>
                <div className="space-y-2">
                  {includedProducts.map((product) => product && (
                    <div key={product.id} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl">
                        {product.slug.includes('alphabet') ? '🔤' :
                         product.slug.includes('number') ? '🔢' :
                         product.slug.includes('color') ? '🎨' :
                         product.slug.includes('shape') ? '🔷' :
                         product.slug.includes('fruit') ? '🍎' : '🦁'}
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-semibold text-sm text-text-primary">{product.name}</p>
                        <p className="text-xs text-text-secondary font-body">{product.ageRange}</p>
                      </div>
                      <span className="text-sm text-text-secondary line-through font-body">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-medium text-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Add Bundle to Cart — {formatPrice(bundle.price)}
            </button>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-xl">
                <Truck className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-xs font-body text-text-secondary">Free Delivery</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <Shield className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-xs font-body text-text-secondary">Premium Quality</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <Gift className="w-5 h-5 text-secondary mx-auto mb-1" />
                <p className="text-xs font-body text-text-secondary">Gift Wrap Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
