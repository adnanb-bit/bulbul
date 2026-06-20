'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const { openCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();

  const shopLinks = [
    { name: 'All Products', href: '/shop' },
    { name: 'Alphabets Busy Book', href: '/shop/alphabets-busy-book' },
    { name: 'Numbers Busy Book', href: '/shop/numbers-busy-book' },
    { name: 'Colors Busy Book', href: '/shop/colors-busy-book' },
    { name: 'Shapes Busy Book', href: '/shop/shapes-busy-book' },
    { name: 'Fruits & Vegetables Busy Book', href: '/shop/fruits-vegetables-busy-book' },
    { name: 'Animals Busy Book', href: '/shop/animals-busy-book' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Uses Pacifico font matching the brand logo exactly */}
          <Link href="/" className="flex items-center">
            <span className="font-logo text-3xl lg:text-4xl text-primary tracking-tight">
              BulBul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 font-heading font-semibold text-text-primary hover:text-primary transition-colors">
                Shop <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {shopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-large p-4 border border-gray-100"
                  >
                    {shopLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 rounded-lg text-text-primary hover:bg-background hover:text-primary transition-colors font-body"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/bundles" className="font-heading font-semibold text-text-primary hover:text-primary transition-colors">
              Bundles
            </Link>
            <Link href="/quiz" className="font-heading font-semibold text-text-primary hover:text-primary transition-colors">
              Quiz
            </Link>
            <Link href="/blog" className="font-heading font-semibold text-text-primary hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/reviews" className="font-heading font-semibold text-text-primary hover:text-primary transition-colors">
              Reviews
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-2 rounded-full text-sm font-medium hover:bg-secondary/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                Shop All
              </Link>
              <Link href="/bundles" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                Bundles
              </Link>
              <Link href="/quiz" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                Take the Quiz
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                Blog
              </Link>
              <Link href="/reviews" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                Reviews
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                Contact
              </Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="block font-heading font-semibold text-lg text-text-primary hover:text-primary">
                FAQ
              </Link>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
