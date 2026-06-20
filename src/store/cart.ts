'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'product' | 'bundle';
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  giftWrapping: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleGiftWrapping: () => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  getIncentiveMessage: () => string;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      giftWrapping: false,

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      toggleGiftWrapping: () => {
        set((state) => ({ giftWrapping: !state.giftWrapping }));
      },

      clearCart: () => set({ items: [], giftWrapping: false }),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getTotal: () => {
        const state = get();
        const subtotal = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const giftWrap = state.giftWrapping ? 150 : 0;
        return subtotal + giftWrap;
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getIncentiveMessage: () => {
        const count = get().getItemCount();
        const total = get().getTotal();

        if (count === 0) return '';
        if (count === 1) {
          if (total < 3000) {
            return '🚚 Add 1 more book for FREE DELIVERY!';
          }
          return '🎉 You qualify for FREE delivery!';
        }
        if (count === 2) return '🔥 Add a 3rd book for 15% off your order!';
        if (count === 3) return '⭐ Add a 4th book for 20% off your order!';
        if (count === 4) return '🎁 Add one more for 20% off!';
        if (count === 5) return '🏆 Just 1 away from the Complete Collection — save 28%!';
        if (count >= 6) return '🎉 You have the Complete Collection! Maximum savings unlocked!';
        return '';
      },
    }),
    {
      name: 'bulbul-cart',
      partialize: (state) => ({ items: state.items, giftWrapping: state.giftWrapping }),
    }
  )
);
