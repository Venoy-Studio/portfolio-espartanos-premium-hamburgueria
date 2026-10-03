import React, { useState, useEffect } from 'react';
import { SpartanLogo } from './SpartanLogo';
import { ShoppingBag, Menu, X, Flame, Clock } from 'lucide-react';
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
      {/* Top Urgent Offer Bar */}
      <div className="bg-[#14100c] border-b border-amber-950/40 text-neutral-300 text-[11px] sm:text-xs py-1.5 px-4 font-medium select-none z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#f99619]/20 text-[#f99619] shrink-0 animate-pulse">
              <Flame className="w-2.5 h-2.5" />
            </span>
            <span className="truncate">
              <strong className="text-white font-semibold">CUPOM ESPARTANO10:</strong> 10% OFF no 1º Pedido pelo WhatsApp
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-neutral-400 shrink-0">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Aberto Agora · Até 00:30
            </span>
            <span className="text-neutral-600">|</span>
            <span className="flex items-center gap-1 text-[11px]">
              <Clock className="w-3 h-3 text-[#f99619]" />
              Entrega Média 35 min
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 select-none ${
          isScrolled
            ? 'bg-[#0a0908]/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-neutral-800/80 py-2.5'
            : 'bg-gradient-to-b from-[#080706] to-transparent py-4'
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
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-[0.16em] uppercase">
            <button
              onClick={() => scrollTo('hero-section')}
              className="text-neutral-300 hover:text-[#f99619] transition-colors py-1 cursor-pointer"
            >
              Destaques
            </button>
            <button
              onClick={() => scrollTo('diferenciais-section')}
              className="text-neutral-300 hover:text-[#f99619] transition-colors py-1 cursor-pointer"
            >
              O Segredo
            </button>
            <button
              onClick={() => scrollTo('cardapio-section')}
              className="text-neutral-300 hover:text-[#f99619] transition-colors py-1 cursor-pointer"
            >
              Cardápio Completo
            </button>
            <button
              onClick={() => scrollTo('bebidas-section')}
              className="text-neutral-300 hover:text-[#f99619] transition-colors py-1 cursor-pointer"
            >
              Bebidas Geladas
            </button>
            <button
              onClick={() => scrollTo('avaliacoes-section')}
              className="text-neutral-300 hover:text-[#f99619] transition-colors py-1 cursor-pointer"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollTo('contato-section')}
              className="text-neutral-300 hover:text-[#f99619] transition-colors py-1 cursor-pointer"
            >
              Local & Contato
            </button>
          </nav>

          {/* Actions: Cart & WhatsApp CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct WhatsApp Call */}
            <a
              href={`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de ver o cardápio e fazer um pedido na Espartanos Hamburgueria.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f99619] hover:bg-[#ffaa33] text-neutral-950 font-black text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#f99619]/20 hover:scale-105"
            >
              <span>Pedir no WhatsApp</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-[#f99619] hover:border-[#f99619]/60 transition-all duration-200 focus:outline-none cursor-pointer"
              title="Abrir Carrinho"
              aria-label={`Carrinho com ${cartCount} itens`}
            >
              <ShoppingBag className="w-5 h-5 text-[#f99619]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-600 text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white lg:hidden focus:outline-none cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-sm h-full bg-[#0d0c0b] border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl">
            {/* Header of Drawer */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                <SpartanLogo className="h-12 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white focus:outline-none cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Aberto Agora</span>
                </div>
                <span className="text-[11px] text-neutral-400">18:00 às 00:30</span>
              </div>

              {/* Nav Items */}
              <div className="py-6 space-y-2">
                {[
                  { label: 'Destaques do Guerreiro', id: 'hero-section' },
                  { label: 'O Segredo Espartano', id: 'diferenciais-section' },
                  { label: 'Cardápio Completo', id: 'cardapio-section' },
                  { label: 'Combos & Acompanhamentos', id: 'combos-anchor' },
                  { label: 'Bebidas Trincando', id: 'bebidas-section' },
                  { label: 'Depoimentos de Clientes', id: 'avaliacoes-section' },
                  { label: 'Endereço & Contatos', id: 'contato-section' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold tracking-wide uppercase text-neutral-300 hover:text-[#f99619] hover:bg-neutral-900/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <span className="text-neutral-600 text-xs">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <a
                href={`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido na Espartanos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#f99619] text-neutral-950 font-black text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Fazer Pedido no WhatsApp</span>
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
