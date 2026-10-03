import React, { useState } from 'react';
import { BurgerItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpartanDifferences } from './components/SpartanDifferences';
import { MenuSection } from './components/MenuSection';
import { CombosHighlight } from './components/CombosHighlight';
import { DrinksSection } from './components/DrinksSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemDetailModal } from './components/ItemDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<BurgerItem | null>(null);

  const handleAddToCart = (item: BurgerItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      return [...prev, { item, quantity }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div className="min-h-screen bg-[#080706] text-neutral-100 flex flex-col justify-between selection:bg-[#f99619] selection:text-black">
      {/* Navbar with sticky scroll behavior */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Improved, Non-Weird, Mobile-Optimized Hero Section */}
        <Hero
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 4 Pillars of Spartan Quality */}
        <SpartanDifferences />

        {/* Complete Menu with Categories and Live Search */}
        <MenuSection
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onSelectItem={(item) => setSelectedItemForModal(item)}
        />

        {/* Combos Highlight Banner */}
        <CombosHighlight
          onAddToCart={(item) => handleAddToCart(item, 1)}
        />

        {/* Ice-Cold Drinks Section */}
        <DrinksSection
          onAddToCart={(item) => handleAddToCart(item, 1)}
        />

        {/* Real-feel Customer Social Proof Reviews */}
        <ReviewsSection />

        {/* Location, Operating Hours, Coverage & Fictional Contacts */}
        <LocationHoursSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Comprehensive Professional Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Modal for Item Details & Customization */}
      <ItemDetailModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Persistent Floating WhatsApp Call to Action */}
      <FloatingWhatsApp />
    </div>
  );
};
export default App;
