
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-light/50 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-brand/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">SEO, AEO & GEO Specialized</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Target Your Audience with <br />
          <span className="text-brand italic">Precision-Engineered</span> SEO
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          The ultimate SEO framework for SMEs, manufacturers, and exporters. Scale your reach from local storefronts to 6+ international markets with our tailored performance packages including AEO and GEO.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#packages" className="w-full sm:w-auto px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20 hover:bg-brand-dark hover:-translate-y-0.5 transition-all">
            View All Packages
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
            Talk to an Expert
          </button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 opacity-60">
          <span className="font-bold text-slate-400 text-lg uppercase tracking-widest">Small Business First</span>
          <span className="font-bold text-slate-400 text-lg uppercase tracking-widest">Global Export Friendly</span>
          <span className="font-bold text-slate-400 text-lg uppercase tracking-widest">Manufacturer Focus</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
