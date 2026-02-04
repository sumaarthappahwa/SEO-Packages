'use client';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="https://www.dodigital.marketing/images/home/dodigital.marketing-logo.png" 
                alt="Do Digital Marketing" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#audience" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Target Audience</a>
            <a href="#packages" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Packages</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">FAQs</a>
            <button className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all shadow-md shadow-brand/10 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;