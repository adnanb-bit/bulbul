import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import CartDrawer from '@/components/layout/CartDrawer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Bulbul — Screen-Free Learning for Tiny Hands',
  description: 'Montessori-inspired busy books that keep children engaged in screen-free play while building essential skills. Handcrafted with love in Pakistan.',
  keywords: ['busy books', 'children activities', 'montessori', 'screen-free', 'Pakistan', 'toddler books', 'learning activities'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-background text-text-primary antialiased">
        <AnnouncementBar />
        <Header />
        <CartDrawer />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
