'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SEO_PACKAGES } from '../constants';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5 text-slate-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PricingSection: React.FC = () => {
  return (
    <div className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6 tracking-tight">Investment Options</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose a package that aligns with your business goals. From local startups to enterprise-level manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {SEO_PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`group relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-300 ${pkg.featured ? 'bg-white border-brand ring-4 ring-brand/5 shadow-2xl md:scale-105 z-10' : 'bg-white border border-slate-200 hover:border-brand/40 shadow-xl shadow-slate-200/50'}`}>
              
              {pkg.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-brand text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  Most Recommended
                </div>
              )}

              <div className="mb-8">
                <span className="text-brand font-bold text-sm uppercase tracking-widest block mb-2">{pkg.targetAudience}</span>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">{pkg.price}</span>
                  <span className="text-slate-400 font-medium">/month</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{pkg.tagline}</p>
              </div>

              <div className="space-y-5 flex-grow mb-10">
                <FeatureItem label="GBP Optimization" active={pkg.gbpOptimization} />
                <FeatureItem label={pkg.productPagesSEO} active={true} />
                <FeatureItem label="Keywords Optimization" active={pkg.keywordOptimization} />
                <FeatureItem label={pkg.newPages} active={true} />
                <FeatureItem label={pkg.blogPosts} active={pkg.blogPosts !== 'No blog posts'} />
                <FeatureItem label="Finding Trends Analysis" active={pkg.trendFinding} />
                <FeatureItem label={`Target ${pkg.locations} Location(s)`} active={true} />
                
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.strategy.map((s) => (
                      <span key={s} className="px-3 py-1 bg-brand-light text-brand-dark text-[10px] font-black rounded-lg border border-brand/5 uppercase tracking-wider">{s} STRATEGY</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-600">
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-brand">{pkg.citationBuilding}</span> Citations
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-brand">{pkg.guestPosts}</span> Guest Posts
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href={pkg.paymentUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`block w-full text-center py-5 rounded-2xl font-black tracking-wide transition-all ${pkg.featured ? 'bg-brand text-white hover:bg-brand-dark shadow-xl shadow-brand/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                SELECT PACKAGE
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ label, active }: { label: string; active: boolean }) => (
  <div className={`flex items-center gap-3 text-[15px] font-medium ${active ? 'text-slate-700' : 'text-slate-300 line-through decoration-slate-200'}`}>
    {active ? <CheckIcon /> : <CloseIcon />}
    <span>{label}</span>
  </div>
);

export default PricingSection;
