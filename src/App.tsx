import React, { useState } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductExperience } from './components/ProductExperience';
import { WhyHi5 } from './components/WhyHi5';
import { WholesaleB2B } from './components/WholesaleB2B';
import { AboutElwad } from './components/AboutElwad';
import { Gallery } from './components/Gallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { BackToTop } from './components/BackToTop';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderModalTab, setOrderModalTab] = useState<'call' | 'whatsapp' | 'quote'>('whatsapp');

  const handleOpenOrderModal = (tab: 'call' | 'whatsapp' | 'quote' = 'whatsapp') => {
    setOrderModalTab(tab);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020e05] text-zinc-100 flex flex-col selection:bg-amber-400 selection:text-emerald-950">
      {/* Entrance Polish Loader */}
      <PageLoader />

      {/* Main Sticky Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Hero Commercial Campaign */}
      <main className="flex-1">
        <Hero onOpenOrderModal={() => handleOpenOrderModal('call')} />
        
        {/* Brand Introduction Section */}
        <BrandIntro />

        {/* Product Showcase Section */}
        <ProductShowcase onOpenOrderModal={() => handleOpenOrderModal('whatsapp')} />

        {/* The Sensory Experience Section */}
        <ProductExperience />

        {/* Why Choose HI-5 Section */}
        <WhyHi5 />

        {/* Dedicated B2B Wholesale Section for Elwad Wholesale Trade */}
        <WholesaleB2B onOpenOrderModal={handleOpenOrderModal} />

        {/* About Elwad Wholesale Trade Section */}
        <AboutElwad onOpenOrderModal={() => handleOpenOrderModal('quote')} />

        {/* Premium Brand Visual Gallery */}
        <Gallery />

        {/* Corporate Contact Section */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />
      <MobileBottomBar onOpenOrderModal={handleOpenOrderModal} />

      {/* Order Now Multi-Channel Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        defaultTab={orderModalTab}
      />
    </div>
  );
}
