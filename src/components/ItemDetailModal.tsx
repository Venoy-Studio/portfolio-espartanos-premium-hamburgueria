import React, { useState } from 'react';
import { BurgerItem } from '../types';
import { contactData } from '../data/menuData';
import { X, Plus, Minus, Check, MessageSquare, Sparkles } from 'lucide-react';

interface ItemDetailModalProps {
  item: BurgerItem | null;
  onClose: () => void;
  onAddToCart: (item: BurgerItem, quantity: number) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  const handleWhatsAppInstant = () => {
    const msg = `Olá! Gostaria de pedir: *${quantity}x ${item.name}* (R$ ${(item.price * quantity).toFixed(2).replace('.', ',')}).`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#0e0d0c] border border-neutral-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual */}
        <div className="relative w-full h-52 sm:h-64 rounded-2xl bg-black/60 flex items-center justify-center p-4 mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,150,25,0.18)_0%,_transparent_70%)]" />
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] select-none"
          />
          {item.badge && (
            <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-[#f99619] border border-amber-500/40 backdrop-blur-sm">
              {item.badge}
            </span>
          )}
        </div>

        {/* Product Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display">
              {item.name}
            </h3>
            {item.caloriesOrHighlight && (
              <p className="text-xs font-bold text-[#f99619] uppercase tracking-wider mt-0.5">
                {item.caloriesOrHighlight}
              </p>
            )}
          </div>
          <span className="text-2xl font-black text-[#f99619] tabular-nums shrink-0">
            R$ {(item.price * quantity).toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
          {item.description}
        </p>

        {/* Full Ingredients List */}
        <div className="mb-6">
          <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ingredientes Nobres & Montagem:</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {item.ingredients.map((ing, i) => (
              <span
                key={i}
                className="text-xs text-neutral-300 bg-neutral-900/90 border border-neutral-800 px-2.5 py-1 rounded-lg"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Quantity and Actions */}
        <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-1.5 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center cursor-pointer transition-colors"
              title="Diminuir"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-black text-white px-3 tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center cursor-pointer transition-colors"
              title="Aumentar"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto flex-1">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                added
                  ? 'bg-emerald-500 text-neutral-950'
                  : 'bg-[#f99619] hover:bg-[#ffaa33] text-neutral-950 hover:scale-[1.02]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Adicionado!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Adicionar ao Carrinho</span>
                </>
              )}
            </button>

            <button
              onClick={handleWhatsAppInstant}
              className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-emerald-400 hover:text-white transition-colors cursor-pointer"
              title="Pedir direto no WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-400/20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
