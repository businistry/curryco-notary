'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
    if (typeof window !== 'undefined' && (window as any).Calendly && calendlyUrl) {
      (window as any).Calendly.initPopupWidget({ url: calendlyUrl });
    } else if (calendlyUrl) {
      window.open(calendlyUrl, '_blank');
    }
  };

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-slate-900'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white hover:opacity-90 transition-opacity">
          Curry & Co <span className="text-[--color-primary]">Services LLC</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-[--color-primary] transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCalendly}
          className="hidden md:inline-flex bg-[--color-primary] text-slate-900 px-6 py-2.5 rounded-md font-semibold hover:bg-[--color-primary-dark] transition-all hover:-translate-y-0.5"
        >
          Schedule Service
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-slate-900 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 p-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg hover:text-[--color-primary] transition-colors block"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={(e) => {
                handleCalendly(e);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[--color-primary] text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-[--color-primary-dark] transition-colors"
            >
              Schedule Service
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}