import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BurgerItem } from '../types';
import { heroBurgers, contactData } from '../data/menuData';
import { Flame, Plus, Check, MessageSquare, ShieldCheck, Sparkles, Star } from 'lucide-react';

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
    const msg = `Olá! Gostaria de pedir o hambúrguer *${currentBurger.name}* (R$ ${currentBurger.price.toFixed(2).replace('.', ',')}) pelo delivery.`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#080706] via-[#100e0c] to-[#080706] pt-4 sm:pt-6 md:pt-10 pb-16 sm:pb-24 border-b border-neutral-900"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[900px] h-[350px] sm:h-[650px] md:h-[900px] bg-[radial-gradient(circle,_rgba(249,150,25,0.13)_0%,_rgba(180,70,10,0.05)_45%,_transparent_70%)] blur-3xl pointer-events-none -z-10" />

      {/* Subtle Spartan Texture Watermark in Background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#f99619_1px,transparent_1px)] [background-size:24px_24px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-600/30 text-neutral-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
            <span className="flex items-center text-[#f99619]">
              <Flame className="w-3.5 h-3.5 fill-[#f99619]" />
            </span>
            <span className="text-[#f99619]">Grelhado no Fogo de Verdade</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">100% Angus Certificado</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-display leading-[1.05]">
            A FORÇA DE ESPARTA EM <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f99619] via-[#ffaa33] to-[#ff6b00]">
              CADA MORDIDA
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Hambúrgueres artesanais montados na hora, pão brioche dourado na manteiga de garrafa, queijos nobres Polenghi e a autêntica defumação em lenha de macieira.
          </p>

          {/* Social Proof Stats */}
          <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-neutral-400">
            <div className="flex items-center gap-1 text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">4.9</span>
              <span className="text-neutral-500">(+840 avaliações)</span>
            </div>
            <span className="text-neutral-700">•</span>
            <span className="text-neutral-300">
              <strong className="text-white">+15.000</strong> pedidos entregues
            </span>
          </div>
        </div>

        {/* Hero Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0d0c0b]/80 border border-neutral-800/80 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative">
          {/* Left Column: Burger Details & Direct CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left">
            {/* Number and Category Pill */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-xs font-mono font-bold text-[#f99619] tracking-widest">
                {currentBurger.number}
              </span>
              <span className="h-3 w-[1px] bg-neutral-700" />
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/15 text-[#f99619] border border-amber-500/30">
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
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display leading-tight">
                  {currentBurger.name}
                </h2>

                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#f99619] tracking-wide uppercase">
                  {currentBurger.caloriesOrHighlight}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {currentBurger.description}
                </p>

                {/* Ingredients Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {currentBurger.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-medium text-neutral-300 bg-neutral-900/90 border border-neutral-800 px-2.5 py-1 rounded-lg"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Valor Especial:</span>
                  <span className="text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tight">
                    R$ {currentBurger.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                    Pronto em ~15 min
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs Bar */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Add to Cart */}
              <button
                onClick={handleAdd}
                className={`py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                  addedAnimation
                    ? 'bg-emerald-500 text-neutral-950 scale-95'
                    : 'bg-[#f99619] hover:bg-[#ffaa33] text-neutral-950 hover:shadow-[#f99619]/25 hover:scale-[1.02]'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Adicionado ao Pedido!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Adicionar ao Pedido</span>
                  </>
                )}
              </button>

              {/* Direct WhatsApp Order */}
              <button
                onClick={handleWhatsAppDirect}
                className="py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80 transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#f99619]/60 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Pedir no WhatsApp</span>
              </button>
            </div>

            {/* Fast reassurance note */}
            <div className="mt-4 flex items-center gap-4 text-[11px] text-neutral-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f99619]" />
                Embalagem Térmica Selada
              </span>
              <span className="text-neutral-700">•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Carne 100% Angus Fresca
              </span>
            </div>
          </div>

          {/* Right Column: Hero Burger Visual Protagonist */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[420px] md:max-w-[480px] flex items-center justify-center">
              {/* Backlight Glow Ring */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(249,150,25,0.22)_0%,_transparent_68%)] rounded-full blur-2xl pointer-events-none" />

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
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] contrast-[1.04] brightness-[1.02] select-none transition-transform duration-500 hover:scale-105"
                  />
                  {/* Burger Cast Shadow */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/90 blur-xl rounded-full -z-10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Switcher Tabs / Mini-Thumbnails Carousel (Mobile-First) */}
            <div className="w-full mt-4 sm:mt-6">
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 text-center mb-2.5">
                Toque para explorar os 4 mais pedidos:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {heroBurgers.map((burger, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <button
                      key={burger.id}
                      onClick={() => setSelectedIndex(idx)}
                      className={`p-2 rounded-xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                        isActive
                          ? 'bg-[#1a1714] border-[#f99619] shadow-md shadow-[#f99619]/10'
                          : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isActive ? 'text-[#f99619]' : 'text-neutral-400'}`}>
                          0{idx + 1}
                        </span>
                        <span className={`text-[9px] font-extrabold ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                          R$ {burger.price.toFixed(0)}
                        </span>
                      </div>
                      <span className={`text-xs font-bold truncate block ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                        {burger.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Trust Highlights */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#f99619]/10 text-[#f99619] flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-white uppercase">Brasa de Verdade</h4>
              <p className="text-[10px] text-neutral-400">Defumação em lenha nobre</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#f99619]/10 text-[#f99619] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-white uppercase">Queijos Polenghi</h4>
              <p className="text-[10px] text-neutral-400">Gouda, gorgonzola e provolone</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#f99619]/10 text-[#f99619] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-white uppercase">Entrega Térmica</h4>
              <p className="text-[10px] text-neutral-400">Chega crocante e quentinho</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#f99619]/10 text-[#f99619] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
            </span>
            <div className="text-left">
              <h4 className="text-xs font-bold text-white uppercase">WhatsApp Direto</h4>
              <p className="text-[10px] text-neutral-400">Atendimento em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
