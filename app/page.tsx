import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Hero from '../components/Hero.tsx';
import AudienceSection from '../components/AudienceSection.tsx';
import PricingSection from '../components/PricingSection.tsx';
import FAQSection from '../components/FAQSection.tsx';
import Footer from '../components/Footer.tsx';
import WhatsAppButton from '../components/WhatsAppButton.tsx';
import TestimonialsSection from '../components/TestimonialsSection.tsx';

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