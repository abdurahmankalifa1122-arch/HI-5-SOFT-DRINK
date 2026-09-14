import React, { useEffect, useState } from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Quick, elegant 400ms entrance pulse for agency polish
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#020e05] flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300"
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-white p-2 shadow-2xl border-2 border-emerald-500 animate-pulse flex items-center justify-center">
          <img
            src={BRAND_CONFIG.logoUrl}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== BRAND_CONFIG.localLogoUrl) {
                target.src = BRAND_CONFIG.localLogoUrl;
              }
            }}
            alt="HI-5 Soft Drink Loading"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mt-4 flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-amber-400 font-display">
          <span>HI-5 SOFT DRINK</span>
          <span className="text-emerald-500">•</span>
          <span className="text-emerald-300">ETHIOPIA</span>
        </div>
      </div>
    </div>
  );
};
