
import React from 'react';

const FAQS = [
  {
    q: "What is AEO and GEO in your strategies?",
    a: "AEO stands for Answer Engine Optimization, which ensures your content is picked up by voice assistants and 'People Also Ask' sections. GEO stands for Generative Engine Optimization, focusing on your visibility within AI-driven search results like Google SGE and Perplexity."
  },
  {
    q: "Do you handle content writing for the blog posts?",
    a: "Yes, our Pro and Enterprise packages include high-quality, SEO-optimized blog writing tailored to your industry trends and keywords."
  },
  {
    q: "Is Google Business Profile (GBP) important for exporters?",
    a: "Absolutely. While you may target global markets, a properly optimized GBP provides social proof and local relevance that builds trust with international buyers searching for your specific manufacturing expertise."
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes, our packages are designed to scale as your business grows. Most our clients start with Growth and transition to Pro as they expand their product lines."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Questions & Answers</h2>
          <p className="text-slate-400">Everything you need to know about our modern SEO methodology.</p>
        </div>
        
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-brand/50 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-brand">{faq.q}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
