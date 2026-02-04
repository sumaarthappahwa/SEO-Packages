
import React, { useState, useEffect, useRef } from 'react';
import { SEO_PACKAGES } from '../constants';
import { SEOPackage } from '../types';

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
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger || value === 0) {
      setCount(0);
      setIsComplete(false);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 1200; // Faster, snappier duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use easing for a smoother feel: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.floor(easedProgress * value);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
        setIsComplete(true);
      }
    };

    window.requestAnimationFrame(step);
  }, [trigger, value]);

  return (
    <span className={`font-bold tabular-nums transition-all duration-300 ${isComplete ? 'text-brand scale-110' : 'text-slate-700'}`}>
      {count}
    </span>
  );
};

const PricingSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Specialized SEO Packages</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the package that aligns with your current growth stage and future global ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SEO_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
                pkg.featured 
                  ? 'bg-white border-brand shadow-2xl shadow-brand/10 scale-105 z-10' 
                  : 'bg-slate-50 border-slate-100'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-white text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                  Recommended for Pro Businesses
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{pkg.price}</span>
                  <span className="text-sm text-slate-500 font-medium">/month</span>
                </div>
                <p className="text-sm text-slate-500 mt-4 min-h-[40px] leading-snug">{pkg.tagline}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-slate-200/50 rounded-lg text-xs font-semibold text-slate-700">
                  {pkg.targetAudience}
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <FeatureItem label="ONPAGE Optimization" active={pkg.onpageOptimization} />
                <FeatureItem label="OFF-PAGE Optimization" active={pkg.offpageOptimization} />
                <FeatureItem label="GBP Optimization" active={pkg.gbpOptimization} />
                <FeatureItem label={pkg.productPagesSEO} active={true} />
                <FeatureItem label="Keywords Optimization" active={pkg.keywordOptimization} />
                <FeatureItem label={pkg.newPages} active={pkg.newPages !== 'No New Pages'} />
                <FeatureItem label={pkg.blogPosts} active={pkg.blogPosts !== 'No blog posts'} />
                <FeatureItem 
                  label={pkg.youtubeOptimization > 0 ? `${pkg.youtubeOptimization} YouTube Video Optimization` : 'No YouTube Video Optimization'} 
                  active={pkg.youtubeOptimization > 0} 
                />
                
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Link Building & Growth</p>
                  <div className="space-y-3">
                    <div className={`flex items-start gap-3 text-sm ${pkg.citationBuilding > 0 ? 'text-slate-700' : 'text-slate-400'}`}>
                      {pkg.citationBuilding > 0 ? <CheckIcon /> : <CloseIcon />}
                      <span className="flex items-center gap-1.5">
                        <AnimatedCounter value={pkg.citationBuilding} trigger={isVisible} /> Citation Building
                      </span>
                    </div>
                    <div className={`flex items-start gap-3 text-sm ${pkg.guestPosts > 0 ? 'text-slate-700' : 'text-slate-400'}`}>
                      {pkg.guestPosts > 0 ? <CheckIcon /> : <CloseIcon />}
                      <span className="flex items-center gap-1.5">
                        <AnimatedCounter value={pkg.guestPosts} trigger={isVisible} /> Guest Post{pkg.guestPosts !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Strategy Includes</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.strategy.map((s) => (
                      <span key={s} className="px-2 py-1 bg-brand-light text-brand-dark text-[10px] font-bold rounded uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <FeatureItem label="Trend Finding Analysis" active={pkg.trendFinding} />
                  <FeatureItem label={`Target ${pkg.locations} ${pkg.locations > 1 ? 'Locations' : 'Location'}`} active={true} />
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href={pkg.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all ${
                    pkg.featured 
                      ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20 hover:-translate-y-0.5 active:scale-95' 
                      : 'bg-brand-light text-brand-dark border border-brand/10 hover:bg-brand/10 hover:-translate-y-0.5 active:scale-95'
                  }`}
                >
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

interface FeatureItemProps {
  label: string;
  active: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ label, active }) => (
  <div className={`flex items-start gap-3 text-sm ${active ? 'text-slate-700' : 'text-slate-400'}`}>
    {active ? <CheckIcon /> : <CloseIcon />}
    <span>{label}</span>
  </div>
);

export default PricingSection;
