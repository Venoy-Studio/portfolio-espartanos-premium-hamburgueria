import React, { useState } from 'react';
import { CartItem } from '../types';
import { contactData } from '../data/menuData';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageSquare, ArrowRight, Swords } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNeighborhood, setCustomerNeighborhood] = useState('Barra da Tijuca');
  const [paymentMethod, setPaymentMethod] = useState('Pix (Chave Automática)');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 7.90 : 0.00;
  const total = subtotal + deliveryFee;
  const totalQuantity = items.reduce((sum, ci) => sum + ci.quantity, 0);

  const handleFinishWhatsApp = () => {
    if (items.length === 0) return;

    let text = `⚔️ *CONVOCANDO O BANQUETE DA TAVERNA ESPARTANOS* ⚔️\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName.trim()) {
      text += `👤 *Guerreiro(a):* ${customerName.trim()}\n`;
    }
    text += `🛵 *Modalidade:* ${orderType === 'delivery' ? 'Entrega no Acampamento (Delivery)' : 'Retirada no Balcão da Taverna'}\n`;
    if (orderType === 'delivery') {
      text += `📍 *Endereço:* ${customerAddress.trim() || 'A informar'} (${customerNeighborhood})\n`;
    } else {
      text += `🏢 *Local:* Balcão Barra da Tijuca (Av. das Américas, 4200)\n`;
    }
    text += `💳 *Tributo / Pagamento:* ${paymentMethod}\n\n`;

    text += `📋 *ITENS DO BANQUETE:*\n`;
    items.forEach((ci) => {
      text += `• ${ci.quantity}x *${ci.item.name}* — R$ ${(ci.item.price * ci.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    if (orderNotes.trim()) {
      text += `\n📝 *Preferência do Guerreiro / Ponto:* ${orderNotes.trim()}\n`;
    }

    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `💰 Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (orderType === 'delivery') {
      text += `🛵 Taxa de Entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    }
    text += `🔥 *TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Por favor, confirmem o pedido e o tempo de envio! Que a brasa esteja convosco.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md h-full bg-[#0d0907] text-white border-l border-amber-950 p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-amber-950">
            <div className="flex items-center gap-2.5">
              <Swords className="w-5 h-5 text-[#f97316]" />
              <h3 className="font-black text-base sm:text-lg uppercase tracking-wide text-white font-display">
                Seu Saco de Banquete
              </h3>
              <span className="text-xs font-bold text-amber-400 font-display">
                ({totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#19110d] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-amber-950"
              aria-label="Fechar banquete"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery or Pickup Toggle */}
          <div className="mt-4 grid grid-cols-2 gap-2 p-1 bg-[#140e0a] rounded-2xl border border-amber-950">
            <button
              onClick={() => setOrderType('delivery')}
              className={`py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer font-display ${
                orderType === 'delivery'
                  ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              🛵 Entrega Delivery
            </button>
            <button
              onClick={() => setOrderType('pickup')}
              className={`py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer font-display ${
                orderType === 'pickup'
                  ? 'bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              🛍️ Retirada no Balcão
            </button>
          </div>

          {/* Cart Items List */}
          <div className="py-4 space-y-3 max-h-[35vh] overflow-y-auto pr-1">
            {items.length === 0 ? (
              <div className="text-center py-10 tavern-card rounded-2xl p-6">
                <ShoppingBag className="w-10 h-10 text-neutral-600 mx-auto mb-2" />
                <p className="text-amber-200 text-sm font-bold font-display uppercase">Seu saco de banquete está vazio.</p>
                <p className="text-neutral-400 text-xs mt-1">
                  Nenhum guerreiro sobrevive sem alimento. Escolha seus burgers e porções no cardápio!
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] text-xs font-black text-white hover:brightness-110 transition-all font-display uppercase tracking-wider"
                >
                  Ver Cardápio da Taverna
                </button>
              </div>
            ) : (
              items.map((ci) => (
                <div
                  key={ci.item.id}
                  className="flex items-center gap-3 bg-[#150f0b] p-3 rounded-2xl border border-amber-950/80 shadow-md"
                >
                  <img
                    src={ci.item.image}
                    alt={ci.item.name}
                    className="w-14 h-14 object-contain rounded-xl bg-black/60 p-1 shrink-0 border border-amber-950"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-black text-white truncate uppercase font-display">
                      {ci.item.name}
                    </h4>
                    <span className="text-xs font-black text-amber-400 block mt-0.5 font-display">
                      R$ {(ci.item.price * ci.quantity).toFixed(2).replace('.', ',')}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, -1)}
                        className="w-5 h-5 rounded-lg bg-[#201610] hover:bg-[#2e2017] text-amber-300 flex items-center justify-center cursor-pointer border border-amber-900/50"
                        title="Diminuir"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-1 tabular-nums">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, 1)}
                        className="w-5 h-5 rounded-lg bg-[#201610] hover:bg-[#2e2017] text-amber-300 flex items-center justify-center cursor-pointer border border-amber-900/50"
                        title="Aumentar"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(ci.item.id)}
                    className="text-neutral-500 hover:text-red-400 p-1.5 transition-colors cursor-pointer self-start"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Customer Details & Checkout Inputs */}
        {items.length > 0 && (
          <div className="border-t border-amber-950 pt-3 space-y-2.5">
            <div>
              <label className="text-[10px] font-black text-amber-300 uppercase block mb-1 font-display">
                Nome do Guerreiro (Opcional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ex: Ragnar ou Leônidas"
                className="w-full bg-[#140e0a] border border-amber-950 rounded-xl px-3 py-1.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#f97316]"
              />
            </div>

            {orderType === 'delivery' && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-black text-amber-300 uppercase block mb-1 font-display">
                    Endereço / Nº / Apto
                  </label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Rua, número e comp."
                    className="w-full bg-[#140e0a] border border-amber-950 rounded-xl px-3 py-1.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#f97316]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-amber-300 uppercase block mb-1 font-display">
                    Bairro do Acampamento
                  </label>
                  <select
                    value={customerNeighborhood}
                    onChange={(e) => setCustomerNeighborhood(e.target.value)}
                    className="w-full bg-[#140e0a] border border-amber-950 rounded-xl px-2 py-1.5 text-xs text-white outline-none focus:border-[#f97316]"
                  >
                    <option value="Barra da Tijuca">Barra da Tijuca</option>
                    <option value="Recreio dos Bandeirantes">Recreio</option>
                    <option value="Jacarepaguá">Jacarepaguá</option>
                    <option value="Jardim Oceânico">Jardim Oceânico</option>
                    <option value="Itanhangá">Itanhangá</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="text-[10px] font-black text-amber-300 uppercase block mb-1 font-display">
                Forma do Tributo (Pagamento)
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full bg-[#140e0a] border border-amber-950 rounded-xl px-3 py-1.5 text-xs text-white outline-none focus:border-[#f97316]"
              >
                <option value="Pix (Chave Automática)">Pix (Chave Instantânea no WhatsApp)</option>
                <option value="Cartão de Crédito na Entrega">Cartão de Crédito na Entrega</option>
                <option value="Cartão de Débito na Entrega">Cartão de Débito na Entrega</option>
                <option value="Vale-Refeição (VR/Sodexo/Ticket)">Vale-Refeição (VR / Sodexo / Ticket)</option>
                <option value="Dinheiro">Dinheiro vivo (informar troco)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-black text-amber-300 uppercase block mb-1 font-display">
                Observações / Ponto da Carne
              </label>
              <input
                type="text"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                placeholder="Ex: Carne ao ponto, sem cebola..."
                className="w-full bg-[#140e0a] border border-amber-950 rounded-xl px-3 py-1.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#f97316]"
              />
            </div>

            {/* Calculations */}
            <div className="pt-2 border-t border-amber-950 space-y-1 text-xs text-neutral-300">
              <div className="flex justify-between">
                <span>Subtotal dos Burgers</span>
                <span className="text-white font-bold tabular-nums">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxa dos Mensageiros</span>
                <span className="text-amber-400 font-bold tabular-nums">
                  {orderType === 'delivery' ? `R$ ${deliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Retirada no Balcão)'}
                </span>
              </div>
              <div className="flex justify-between pt-1 border-t border-amber-950 text-sm font-black text-white">
                <span className="font-display uppercase">Tributo Total</span>
                <span className="text-amber-400 text-lg font-black tabular-nums font-display">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* WhatsApp Finish CTA */}
            <button
              onClick={handleFinishWhatsApp}
              className="w-full py-4 px-4 bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#f97316] hover:to-[#fb923c] text-white font-black text-xs sm:text-sm tracking-wider uppercase rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.01] cursor-pointer font-display"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Finalizar Banquete no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-[10px] text-neutral-500 hover:text-neutral-300 py-1 cursor-pointer transition-colors"
            >
              Esvaziar saco de banquete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
