'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '📋',
    title: 'Notary Services',
    description: 'Professional document authentication with certified expertise in apostille services and loan signing.',
  },
  {
    icon: '💼',
    title: 'Business Consulting',
    description: 'Strategic guidance for business formation, compliance, and growth with proven leadership experience.',
  },
  {
    icon: '⚙️',
    title: 'Operational Solutions',
    description: 'Streamline operations with modern digital processes, workflow optimization, and virtual integration.',
  },
];

export default function OverviewSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
            });
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
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Three Distinct Service Areas
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you need document authentication, strategic business guidance, or operational optimization, 
            Curry & Co. delivers excellence across every service line. Each area is backed by transformational 
            leadership experience and a commitment to precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-center p-8 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-[--color-primary] transition-all duration-300 hover:-translate-y-2 ${
                visibleCards[index] ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center text-4xl mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}