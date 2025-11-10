'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-950 text-white pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(212,167,71,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block bg-[--color-primary-light] text-[--color-primary] px-4 py-2 rounded border border-[--color-primary]/30 text-sm font-semibold tracking-wide uppercase">
              Comprehensive Business Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-[--color-primary]">Business Excellence</span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              From expert notary services to strategic consulting and operational optimization, we deliver comprehensive solutions that drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[--color-primary] text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-[--color-primary-dark] transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Get Started Today →
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-8 py-4 rounded-md font-semibold hover:border-[--color-primary] hover:bg-[--color-primary-light] transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className={`${isVisible ? 'scale-in' : 'opacity-0'} delay-200`}>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[--color-primary] rounded-lg flex items-center justify-center text-3xl mx-auto mb-4">
                  💼
                </div>
                <h3 className="text-2xl font-bold mb-2">Proven Excellence</h3>
                <p className="text-slate-400">Transformational leadership meets professional service</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[--color-primary] mb-2">10+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[--color-primary] mb-2">100%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Client Focused</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}