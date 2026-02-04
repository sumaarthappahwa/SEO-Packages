import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-brand-light/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light border border-brand/10 mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">New: Generative AI Optimization</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
          Precision SEO for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">Growth-Driven SMEs</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
          The ultimate search framework for manufacturers and exporters. 
          Move beyond standard SEO with AEO and GEO strategies built for the AI era.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#packages" className="w-full sm:w-auto px-10 py-5 bg-brand text-white font-bold rounded-2xl shadow-2xl shadow-brand/30 hover:bg-brand-dark hover:-translate-y-1 transition-all text-lg">
            Compare SEO Packages
          </a>
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all text-lg">
            Book a Strategy Call
          </button>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-100/80">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">100%</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Targeted Traffic</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">3-6x</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Market Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">AEO+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">AI Ready</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">24/7</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Local Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
