
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <a href="https://www.dodigital.marketing" target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src="https://www.dodigital.marketing/images/home/dodigital.marketing-logo.png" 
                alt="Do Digital Marketing" 
                className="h-8 w-auto"
              />
            </a>
          </div>
          <p className="text-slate-500 max-w-sm">
            Empowering manufacturers, exporters, and local SMEs with performance-driven marketing that actually drives revenue.
          </p>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Powered By <a href="https://www.dodigital.marketing" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:text-brand-dark transition-colors">Do Digital Marketing</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
