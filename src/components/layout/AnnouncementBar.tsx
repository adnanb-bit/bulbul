'use client';

import { motion } from 'framer-motion';

export default function AnnouncementBar() {
  const announcements = [
    '🧠 They Play. They Learn. You Rest.',
    '🚚 FREE Delivery Over Rs.3,000',
    '💰 Cash on Delivery Available',
    '⚡ Same Day Dispatch (Before 2 PM)',
  ];

  return (
    <div className="bg-primary text-white text-center py-2 px-4 text-sm font-body">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 overflow-hidden">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          {announcements.map((text, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              {text}
              {i < announcements.length - 1 && (
                <span className="mx-4 text-white/50">|</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
