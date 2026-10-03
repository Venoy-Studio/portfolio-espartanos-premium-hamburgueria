import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BurgerItem } from '../types';
import { heroBurgers, contactData } from '../data/menuData';
import { Flame, Plus, Check, MessageSquare, Shield, Swords, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onAddToCart: (burger: BurgerItem) => void;
  onOpenCart?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAddToCart }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const currentBurger = heroBurgers[selectedIndex];

  const handleAdd = () => {
    onAddToCart(currentBurger);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleWhatsAppDirect = () => {
    const msg = `⚔️ *CONVOCANDO O BANQUETE:* Gostaria de pedir o lendário *${currentBurger.name}* (R$ ${currentBurger.price.toFixed(2).replace('.', ',')}) pela taverna!`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#090705] pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-amber-950/60 select-none"
    >
      {/* Heavy Tavern Ambience: Charred Charcoal & Fire Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] md:w-[900px] h-[340px] sm:h-[650px] md:h-[900px] bg-[radial-gradient(circle,_rgba(249,115,22,0.18)_0%,_rgba(180,83,9,0.08)_45%,_transparent_75%)] blur-3xl pointer-events-none -z-10" />

      {/* Floating Embers Simulation */}
      <div className="absolute top-12 left-1/4 ember-particle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-28 right-1/4 ember-particle" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-20 left-1/3 ember-particle" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-40 right-1/3 ember-particle" style={{ animationDelay: '0.8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warrior Headline & Spartan Crest */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Rustic War Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c140e] border border-amber-700/60 text-amber-300 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-xl shadow-black/80">
            <Swords className="w-3.5 h-3.5 text-[#f97316]" />
            <span>Taverna Espartanos · Forjado na Brasa</span>
            <span className="text-amber-800">•</span>
            <span className="text-amber-400">100% Carne Angus</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white font-display leading-[0.98] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            DEVORE COMO UM <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#f59e0b] drop-shadow-[0_2px_8px_rgba(234,88,12,0.5)]">
              VERDADEIRO GUERREIRO
            </span>
          </h1>

          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed font-normal">
            Aqui não tem hambúrguer sem graça de shopping. Nossos blends são grelhados em fogo alto, com pão brioche dourado na manteiga de garrafa, queijos nobres derretidos até a tábua e fumaça de macieira.
          </p>

          {/* Social Proof Stats */}
          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-neutral-400 flex-wrap">
            <div className="flex items-center gap-1 text-amber-400 font-bold bg-[#140e0a] px-3 py-1 rounded-full border border-amber-900/60">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white ml-1 font-black">4.9 / 5.0</span>
              <span className="text-neutral-500 font-normal">(+840 guerreiros aprovaram)</span>
            </div>
            <span className="hidden sm:inline text-amber-900">•</span>
            <span className="text-neutral-300 bg-[#140e0a] px-3 py-1 rounded-full border border-amber-900/60">
              🔥 <strong className="text-white">+15.000</strong> hambúrgueres forjados
            </span>
          </div>
        </div>

        {/* Hero Interactive Showcase: The War Table (Tábua de Guerra) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center tavern-card rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden">
          {/* Background Board Grain Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.12)_0%,_transparent_70%)] pointer-events-none" />

          {/* Left Column: Burger Lore, Ingredients & Immediate Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left relative z-10">
            {/* Rank / Badge */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-xs font-mono font-bold text-[#f97316] tracking-widest bg-black/60 px-2 py-0.5 rounded border border-amber-950">
                {currentBurger.number}
              </span>
              <span className="h-3 w-[1px] bg-amber-900/60" />
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full spartan-stamp font-spartan">
                {currentBurger.badge}
              </span>
            </div>

            {/* Dynamic Burger Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBurger.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display leading-[1.02]">
                  {currentBurger.name}
                </h2>

                <p className="mt-1 text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase font-viking">
                  ⚔️ {currentBurger.caloriesOrHighlight}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {currentBurger.description}
                </p>

                {/* Ingredients Tags styled as rustic iron rations */}
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {currentBurger.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-bold text-amber-200/90 bg-[#1e1712] border border-amber-900/50 px-2.5 py-1 rounded-lg shadow-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold">Tributo:</span>
                  <span className="text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tight font-display text-amber-400">
                    R$ {currentBurger.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Forjado em ~15 min
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs: Big, Rustic, High-Conversion */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Add to Feast */}
              <button
                onClick={handleAdd}
                className={`py-4 px-6 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-2xl cursor-pointer ${
                  addedAnimation
                    ? 'bg-emerald-500 text-neutral-950 scale-95'
                    : 'bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#f97316] hover:to-[#fb923c] text-white hover:shadow-orange-950/60 hover:scale-[1.02]'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-5 h-5 stroke-[3]" />
                    <span>Adicionado ao Banquete!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 stroke-[3]" />
                    <span>Devorar Este Burger</span>
                  </>
                )}
              </button>

              {/* Direct WhatsApp Call */}
              <button
                onClick={handleWhatsAppDirect}
                className="py-4 px-5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase bg-[#18120e] hover:bg-[#251a14] text-amber-300 border border-amber-800/70 transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#f97316] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Convocar no WhatsApp</span>
              </button>
            </div>

            {/* Reassurance notes */}
            <div className="mt-4 flex items-center gap-4 text-[11px] text-neutral-400 flex-wrap">
              <span className="flex items-center gap-1 text-amber-300">
                <Shield className="w-3.5 h-3.5 text-[#f97316]" />
                Embalagem Térmica Blindada
              </span>
              <span className="text-amber-900">•</span>
              <span className="flex items-center gap-1 text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Carne 100% Angus Fresca (Nunca Congelada)
              </span>
            </div>
          </div>

          {/* Right Column: Center Burger Protagonist on Rustic Cutting Board */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[420px] md:max-w-[480px] flex items-center justify-center">
              {/* Backlight Fiery Halo */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(234,88,12,0.28)_0%,_transparent_68%)] rounded-full blur-2xl pointer-events-none" />

              {/* Animated Burger Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBurger.id}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full h-full flex items-center justify-center p-2"
                >
                  <img
                    src={currentBurger.image}
                    alt={currentBurger.alt}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.98)] contrast-[1.05] brightness-[1.03] select-none transition-transform duration-500 hover:scale-105"
                  />
                  {/* Cast Shadow on Wood */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/95 blur-xl rounded-full -z-10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Switcher War Tablets (Mobile-First) */}
            <div className="w-full mt-4 sm:mt-6">
              <p className="text-[10px] uppercase font-black tracking-[0.25em] text-amber-500/80 text-center mb-2.5 flex items-center justify-center gap-1.5">
                <Flame className="w-3 h-3 text-[#f97316]" />
                <span>Armas Principais da Forja (Selecione para ver):</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {heroBurgers.map((burger, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <button
                      key={burger.id}
                      onClick={() => setSelectedIndex(idx)}
                      className={`p-2.5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                        isActive
                          ? 'bg-[#271b13] border-[#f97316] shadow-lg shadow-orange-950/60 ring-1 ring-amber-500/40'
                          : 'bg-[#150f0b]/80 border-amber-950/80 hover:border-amber-800 hover:bg-[#1e1510]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className={`text-[9px] font-black uppercase tracking-wider ${isActive ? 'text-[#f97316]' : 'text-neutral-500'}`}>
                          0{idx + 1}
                        </span>
                        <span className={`text-[10px] font-black ${isActive ? 'text-amber-400' : 'text-neutral-400'}`}>
                          R$ {burger.price.toFixed(0)}
                        </span>
                      </div>
                      <span className={`text-xs font-black truncate block ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                        {burger.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Warrior Pillars */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-[#130d09] border border-amber-950/70 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-800/40 text-[#f97316] flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-black text-white uppercase font-display">Brasa de Macieira</h4>
              <p className="text-[10px] text-neutral-400">Defumação rústica na lenha</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#130d09] border border-amber-950/70 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-black text-white uppercase font-display">Queijo sem Miséria</h4>
              <p className="text-[10px] text-neutral-400">Gouda, gorgonzola e provolone</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#130d09] border border-amber-950/70 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-800/40 text-[#f97316] flex items-center justify-center shrink-0">
              <Swords className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-black text-white uppercase font-display">100% Angus Fresco</h4>
              <p className="text-[10px] text-neutral-400">Moído todo santo dia</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#130d09] border border-amber-950/70 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-800/40 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-black text-white uppercase font-display">WhatsApp Rápido</h4>
              <p className="text-[10px] text-neutral-400">Confirmação em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
