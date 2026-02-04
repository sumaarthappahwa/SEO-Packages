
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudienceSection from './components/AudienceSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TestimonialsSection from './components/TestimonialsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-light selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="audience" className="scroll-mt-20">
          <AudienceSection />
        </section>
        <section id="packages" className="scroll-mt-20 bg-white">
          <PricingSection />
        </section>
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      
      {/* WhatsApp Button for instant contact */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
