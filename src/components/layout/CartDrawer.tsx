'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Gift } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/data';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-heading font-bold text-lg">
                  Your Cart ({itemCount})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Incentive Message */}
            {incentiveMessage && (
              <div className="px-4 py-3 bg-accent/10 border-b border-accent/20">
                <p className="text-sm font-medium text-text-primary font-body">
                  {incentiveMessage}
                </p>
              </div>
            )}

            {/* Free Delivery Progress */}
            {!freeDelivery && itemCount > 0 && (
              <div className="px-4 py-3 bg-secondary/5 border-b border-secondary/10">
                <div className="flex justify-between text-xs font-body text-text-secondary mb-1">
                  <span>Free delivery progress</span>
                  <span>{formatPrice(3000 - total)} away</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-secondary rounded-full h-2 transition-all duration-500"
                    style={{ width: `${Math.min((total / 3000) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {freeDelivery && itemCount > 0 && (
              <div className="px-4 py-2 bg-secondary/10 border-b border-secondary/20">
                <p className="text-sm font-medium text-secondary font-body">
                  🎉 You qualify for FREE delivery!
                </p>
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                  <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-text-secondary font-body text-sm mb-6">
                    Add some busy books to get started!
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="px-6 py-3 bg-primary text-white font-heading font-bold rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 bg-background rounded-xl"
                  >
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📚</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold text-sm text-text-primary truncate">
                        {item.name}
                      </h4>
                      <p className="text-primary font-heading font-bold text-sm mt-1">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-heading font-semibold text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-primary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-4 space-y-4">
                {/* Gift Wrapping */}
                <label className="flex items-center gap-3 p-3 bg-accent/5 rounded-xl cursor-pointer border border-accent/20 hover:border-accent/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={giftWrapping}
                    onChange={toggleGiftWrapping}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Gift className="w-4 h-4 text-accent" />
                  <span className="flex-1 font-body text-sm">
                    Add gift wrapping
                  </span>
                  <span className="font-heading font-semibold text-sm text-text-secondary">
                    +Rs.150
                  </span>
                </label>

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-lg">Total</span>
                  <span className="font-heading font-bold text-xl text-primary">
                    {formatPrice(total)}
                  </span>
                </div>

                {freeDelivery && (
                  <p className="text-xs text-secondary font-body text-center">
                    ✓ Free delivery included
                  </p>
                )}

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block w-full py-4 bg-primary text-white text-center font-heading font-bold rounded-xl hover:bg-primary/90 transition-colors text-lg"
                >
                  Checkout — {formatPrice(total)}
                </Link>

                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="block text-center text-sm text-text-secondary hover:text-primary font-body transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
