import React from 'react';
import { GlassWater, Sparkles, PackageCheck, Building2 } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 lg:py-32 bg-[#031509] relative border-t border-b border-emerald-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-3">
            Brand Story
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-5">
            MORE THAN A SOFT DRINK
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed">
            Formulated to deliver an invigorating thirst-quencher with a distinctive tropical banana profile, HI-5 brings premium quality and approachable daily refreshment to tables and gatherings across Ethiopia.
          </p>
        </div>

        {/* 4 Brand Pillars - Clean, minimal, and spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="p-7 rounded-2xl bg-[#041a0c] border border-emerald-800/40 hover:border-amber-400/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-amber-400 mb-6">
              <GlassWater className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Crisp Refreshment
            </h3>
            <p className="text-sm text-emerald-200/65 leading-relaxed">
              Balanced carbonation delivering an invigorating, clean thirst-quencher for warm afternoons and shared meals.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#041a0c] border border-emerald-800/40 hover:border-amber-400/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-amber-400 mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Signature Banana
            </h3>
            <p className="text-sm text-emerald-200/65 leading-relaxed">
              An aromatic tropical fruit bouquet and smooth sweet finish that sets HI-5 apart from conventional sodas.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#041a0c] border border-emerald-800/40 hover:border-amber-400/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-amber-400 mb-6">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Standout Packaging
            </h3>
            <p className="text-sm text-emerald-200/65 leading-relaxed">
              High-contrast emerald green and golden yellow styling engineered for immediate shelf appeal in stores and coolers.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#041a0c] border border-emerald-800/40 hover:border-amber-400/40 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-amber-400 mb-6">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Direct Distribution
            </h3>
            <p className="text-sm text-emerald-200/65 leading-relaxed">
              Backed by Elwad Wholesale Trade, providing dependable supply and direct merchant coordination nationwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
