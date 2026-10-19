import { Link } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import PackageCard from '../components/ui/PackageCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import { weddingCategories } from '../data/packages';
import { useLanguage } from '../i18n/LanguageContext';

export default function PackagesPage() {
  const { translations } = useLanguage();

  return (
    <>
      <SEOHead
        title={`${translations.packagesSection.titleLine1} ${translations.packagesSection.titleLine2}`}
        description="Explore KM's wedding planning packages — Traditional, Muslim, Christian, Modern, Destination, Civil, and Custom. Find the perfect plan for your celebration."
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
          <p className="eyebrow mb-3">{translations.packagesSection.eyebrow}</p>
          <h1 className="section-heading mb-4">
            {translations.packagesSection.titleLine1}{' '}
            <span className="text-burgundy italic">{translations.packagesSection.titleLine2}</span>
          </h1>
          <p className="text-charcoal/65 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            {translations.packagesSection.description}
          </p>
        </div>
      </section>

      {/* All Packages Grid */}
      <section className="py-12 lg:py-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {weddingCategories.map((cat, i) => (
                <PackageCard key={cat.slug} category={cat} index={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-2xl lg:text-3xl text-white mb-4">
            {translations.finalCta.titleLine1} {translations.finalCta.titleLine2}
          </h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            {translations.finalCta.description}
          </p>
          <Link to="/plan" className="btn-gold" id="packages-plan-cta">
            {translations.finalCta.button}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
