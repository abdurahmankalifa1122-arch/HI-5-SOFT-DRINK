import React from 'react';
import { PhoneCall, ArrowDownRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#021006] via-[#041a0c] to-[#020e05]"
    >
      {/* Cinematic Ambient Atmosphere */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
                Elwad Wholesale Trade • Ethiopia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-6">
              REFRESHMENT THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                BRINGS PEOPLE
              </span> <br />
              TOGETHER.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed max-w-xl mb-10">
              A distinctive sparkling banana soft drink crafted for everyday refreshment and celebrations across Ethiopia.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onOpenOrderModal}
                id="hero-order-primary-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-display font-bold text-sm sm:text-base uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-300 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-950" />
                <span>Order Now</span>
              </button>

              <button
                type="button"
                onClick={() => handleScrollToSection('products')}
                id="hero-explore-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-display font-semibold text-sm sm:text-base text-emerald-100 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 hover:border-emerald-700 transition-all"
              >
                <span>Explore HI-5</span>
                <ArrowDownRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Minimal High-End Product Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald-900/40 max-w-lg">
              <div>
                <span className="text-amber-400 font-display font-bold text-base sm:text-lg flex items-center gap-1.5 mb-0.5">
                  <Sparkles className="w-4 h-4" /> Banana
                </span>
                <span className="text-xs text-emerald-300/60">Signature Flavor</span>
              </div>

              <div>
                <span className="text-emerald-300 font-display font-bold text-base sm:text-lg flex items-center gap-1.5 mb-0.5">
                  <Zap className="w-4 h-4" /> Sparkling
                </span>
                <span className="text-xs text-emerald-300/60">Crisp Carbonation</span>
              </div>

              <div>
                <span className="text-white font-display font-bold text-base sm:text-lg flex items-center gap-1.5 mb-0.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> Wholesale
                </span>
                <span className="text-xs text-emerald-300/60">Direct Fulfillment</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Spotlight */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Radial Spotlight */}
            <div 
              className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-emerald-600/20 via-amber-400/15 to-transparent blur-3xl -z-10"
              aria-hidden="true"
            />

            {/* Pure Bottle Display Frame */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/4.8] rounded-3xl p-3 bg-gradient-to-b from-emerald-800/20 to-emerald-950/40 border border-emerald-700/40 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#031509] flex items-center justify-center">
                <img
                  src="./images/hi5-banana-flavor.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== 'https://i.ibb.co/cXDjCBy9/Gemini-Generated-Image-ql5andql5a-clean.png') {
                      target.src = 'https://i.ibb.co/cXDjCBy9/Gemini-Generated-Image-ql5andql5a-clean.png';
                    }
                  }}
                  alt="HI-5 Banana Soft Drink Bottle"
                  className="w-full h-full object-contain object-center bg-white group-hover:scale-105 transition-transform duration-700 ease-out"
                  width="600"
                  height="720"
                  loading="eager"
                />

                {/* Elegant Brand Badge Top Right */}
                <div className="absolute top-4 right-4 bg-white/95 p-1.5 rounded-xl shadow-lg border border-emerald-950/10">
                  <img
                    src={BRAND_CONFIG.logoUrl}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== BRAND_CONFIG.localLogoUrl) {
                        target.src = BRAND_CONFIG.localLogoUrl;
                      }
                    }}
                    alt="HI-5 Brand Mark"
                    className="w-10 h-10 object-contain"
                    referrerPolicy="no-referrer"
                    width="40"
                    height="40"
                  />
                </div>

                {/* Minimal Flavor Tag Bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#020e05]/85 backdrop-blur-md border border-emerald-700/40 py-3 px-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-amber-400 block">
                      Signature Release
                    </span>
                    <span className="text-sm font-display font-bold text-white">
                      HI-5 Banana Soft Drink
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenOrderModal}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 font-display font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
