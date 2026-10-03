import React, { useState } from 'react';
import { contactData } from '../data/menuData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const msg = 'Olá Espartanos Hamburgueria! Gostaria de tirar uma dúvida e fazer um pedido.';
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto select-none">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-[#141210] border border-amber-500/40 text-white rounded-2xl p-3 shadow-2xl max-w-[220px] text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center cursor-pointer text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Atendimento Online</span>
          </div>
          <p className="text-[11px] text-neutral-300 leading-snug">
            Precisa de ajuda ou quer pedir pelo WhatsApp? Clique aqui!
          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-110 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/30 group"
        aria-label="Abrir WhatsApp da Hamburgueria"
        title="Fale Conosco no WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[9px] font-black rounded-full flex items-center justify-center">
          1
        </span>
      </button>
    </div>
  );
};
