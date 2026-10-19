import { Link } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFoundPage() {
  const { translations } = useLanguage();

  return (
    <>
      <SEOHead title={translations.notFound.title} description={translations.notFound.message} />

      <section className="min-h-screen flex items-center justify-center bg-ivory px-6">
        <div className="text-center max-w-md animate-fade-in-up">
          <h1 className="font-serif text-[7rem] sm:text-[8rem] leading-none text-charcoal/10 mb-0 select-none">404</h1>
          <h2 className="font-serif text-3xl text-charcoal mb-4 -mt-6">{translations.notFound.title}</h2>
          <p className="text-charcoal/65 text-sm mb-8 leading-relaxed">
            {translations.notFound.message}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary" id="404-home">
              {translations.notFound.button}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/packages" className="btn-secondary" id="404-packages">
              {translations.common.viewAllPackages}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
