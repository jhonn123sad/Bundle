import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { BundleContent } from './components/BundleContent';
import { Transformation } from './components/Transformation';
import { About } from './components/About';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the Hero section (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      
      {/* Sticky CTA Header for Mobile/Desktop when scrolled */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md transition-transform duration-300 transform ${showStickyCTA ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-serif font-bold text-brand-dark hidden sm:block">Bundle Carreira Internacional</span>
          <Button onClick={scrollToOffer} variant="primary" className="py-2 px-6 text-sm ml-auto sm:ml-0">
            Quero trabalhar em dólar
          </Button>
        </div>
      </div>

      <main>
        <Hero onCtaClick={scrollToOffer} />
        <SocialProof />
        <BundleContent />
        <Transformation />
        <About />
        <Offer onBuyClick={() => alert('Redirecionando para o Checkout...')} />
        <FAQ />
      </main>

      <Footer />

      {/* Floating Scroll to Top (Optional, but nice UX) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 bg-brand-dark text-white rounded-full shadow-lg transition-opacity duration-300 z-40 hover:bg-brand-primary ${showStickyCTA ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

    </div>
  );
};

export default App;