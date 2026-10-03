import React, { useState } from 'react';
import { BurgerItem } from '../types';
import { allMenuItems, contactData } from '../data/menuData';
import { Plus, Check, Search, Flame, ExternalLink } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (burger: BurgerItem) => void;
  onSelectItem: (burger: BurgerItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Itens' },
    { id: 'artesanais', label: 'Artesanais Nobres' },
    { id: 'smash', label: 'Smash Burgers' },
    { id: 'acompanhamentos', label: 'Acompanhamentos' },
    { id: 'combos', label: 'Combos Épicos' }
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
    const msg = `Olá! Gostaria de pedir: *${item.name}* (R$ ${item.price.toFixed(2).replace('.', ',')}).`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cardapio-section" className="py-16 sm:py-24 bg-[#080706] relative border-b border-neutral-900">
      {/* Background Top Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-[radial-gradient(ellipse_at_top,_rgba(249,150,25,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-bold tracking-[0.25em] text-[#f99619] uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#f99619]" />
            <span>Cardápio Oficial Espartanos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            RECEITAS NOBRES & SABOR ARTESANAL
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
            Selecione seus itens favoritos abaixo para montar seu pedido. Entregamos quentinho na sua porta via WhatsApp ou para retirada no balcão.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#f99619] text-neutral-950 shadow-md shadow-[#f99619]/20 font-black'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome ou ingrediente..."
              className="w-full bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 text-xs rounded-xl pl-9 pr-4 py-2.5 outline-none focus:border-[#f99619] transition-colors"
            />
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/40 rounded-3xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">Nenhum hambúrguer encontrado para "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('todos'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-neutral-800 text-xs font-bold text-white hover:bg-neutral-700"
            >
              Limpar Filtros
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
                  className="group relative bg-[#0e0d0c] border border-neutral-800/80 hover:border-[#f99619]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between cursor-pointer"
                >
                  {/* Top Image & Badge */}
                  <div>
                    <div className="relative w-full h-44 rounded-xl bg-black/40 flex items-center justify-center p-3 mb-4 overflow-hidden">
                      {/* Glow inside card */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,150,25,0.08)_0%,_transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,_rgba(249,150,25,0.18)_0%,_transparent_70%)] transition-colors duration-300" />
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300 select-none"
                        loading="lazy"
                      />
                      {item.badge && (
                        <span className="absolute top-2.5 left-2.5 text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/80 text-[#f99619] border border-amber-500/40 backdrop-blur-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Title and Price */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase group-hover:text-[#f99619] transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-base sm:text-lg font-black text-[#f99619] tabular-nums shrink-0">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-neutral-400 font-normal leading-relaxed line-clamp-3 mb-3">
                      {item.description}
                    </p>

                    {/* Ingredient Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.ingredients.slice(0, 4).map((ing, i) => (
                        <span
                          key={i}
                          className="text-[9px] text-neutral-400 bg-neutral-900/90 border border-neutral-800/80 px-2 py-0.5 rounded-md"
                        >
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 4 && (
                        <span className="text-[9px] text-neutral-500 px-1 py-0.5">
                          +{item.ingredients.length - 4} mais
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="pt-3 border-t border-neutral-900 flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => handleQuickAdd(e, item)}
                      className={`flex-1 py-2 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-neutral-950'
                          : 'bg-neutral-800 hover:bg-[#f99619] text-white hover:text-neutral-950'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Adicionado</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Adicionar</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => handleWhatsAppOrder(e, item)}
                      className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      title="Pedir direto no WhatsApp"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
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
