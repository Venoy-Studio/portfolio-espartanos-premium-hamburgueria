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
    const msg = `⚔️ *CONVOCANDO:* Gostaria de pedir: *${quantity}x ${item.name}* (R$ ${(item.price * quantity).toFixed(2).replace('.', ',')}) para o meu banquete!`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200 select-none">
      <div className="w-full max-w-lg tavern-card rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#1d140e] border border-amber-950 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual */}
        <div className="relative w-full h-52 sm:h-64 rounded-2xl bg-[#090705] border border-amber-950/80 flex items-center justify-center p-4 mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.2)_0%,_transparent_70%)]" />
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.98)] select-none"
          />
          {item.badge && (
            <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full spartan-stamp font-spartan backdrop-blur-sm">
              {item.badge}
            </span>
          )}
        </div>

        {/* Product Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display">
              {item.name}
            </h3>
            {item.caloriesOrHighlight && (
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mt-0.5 font-viking">
                ⚔️ {item.caloriesOrHighlight}
              </p>
            )}
          </div>
          <span className="text-3xl font-black text-amber-400 tabular-nums shrink-0 font-display">
            R$ {(item.price * quantity).toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal mb-6">
          {item.description}
        </p>

        {/* Full Ingredients List */}
        <div className="mb-6">
          <h4 className="text-[11px] font-black text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-display">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ingredientes Nobres da Forja:</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {item.ingredients.map((ing, i) => (
              <span
                key={i}
                className="text-xs font-bold text-amber-200/90 bg-[#1e1510] border border-amber-900/60 px-3 py-1 rounded-xl shadow-sm"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Quantity and Actions */}
        <div className="pt-4 border-t border-amber-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 bg-[#150f0b] border border-amber-950 rounded-xl p-1.5 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg bg-[#221812] hover:bg-[#302118] text-amber-300 flex items-center justify-center cursor-pointer transition-colors border border-amber-900/50"
              title="Diminuir"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-black text-white px-3 tabular-nums font-display">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-lg bg-[#221812] hover:bg-[#302118] text-amber-300 flex items-center justify-center cursor-pointer transition-colors border border-amber-900/50"
              title="Aumentar"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto flex-1">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg font-display ${
                added
                  ? 'bg-emerald-500 text-neutral-950'
                  : 'bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#f97316] hover:to-[#fb923c] text-white hover:scale-[1.02]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Adicionado ao Banquete!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Adicionar ao Banquete</span>
                </>
              )}
            </button>

            <button
              onClick={handleWhatsAppInstant}
              className="p-3.5 rounded-xl bg-[#19110d] hover:bg-[#271a13] border border-amber-900 text-emerald-400 hover:text-white transition-colors cursor-pointer"
              title="Pedir direto no WhatsApp da Taverna"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-400/20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
