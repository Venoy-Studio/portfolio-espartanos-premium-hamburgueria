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
    <footer className="bg-[#050302] text-neutral-400 text-xs border-t border-amber-950/80 select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <SpartanLogo className="h-16 w-auto" />
            <p className="text-neutral-400 leading-relaxed text-xs">
              Hamburgueria artesanal rústica, inspirada na bravura e na disciplina dos guerreiros espartanos e vikings. Blends 100% Angus forjados na brasa viva com lenha nobre de macieira.
            </p>
            <div className="pt-2 flex items-center gap-2 text-neutral-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>CNPJ: 42.189.542/0001-90 (Fictício)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-amber-300 uppercase tracking-wider text-xs mb-4 font-display">
              Navegação do Acampamento
            </h4>
            <ul className="space-y-2.5 font-semibold">
              <li>
                <button onClick={() => scrollTo('hero-section')} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>⚔️ Arsenal de Destaques</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('diferenciais-section')} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>🔥 As Leis da Forja</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('cardapio-section')} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>🍔 Cardápio dos Guerreiros</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('combos-anchor')} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>👑 Banquetes com Guaracamp</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('bebidas-section')} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>🍻 Elixires Trincando no Gelo</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('avaliacoes-section')} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>🛡️ Relatos de Sobreviventes</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-black text-amber-300 uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5 font-display">
              <Clock className="w-4 h-4 text-[#f97316]" />
              <span>Horário das Fogueiras</span>
            </h4>
            <div className="space-y-2 text-neutral-300">
              <p className="font-bold text-white">{contactData.hoursWeekday}</p>
              <p className="font-bold text-amber-400">{contactData.hoursWeekend}</p>
              <p className="text-neutral-500 text-[11px] pt-1">Segunda-feira: Descanso das tropas</p>
              <div className="pt-3 flex items-start gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <span>{contactData.address}, {contactData.neighborhood}, {contactData.cityState}</span>
              </div>
            </div>
          </div>

          {/* Contacts & Social */}
          <div>
            <h4 className="font-black text-amber-300 uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5 font-display">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Contatos Fictícios da Taverna</span>
            </h4>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${contactData.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {contactData.phone}</span>
              </a>
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#f97316]" />
                <span>{contactData.email}</span>
              </a>
              <a
                href={contactData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{contactData.instagramHandle}</span>
              </a>
            </div>

            {/* Payment Badges */}
            <div className="mt-5 pt-4 border-t border-amber-950/80">
              <span className="text-[10px] font-black text-amber-300 uppercase tracking-wider block mb-2 font-display">
                Tributos Aceitos:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-neutral-300">
                <span className="bg-[#18110c] px-2 py-0.5 rounded border border-amber-950">Pix</span>
                <span className="bg-[#18110c] px-2 py-0.5 rounded border border-amber-950">Mastercard</span>
                <span className="bg-[#18110c] px-2 py-0.5 rounded border border-amber-950">Visa</span>
                <span className="bg-[#18110c] px-2 py-0.5 rounded border border-amber-950">Elo</span>
                <span className="bg-[#18110c] px-2 py-0.5 rounded border border-amber-950">VR</span>
                <span className="bg-[#18110c] px-2 py-0.5 rounded border border-amber-950">Sodexo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-amber-950/80 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Espartanos Burger · Taverna Artesanal na Brasa · Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-amber-500 font-bold">
            <span>⚔️ Forjado a Ferro, Fogo e Queijo Derretido</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
