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
    const burgerAdapted: BurgerItem = {
      id: drink.id,
      name: drink.name,
      price: drink.price,
      category: 'bebidas',
      image: drink.image,
      alt: drink.alt,
      description: `${drink.brand} · ${drink.volume} estupidamente gelada no ponto zero grau.`,
      ingredients: [drink.volume, 'Trincando de Gelada'],
    };
    onAddToCart(burgerAdapted);
    setAddedId(drink.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="bebidas-section" className="py-16 sm:py-24 bg-[#060403] border-b border-amber-950/60 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-[11px] font-black tracking-[0.25em] text-cyan-300 uppercase mb-2.5">
            <Snowflake className="w-3.5 h-3.5" />
            <span>Frio de Valhalla · Ponto Zero Grau</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            BEBIDAS TRINCANDO NO GELO
          </h2>
        </div>
        <span className="text-xs sm:text-sm text-neutral-300 max-w-xs font-normal">
          Carne na brasa pede bebida estupidamente gelada. Despachamos em embalagem isolante com gelo.
        </span>
      </div>

      {/* Grid of ice-cold drinks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {drinksList.map((drink) => {
          const isAdded = addedId === drink.id;
          return (
            <div
              key={drink.id}
              className="tavern-card rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-950/40"
            >
              <div>
                {/* Image Container with frosty vignette */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-black/60 border border-neutral-800">
                  <img
                    src={drink.image}
                    alt={drink.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/80 border border-cyan-500/60 text-cyan-300 text-[10px] font-black uppercase tracking-wider backdrop-blur-sm">
                    {drink.tag}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-base font-black text-white uppercase group-hover:text-cyan-300 transition-colors font-display">
                    {drink.name}
                  </h3>
                  <span className="text-base font-black text-amber-400 tabular-nums shrink-0 font-display">
                    R$ {drink.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 mb-4 font-normal">
                  {drink.brand} · <span className="text-neutral-200 font-bold">{drink.volume}</span>
                </p>
              </div>

              <button
                onClick={() => handleAddDrink(drink)}
                className={`w-full py-3 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                  isAdded
                    ? 'bg-emerald-500 text-neutral-950'
                    : 'bg-[#191410] hover:bg-cyan-500 hover:text-neutral-950 text-cyan-200 border border-cyan-900/50'
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
                    <span>Adicionar ao Pedido</span>
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
