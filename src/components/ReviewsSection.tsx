import React from 'react';
import { customerReviews } from '../data/menuData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes-section" className="py-16 sm:py-24 bg-[#080706] border-b border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-bold tracking-[0.25em] text-[#f99619] uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#f99619] text-[#f99619]" />
            <span>Opinião de Quem Provou</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            A VOZ DOS NOSSOS GUERREIROS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Mais de 15.000 clientes satisfeitos no Rio de Janeiro. Veja o que dizem sobre nosso blend e entrega rápida.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0e0d0c] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between relative group hover:border-amber-500/40 transition-colors shadow-xl"
            >
              <Quote className="w-8 h-8 text-neutral-800 absolute top-5 right-5 pointer-events-none group-hover:text-[#f99619]/20 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Tag */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                    <p className="text-[10px] text-neutral-400">{rev.location}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-bold text-[#f99619] bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 block">
                    {rev.favoriteBurger}
                  </span>
                  <span className="text-[9px] text-neutral-500 mt-1 flex items-center justify-end gap-1">
                    <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                    Verificado
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
