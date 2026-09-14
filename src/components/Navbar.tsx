import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronRight, MessageSquare } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface NavbarProps {
  onOpenOrderModal: (defaultTab?: 'call' | 'whatsapp' | 'quote') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why HI-5', href: '#why-hi5' },
    { name: 'B2B Wholesale', href: '#wholesale' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 z-50 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#03170a]/92 backdrop-blur-md shadow-lg shadow-black/40 border-b border-emerald-800/30 py-3'
            : 'bg-gradient-to-b from-[#031509]/90 to-transparent backdrop-blur-sm py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* HI-5 Logo & Brand Title */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
              aria-label="HI-5 Soft Drink Homepage"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md shadow-emerald-950/60 border border-emerald-500/40 bg-white flex items-center justify-center p-0.5 group-hover:border-amber-400 transition-colors">
                <img
                  src={BRAND_CONFIG.logoUrl}
                  onError={(e) => {
                    // Fallback to local copy if external image URL is blocked
                    const target = e.currentTarget;
                    if (target.src !== BRAND_CONFIG.localLogoUrl) {
                      target.src = BRAND_CONFIG.localLogoUrl;
                    }
                  }}
                  alt="HI-5 Soft Drink Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  width="48"
                  height="48"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white leading-tight flex items-center gap-1.5">
                  HI-5 <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">Soft Drink</span>
                </span>
                <span className="text-[11px] text-emerald-300/80 font-medium tracking-wide uppercase">
                  Elwad Wholesale Trade • Ethiopia
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-emerald-100/80 hover:text-amber-300 transition-colors rounded-md hover:bg-emerald-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right-Side Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenOrderModal('whatsapp')}
                className="px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-700/50 rounded-full transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                title="Direct Order via WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Wholesale Line</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenOrderModal()}
                id="navbar-order-btn"
                className="relative group overflow-hidden px-5 py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 shadow-md shadow-amber-400/20 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-950" />
                  Order Now
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenOrderModal()}
                className="sm:hidden px-3 py-1.5 rounded-full font-display font-bold text-xs uppercase tracking-wider text-emerald-950 bg-amber-400 shadow-sm"
              >
                Order
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-button"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-900/40 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-panel" 
            className="lg:hidden bg-[#031509]/98 border-b border-emerald-800/40 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-emerald-100 hover:text-amber-300 hover:bg-emerald-950/60 rounded-xl flex items-center justify-between border-b border-emerald-900/20"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-emerald-800/40 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal('call');
                }}
                className="w-full py-3 px-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-300 shadow-lg flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-950" />
                Order Now
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal('whatsapp');
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-200 bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Inquire via WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
