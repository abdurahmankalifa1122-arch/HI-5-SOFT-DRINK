import React, { useState } from 'react';
import { PhoneCall, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { HI5_FLAVORS, FULL_COLLECTION_IMAGE, BRAND_CONFIG } from '../data/brandConfig';

interface ProductShowcaseProps {
  onOpenOrderModal: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenOrderModal }) => {
  const [selectedFlavor, setSelectedFlavor] = useState(HI5_FLAVORS[0]);
  const [activeTab, setActiveTab] = useState<'profile' | 'serving' | 'wholesale'>('profile');

  return (
    <section 
      id="products" 
      className="py-24 lg:py-32 bg-[#020e05] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-emerald-900/40 gap-6">
          <div>
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
              Signature Beverage
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              HI-5 PRODUCT RANGE
            </h2>
          </div>

          <p className="text-sm sm:text-base text-emerald-200/70 max-w-md">
            Our established beverage collection, formulated with six distinctive flavors and sparkling carbonation for the Ethiopian market.
          </p>
        </div>

        {/* Quick Flavor Selector Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300/80 mr-2">
            Select Flavor:
          </span>
          {HI5_FLAVORS.map((flavor) => (
            <button
              key={flavor.id}
              type="button"
              onClick={() => setSelectedFlavor(flavor)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedFlavor.id === flavor.id
                  ? 'bg-amber-400 text-emerald-950 font-bold shadow-md shadow-amber-400/20 scale-[1.02]'
                  : 'bg-emerald-950/80 text-emerald-200 hover:text-white border border-emerald-800/60 hover:bg-emerald-900'
              }`}
            >
              <span>{flavor.flavor.replace(' Flavor', '')}</span>
            </button>
          ))}
        </div>

        {/* Flagship Product Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#052210] to-[#021006] border border-emerald-800/60 p-8 sm:p-10 lg:p-14 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Premium Bottle Presentation Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[4/4.6] rounded-2xl overflow-hidden border border-emerald-700/40 shadow-2xl bg-white p-3 group">
                <img
                  key={selectedFlavor.id}
                  src={selectedFlavor.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (selectedFlavor.remoteImage && target.src !== selectedFlavor.remoteImage) {
                      target.src = selectedFlavor.remoteImage;
                    } else if (target.src !== BRAND_CONFIG.logoUrl) {
                      target.src = BRAND_CONFIG.logoUrl;
                    }
                  }}
                  alt={`${selectedFlavor.name} ${selectedFlavor.flavor}`}
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="eager"
                  width="450"
                  height="520"
                />

                <div className="absolute top-4 left-4 bg-white p-1 rounded-xl shadow-md border border-emerald-950/20">
                  <img
                    src={BRAND_CONFIG.logoUrl}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== BRAND_CONFIG.localLogoUrl) {
                        target.src = BRAND_CONFIG.localLogoUrl;
                      }
                    }}
                    alt="HI-5 Logo"
                    className="w-9 h-9 object-contain"
                    referrerPolicy="no-referrer"
                    width="36"
                    height="36"
                  />
                </div>

                {selectedFlavor.badge && (
                  <div className="absolute top-4 right-4 bg-emerald-950/90 backdrop-blur-sm border border-emerald-700/60 px-2.5 py-1 rounded-full">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                      {selectedFlavor.badge}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Product Detail & Order CTA */}
            <div className="lg:col-span-7 flex flex-col">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-emerald-950">
                  {selectedFlavor.badge || 'Official Flavor'}
                </span>
                <span className="text-xs text-emerald-300 font-medium">
                  Carbonated Soft Drink
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2 tracking-tight">
                {selectedFlavor.name}
              </h3>

              <div className="text-lg sm:text-xl font-display font-bold text-amber-400 mb-5 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>{selectedFlavor.flavor}</span>
              </div>

              <p className="text-base text-emerald-100/80 leading-relaxed mb-6">
                {selectedFlavor.description}
              </p>

              {/* Minimal Info Switcher */}
              <div className="flex border-b border-emerald-800/40 mb-5 gap-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === 'profile'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-emerald-300/60 hover:text-white'
                  }`}
                >
                  Taste & Profile
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('serving')}
                  className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === 'serving'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-emerald-300/60 hover:text-white'
                  }`}
                >
                  Serving Suggestion
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('wholesale')}
                  className={`pb-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 -mb-px ${
                    activeTab === 'wholesale'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-emerald-300/60 hover:text-white'
                  }`}
                >
                  Packaging & Supply
                </button>
              </div>

              {/* Clean Info Display */}
              <div className="bg-[#031509] rounded-2xl p-5 border border-emerald-800/40 mb-8 min-h-[85px] flex items-center">
                {activeTab === 'profile' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{selectedFlavor.tagline}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-emerald-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Fine carbonation calibrated for smooth and crisp drinkability</span>
                    </div>
                  </div>
                )}

                {activeTab === 'serving' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{selectedFlavor.bestServed}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-emerald-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Ideal pairing for meals, street food, and afternoon gatherings</span>
                    </div>
                  </div>
                )}

                {activeTab === 'wholesale' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{selectedFlavor.packaging}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-emerald-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Direct fulfillment across Ethiopia by Elwad Wholesale Trade</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenOrderModal}
                  id="flagship-order-btn"
                  className="px-8 py-3.5 rounded-full font-display font-bold text-sm uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-xl shadow-amber-400/20 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-950" />
                  <span>Order Now</span>
                </button>

                <a
                  href="#wholesale"
                  className="px-6 py-3.5 rounded-full font-semibold text-sm text-emerald-200 hover:text-white bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/50 transition-all flex items-center gap-2"
                >
                  <span>Wholesale Details</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Six HI-5 Flavors Product Showcase Grid */}
        <div className="rounded-2xl bg-[#03170a] border border-emerald-800/40 p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400 block mb-1">
                Official Flavor Collection
              </span>
              <h4 className="font-display font-bold text-2xl text-white">
                Six Signature HI-5 Flavors
              </h4>
            </div>
            <span className="text-xs text-emerald-300/70">
              Click any flavor to view details or place a wholesale order
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HI5_FLAVORS.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedFlavor(item)}
                className={`p-5 rounded-2xl bg-[#021006] border transition-all cursor-pointer flex flex-col justify-between group ${
                  selectedFlavor.id === item.id 
                    ? 'border-amber-400/80 shadow-lg shadow-amber-400/10' 
                    : 'border-emerald-900/60 hover:border-emerald-700/60'
                }`}
              >
                {/* Bottle Image Frame with clean white background */}
                <div className="relative w-full aspect-[4/3.4] rounded-xl overflow-hidden bg-white p-2.5 mb-4 flex items-center justify-center">
                  <img
                    src={item.image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (item.remoteImage && target.src !== item.remoteImage) {
                        target.src = item.remoteImage;
                      } else if (target.src !== BRAND_CONFIG.logoUrl) {
                        target.src = BRAND_CONFIG.logoUrl;
                      }
                    }}
                    alt={`${item.name} ${item.flavor}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
                    loading="lazy"
                    width="300"
                    height="250"
                  />
                  
                  {item.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-950/90 text-amber-400 border border-emerald-800/60">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h5 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                      {item.flavor}
                    </h5>
                    <span className="text-xs text-amber-400/90 font-medium">
                      HI-5
                    </span>
                  </div>
                  <p className="text-xs text-emerald-200/70 line-clamp-2 mb-4 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-900/50 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium">
                    {selectedFlavor.id === item.id ? 'Currently Selected' : 'Click to View'}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFlavor(item);
                      onOpenOrderModal();
                    }}
                    className="px-3 py-1 rounded-lg bg-emerald-950 hover:bg-amber-400 hover:text-emerald-950 border border-emerald-700/50 text-[11px] font-bold uppercase tracking-wider text-emerald-200 transition-colors"
                  >
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Flavor Collection Reference Banner */}
        <div className="rounded-2xl bg-[#031509] border border-emerald-800/40 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 aspect-[16/10] rounded-xl overflow-hidden bg-white p-2 border border-emerald-700/30 flex items-center justify-center">
            <img
              src={FULL_COLLECTION_IMAGE.local}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== FULL_COLLECTION_IMAGE.remote) {
                  target.src = FULL_COLLECTION_IMAGE.remote;
                }
              }}
              alt={FULL_COLLECTION_IMAGE.title}
              className="w-full h-full object-contain"
              loading="lazy"
              width="500"
              height="320"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 block mb-2">
              All 6 Varieties In Stock
            </span>
            <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
              COMPLETE FLAVOR LINEUP
            </h4>
            <p className="text-sm text-emerald-100/75 leading-relaxed mb-6">
              Elwad Wholesale Trade supplies all six HI-5 soft drink flavors in standard commercial crates for retail stores, supermarkets, restaurants, and regional wholesalers across Ethiopia.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="px-6 py-3 rounded-full font-display font-bold text-xs uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 text-center transition-all inline-flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-950" />
                <span>Order Full Collection</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
