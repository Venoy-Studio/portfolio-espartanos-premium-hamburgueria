import React, { useState } from 'react';
import { contactData } from '../data/menuData';
import { MapPin, Clock, Phone, Mail, Instagram, Copy, Check, Navigation, Flame } from 'lucide-react';

export const LocationHoursSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${contactData.address}, ${contactData.cityState} - CEP ${contactData.cep}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato-section" className="py-16 sm:py-24 bg-[#090807] border-b border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-bold tracking-[0.25em] text-[#f99619] uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#f99619]" />
            <span>Base de Operações</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            HORÁRIOS, LOCALIZAÇÃO & CONTATO
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Venha retirar seu pedido no balcão ou peça online pelo WhatsApp com taxa reduzida para sua região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Address Card */}
            <div className="bg-[#0e0d0c] border border-neutral-800/80 rounded-2xl p-6 relative group hover:border-amber-500/40 transition-colors shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#f99619] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#f99619]">
                    Retirada & Balcão
                  </span>
                  <h3 className="text-base font-bold text-white uppercase mt-0.5">
                    Endereço Oficial
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                    {contactData.address}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {contactData.neighborhood} · {contactData.cityState} · CEP {contactData.cep}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-bold text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Endereço</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(contactData.address + ' ' + contactData.cityState)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#f99619]/15 hover:bg-[#f99619]/25 border border-[#f99619]/40 text-xs font-bold text-[#f99619] transition-colors flex items-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Ver no Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#0e0d0c] border border-neutral-800/80 rounded-2xl p-6 relative group hover:border-amber-500/40 transition-colors shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#f99619] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#f99619]">
                      Horário de Funcionamento
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-[10px] font-black uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Aberto Hoje
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase mt-0.5">
                    Todos os Dias
                  </h3>
                  <div className="mt-2 space-y-1 text-xs sm:text-sm text-neutral-300">
                    <p className="flex justify-between border-b border-neutral-900 pb-1">
                      <span>Terça a Domingo:</span>
                      <strong className="text-white">18h00 às 00h30</strong>
                    </p>
                    <p className="flex justify-between border-b border-neutral-900 pb-1 pt-1">
                      <span>Sexta e Sábado:</span>
                      <strong className="text-white">18h00 às 01h30</strong>
                    </p>
                    <p className="flex justify-between pt-1 text-neutral-400 text-xs">
                      <span>Segunda-feira:</span>
                      <span className="text-neutral-500 italic">Fechado para descanso dos guerreiros</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Online Channels */}
            <div className="bg-[#0e0d0c] border border-neutral-800/80 rounded-2xl p-6 relative group hover:border-amber-500/40 transition-colors shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#f99619] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#f99619]">
                    Canais de Atendimento
                  </span>
                  <h3 className="text-base font-bold text-white uppercase mt-0.5">
                    Fale com Nossos Atendentes
                  </h3>

                  <div className="mt-3 space-y-2 text-xs sm:text-sm">
                    <a
                      href={`https://wa.me/${contactData.phoneClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-200 hover:text-emerald-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Oficial: <strong>{contactData.phone}</strong></span>
                    </a>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="flex items-center gap-2 text-neutral-200 hover:text-[#f99619] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#f99619]" />
                      <span>{contactData.email}</span>
                    </a>
                    <a
                      href={contactData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-200 hover:text-pink-400 transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>Instagram: <strong>{contactData.instagramHandle}</strong></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Representation & Delivery Zones */}
          <div className="lg:col-span-6 bg-[#0e0d0c] border border-neutral-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Raio de Atendimento Delivery
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  Taxa Promocional
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Levamos a brasa espartana quente e crocante até você nas principais regiões da Zona Oeste:
              </p>
            </div>

            {/* Neighborhood Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
              {[
                { name: 'Barra da Tijuca', time: '25-35 min' },
                { name: 'Recreio dos Bandeirantes', time: '30-40 min' },
                { name: 'Jacarepaguá', time: '35-45 min' },
                { name: 'Jardim Oceânico', time: '25-35 min' },
                { name: 'Vargem Grande', time: '40-50 min' },
                { name: 'Itanhangá & Joá', time: '30-40 min' }
              ].map((zone, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-left"
                >
                  <span className="text-xs font-bold text-white block">{zone.name}</span>
                  <span className="text-[10px] text-neutral-400 font-mono">{zone.time}</span>
                </div>
              ))}
            </div>

            {/* Stylized Dark Map Preview Card */}
            <div className="w-full h-56 rounded-xl bg-[#070707] border border-neutral-800 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
              {/* Decorative Map Grid Lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute w-44 h-44 rounded-full border border-amber-500/20 animate-ping pointer-events-none" />
              <div className="absolute w-28 h-28 rounded-full border border-amber-500/40 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#f99619] text-neutral-950 flex items-center justify-center shadow-lg shadow-[#f99619]/40 mb-2">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Espartanos Barra da Tijuca
                </h4>
                <p className="text-xs text-neutral-400 max-w-[240px] mt-0.5">
                  Av. das Américas, 4200 · Bloco 8
                </p>
                <a
                  href={`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido para entrega ou retirada.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-4 py-2 rounded-full bg-white text-neutral-950 font-black text-[11px] uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-md"
                >
                  Pedir Agora pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
