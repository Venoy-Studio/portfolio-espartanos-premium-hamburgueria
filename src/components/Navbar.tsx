import React, { useState, useEffect } from 'react';
import { SpartanLogo } from './SpartanLogo';
import { ShoppingBag, Menu, X, Flame, Clock, Swords } from 'lucide-react';
import { contactData } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Rustic War Banner */}
      <div className="bg-[#120b08] border-b border-amber-950/80 text-amber-200 text-[11px] sm:text-xs py-1.5 px-4 font-bold select-none z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-orange-600/30 text-[#f97316] shrink-0 animate-pulse">
              <Flame className="w-2.5 h-2.5" />
            </span>
            <span className="truncate text-amber-200">
              <strong className="text-white uppercase font-viking">CUPOM ESPARTANO10:</strong> 10% OFF no 1º Pedido pelo WhatsApp
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-neutral-400 shrink-0">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Fogueiras Acesas · Aberto até 00:30
            </span>
            <span className="text-amber-900">|</span>
            <span className="flex items-center gap-1 text-[11px] text-amber-400">
              <Clock className="w-3 h-3 text-[#f97316]" />
              Entrega Rápida 35 min
            </span>
          </div>
        </div>
      </div>

      {/* Main Tavern Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 select-none ${
          isScrolled
            ? 'bg-[#090605]/95 backdrop-blur-md shadow-2xl shadow-black/90 border-b border-amber-950/80 py-2.5'
            : 'bg-gradient-to-b from-[#090605] to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="Espartanos Hamburgueria Home"
          >
            <SpartanLogo className="h-12 sm:h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-black tracking-[0.16em] uppercase font-display text-neutral-300">
            <button
              onClick={() => scrollTo('hero-section')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1"
            >
              <span>Arsenal</span>
            </button>
            <button
              onClick={() => scrollTo('diferenciais-section')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1"
            >
              <span>As Leis da Forja</span>
            </button>
            <button
              onClick={() => scrollTo('cardapio-section')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1"
            >
              <span>Cardápio de Batalha</span>
            </button>
            <button
              onClick={() => scrollTo('combos-anchor')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1"
            >
              <span>Banquetes</span>
            </button>
            <button
              onClick={() => scrollTo('bebidas-section')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1"
            >
              <span>Elixires Trincando</span>
            </button>
            <button
              onClick={() => scrollTo('avaliacoes-section')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1"
            >
              <span>Relatos</span>
            </button>
            <button
              onClick={() => scrollTo('contato-section')}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer flex items-center gap-1"
            >
              <span>Acampamento</span>
            </button>
          </nav>

          {/* Actions: Cart & WhatsApp CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct WhatsApp Call */}
            <a
              href={`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent('Saudações, Taverna Espartanos! Gostaria de convocar um banquete pelo WhatsApp.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#f97316] hover:to-[#fb923c] text-white font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-xl shadow-orange-950/60 hover:scale-105"
            >
              <Swords className="w-3.5 h-3.5" />
              <span>Pedir no WhatsApp</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-[#160f0b] border border-amber-900/60 text-amber-200 hover:text-white hover:border-[#f97316] transition-all duration-200 focus:outline-none cursor-pointer shadow-md"
              title="Abrir Banquete"
              aria-label={`Banquete com ${cartCount} itens`}
            >
              <ShoppingBag className="w-5 h-5 text-[#f97316]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-red-600 text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-[#160f0b] border border-amber-900/60 text-neutral-300 hover:text-white lg:hidden focus:outline-none cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-sm h-full bg-[#0d0907] border-l border-amber-950 p-6 flex flex-col justify-between shadow-2xl">
            {/* Header of Drawer */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-amber-950">
                <SpartanLogo className="h-12 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-[#19110d] text-neutral-400 hover:text-white focus:outline-none cursor-pointer border border-amber-950"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 p-3 rounded-xl bg-[#19110d] border border-amber-950 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black text-amber-200 uppercase tracking-wider font-display">Fogueiras Acesas</span>
                </div>
                <span className="text-[11px] text-neutral-400">18:00 às 00:30</span>
              </div>

              {/* Nav Items */}
              <div className="py-6 space-y-2">
                {[
                  { label: '⚔️ Arsenal de Burgers', id: 'hero-section' },
                  { label: '🔥 As Leis da Forja', id: 'diferenciais-section' },
                  { label: '🍔 Cardápio Completo', id: 'cardapio-section' },
                  { label: '👑 Banquetes com Guaracamp', id: 'combos-anchor' },
                  { label: '🍻 Elixires Trincando', id: 'bebidas-section' },
                  { label: '🛡️ Relatos dos Guerreiros', id: 'avaliacoes-section' },
                  { label: '📍 Acampamento & Contatos', id: 'contato-section' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-black tracking-wide uppercase text-neutral-200 hover:text-amber-400 hover:bg-[#1a120d] transition-colors flex items-center justify-between cursor-pointer font-display"
                  >
                    <span>{item.label}</span>
                    <span className="text-amber-800 text-xs">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-amber-950">
              <a
                href={`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent('Saudações! Gostaria de convocar um banquete na Espartanos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white font-black text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-xl"
              >
                <Swords className="w-4 h-4" />
                <span>Convocar Banquete no WhatsApp</span>
              </a>
              <p className="text-[11px] text-neutral-500 text-center">
                {contactData.address} · {contactData.cityState}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
