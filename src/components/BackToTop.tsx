import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      id="back-to-top-btn"
      aria-label="Scroll back to top"
      className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-30 w-11 h-11 rounded-full bg-emerald-900/90 hover:bg-amber-400 text-emerald-100 hover:text-emerald-950 border border-emerald-600/50 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
