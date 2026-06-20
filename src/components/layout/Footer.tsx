'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-2">
              Join the BulBul Family
            </h3>
            <p className="text-white/70 font-body mb-6">
              Get early learning tips, exclusive offers, and first access to new educational books.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary font-body"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-heading font-bold rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-logo text-3xl text-primary">
              BulBul
            </Link>
            <p className="mt-3 text-white/70 font-body text-sm leading-relaxed">
              Education disguised as play. Montessori-inspired busy books where children learn alphabets, numbers, and life skills — without realizing they&apos;re being taught.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 font-body text-sm text-white/70">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/bundles" className="hover:text-white transition-colors">Bundles & Sets</Link></li>
              <li><Link href="/shop/alphabets-busy-book" className="hover:text-white transition-colors">Alphabets Book</Link></li>
              <li><Link href="/shop/numbers-busy-book" className="hover:text-white transition-colors">Numbers Book</Link></li>
              <li><Link href="/shop/colors-busy-book" className="hover:text-white transition-colors">Colors Book</Link></li>
              <li><Link href="/shop/shapes-busy-book" className="hover:text-white transition-colors">Shapes Book</Link></li>
              <li><Link href="/shop/animals-busy-book" className="hover:text-white transition-colors">Animals Book</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Help</h4>
            <ul className="space-y-2 font-body text-sm text-white/70">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/track-order" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                hello@bulbul.pk
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +92 300 1234567
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Lahore, Pakistan
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-6">
              <h5 className="font-heading font-semibold text-sm mb-2">We Accept</h5>
              <div className="flex flex-wrap gap-2">
                {['JazzCash', 'EasyPaisa', 'Visa', 'Mastercard', 'COD'].map((method) => (
                  <span key={method} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Couriers */}
            <div className="mt-4">
              <h5 className="font-heading font-semibold text-sm mb-2">Shipping Partners</h5>
              <div className="flex flex-wrap gap-2">
                {['Leopards', 'Call Courier', 'Trax'].map((courier) => (
                  <span key={courier} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                    {courier}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50 font-body">
            <p>© 2024 Bulbul. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
