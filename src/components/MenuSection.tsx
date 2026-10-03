import React, { useState } from 'react';
import { BurgerItem } from '../types';
import { allMenuItems, contactData } from '../data/menuData';
import { Plus, Check, Search, ExternalLink, Swords } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (burger: BurgerItem) => void;
  onSelectItem: (burger: BurgerItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: '⚔️ Todos os Itens' },
    { id: 'artesanais', label: '🛡️ Artesanais Nobres (180g)' },
    { id: 'smash', label: '⚡ Smashs de Batalha' },
    { id: 'acompanhamentos', label: '🍟 Rações de Batalha (Batatas)' },
    { id: 'combos', label: '👑 Banquetes & Combos' }
  ];

  const filteredItems = allMenuItems.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (e: React.MouseEvent, item: BurgerItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => setRecentlyAddedId(null), 1200);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent, item: BurgerItem) => {
    e.stopPropagation();
    const msg = `⚔️ *PEDIDO DA TAVERNA:* Gostaria de pedir *${item.name}* (R$ ${item.price.toFixed(2).replace('.', ',')}) para o meu banquete!`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cardapio-section" className="py-16 sm:py-24 bg-[#080605] relative border-b border-amber-950/60 select-none">
      {/* Background Top Amber Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c140e] border border-amber-700/60 text-amber-300 text-[11px] font-black uppercase tracking-[0.25em] mb-3">
            <Swords className="w-3.5 h-3.5 text-[#f97316]" />
            <span>O Grande Banquete da Taverna</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-display">
            ARSENAL DE HAMBÚRGUERES & PORÇÕES
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl mx-auto font-normal">
            Escolha suas armas para o banquete. Cada item é preparado na chapa em fogo vivo e despachado na hora para o seu acampamento.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-lg shadow-orange-950/80 ring-1 ring-amber-400/40'
                      : 'bg-[#150f0b] text-neutral-400 hover:text-white hover:bg-[#1f1611] border border-amber-950/70'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-amber-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar arma pelo nome ou ingrediente..."
              className="w-full bg-[#140e0a] border border-amber-950 text-white placeholder-neutral-500 text-xs rounded-xl pl-9 pr-4 py-2.5 outline-none focus:border-[#f97316] transition-colors"
            />
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 tavern-card rounded-3xl p-8">
            <p className="text-neutral-400 text-sm">Nenhuma arma de sabor encontrada para "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('todos'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#251a14] border border-amber-900 text-xs font-bold text-amber-300 hover:bg-[#32231b]"
            >
              Reiniciar Busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = recentlyAddedId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="tavern-card rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  {/* Top Image & Badge */}
                  <div>
                    <div className="relative w-full h-44 rounded-2xl bg-[#090706] border border-amber-950/80 flex items-center justify-center p-3 mb-4 overflow-hidden">
                      {/* Burning Glow Effect */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.12)_0%,_transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.25)_0%,_transparent_70%)] transition-colors duration-300" />
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.98)] group-hover:scale-105 transition-transform duration-300 select-none"
                        loading="lazy"
                      />
                      {item.badge && (
                        <span className="absolute top-2.5 left-2.5 text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full spartan-stamp backdrop-blur-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Title and Price */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-black text-white uppercase group-hover:text-amber-400 transition-colors leading-tight font-display">
                        {item.name}
                      </h3>
                      <span className="text-lg font-black text-amber-400 tabular-nums shrink-0 font-display">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed line-clamp-3 mb-3">
                      {item.description}
                    </p>

                    {/* Ingredient Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.ingredients.slice(0, 4).map((ing, i) => (
                        <span
                          key={i}
                          className="text-[9px] font-bold text-amber-300/80 bg-[#1e1510] border border-amber-900/40 px-2 py-0.5 rounded-md"
                        >
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 4 && (
                        <span className="text-[9px] text-amber-500 font-bold px-1 py-0.5">
                          +{item.ingredients.length - 4} mais
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="pt-3 border-t border-amber-950/80 flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => handleQuickAdd(e, item)}
                      className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-500 text-neutral-950'
                          : 'bg-[#1e1611] hover:bg-gradient-to-r hover:from-[#ea580c] hover:to-[#f97316] text-amber-300 hover:text-white border border-amber-900/60'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Adicionado!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Adicionar ao Banquete</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => handleWhatsAppOrder(e, item)}
                      className="p-2.5 rounded-xl bg-[#18110c] hover:bg-[#251a14] border border-amber-900/60 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                      title="Pedir direto no WhatsApp da Taverna"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
