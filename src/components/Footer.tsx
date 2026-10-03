import React from 'react';
import { SpartanLogo } from './SpartanLogo';
import { contactData } from '../data/menuData';
import { MapPin, Clock, Phone, Mail, Instagram, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050404] text-neutral-400 text-xs border-t border-neutral-900 select-none">
      {/* Top Banner inside Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <SpartanLogo className="h-16 w-auto" />
            <p className="text-neutral-400 leading-relaxed text-xs">
              Hamburgueria artesanal de alta qualidade, inspirada na honra e na força dos 300 de Esparta. Blends nobres 100% Angus preparados na brasa viva e entregues com temperatura máxima.
            </p>
            <div className="pt-2 flex items-center gap-2 text-neutral-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>CNPJ: 42.189.542/0001-90 (Fictício)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollTo('hero-section')} className="hover:text-[#f99619] transition-colors cursor-pointer">
                  Destaques da Casa
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('diferenciais-section')} className="hover:text-[#f99619] transition-colors cursor-pointer">
                  O Segredo Espartano
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('cardapio-section')} className="hover:text-[#f99619] transition-colors cursor-pointer">
                  Cardápio de Hambúrgueres
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('combos-anchor')} className="hover:text-[#f99619] transition-colors cursor-pointer">
                  Combos com Guaracamp
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('bebidas-section')} className="hover:text-[#f99619] transition-colors cursor-pointer">
                  Bebidas Geladas
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('avaliacoes-section')} className="hover:text-[#f99619] transition-colors cursor-pointer">
                  Avaliações de Clientes
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#f99619]" />
              <span>Horários & Local</span>
            </h4>
            <div className="space-y-2 text-neutral-400">
              <p className="text-white font-semibold">{contactData.hoursWeekday}</p>
              <p className="text-white font-semibold">{contactData.hoursWeekend}</p>
              <p className="text-neutral-500 text-[11px] pt-1">Segunda-feira: Fechado</p>
              <div className="pt-3 flex items-start gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#f99619] shrink-0 mt-0.5" />
                <span>{contactData.address}, {contactData.neighborhood}, {contactData.cityState}</span>
              </div>
            </div>
          </div>

          {/* Contacts & Social */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Contatos Fictícios</span>
            </h4>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${contactData.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contactData.phone}</span>
              </a>
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-2 hover:text-[#f99619] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#f99619]" />
                <span>{contactData.email}</span>
              </a>
              <a
                href={contactData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{contactData.instagramHandle}</span>
              </a>
            </div>

            {/* Payment Badges */}
            <div className="mt-5 pt-4 border-t border-neutral-900">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                Formas de Pagamento:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-neutral-300">
                <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Pix</span>
                <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Mastercard</span>
                <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Visa</span>
                <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Elo</span>
                <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">VR</span>
                <span className="bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Sodexo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-900 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Espartanos Premium Hamburgueria Artesanal · Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com padrão autoral de alta performance</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
