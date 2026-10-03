import React from 'react';
import { Flame, Beef, Shield, Swords } from 'lucide-react';

export const SpartanDifferences: React.FC = () => {
  const pillars = [
    {
      icon: Beef,
      title: 'Carne de Batalha: 100% Angus',
      desc: 'Nada de carnes industriais congeladas de caixa. Moemos cortes nobres de Angus no dia, garantindo o blend mais macio, suculento e potente que você já provou.',
      tag: 'Sem Conservantes'
    },
    {
      icon: Flame,
      title: 'Forjado na Brasa Viva & Lenha',
      desc: 'Nossa chapa atinge temperatura extrema com toque sutil de defumação em lenha de macieira. O resultado é aquela crosta caramelizada que estala na boca enquanto o interior permanece suculento.',
      tag: 'Fogo Alto & Maillard'
    },
    {
      icon: Swords,
      title: 'Queijos Nobres & Empanados',
      desc: 'Recusamos queijos plásticos artificiais. Servimos fatias generosas de Gouda, Gorgonzola importado e discos de Provolone e Catupiry empanados na casa com farinha Panko.',
      tag: 'Cascata de Sabor'
    },
    {
      icon: Shield,
      title: 'Armadura Térmica Anti-Vapor',
      desc: 'Nossas caixas contam com respirador térmico especial. O calor da batalha fica retido, mas o vapor excessivo escapa para que o pão e as batatas cheguem sequinhos e quentes na sua mesa.',
      tag: 'Chega Fervendo'
    }
  ];

  return (
    <section id="diferenciais-section" className="py-16 sm:py-24 bg-[#070504] border-b border-amber-950/60 select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1c140e] border border-amber-700/60 text-amber-300 text-[11px] font-black uppercase tracking-[0.25em] mb-3">
            <Swords className="w-3.5 h-3.5 text-[#f97316]" />
            <span>As Leis da Nossa Forja</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            POR QUE NOSSO BURGER É UMA ARMA PESADA?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-normal">
            Aqui não existe produção em massa. Cada hambúrguer é forjado sob os princípios da honra espartana e o apetite voraz dos guerreiros vikings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="tavern-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1f1711] border border-amber-800/50 flex items-center justify-center text-[#f97316] mb-5 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316] block mb-1.5 font-viking">
                    ⚔️ {item.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2.5 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
