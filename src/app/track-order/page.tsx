'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, CheckCircle, MapPin } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary"
          >
            Track Your Order
          </motion.h1>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Enter your order ID or tracking number to see the latest status.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSearch}
          className="bg-white rounded-2xl shadow-soft p-6"
        >
          <label className="block text-sm font-body text-text-secondary mb-2">
            Order ID or Tracking Number
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body"
              placeholder="e.g., BLB-2024-001234"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-heading font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Track
            </button>
          </div>
        </motion.form>

        {/* Results */}
        {searched && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white rounded-2xl shadow-soft p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-text-primary">Order #{orderId || 'BLB-2024-001234'}</h3>
                <p className="text-sm text-text-secondary font-body">Placed on Feb 15, 2024</p>
              </div>
              <span className="px-3 py-1 bg-secondary/10 text-secondary font-heading font-semibold text-sm rounded-full">
                In Transit
              </span>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {[
                { icon: CheckCircle, title: 'Order Confirmed', time: 'Feb 15, 2:30 PM', done: true },
                { icon: Package, title: 'Packed & Dispatched', time: 'Feb 15, 4:00 PM', done: true },
                { icon: Truck, title: 'In Transit', time: 'Feb 16, 10:00 AM', done: true },
                { icon: MapPin, title: 'Delivered', time: 'Expected: Feb 17-18', done: false },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.done ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 pb-6 border-l-2 border-gray-100 pl-4 -ml-[21px] ml-5">
                    <p className={`font-heading font-semibold ${step.done ? 'text-text-primary' : 'text-text-secondary'}`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-text-secondary font-body">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-background rounded-xl">
              <p className="text-sm font-body text-text-secondary">
                <strong className="text-text-primary">Courier:</strong> Leopards Courier | 
                <strong className="text-text-primary"> Tracking:</strong> LP-789456123
              </p>
            </div>
          </motion.div>
        )}

        {/* Help */}
        <div className="mt-8 text-center">
          <p className="text-text-secondary font-body text-sm">
            Can&apos;t find your order? Contact us on{' '}
            <a href="https://wa.me/923001234567" className="text-primary hover:underline">WhatsApp</a>
            {' '}or email{' '}
            <a href="mailto:hello@bulbul.pk" className="text-primary hover:underline">hello@bulbul.pk</a>
          </p>
        </div>
      </div>
    </div>
  );
}
