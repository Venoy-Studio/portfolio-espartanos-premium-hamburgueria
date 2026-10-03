import React, { useState } from 'react';
import { CartItem } from '../types';
import { contactData } from '../data/menuData';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';

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

    let text = `⚔️ *PEDIDO ESPARTANOS PREMIUM* ⚔️\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName.trim()) {
      text += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    text += `🛵 *Modalidade:* ${orderType === 'delivery' ? 'Entrega Delivery' : 'Retirada no Balcão'}\n`;
    if (orderType === 'delivery') {
      text += `📍 *Endereço:* ${customerAddress.trim() || 'A informar'} (${customerNeighborhood})\n`;
    } else {
      text += `🏢 *Retirada:* Balcão Barra da Tijuca (Av. das Américas, 4200)\n`;
    }
    text += `💳 *Pagamento:* ${paymentMethod}\n\n`;

    text += `📋 *ITENS DO PEDIDO:*\n`;
    items.forEach((ci) => {
      text += `• ${ci.quantity}x *${ci.item.name}* — R$ ${(ci.item.price * ci.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    if (orderNotes.trim()) {
      text += `\n📝 *Observações / Ponto:* ${orderNotes.trim()}\n`;
    }

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (orderType === 'delivery') {
      text += `Taxa de Entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    }
    text += `🔥 *TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Por favor, confirmem o pedido e o tempo estimado!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${contactData.phoneClean}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md h-full bg-[#0d0c0b] text-white border-l border-neutral-800 p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#f99619]" />
              <h3 className="font-bold text-base sm:text-lg uppercase tracking-wide text-white">
                Seu Pedido Espartano
              </h3>
              <span className="text-xs font-bold text-neutral-400">
                ({totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery or Pickup Toggle */}
          <div className="mt-4 grid grid-cols-2 gap-2 p-1 bg-neutral-900/90 rounded-xl border border-neutral-800">
            <button
              onClick={() => setOrderType('delivery')}
              className={`py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                orderType === 'delivery'
                  ? 'bg-[#f99619] text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              🛵 Delivery
            </button>
            <button
              onClick={() => setOrderType('pickup')}
              className={`py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                orderType === 'pickup'
                  ? 'bg-[#f99619] text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              🛍️ Retirada
            </button>
          </div>

          {/* Cart Items List */}
          <div className="py-4 space-y-3 max-h-[35vh] overflow-y-auto pr-1">
            {items.length === 0 ? (
              <div className="text-center py-10">
                <ShoppingBag className="w-10 h-10 text-neutral-700 mx-auto mb-2" />
                <p className="text-neutral-300 text-sm font-semibold">Seu pedido está vazio.</p>
                <p className="text-neutral-500 text-xs mt-1">
                  Escolha um de nossos hambúrgueres artesanais para montar seu pedido.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 rounded-xl bg-neutral-800 text-xs font-bold text-[#f99619] hover:bg-neutral-700 transition-colors"
                >
                  Ver Cardápio
                </button>
              </div>
            ) : (
              items.map((ci) => (
                <div
                  key={ci.item.id}
                  className="flex items-center gap-3 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800/80"
                >
                  <img
                    src={ci.item.image}
                    alt={ci.item.name}
                    className="w-14 h-14 object-contain rounded-lg bg-black/40 p-1 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate uppercase">
                      {ci.item.name}
                    </h4>
                    <span className="text-xs font-bold text-[#f99619] block mt-0.5">
                      R$ {(ci.item.price * ci.quantity).toFixed(2).replace('.', ',')}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, -1)}
                        className="w-5 h-5 rounded bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center cursor-pointer"
                        title="Diminuir"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-1">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, 1)}
                        className="w-5 h-5 rounded bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center cursor-pointer"
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
          <div className="border-t border-neutral-800 pt-3 space-y-2.5">
            <div>
              <label className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">
                Seu Nome (opcional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ex: Lucas Silva"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#f99619]"
              />
            </div>

            {orderType === 'delivery' && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">
                    Endereço / Nº / Apto
                  </label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Rua, número e comp."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#f99619]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">
                    Bairro
                  </label>
                  <select
                    value={customerNeighborhood}
                    onChange={(e) => setCustomerNeighborhood(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-1.5 text-xs text-white outline-none focus:border-[#f99619]"
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
              <label className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">
                Forma de Pagamento
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-[#f99619]"
              >
                <option value="Pix (Chave Automática)">Pix (Chave Automática no WhatsApp)</option>
                <option value="Cartão de Crédito na Entrega">Cartão de Crédito na Entrega</option>
                <option value="Cartão de Débito na Entrega">Cartão de Débito na Entrega</option>
                <option value="Vale-Refeição (VR/Sodexo/Ticket)">Vale-Refeição (VR / Sodexo / Ticket)</option>
                <option value="Dinheiro">Dinheiro (Informar troco)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">
                Observações / Ponto da Carne
              </label>
              <input
                type="text"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                placeholder="Ex: Carne ao ponto, sem cebola..."
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#f99619]"
              />
            </div>

            {/* Calculations */}
            <div className="pt-2 border-t border-neutral-800/80 space-y-1 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-bold tabular-nums">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de Entrega</span>
                <span className="text-neutral-300 font-bold tabular-nums">
                  {orderType === 'delivery' ? `R$ ${deliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis (Retirada)'}
                </span>
              </div>
              <div className="flex justify-between pt-1 border-t border-neutral-800 text-sm font-black text-white">
                <span>Total Estimado</span>
                <span className="text-[#f99619] text-base font-black tabular-nums">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* WhatsApp Finish CTA */}
            <button
              onClick={handleFinishWhatsApp}
              className="w-full py-3.5 px-4 bg-[#f99619] hover:bg-[#ffaa33] text-neutral-950 font-black text-xs sm:text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.01] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-neutral-950 text-neutral-950" />
              <span>Finalizar Pedido no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-[10px] text-neutral-500 hover:text-neutral-300 py-1 cursor-pointer transition-colors"
            >
              Esvaziar carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
