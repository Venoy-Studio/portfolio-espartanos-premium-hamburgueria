import React from 'react';
import { customerReviews } from '../data/menuData';
import { Star, Shield, Quote, Swords } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes-section" className="py-16 sm:py-24 bg-[#080605] border-b border-amber-950/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c140e] border border-amber-700/60 text-amber-300 text-[11px] font-black uppercase tracking-[0.25em] mb-3">
            <Swords className="w-3.5 h-3.5 text-[#f97316]" />
            <span>Relatos dos Guerreiros</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            QUEM PROVOU, SOBREVIVEU PARA CONTAR
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-normal">
            Mais de 15.000 clientes satisfeitos no Rio de Janeiro. Veja o veredito de quem já enfrentou a nossa brasa.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="tavern-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#f97316]/60 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-amber-950/40 absolute top-5 right-5 pointer-events-none group-hover:text-amber-500/20 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-black text-amber-300 ml-1.5 font-display">5.0 / 5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Tag */}
              <div className="pt-4 border-t border-amber-950/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover border border-amber-700/60"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase font-display">{rev.author}</h4>
                    <p className="text-[10px] text-neutral-400">{rev.location}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-black text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/60 block font-spartan">
                    {rev.favoriteBurger}
                  </span>
                  <span className="text-[9px] text-emerald-400 mt-1 flex items-center justify-end gap-1 font-bold">
                    <Shield className="w-2.5 h-2.5" />
                    Cliente Real
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
