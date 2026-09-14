import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#020a04] border-t border-emerald-900/60 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-emerald-900/40">
          
          {/* Column 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-emerald-600/30">
                <img
                  src={BRAND_CONFIG.logoUrl}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== BRAND_CONFIG.localLogoUrl) {
                      target.src = BRAND_CONFIG.localLogoUrl;
                    }
                  }}
                  alt="HI-5 Soft Drink"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  width="44"
                  height="44"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-wider block">
                  HI-5 <span className="text-amber-400 text-xs font-semibold">SOFT DRINK</span>
                </span>
                <span className="text-xs text-emerald-300/80 font-medium">
                  {BRAND_CONFIG.companyName}
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-100/75 max-w-sm leading-relaxed">
              Distinctive sparkling banana soft drink distributed across Ethiopia for everyday moments, dining, and celebrations.
            </p>
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  About Brand
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  Product Showcase
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  Brand Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Commercial */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Commercial
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#wholesale" onClick={(e) => handleNavClick(e, '#wholesale')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  Retail Supply
                </a>
              </li>
              <li>
                <a href="#wholesale" onClick={(e) => handleNavClick(e, '#wholesale')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  Bulk Wholesale
                </a>
              </li>
              <li>
                <a href="#wholesale" onClick={(e) => handleNavClick(e, '#wholesale')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  Dining & Hospitality
                </a>
              </li>
              <li>
                <a href="#about-company" onClick={(e) => handleNavClick(e, '#about-company')} className="text-emerald-200/70 hover:text-amber-400 transition-colors">
                  About Elwad Trade
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Details */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-emerald-200/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BRAND_CONFIG.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{BRAND_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{BRAND_CONFIG.contact.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{BRAND_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <div>
            {BRAND_CONFIG.meta.copyright}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-emerald-300 hover:text-amber-400 transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
