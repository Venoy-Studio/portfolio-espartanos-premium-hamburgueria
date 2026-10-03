import React, { useState } from 'react';
import { contactData } from '../data/menuData';
import { MapPin, Clock, Phone, Mail, Instagram, Copy, Check, Navigation, Flame, Swords } from 'lucide-react';

export const LocationHoursSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${contactData.address}, ${contactData.cityState} - CEP ${contactData.cep}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato-section" className="py-16 sm:py-24 bg-[#070504] border-b border-amber-950/60 select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c140e] border border-amber-700/60 text-amber-300 text-[11px] font-black uppercase tracking-[0.25em] mb-3">
            <Swords className="w-3.5 h-3.5 text-[#f97316]" />
            <span>O Acampamento Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display">
            LOCALIZAÇÃO DA TAVERNA & CONTATO
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-normal">
            Retire seu burger fumegante direto no nosso balcão ou convoque a entrega em seu acampamento pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Address Card */}
            <div className="tavern-card rounded-3xl p-6 sm:p-7 relative group transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1e1610] border border-amber-800/50 flex items-center justify-center text-[#f97316] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316] font-viking">
                    ⚔️ Retirada de Banquete no Balcão
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase mt-0.5 font-display">
                    O Forte de Esparta
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-1 font-semibold">
                    {contactData.address}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {contactData.neighborhood} · {contactData.cityState} · CEP {contactData.cep}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="px-3.5 py-2 rounded-xl bg-[#1c140e] hover:bg-[#281c14] border border-amber-900/60 text-xs font-bold text-amber-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Coordenadas Copiadas!</span>
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
                      className="px-3.5 py-2 rounded-xl bg-[#f97316]/15 hover:bg-[#f97316]/25 border border-[#f97316]/40 text-xs font-bold text-[#f97316] transition-colors flex items-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir no Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="tavern-card rounded-3xl p-6 sm:p-7 relative group transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1e1610] border border-amber-800/50 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316] font-viking">
                      🔥 Fogueiras Acesas
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-700/60 text-emerald-400 text-[10px] font-black uppercase flex items-center gap-1 font-display">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Aberto Hoje
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase mt-0.5 font-display">
                    Horário dos Banquetes
                  </h3>
                  <div className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-neutral-300">
                    <p className="flex justify-between border-b border-amber-950/60 pb-1.5">
                      <span>Terça a Domingo:</span>
                      <strong className="text-amber-200">18h00 às 00h30</strong>
                    </p>
                    <p className="flex justify-between border-b border-amber-950/60 pb-1.5 pt-1">
                      <span>Sexta e Sábado:</span>
                      <strong className="text-amber-400">18h00 às 01h30 (Madrugada)</strong>
                    </p>
                    <p className="flex justify-between pt-1 text-neutral-400 text-xs">
                      <span>Segunda-feira:</span>
                      <span className="text-neutral-500 italic">Descanso das tropas para forjar lenha</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Online Channels */}
            <div className="tavern-card rounded-3xl p-6 sm:p-7 relative group transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1e1610] border border-amber-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316] font-viking">
                    ⚔️ Linha Direta do General
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white uppercase mt-0.5 font-display">
                    Canais de Atendimento da Taverna
                  </h3>

                  <div className="mt-3 space-y-2 text-xs sm:text-sm">
                    <a
                      href={`https://wa.me/${contactData.phoneClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-200 hover:text-emerald-400 transition-colors font-semibold"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp da Taverna: <strong className="text-emerald-300">{contactData.phone}</strong></span>
                    </a>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#f97316]" />
                      <span>{contactData.email}</span>
                    </a>
                    <a
                      href={contactData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-300 hover:text-pink-400 transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>Instagram: <strong className="text-white">{contactData.instagramHandle}</strong></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Representation & Delivery Zones */}
          <div className="lg:col-span-6 tavern-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Top Badge */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-amber-300 font-display">
                  Rotas de Batalha (Entrega Delivery)
                </span>
                <span className="text-xs font-black text-emerald-400 flex items-center gap-1 font-display">
                  <Flame className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  Taxa Reduzida
                </span>
              </div>
              <p className="text-xs text-neutral-300 mt-1 font-normal">
                Despachamos nossos mensageiros velozes para levar o banquete quente até seu acampamento:
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
                  className="p-2.5 rounded-xl bg-[#140e0a] border border-amber-950/80 text-left"
                >
                  <span className="text-xs font-bold text-white block">{zone.name}</span>
                  <span className="text-[10px] text-amber-400/90 font-mono font-bold">{zone.time}</span>
                </div>
              ))}
            </div>

            {/* Stylized Dark Map Preview Card */}
            <div className="w-full h-56 rounded-2xl bg-[#090705] border border-amber-950/80 relative overflow-hidden flex flex-col items-center justify-center p-4 text-center">
              {/* Map grid lines */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute w-44 h-44 rounded-full border border-amber-600/25 animate-ping pointer-events-none" />
              <div className="absolute w-28 h-28 rounded-full border border-amber-600/50 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ea580c] to-[#f97316] text-white flex items-center justify-center shadow-xl shadow-orange-950 mb-2">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-sm font-black text-white uppercase tracking-wider font-display">
                  Taverna Espartanos Barra
                </h4>
                <p className="text-xs text-neutral-300 max-w-[240px] mt-0.5">
                  Av. das Américas, 4200 · Bloco 8
                </p>
                <a
                  href={`https://wa.me/${contactData.phoneClean}?text=${encodeURIComponent('Saudações! Gostaria de convocar um banquete para entrega ou retirada.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
                >
                  Convocar Banquete no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
