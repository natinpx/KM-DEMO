import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import InquiryForm from '../components/forms/InquiryForm';
import ScrollReveal from '../components/ui/ScrollReveal';
import { getCategoryBySlug } from '../data/packages';
import { useLanguage } from '../i18n/LanguageContext';

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const { translations } = useLanguage();

  if (!category || !slug) {
    return <Navigate to="/404" replace />;
  }

  const catTrans = translations.categories[slug as keyof typeof translations.categories];
  const title = catTrans?.title || category.title;
  const nativeTitle = catTrans?.nativeTitle || category.titleAmharic;
  const description = catTrans?.desc || category.description;

  // Helper to translate event names & descriptions
  const getEventTrans = (eventName: string, originalDesc: string) => {
    const key = eventName.toLowerCase().replace(/[^a-z]/g, '');
    if (key.includes('shimgelina')) return translations.events.shimgelina;
    if (key.includes('tloshi') || key.includes('dowry')) return translations.events.tloshi;
    if (key.includes('bridal') || key.includes('shower')) return translations.events.bridalShower;
    if (key.includes('serg') || key.includes('cidha')) return translations.events.serg;
    if (key.includes('mels') || key.includes('deebii')) return translations.events.mels;
    if (key.includes('kilkil') || key.includes('qilqila')) return translations.events.kilkil;
    if (key.includes('nikah')) return translations.events.nikah;
    if (key.includes('henna')) return translations.events.henna;
    return { name: eventName, desc: originalDesc };
  };

  // Helper to translate tier descriptions
  const getTierTrans = (tierId: string) => {
    const isMuslim = slug === 'muslim';
    if (tierId.includes('beteseb')) {
      return {
        name: translations.packageTiers.beteseb.name,
        english: translations.packageTiers.beteseb.englishName,
        desc: isMuslim
          ? translations.packageTiers.beteseb.descMuslim
          : translations.packageTiers.beteseb.descTraditional,
      };
    }
    if (tierId.includes('guad')) {
      return {
        name: translations.packageTiers.guad.name,
        english: translations.packageTiers.guad.englishName,
        desc: isMuslim
          ? translations.packageTiers.guad.descMuslim
          : translations.packageTiers.guad.descTraditional,
      };
    }
    if (tierId.includes('abro-adeg')) {
      return {
        name: translations.packageTiers.abroAdeg.name,
        english: translations.packageTiers.abroAdeg.englishName,
        desc: isMuslim
          ? translations.packageTiers.abroAdeg.descMuslim
          : translations.packageTiers.abroAdeg.descTraditional,
      };
    }
    if (tierId.includes('engda')) {
      return {
        name: translations.packageTiers.engda.name,
        english: translations.packageTiers.engda.englishName,
        desc: isMuslim
          ? translations.packageTiers.engda.descMuslim
          : translations.packageTiers.engda.descTraditional,
      };
    }
    return null;
  };

  return (
    <>
      <SEOHead
        title={`${title} — KM Wedding Planner`}
        description={description}
      />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-charcoal">
        <div className="relative h-[360px] md:h-[440px]">
          <img
            src={category.image}
            alt={`${title} — KM Wedding Planner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full pb-12 animate-fade-in-up">
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-white transition-colors mb-4"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {translations.common.backToPackages}
              </Link>
              <p className="eyebrow text-gold mb-2">{nativeTitle}</p>
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">{title}</h1>
              <p className="text-white/75 max-w-2xl leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Detailed Packages (Traditional & Muslim) */}
          {category.hasDetailedPackages && category.packages.length > 0 && (
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="eyebrow mb-3">{translations.packagesSection.eyebrow}</p>
                <h2 className="section-heading mb-4">
                  {translations.packagesSection.titleLine1}{' '}
                  <span className="text-burgundy italic">{translations.packagesSection.titleLine2}</span>
                </h2>
                <p className="text-charcoal/65 mt-2 max-w-lg mx-auto text-sm">
                  {translations.packagesSection.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {category.packages.map((pkg) => {
                  const tierInfo = getTierTrans(pkg.id);
                  const tierName = tierInfo?.name || pkg.nameAmharic;
                  const tierEnglish = tierInfo?.english || pkg.nameEnglish;
                  const tierDesc = tierInfo?.desc || pkg.description;

                  return (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-2xl border border-charcoal/8 overflow-hidden card-hover shadow-xs flex flex-col justify-between"
                      id={`package-${pkg.id}`}
                    >
                      <div>
                        {/* Package header */}
                        <div className="bg-charcoal p-6 sm:p-8">
                          <div className="flex items-baseline justify-between gap-4">
                            <div>
                              <h3 className="font-serif text-2xl text-white">
                                {tierName}{' '}
                                <span className="text-gold font-normal text-lg sm:text-xl">
                                  — {pkg.nameTransliterated}
                                </span>
                              </h3>
                              <p className="text-white/60 text-xs sm:text-sm mt-1 uppercase tracking-wider">
                                {tierEnglish}
                              </p>
                            </div>
                            {pkg.eventCount && (
                              <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap border border-gold/30">
                                {pkg.eventCount}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Package body */}
                        <div className="p-6 sm:p-8">
                          <p className="text-charcoal/75 text-sm leading-relaxed mb-6">
                            {tierDesc}
                          </p>

                          {/* Events list */}
                          {pkg.events.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal mb-4">
                                {translations.common.included}
                              </h4>
                              <div className="space-y-3.5">
                                {pkg.events.map((event, i) => {
                                  const evTrans = getEventTrans(event.name, event.description);
                                  return (
                                    <div
                                      key={i}
                                      className="flex gap-4 p-4 bg-ivory/60 rounded-xl border border-charcoal/5"
                                    >
                                      <span className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold-dark text-xs font-bold">
                                        {i + 1}
                                      </span>
                                      <div>
                                        <h5 className="text-sm font-semibold text-charcoal">
                                          {evTrans.name}
                                          {event.nameAmharic && (
                                            <span className="text-gold-dark font-normal ml-2">
                                              ({event.nameAmharic})
                                            </span>
                                          )}
                                        </h5>
                                        <p className="text-charcoal/65 text-xs leading-relaxed mt-1">
                                          {evTrans.desc}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Options (for Guad packages) */}
                          {pkg.options && pkg.options.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal mb-4">
                                {translations.common.options}
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {pkg.options.map((opt, i) => (
                                  <div
                                    key={i}
                                    className="p-4 bg-ivory/60 rounded-xl border border-charcoal/5"
                                  >
                                    <span className="text-xs font-semibold text-gold uppercase tracking-wider block mb-2">
                                      {opt.label}
                                    </span>
                                    <ul className="space-y-1.5">
                                      {opt.events.map((e, j) => (
                                        <li
                                          key={j}
                                          className="text-xs text-charcoal/80 flex items-center gap-2"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                                          {e}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card CTA */}
                      <div className="p-6 sm:p-8 pt-0 mt-auto">
                        <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
                          <div>
                            <p className="text-[11px] text-charcoal/40 uppercase tracking-wider">
                              KM Planning
                            </p>
                            <p className="text-sm font-semibold text-charcoal">
                              {translations.common.planYourDay}
                            </p>
                          </div>
                          <Link
                            to={`/plan?category=${category.slug}&package=${pkg.id}`}
                            className="btn-primary text-xs"
                            id={`request-quote-${pkg.id}`}
                          >
                            {translations.common.planYourDay}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          )}

          {/* Categories with services only (Christian, Modern, Destination, Civil, Custom) */}
          {!category.hasDetailedPackages && category.services && (
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 items-start">
                <div>
                  <p className="eyebrow mb-3">{translations.packagesSection.eyebrow}</p>
                  <h2 className="section-heading mb-6">{title}</h2>
                  <p className="text-charcoal/70 leading-relaxed mb-8 text-sm sm:text-base">
                    {description}
                  </p>

                  <Link
                    to={`/plan?category=${category.slug}`}
                    className="btn-primary"
                    id={`request-quote-${category.slug}`}
                  >
                    {translations.common.planYourDay}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div>
                  <div className="bg-white rounded-2xl border border-charcoal/8 p-8 shadow-xs">
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-charcoal mb-6">
                      {translations.common.included}
                    </h3>
                    <div className="space-y-4">
                      {category.services.map((service, i) => {
                        const localizedService = translations.servicesList[service] || service;
                        return (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gold-dark">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            </span>
                            <p className="text-sm text-charcoal/80 font-medium leading-relaxed">{localizedService}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Customization Note Banner */}
          <div className="bg-white rounded-2xl border border-charcoal/8 p-8 sm:p-10 text-center max-w-2xl mx-auto shadow-xs">
            <h3 className="font-serif text-2xl text-charcoal mb-3">
              {translations.categories.custom.title}
            </h3>
            <p className="text-charcoal/65 text-sm leading-relaxed mb-6">
              {translations.categories.custom.desc}
            </p>
            <Link to="/packages/custom" className="btn-secondary text-xs">
              {translations.common.explorePackage}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-charcoal/5" id="inquiry-section">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="eyebrow mb-2">{translations.inquiryForm.pageTitle}</p>
            <h2 className="section-heading text-3xl mb-3">{title}</h2>
            <p className="text-charcoal/65 text-sm max-w-md mx-auto">
              {translations.inquiryForm.pageSubtitle}
            </p>
          </div>
          <InquiryForm preselectedCategory={category.slug} />
        </div>
      </section>
    </>
  );
}
