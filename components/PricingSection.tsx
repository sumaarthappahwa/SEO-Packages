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

const AnimatedCounter: React.FC<{ value: number; trigger: boolean }> = ({ value, trigger }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger || value === 0) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [trigger, value]);
  return <span className="font-bold tabular-nums text-brand">{count}</span>;
};

const PricingSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Precision SEO Packages</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tailored solutions for local businesses, manufacturing giants, and global exporters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SEO_PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`relative flex flex-col p-8 rounded-3xl border transition-all ${pkg.featured ? 'bg-white border-brand shadow-2xl md:scale-105 z-10' : 'bg-slate-50 border-slate-100'}`}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{pkg.price}</span>
                  <span className="text-sm text-slate-500 font-medium">/month</span>
                </div>
                <p className="text-sm text-slate-500 mt-4 min-h-[40px]">{pkg.tagline}</p>
              </div>

              <div className="space-y-4 flex-grow">
                <FeatureItem label="GBP Optimization" active={pkg.gbpOptimization} />
                <FeatureItem label={pkg.productPagesSEO} active={true} />
                <FeatureItem label="Keywords Optimization" active={pkg.keywordOptimization} />
                <FeatureItem label={pkg.newPages} active={true} />
                <FeatureItem label={pkg.blogPosts} active={pkg.blogPosts !== 'No blog posts'} />
                <FeatureItem label="Finding Trends Analysis" active={pkg.trendFinding} />
                <FeatureItem label={`Target ${pkg.locations} Locations`} active={true} />
                
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.strategy.map((s) => (
                      <span key={s} className="px-3 py-1 bg-brand-light text-brand-dark text-xs font-bold rounded-full border border-brand/10">{s}</span>
                    ))}
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2"><CheckIcon /><AnimatedCounter value={pkg.citationBuilding} trigger={isVisible} /> Citations</div>
                    <div className="flex items-center gap-2"><CheckIcon /><AnimatedCounter value={pkg.guestPosts} trigger={isVisible} /> Guest Posts</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a href={pkg.paymentUrl} target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-4 rounded-xl font-bold ${pkg.featured ? 'bg-brand text-white' : 'bg-brand-light text-brand-dark'}`}>
                  Buy Package Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ label, active }: { label: string; active: boolean }) => (
  <div className={`flex items-start gap-3 text-sm ${active ? 'text-slate-700' : 'text-slate-400 italic'}`}>
    {active ? <CheckIcon /> : <CloseIcon />}
    <span>{label}</span>
  </div>
);

export default PricingSection;
