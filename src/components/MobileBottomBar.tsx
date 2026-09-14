import React from 'react';
import { Phone, MessageSquare, ShoppingBag } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface MobileBottomBarProps {
  onOpenOrderModal: (defaultTab?: 'call' | 'whatsapp' | 'quote') => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#03170a]/95 backdrop-blur-lg border-t border-emerald-800/60 p-2.5 px-4 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${BRAND_CONFIG.contact.phoneRaw}`}
          className="py-2.5 px-2 rounded-xl bg-emerald-950 border border-emerald-700/50 flex flex-col items-center justify-center text-center text-emerald-200 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Desk</span>
        </a>

        <button
          type="button"
          onClick={() => onOpenOrderModal('whatsapp')}
          className="py-2.5 px-2 rounded-xl bg-emerald-950 border border-emerald-700/50 flex flex-col items-center justify-center text-center text-emerald-200 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={() => onOpenOrderModal('whatsapp')}
          className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 flex flex-col items-center justify-center text-center text-emerald-950 font-display font-extrabold shadow-md active:scale-95 transition-transform"
        >
          <ShoppingBag className="w-4 h-4 text-emerald-950 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider">Order Now</span>
        </button>
      </div>
    </div>
  );
};
