'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '📋',
    title: 'Notary Services',
    description: 'Professional document authentication and notarization services with certified expertise in loan signing and apostille processes.',
    features: [
      'Apostille & Authentication Services',
      'Certified Loan Signing Agent',
      'Mobile & Remote Notarization',
      'Document Certification',
    ],
  },
  {
    icon: '💼',
    title: 'Business Consulting',
    description: 'Strategic guidance for business formation, compliance management, and growth planning with transformational leadership expertise.',
    features: [
      'Business Formation & Structure',
      'Regulatory Compliance Management',
      'Strategic Growth Planning',
      'Leadership Development',
    ],
  },
  {
    icon: '⚙️',
    title: 'Operational Solutions',
    description: 'Streamline your business operations with modern digital processes, workflow optimization, and virtual service integration.',
    features: [
      'Digital Document Management',
      'Workflow Process Automation',
      'Virtual Service Integration',
      'System Optimization',
    ],
  },
];

export default function ServicesSection() {
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
              }, index * 200);
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
    <section ref={sectionRef} id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[--color-primary-light] text-[--color-primary] px-4 py-2 rounded border border-[--color-primary]/20 text-sm font-semibold tracking-wide uppercase mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Solutions for Your Success
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore our three core service areas, each designed to meet your specific needs with professionalism and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-10 rounded-lg border-t-4 border-[--color-primary] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                visibleCards[index] ? 'fade-in-up' : 'opacity-0'
              }`}
            >
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700">
                    <span className="text-[--color-primary] text-xl font-bold mt-0.5">○</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className="inline-block bg-[--color-primary] text-slate-900 px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-[--color-primary-dark] transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}