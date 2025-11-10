'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '✓',
    title: 'Business Leadership Experience',
    description: 'Owner & CEO with extensive experience in operational transformation, team development, and strategic growth.',
  },
  {
    icon: '✓',
    title: 'Certified Professional',
    description: 'Licensed Notary Public and Certified Loan Signing Agent with comprehensive training and ongoing education.',
  },
  {
    icon: '✓',
    title: 'Commitment to Excellence',
    description: 'Data-driven approach with a people-first philosophy, ensuring precision and reliability across all services.',
  },
];

const principles = [
  {
    icon: '🎯',
    title: 'Consistency',
    description: 'Reliable systems and clear expectations in every interaction.',
  },
  {
    icon: '💬',
    title: 'Communication',
    description: 'Transparent dialogue that builds trust and understanding.',
  },
  {
    icon: '📊',
    title: 'Calculated Improvement',
    description: 'Strategic enhancements that create lasting value.',
  },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="inline-block bg-[--color-primary-light] text-[--color-primary] px-4 py-2 rounded border border-[--color-primary]/20 text-sm font-semibold tracking-wide uppercase mb-6">
              About Todd Curry
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Transformational Leadership Meets Professional Service
            </h2>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              As Owner & CEO of Mav Services Group, Todd Curry has built a proven track record of turning 
              underperforming operations into thriving enterprises through strategic leadership and operational excellence.
            </p>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              This same transformational approach drives every service at Curry & Co., whether it's ensuring precision 
              in document authentication, guiding businesses through formation and compliance, or optimizing operational 
              workflows for maximum efficiency.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-4 items-start border-b border-slate-200 pb-4 last:border-0">
                  <div className="w-10 h-10 bg-[--color-primary-light] rounded-md flex items-center justify-center text-[--color-primary] flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Principles Card */}
          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="bg-slate-900 text-white p-10 rounded-xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Core Principles</h3>
              
              <div className="space-y-6">
                {principles.map((principle) => (
                  <div key={principle.title} className="flex gap-6 items-start border-b border-slate-700 pb-6 last:border-0">
                    <div className="w-12 h-12 bg-[--color-primary] rounded-md flex items-center justify-center text-2xl flex-shrink-0">
                      {principle.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{principle.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}