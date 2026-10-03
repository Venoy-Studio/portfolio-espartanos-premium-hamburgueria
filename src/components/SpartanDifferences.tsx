import React from 'react';
import { Flame, Beef, Sparkles, Truck, Award } from 'lucide-react';

export const SpartanDifferences: React.FC = () => {
  const pillars = [
    {
      icon: Beef,
      title: 'Blend 100% Angus Moído no Dia',
      desc: 'Nada de carne congelada de frigorífico. Nossos blends combinam cortes nobres de Angus com a proporção exata de suculência e sabor.',
      tag: 'Qualidade Inegociável'
    },
    {
      icon: Flame,
      title: 'Fogo Alto & Crostinha Maillard',
      desc: 'Selamos a carne em altíssima temperatura com defumação sutil em lenha de macieira. Crosta caramelizada por fora, maciez e suco por dentro.',
      tag: 'Técnica de Grelha'
    },
    {
      icon: Sparkles,
      title: 'Queijos Nobres Polenghi & Empanados',
      desc: 'Gouda legítimo, Gorgonzola cremoso, Provolone e Catupiry empanados na casa com farinha Panko ultra crocante.',
      tag: 'Sem Queijo Plástico'
    },
    {
      icon: Truck,
      title: 'Embalagem Térmica Anti-Vapor',
      desc: 'Desenvolvemos caixas com respiro inteligente. O burger e as batatas chegam quentes e sequinhos, exatamente como se fossem servidos no balcão.',
      tag: 'Padrão Delivery 5 Estrelas'
    }
  ];

  return (
    <section id="diferenciais-section" className="py-16 sm:py-20 bg-[#090807] border-b border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-bold tracking-[0.25em] text-[#f99619] uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-[#f99619]" />
            <span>O Segredo Espartano</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            POR QUE O ESPARTANOS É DIFERENTE?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Não fazemos fast-food. Cada burger é uma obra artesanal forjada com disciplina, ingredientes nobres e respeito ao seu paladar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0e0d0c] border border-neutral-800/80 hover:border-[#f99619]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#f99619] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#f99619] block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
