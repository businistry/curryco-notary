import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Curry & Co Services <span className="text-[--color-primary]">LLC</span>
            </h4>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Professional notary and business consulting services delivered with transformational leadership principles.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="inline-block bg-[--color-primary-light] text-[--color-primary] px-3 py-1 rounded text-xs font-semibold">
                Licensed
              </span>
              <span className="inline-block bg-[--color-primary-light] text-[--color-primary] px-3 py-1 rounded text-xs font-semibold">
                Bonded
              </span>
              <span className="inline-block bg-[--color-primary-light] text-[--color-primary] px-3 py-1 rounded text-xs font-semibold">
                Insured
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Notary Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Apostille Authentication
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Loan Signing Agent
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Operational Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  About Todd Curry
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Leadership Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-[--color-primary] transition-colors">
                  Service Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/[^0-9+]/g, '')}`}
                  className="text-slate-400 hover:text-[--color-primary] transition-colors"
                >
                  {process.env.NEXT_PUBLIC_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="text-slate-400 hover:text-[--color-primary] transition-colors break-all"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-slate-400 mt-4">Mobile Service Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Curry & Co Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}