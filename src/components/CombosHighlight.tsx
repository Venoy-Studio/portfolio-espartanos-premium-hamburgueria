import React from 'react';
import { BurgerItem } from '../types';
import { contactData } from '../data/menuData';
import { Plus, MessageSquare, Check, Swords } from 'lucide-react';

interface CombosHighlightProps {
  onAddToCart: (item: BurgerItem) => void;
}

export const CombosHighlight: React.FC<CombosHighlightProps> = ({ onAddToCart }) => {
  const combos: BurgerItem[] = [
    {
      id: 'combo-pp',
      name: 'Combo Individual do Guerreiro (PP)',
      price: 25.00,
      category: 'combos',
      badge: '🔥 Ração Individual de Combate',
      image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
      alt: 'Combo Individual com burger na brasa, batatas e guaracamp',
      description: '1 Hambúrguer artesanal suculento montado na hora com blend na brasa + porção de batatas fritas crocantes com bacon defumado, calabresa chapeada e cheddar cremoso Polenghi + 1 Guaracamp estupidamente gelado.',
      ingredients: [
        '1 Hambúrguer artesanal Angus',
        'Batata com cheddar, bacon e calabresa',
        '1 Guaracamp trincando de gelado'
      ],
      caloriesOrHighlight: 'Sacia a fome de 1 guerreiro'
    },
    {
      id: 'combo-p',
      name: 'Banquete de Valhalla para Dois (Combo P)',
      price: 40.00,
      category: 'combos',
      badge: '👑 Banquete dos Reis · Para Dois',
      image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
      alt: 'Banquete para dois com 2 burgers, batata frita reforçada e bebidas',
      description: '2 Hambúrgueres artesanais nobres no pão brioche amanteigado + 1 tábua grande de batatas estalando de crocantes com chuva dupla de bacon, calabresa fatiada e cheddar Polenghi + 2 Guaracamps bem gelados.',
      ingredients: [
        '2 Hambúrgueres artesanais na brasa',
        'Tábua reforçada de batata com bacon e calabresa',
        '2 Guaracamps estupidamente gelados'
      ],
      caloriesOrHighlight: 'Fartura viking para 2 pessoas'
    }
  ];

  const [addedComboId, setAddedComboId] = React.useState<string | null>(null);

  const handleAdd = (combo: BurgerItem) => {
    onAddToCart(combo);
    setAddedComboId(combo.id);
    setTimeout(() => setAddedComboId(null), 1200);
  };

  const handleDirectWhatsApp = (combo: BurgerItem) => {
    const msg = `⚔️ *CONVOCANDO O BANQUETE:* Gostaria de pedir o *${combo.name}* (R$ ${combo.price.toFixed(2).replace('.', ',')}) para entrega!`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="combos-anchor" className="py-16 sm:py-24 bg-[#0a0705] border-b border-amber-950/60 select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c140e] border border-amber-700/60 text-amber-300 text-[11px] font-black uppercase tracking-[0.25em] mb-3">
            <Swords className="w-3.5 h-3.5 text-[#f97316]" />
            <span>Mais Força por Menos Tributos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            BANQUETES ÉPICOS COM GUARACAMP
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-normal">
            A tradição inabalável da nossa taverna: hambúrguer artesanal na brasa, tábua de batata com bacon e calabresa, e Guaracamp trincando de gelado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {combos.map((combo) => {
            const isAdded = addedComboId === combo.id;
            return (
              <div
                key={combo.id}
                className="tavern-card rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full spartan-stamp font-spartan">
                      {combo.badge}
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-amber-400 tabular-nums font-display">
                      R$ {combo.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display mb-2">
                    {combo.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {combo.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {combo.ingredients.map((ing, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-200">
                        <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                        <span className="font-semibold">{ing}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-amber-950/80 flex items-center gap-3">
                  <button
                    onClick={() => handleAdd(combo)}
                    className={`flex-1 py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isAdded
                        ? 'bg-emerald-500 text-neutral-950'
                        : 'bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#f97316] hover:to-[#fb923c] text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 stroke-[3]" />
                        <span>Devorar Banquete</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDirectWhatsApp(combo)}
                    className="p-3.5 rounded-xl bg-[#1b130e] hover:bg-[#271b14] border border-amber-900 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    title="Pedir banquete no WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
