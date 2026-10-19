import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { translations } = useLanguage();

  const localizedNavItems = [
    { label: translations.nav.home, path: '/' },
    { label: translations.nav.packages, path: '/packages' },
    { label: translations.nav.gallery, path: '/gallery' },
    { label: translations.nav.about, path: '/about' },
    { label: translations.nav.contact, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group" aria-label="KM Wedding Planner - Home">
            <svg width="60" height="40" viewBox="0 0 60 40" className="text-charcoal group-hover:text-burgundy transition-colors">
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {localizedNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active text-burgundy font-semibold' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Language Selector + Mobile toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Language Selector */}
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>

            <Link to="/plan" className="btn-primary hidden sm:inline-flex" id="nav-plan-cta">
              {translations.nav.planDay}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-charcoal hover:text-burgundy transition-colors focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              id="mobile-menu-button"
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      {isOpen && (
        <>
          <div className="mobile-nav-overlay" onClick={() => setIsOpen(false)} />
          <div className="mobile-nav-panel flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-8">
                <Link to="/" aria-label="KM Wedding Planner" onClick={() => setIsOpen(false)}>
                  <svg width="50" height="34" viewBox="0 0 60 40" className="text-charcoal">
                    <text x="0" y="32" fontFamily="'Playfair Display', Georgia, serif" fontSize="36" fontWeight="400" fontStyle="italic" fill="currentColor">
                      KM
                    </text>
                  </svg>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-charcoal hover:text-burgundy transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-1">
                {localizedNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm font-medium tracking-wider uppercase transition-colors rounded-lg ${
                        isActive
                          ? 'text-burgundy bg-burgundy/10 font-bold'
                          : 'text-charcoal hover:text-burgundy hover:bg-charcoal/5'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Bottom: Mobile Language Selector & CTA */}
            <div className="pt-6 border-t border-charcoal/10 space-y-4">
              <LanguageSelector variant="mobile" />

              <Link
                to="/plan"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center"
              >
                {translations.nav.planDay}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
