'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    rating: 5,
    text: "Todd's attention to detail and professionalism made our loan signing process seamless. His expertise in apostille services saved us weeks of delays.",
    author: 'Sarah Mitchell',
    title: 'Real Estate Professional',
  },
  {
    rating: 5,
    text: "The business consulting services helped us structure our company properly from the start. Todd's strategic guidance has been invaluable.",
    author: 'Marcus Johnson',
    title: 'Startup Founder',
  },
  {
    rating: 5,
    text: "Mobile notary service was a game-changer for our busy schedule. Professional, punctual, and thorough every time.",
    author: 'Jennifer Adams',
    title: 'Business Owner',
  },
];

export default function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
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
    <section ref={sectionRef} id="testimonials" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[--color-primary-light] text-[--color-primary] px-4 py-2 rounded border border-[--color-primary]/20 text-sm font-semibold tracking-wide uppercase mb-6">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Trusted by businesses and individuals for professional, reliable service that gets results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                visibleCards[index] ? 'fade-in-up' : 'opacity-0'
              }`}
            >
              <div className="text-[--color-primary] text-2xl mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <div className="font-bold text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-600">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}