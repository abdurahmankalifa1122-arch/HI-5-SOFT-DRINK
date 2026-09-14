import React from 'react';
import { Droplets, Zap, Eye, Truck, Check } from 'lucide-react';
import { WHY_HI5_FEATURES } from '../data/brandConfig';

export const WhyHi5: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-400" />;
      default:
        return <Check className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section 
      id="why-hi5" 
      className="py-24 lg:py-32 bg-[#020e05] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
            The Brand Advantage
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            WHY CHOOSE HI-5?
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/75 leading-relaxed">
            From consumer flavor appeal to commercial merchant support, HI-5 Soft Drink delivers quality and value.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_HI5_FEATURES.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-2xl bg-[#031509] border border-emerald-800/40 hover:border-amber-400/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-display font-extrabold text-2xl text-emerald-800/40 group-hover:text-amber-400/50 transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-emerald-200/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
