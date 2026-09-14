import React from 'react';
import { Store, Boxes, UtensilsCrossed, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHOLESALE_TIERS } from '../data/brandConfig';

interface WholesaleB2BProps {
  onOpenOrderModal: (defaultTab?: 'call' | 'whatsapp' | 'quote') => void;
}

export const WholesaleB2B: React.FC<WholesaleB2BProps> = ({ onOpenOrderModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return <Store className="w-5 h-5 text-amber-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-amber-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Store className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section 
      id="wholesale" 
      className="py-24 lg:py-32 bg-[#041a0c] relative border-t border-emerald-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
            Commercial Supply & Distribution
          </span>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
            BRING HI-5 TO YOUR BUSINESS
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed">
            Supplying retail shops, bulk wholesalers, dining venues, and regional route distributors with reliable beverage fulfillment across Ethiopia.
          </p>
        </div>

        {/* 4 Commercial Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {WHOLESALE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="p-7 rounded-2xl bg-[#031509] border border-emerald-800/40 hover:border-amber-400/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center mb-5">
                  {getIcon(tier.icon)}
                </div>

                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 block mb-1">
                  {tier.role}
                </span>

                <h3 className="font-display font-bold text-xl text-white mb-2.5">
                  {tier.title}
                </h3>

                <p className="text-sm text-emerald-200/65 mb-6 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenOrderModal('quote')}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-200 hover:text-emerald-950 bg-emerald-950/90 hover:bg-amber-400 border border-emerald-800 hover:border-amber-400 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Commercial Order Banner */}
        <div className="rounded-3xl bg-[#021006] border border-emerald-800/50 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5 max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-1.5">
                Direct Orders & Wholesale Inquiries
              </h4>
              <p className="text-sm text-emerald-200/75 leading-relaxed">
                Connect directly with Elwad Wholesale Trade for wholesale pricing, minimum crate quantities, and dispatch schedules.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onOpenOrderModal('quote')}
              id="b2b-contact-btn"
              className="px-8 py-3.5 rounded-full font-display font-bold text-sm uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-xl shadow-amber-400/20 transition-all"
            >
              Order for Business
            </button>
            <button
              type="button"
              onClick={() => onOpenOrderModal('whatsapp')}
              className="px-6 py-3.5 rounded-full font-semibold text-sm text-emerald-200 hover:text-white bg-emerald-950 border border-emerald-800 hover:border-emerald-700 transition-colors"
            >
              WhatsApp Trade Line
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
