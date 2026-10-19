import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, type Language } from '../../i18n/types';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { translations, language, setLanguage } = useLanguage();

  const localizedNavItems = [
    { label: translations.nav.home, path: '/' },
    { label: translations.nav.packages, path: '/packages' },
    { label: translations.nav.gallery, path: '/gallery' },
    { label: translations.nav.about, path: '/about' },
    { label: translations.nav.contact, path: '/contact' },
  ];

  const packageLinks = [
    { name: translations.categories.traditional.title, slug: 'traditional' },
    { name: translations.categories.muslim.title, slug: 'muslim' },
    { name: translations.categories.christian.title, slug: 'christian' },
    { name: translations.categories.modern.title, slug: 'modern' },
    { name: translations.categories.destination.title, slug: 'destination' },
    { name: translations.categories.civil.title, slug: 'civil' },
  ];

  return (
    <footer className="bg-charcoal text-white/80 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4 group" aria-label="KM Wedding Planner">
              <svg width="60" height="40" viewBox="0 0 60 40" className="text-white group-hover:text-gold transition-colors">
                <text
                  x="0"
                  y="32"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontSize="36"
                  fontWeight="400"
                  fontStyle="italic"
                  fill="currentColor"
                >
                  KM
                </text>
              </svg>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-[280px]">
              {translations.footer.tagline1}
              <br />
              {translations.footer.tagline2}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-6">
              {translations.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {localizedNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-6">
              {translations.footer.packages}
            </h4>
            <ul className="space-y-3">
              {packageLinks.map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {pkg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-6">
              {translations.footer.getInTouch}
            </h4>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="text-sm text-white/60 hover:text-white transition-colors block"
              >
                {translations.footer.contactUs}
              </Link>
              <Link
                to="/plan"
                className="text-sm text-white/60 hover:text-white transition-colors block"
              >
                {translations.footer.planYourWedding}
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {['instagram', 'facebook', 'tiktok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Follow KM on ${social}`}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all"
                >
                  {social === 'instagram' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                  {social === 'facebook' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                  {social === 'tiktok' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.83a4.84 4.84 0 01-1-.14z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40">
            © {currentYear} {translations.footer.allRightsReserved}
          </p>

          {/* 4-Language selector in footer */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            {SUPPORTED_LANGUAGES.map((lang, idx) => {
              const isSelected = lang.code === language;
              return (
                <span key={lang.code} className="inline-flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLanguage(lang.code as Language)}
                    className={`transition-colors py-1 px-2 rounded ${
                      isSelected
                        ? 'text-gold font-bold bg-white/10'
                        : 'text-white/50 hover:text-white'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {lang.nativeName}
                  </button>
                  {idx < SUPPORTED_LANGUAGES.length - 1 && (
                    <span className="text-white/20 select-none">·</span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
