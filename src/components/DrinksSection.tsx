import React, { useState } from 'react';
import { drinksList } from '../data/menuData';
import { BurgerItem } from '../types';
import { Snowflake, Plus, Check } from 'lucide-react';

interface DrinksSectionProps {
  onAddToCart: (item: BurgerItem) => void;
}

export const DrinksSection: React.FC<DrinksSectionProps> = ({ onAddToCart }) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddDrink = (drink: typeof drinksList[0]) => {
    // Adapt drink to BurgerItem interface for unified cart
    const burgerAdapted: BurgerItem = {
      id: drink.id,
      name: drink.name,
      price: drink.price,
      category: 'bebidas',
      image: drink.image,
      alt: drink.alt,
      description: `${drink.brand} · ${drink.volume} estupidamente gelada para acompanhar seu hambúrguer.`,
      ingredients: [drink.volume, 'Estupidamente Gelada'],
    };
    onAddToCart(burgerAdapted);
    setAddedId(drink.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="bebidas-section" className="py-16 sm:py-20 bg-[#060504] border-b border-neutral-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-[10px] font-bold tracking-[0.25em] text-cyan-400 uppercase mb-2">
            <Snowflake className="w-3.5 h-3.5" />
            <span>Estupidamente Geladas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            BEBIDAS TRINCANDO ESPARTANOS
          </h2>
        </div>
        <span className="text-xs text-neutral-400 max-w-xs">
          Nenhum burger é completo sem uma bebida no ponto zero grau. Entregamos com gelo térmico.
        </span>
      </div>

      {/* Grid of ice-cold drinks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {drinksList.map((drink) => {
          const isAdded = addedId === drink.id;
          return (
            <div
              key={drink.id}
              className="group bg-[#0d0c0b] border border-neutral-800/80 hover:border-cyan-500/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Image Container with frosty vignette */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-neutral-950">
                  <img
                    src={drink.image}
                    alt={drink.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-[9px] font-black uppercase tracking-wider backdrop-blur-sm">
                    {drink.tag}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-white uppercase group-hover:text-cyan-400 transition-colors">
                    {drink.name}
                  </h3>
                  <span className="text-base font-black text-[#f99619] tabular-nums shrink-0">
                    R$ {drink.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <p className="text-[11px] text-neutral-400 mb-4">
                  {drink.brand} · <span className="text-neutral-300 font-semibold">{drink.volume}</span>
                </p>
              </div>

              <button
                onClick={() => handleAddDrink(drink)}
                className={`w-full py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                  isAdded
                    ? 'bg-emerald-500 text-neutral-950'
                    : 'bg-neutral-900 hover:bg-cyan-500 hover:text-neutral-950 text-white border border-neutral-800'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Adicionada!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Adicionar Bebida</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
