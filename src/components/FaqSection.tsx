import React, { useState } from 'react';
import { faqData } from '../data/menuData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#080706] border-b border-neutral-900 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-bold tracking-[0.25em] text-[#f99619] uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#f99619]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Tudo o que você precisa saber antes de fazer seu pedido.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0e0d0c] border border-neutral-800/80 rounded-2xl overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#f99619] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-900/80 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
