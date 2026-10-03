import React from 'react';
import { BurgerItem } from '../types';
import { contactData } from '../data/menuData';
import { Flame, Plus, MessageSquare, Check } from 'lucide-react';

interface CombosHighlightProps {
  onAddToCart: (item: BurgerItem) => void;
}

export const CombosHighlight: React.FC<CombosHighlightProps> = ({ onAddToCart }) => {
  const combos: BurgerItem[] = [
    {
      id: 'combo-pp',
      name: 'Combo Individual Guerreiro (PP)',
      price: 25.00,
      category: 'combos',
      badge: 'Individual Econômico',
      image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
      alt: 'Combo Individual Guerreiro com batata frita e guaracamp',
      description: '1 Hambúrguer artesanal com blend suculento no pão brioche + porção individual de batata frita coberta com bacon crocante, calabresa fatiada e molho cheddar Polenghi + 1 Guaracamp gelado.',
      ingredients: [
        '1 Hambúrguer artesanal',
        'Batata frita com cheddar e bacon',
        'Calabresa fatiada',
        '1 Guaracamp geladinho'
      ],
      caloriesOrHighlight: 'Completo para 1 pessoa'
    },
    {
      id: 'combo-p',
      name: 'Combo Banquete de Esparta (Para Dois)',
      price: 40.00,
      category: 'combos',
      badge: 'Campeão de Vendas · Casal',
      image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
      alt: 'Combo para dois com 2 burgers e batata reforçada',
      description: '2 Hambúrgueres artesanais nobres no pão brioche + porção grande de batata frita com bacon crocante em dobro, calabresa artesanal e cheddar cremoso Polenghi + 2 Guaracamps trincando.',
      ingredients: [
        '2 Hambúrgueres artesanais',
        'Porção grande de batata crocante',
        'Cheddar Polenghi & Bacon em dobro',
        '2 Guaracamps trincando'
      ],
      caloriesOrHighlight: 'Serve 2 pessoas com fartura'
    }
  ];

  const [addedComboId, setAddedComboId] = React.useState<string | null>(null);

  const handleAdd = (combo: BurgerItem) => {
    onAddToCart(combo);
    setAddedComboId(combo.id);
    setTimeout(() => setAddedComboId(null), 1200);
  };

  const handleDirectWhatsApp = (combo: BurgerItem) => {
    const msg = `Olá! Gostaria de pedir o *${combo.name}* por R$ ${combo.price.toFixed(2).replace('.', ',')}.`;
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="combos-anchor" className="py-16 sm:py-20 bg-gradient-to-b from-[#090807] via-[#120f0d] to-[#090807] border-b border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-bold tracking-[0.25em] text-[#f99619] uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#f99619]" />
            <span>Mais Sabor por Menos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            COMBOS ESPECIAIS COM GUARACAMP
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            A combinação lendária que todo carioca ama: hambúrguer artesanal no ponto, batata reforçada com cheddar e bacon, e Guaracamp gelado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {combos.map((combo) => {
            const isAdded = addedComboId === combo.id;
            return (
              <div
                key={combo.id}
                className="bg-[#0f0e0d] border border-neutral-800/80 hover:border-[#f99619]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-[#f99619] border border-amber-500/30">
                      {combo.badge}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">
                      R$ {combo.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display mb-2">
                    {combo.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {combo.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {combo.ingredients.map((ing, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f99619]" />
                        <span>{ing}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center gap-3">
                  <button
                    onClick={() => handleAdd(combo)}
                    className={`flex-1 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isAdded
                        ? 'bg-emerald-500 text-neutral-950'
                        : 'bg-[#f99619] hover:bg-[#ffaa33] text-neutral-950'
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
                        <span>Adicionar Combo</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDirectWhatsApp(combo)}
                    className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    title="Pedir combo no WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
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
