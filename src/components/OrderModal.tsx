import React, { useState } from 'react';
import { X, Phone, MessageSquare, Mail, FileText, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG, HI5_FLAVORS } from '../data/brandConfig';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'call' | 'whatsapp' | 'quote';
  defaultFlavor?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'whatsapp',
  defaultFlavor = 'Banana Flavor',
}) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'call' | 'quote'>(defaultTab);
  const [selectedFlavor, setSelectedFlavor] = useState(defaultFlavor);
  const [quickOrderType, setQuickOrderType] = useState('Retailer');
  const [quantity, setQuantity] = useState('5 Crates');

  if (!isOpen) return null;

  const generatedWhatsAppText = `Hello Elwad Wholesale Trade, I would like to place an order for HI-5 Soft Drink (${selectedFlavor}). Order type: ${quickOrderType}, Quantity: ${quantity}. Please share availability and delivery terms in Ethiopia.`;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div 
        className="relative max-w-lg w-full bg-[#031509] border border-emerald-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-emerald-800/50 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center border border-emerald-700/40">
              <img
                src={BRAND_CONFIG.logoUrl}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== BRAND_CONFIG.localLogoUrl) {
                    target.src = BRAND_CONFIG.localLogoUrl;
                  }
                }}
                alt="HI-5"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                width="36"
                height="36"
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 block">
                {BRAND_CONFIG.companyName}
              </span>
              <h3 id="order-modal-title" className="font-display font-bold text-xl text-white">
                Order HI-5 Soft Drink
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-emerald-300 hover:text-white rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-3 gap-2 p-1 bg-[#020e05] rounded-xl border border-emerald-900/60 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('whatsapp')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === 'whatsapp'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-emerald-300 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('call')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === 'call'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-emerald-300 hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Direct Call</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('quote')}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === 'quote'
                ? 'bg-emerald-800 text-white font-bold'
                : 'text-emerald-300 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Email</span>
          </button>
        </div>

        {/* Tab 1: WhatsApp */}
        {activeTab === 'whatsapp' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-emerald-300 mb-1">
                Select Flavor
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#020e05] border border-emerald-800 text-xs text-white focus:outline-none"
              >
                {HI5_FLAVORS.map((f) => (
                  <option key={f.id} value={f.flavor}>{f.flavor}</option>
                ))}
                <option value="All 6 Flavors (Assorted Crates)">All 6 Flavors (Assorted Crates)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-emerald-300 mb-1">
                  Buyer Type
                </label>
                <select
                  value={quickOrderType}
                  onChange={(e) => setQuickOrderType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#020e05] border border-emerald-800 text-xs text-white focus:outline-none"
                >
                  <option value="Retailer / Store">Retail Store</option>
                  <option value="Supermarket">Supermarket</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Restaurant / Café">Restaurant / Café</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-emerald-300 mb-1">
                  Quantity
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#020e05] border border-emerald-800 text-xs text-white focus:outline-none"
                >
                  <option value="2 - 5 Crates">2 - 5 Crates</option>
                  <option value="10 - 25 Crates">10 - 25 Crates</option>
                  <option value="50 - 100 Crates">50 - 100 Crates</option>
                  <option value="100+ Crates">100+ Crates</option>
                </select>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#020e05] border border-emerald-900/60 font-mono text-xs text-emerald-200/90 leading-relaxed">
              "{generatedWhatsAppText}"
            </div>

            <a
              href={`https://wa.me/${BRAND_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(generatedWhatsAppText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 text-emerald-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform"
            >
              <MessageSquare className="w-4 h-4 text-emerald-950" />
              <span>Send via WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Tab 2: Direct Call */}
        {activeTab === 'call' && (
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-[#020e05] border border-emerald-800/60 text-center">
              <span className="text-xs text-emerald-300 block mb-1">
                Direct Trade Desk
              </span>
              <span className="text-2xl font-display font-extrabold text-white font-mono block mb-1">
                {BRAND_CONFIG.contact.phone}
              </span>
              <span className="text-xs text-amber-400">
                Elwad Wholesale Trade
              </span>
            </div>

            <a
              href={`tel:${BRAND_CONFIG.contact.phoneRaw}`}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-emerald-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-950" />
              <span>Call Now</span>
            </a>
          </div>
        )}

        {/* Tab 3: Email */}
        {activeTab === 'quote' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#020e05] border border-emerald-800/60 text-xs space-y-2 text-emerald-200">
              <div><strong className="text-white">Email:</strong> <span className="font-mono">{BRAND_CONFIG.contact.email}</span></div>
              <div><strong className="text-white">Operating Region:</strong> {BRAND_CONFIG.country}</div>
              <div><strong className="text-white">Available Flavors:</strong> Banana, Coffee, Strawberry, Mojito, Grape, Pineapple</div>
            </div>

            <div className="flex gap-3">
              <a
                href={`mailto:${BRAND_CONFIG.contact.email}?subject=${encodeURIComponent('HI-5 Wholesale Commercial Inquiry')}`}
                className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-emerald-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-emerald-950" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  const target = document.getElementById('contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3.5 px-4 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-xs font-semibold text-emerald-200"
              >
                Contact Form
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
