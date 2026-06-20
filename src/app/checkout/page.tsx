'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lock, Truck, CreditCard, Smartphone } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/data';

export default function CheckoutPage() {
  const { items, giftWrapping, getTotal, getItemCount } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const total = getTotal();
  const itemCount = getItemCount();
  const freeDelivery = total >= 3000;
  const deliveryFee = freeDelivery ? 0 : 200;
  const grandTotal = total + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-text-primary mb-4">No items in cart</h1>
          <Link href="/shop" className="text-primary hover:underline font-body">
            Go to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl font-extrabold text-text-primary mb-8"
        >
          Checkout
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="font-heading font-bold text-lg text-text-primary mb-4">
                Contact Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="Enter first name" />
                </div>
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="Enter last name" />
                </div>
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="03XX XXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">Email (optional)</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="your@email.com" />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="font-heading font-bold text-lg text-text-primary mb-4">
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">Address</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="House/Flat No, Street, Area" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body text-text-secondary mb-1">City</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body">
                      <option>Select City</option>
                      <option>Lahore</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Rawalpindi</option>
                      <option>Faisalabad</option>
                      <option>Multan</option>
                      <option>Peshawar</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-body text-text-secondary mb-1">Postal Code (optional)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="54000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">Delivery Notes (optional)</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" rows={2} placeholder="Any special instructions for delivery" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="font-heading font-bold text-lg text-text-primary mb-4">
                Payment Method
              </h2>
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} className="text-primary" />
                  <Truck className="w-5 h-5 text-text-secondary" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">Cash on Delivery (COD)</p>
                    <p className="text-xs text-text-secondary font-body">Pay when you receive your order</p>
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'jazzcash' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>
                  <input type="radio" name="payment" value="jazzcash" checked={paymentMethod === 'jazzcash'} onChange={(e) => setPaymentMethod(e.target.value)} className="text-primary" />
                  <Smartphone className="w-5 h-5 text-text-secondary" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">JazzCash / EasyPaisa</p>
                    <p className="text-xs text-text-secondary font-body">Pay via mobile wallet</p>
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} className="text-primary" />
                  <CreditCard className="w-5 h-5 text-text-secondary" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">Credit/Debit Card</p>
                    <p className="text-xs text-text-secondary font-body">Visa, Mastercard via Stripe</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
              <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm font-body">
                    <span className="text-text-secondary">{item.name} × {item.quantity}</span>
                    <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-3 space-y-2 text-sm font-body">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Delivery</span>
                  <span className={freeDelivery ? 'text-secondary font-semibold' : ''}>
                    {freeDelivery ? 'FREE' : formatPrice(deliveryFee)}
                  </span>
                </div>
                {giftWrapping && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Gift Wrapping</span>
                    <span>Rs.150</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 mt-3 pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold text-lg">Total</span>
                  <span className="font-heading font-extrabold text-2xl text-primary">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 py-4 bg-primary text-white font-heading font-bold rounded-xl hover:bg-primary/90 transition-all text-lg flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Place Order — {formatPrice(grandTotal)}
              </button>

              <p className="text-xs text-text-secondary font-body text-center mt-3">
                🔒 Your information is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
