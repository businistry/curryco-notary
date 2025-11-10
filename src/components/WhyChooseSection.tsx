'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '🎯',
    title: 'Multi-Disciplinary Expertise',
    description: 'Comprehensive capabilities across notary, consulting, and operational services backed by real-world experience.',
  },
  {
    icon: '👥',
    title: 'Transformational Leadership',
    description: 'Proven track record of turning challenges into success stories across multiple business domains.',
  },
  {
    icon: '🛡️',
    title: 'Licensed & Certified',
    description: 'Fully licensed, bonded, and insured with specialized certifications ensuring compliance and quality.',
  },
  {
    icon: '📈',
    title: 'Results Driven',
    description: 'Data-driven approach focused on delivering measurable outcomes that support your goals.',
  },
];

export default function WhyChooseSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
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
    <section ref={sectionRef} className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[--color-primary-light] text-[--color-primary] px-4 py-2 rounded border border-[--color-primary]/30 text-sm font-semibold tracking-wide uppercase mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Excellence Across All Services
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            With transformational leadership experience and a commitment to precision, we deliver exceptional results in every engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center ${visibleItems[index] ? 'fade-in-up' : 'opacity-0'}`}
            >
              <div className="w-20 h-20 bg-[--color-primary] rounded-lg flex items-center justify-center text-4xl mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}