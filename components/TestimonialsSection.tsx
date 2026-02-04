
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TexWorld Exports",
    text: "Do Digital Marketing transformed our manufacturing lead generation. We've seen a 300% increase in inquiries from European buyers within just 4 months of the Enterprise package.",
    avatar: "RK"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, GreenLeaf Boutique",
    text: "The local SEO optimization for our SME has been a game-changer. We're now ranking #1 for all our core keywords in our city. Best investment we've made.",
    avatar: "SJ"
  },
  {
    name: "Mark Steiner",
    role: "Director, MedTech Solutions",
    text: "The AEO and GEO strategy really works. Our brand authority in the medical equipment space has skyrocketed globally through AI-driven search visibility.",
    avatar: "MS"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Trusted by Leading Manufacturers & SMEs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Our clients dominate their markets. See what they say about their journey with Do Digital Marketing.
          </p>
          <a 
            href="https://share.google/6XFrwraGv2sSG0Akp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand font-bold hover:underline"
          >
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5 w-auto" />
            <span>Read all 5-star reviews</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex-grow">
                <p className="text-slate-600 italic mb-8 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-dark font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
