import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AudienceSection from '../components/AudienceSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="audience" className="scroll-mt-20">
          <AudienceSection />
        </section>
        <section id="packages" className="scroll-mt-20">
          <PricingSection />
        </section>
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}