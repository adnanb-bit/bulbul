'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, Gift, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/data';

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    giftWrapping,
    toggleGiftWrapping,
    getTotal,
    getItemCount,
    getIncentiveMessage,
  } = useCartStore();

  const total = getTotal();
  const itemCount = getItemCount();
  const incentiveMessage = getIncentiveMessage();
  const freeDelivery = total >= 3000;
  const deliveryFee = freeDelivery ? 0 : 200;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-20 h-20 text-gray-200 mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-text-primary mb-2">
            Your cart is empty
          </h1>
          <p className="text-text-secondary font-body mb-6">
            Add some busy books to get started!
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary/90 transition-all"
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl font-extrabold text-text-primary mb-8"
        >
          Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
        </motion.h1>

        {/* Incentive Message */}
        {incentiveMessage && (
          <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-xl">
            <p className="font-heading font-semibold text-text-primary">{incentiveMessage}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-4 p-4 bg-white rounded-2xl shadow-soft"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">📚</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-text-primary">{item.name}</h3>
                  <p className="text-primary font-heading font-bold mt-1">{formatPrice(item.price)}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-heading font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
              <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm font-body">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal ({itemCount} items)</span>
                  <span className="font-semibold">{formatPrice(total - (giftWrapping ? 150 : 0))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Delivery</span>
                  <span className={`font-semibold ${freeDelivery ? 'text-secondary' : ''}`}>
                    {freeDelivery ? 'FREE' : formatPrice(deliveryFee)}
                  </span>
                </div>
                {giftWrapping && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Gift Wrapping</span>
                    <span className="font-semibold">Rs.150</span>
                  </div>
                )}
              </div>

              {/* Gift Wrapping */}
              <label className="flex items-center gap-3 mt-4 p-3 bg-accent/5 rounded-xl cursor-pointer border border-accent/20">
                <input
                  type="checkbox"
                  checked={giftWrapping}
                  onChange={toggleGiftWrapping}
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Gift className="w-4 h-4 text-accent" />
                <span className="flex-1 text-sm font-body">Gift wrapping (+Rs.150)</span>
              </label>

              {/* Free delivery progress */}
              {!freeDelivery && (
                <div className="mt-4 p-3 bg-secondary/5 rounded-xl">
                  <p className="text-xs text-text-secondary font-body mb-1">
                    Add {formatPrice(3000 - total)} more for free delivery
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-secondary rounded-full h-1.5 transition-all"
                      style={{ width: `${Math.min((total / 3000) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="border-t border-gray-100 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold text-lg">Total</span>
                  <span className="font-heading font-extrabold text-2xl text-primary">
                    {formatPrice(total + deliveryFee)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full mt-4 py-4 bg-primary text-white text-center font-heading font-bold rounded-xl hover:bg-primary/90 transition-all text-lg"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="block text-center mt-3 text-sm text-text-secondary hover:text-primary font-body"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
