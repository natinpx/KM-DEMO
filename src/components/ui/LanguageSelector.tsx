import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, type Language } from '../../i18n/types';

interface LanguageSelectorProps {
  variant?: 'light' | 'dark' | 'mobile';
  className?: string;
}

export default function LanguageSelector({ variant = 'light', className = '' }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  // If in mobile drawer, render a clean list or segmented selector
  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <label className="text-[11px] font-semibold uppercase tracking-wider text-charcoal/50 block">
          Language / ቋንቋ / Afaan
        </label>
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-charcoal/5 rounded-xl">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`py-2 px-3 text-xs rounded-lg font-medium transition-all text-center ${
                  isSelected
                    ? 'bg-white text-burgundy shadow-sm font-semibold'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
                aria-pressed={isSelected}
              >
                {lang.nativeName}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const isDark = variant === 'dark';

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all border ${
          isDark
            ? 'bg-white/10 text-white/90 border-white/20 hover:bg-white/20 hover:text-white'
            : 'bg-white/80 text-charcoal border-charcoal/15 hover:border-burgundy/40 hover:bg-white shadow-2xs'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-75"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-semibold">{currentLang.nativeName}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-1.5 w-44 rounded-xl py-1.5 shadow-xl z-50 border focus:outline-none animate-fade-in ${
            isDark
              ? 'bg-charcoal text-white border-white/15'
              : 'bg-white text-charcoal border-charcoal/10'
          }`}
          role="listbox"
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                  isSelected
                    ? isDark
                      ? 'bg-white/10 text-gold font-semibold'
                      : 'bg-burgundy/5 text-burgundy font-semibold'
                    : isDark
                    ? 'hover:bg-white/5 text-white/80'
                    : 'hover:bg-charcoal/5 text-charcoal/80'
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <span>{lang.nativeName}</span>
                {isSelected && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
