import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface AboutElwadProps {
  onOpenOrderModal: () => void;
}

export const AboutElwad: React.FC<AboutElwadProps> = ({ onOpenOrderModal }) => {
  return (
    <section 
      id="about-company" 
      className="py-24 lg:py-32 bg-[#020e05] relative border-t border-emerald-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Company Background */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
              Corporate Entity
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6">
              ABOUT ELWAD WHOLESALE TRADE
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/85 leading-relaxed mb-6">
              <strong className="text-white font-semibold">Elwad Wholesale Trade</strong> is the commercial distributor behind <strong className="text-amber-400 font-semibold">HI-5 Soft Drink</strong> in Ethiopia. Operating as a dedicated wholesale enterprise, Elwad coordinates product supply, retailer partnerships, and market logistics to bring refreshing beverages to consumers nationwide.
            </p>

            <p className="text-sm sm:text-base text-emerald-200/70 leading-relaxed mb-8">
              Focused on reliability, accessible commercial channels, and dependable trade relationships, Elwad provides retail partners and stockists with a direct supply line for HI-5 Banana Soft Drink and expanding product portfolios.
            </p>

            <div>
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="px-8 py-3.5 rounded-full font-display font-bold text-sm uppercase tracking-wider text-emerald-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all inline-flex items-center gap-2"
              >
                <span>Partner with Elwad Trade</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#031509] border border-emerald-800/50 p-8 sm:p-10 shadow-2xl">
              
              <div className="flex items-center gap-4 pb-6 border-b border-emerald-800/40 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center border border-emerald-500/20">
                  <img
                    src={BRAND_CONFIG.logoUrl}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== BRAND_CONFIG.localLogoUrl) {
                        target.src = BRAND_CONFIG.localLogoUrl;
                      }
                    }}
                    alt="HI-5 & Elwad Trade"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    width="48"
                    height="48"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {BRAND_CONFIG.companyName}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                    {BRAND_CONFIG.country}
                  </p>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#020e05] border border-emerald-900/40">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold text-emerald-300/70 block">Operating Region</span>
                    <span className="text-white font-medium">{BRAND_CONFIG.country}</span>
                    <span className="text-xs text-emerald-300/60 block mt-0.5">{BRAND_CONFIG.contact.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#020e05] border border-emerald-900/40">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold text-emerald-300/70 block">Trade Contact</span>
                    <span className="text-white font-mono">{BRAND_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#020e05] border border-emerald-900/40">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold text-emerald-300/70 block">Commercial Email</span>
                    <span className="text-white font-mono">{BRAND_CONFIG.contact.email}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
