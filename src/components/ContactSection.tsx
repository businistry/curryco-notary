'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
    if (typeof window !== 'undefined' && (window as any).Calendly && calendlyUrl) {
      (window as any).Calendly.initPopupWidget({ url: calendlyUrl });
    } else if (calendlyUrl) {
      window.open(calendlyUrl, '_blank');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please complete all fields.');
      return;
    }

    setStatus('Opening your email client…');
    
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[--color-primary] text-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 text-slate-800">
          Experience the difference that professional service and transformational leadership can make for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleCalendly}
            className="bg-slate-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-slate-950 transition-all hover:-translate-y-1 shadow-lg"
          >
            Schedule Service Now →
          </button>
          <button
            onClick={handleCalendly}
            className="bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-slate-900/10 transition-all"
          >
            Get Free Consultation
          </button>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex items-center gap-4 bg-slate-900/10 p-4 rounded-lg">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-md flex items-center justify-center text-xl flex-shrink-0">
              📞
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold mb-1">Phone</h4>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/[^0-9+]/g, '')}`} className="text-sm hover:underline">
                {process.env.NEXT_PUBLIC_PHONE}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/10 p-4 rounded-lg">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-md flex items-center justify-center text-xl flex-shrink-0">
              ✉️
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold mb-1">Email</h4>
              <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="text-sm hover:underline break-all">
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/10 p-4 rounded-lg">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-md flex items-center justify-center text-xl flex-shrink-0">
              📅
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold mb-1">Schedule</h4>
              <button onClick={handleCalendly} className="text-sm hover:underline text-left">
                Schedule a meeting
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/10 p-4 rounded-lg">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-md flex items-center justify-center text-xl flex-shrink-0">
              📍
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold mb-1">Office</h4>
              <p className="text-sm">401 Pine Street<br />St. Louis, MO 63102</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="px-4 py-3 rounded-md border border-slate-300 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="px-4 py-3 rounded-md border border-slate-300 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 outline-none transition-all"
            />
          </div>
          
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/20 outline-none transition-all mb-4"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              className="bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-950 transition-colors"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={handleCalendly}
              className="bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-slate-900/10 transition-colors"
            >
              Schedule a Call
            </button>
          </div>
          
          {status && (
            <p className="mt-4 text-center text-slate-900 font-medium">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}