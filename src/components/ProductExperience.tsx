import React from 'react';
import { Sparkles, Flame, Users, ShieldCheck } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/brandConfig';

export const ProductExperience: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section 
      id="experience" 
      className="py-24 lg:py-32 bg-[#041a0c] relative border-t border-emerald-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
            The Sensory Experience
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
            CRAFTED FOR REFRESHMENT
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed">
            From the crisp carbonated crack of the cap to the smooth tropical sweetness, every bottle of HI-5 is crafted for immediate satisfaction.
          </p>
        </div>

        {/* 4 Pillars Grid - Minimal, spacious, high typographic contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXPERIENCE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#031509] border border-emerald-800/40 hover:border-amber-400/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-display font-bold text-xl text-emerald-700/40 group-hover:text-amber-400/40 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-base text-emerald-100/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
