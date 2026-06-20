'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-text-primary"
          >
            Contact Us
          </motion.h1>
          <p className="mt-4 text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Have a question? We&apos;d love to hear from you. Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-soft p-8"
          >
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
              Send us a message
            </h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-body text-text-secondary mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="03XX XXXXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-body text-text-secondary mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-body text-text-secondary mb-1">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Refunds</option>
                  <option>Wholesale Inquiry</option>
                  <option>Collaboration</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-body text-text-secondary mb-1">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none font-body" rows={5} placeholder="How can we help?" />
              </div>
              <button type="submit" className="w-full py-4 bg-primary text-white font-heading font-bold rounded-xl hover:bg-primary/90 transition-all text-lg">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h3 className="font-heading font-bold text-lg text-text-primary mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a href="https://wa.me/923001234567" className="flex items-center gap-3 p-3 bg-[#25D366]/5 rounded-xl hover:bg-[#25D366]/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">WhatsApp (Fastest)</p>
                    <p className="text-sm text-text-secondary font-body">+92 300 1234567</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">Email</p>
                    <p className="text-sm text-text-secondary font-body">hello@bulbul.pk</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">Phone</p>
                    <p className="text-sm text-text-secondary font-body">+92 300 1234567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">Location</p>
                    <p className="text-sm text-text-secondary font-body">Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-heading font-semibold text-text-primary">Business Hours</p>
                    <p className="text-sm text-text-secondary font-body">Mon-Sat: 10 AM - 8 PM PKT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                💡 Quick Tip
              </h3>
              <p className="text-text-secondary font-body text-sm">
                For the fastest response, message us on WhatsApp. We typically reply within 5 minutes during business hours!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
