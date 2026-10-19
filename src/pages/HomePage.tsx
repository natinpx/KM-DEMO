import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import PackageCard from '../components/ui/PackageCard';
import Lightbox from '../components/ui/Lightbox';
import HeroSlideshow from '../components/ui/HeroSlideshow';
import ScrollReveal from '../components/ui/ScrollReveal';
import { weddingCategories, galleryImages } from '../data/packages';
import { useLanguage } from '../i18n/LanguageContext';

export default function HomePage() {
  const { translations } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryFilters = [
    { label: translations.common.all, value: 'All' },
    { label: translations.categories.traditional.title, value: 'Traditional' },
    { label: translations.categories.christian.title, value: 'Christian' },
    { label: translations.categories.muslim.title, value: 'Muslim' },
    { label: translations.categories.modern.title, value: 'Modern' },
    { label: translations.categories.destination.title, value: 'Destination' },
    { label: translations.categories.civil.title, value: 'Civil' },
  ];

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  // Prominently feature the 6 core categories
  const featuredCategories = weddingCategories.filter((c) => c.slug !== 'custom');

  const processStepsLocalized = [
    {
      number: '01',
      title: translations.howItWorks.step1Title,
      description: translations.howItWorks.step1Desc,
    },
    {
      number: '02',
      title: translations.howItWorks.step2Title,
      description: translations.howItWorks.step2Desc,
    },
    {
      number: '03',
      title: translations.howItWorks.step3Title,
      description: translations.howItWorks.step3Desc,
    },
    {
      number: '04',
      title: translations.howItWorks.step4Title,
      description: translations.howItWorks.step4Desc,
    },
  ];

  return (
    <>
      <SEOHead
        title="KM — Ethiopian Wedding Planner"
        description="KM — Ethiopian Wedding Planner. From traditional celebrations to modern love stories, we bring your wedding vision to life with care, creativity and attention to every detail."
      />

      {/* ── HERO SECTION WITH SMOOTH BACKGROUND & SLIDESHOW ── */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center bg-ivory overflow-hidden pt-28 pb-16 lg:py-0" id="hero">
        {/* Subtle decorative background gradient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-[11px] font-semibold tracking-wider uppercase mb-5 border border-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              {translations.hero.eyebrow}
            </div>

            <h1 className="font-serif text-[clamp(2.4rem,5.2vw,4.5rem)] leading-[1.08] text-charcoal mb-6">
              {translations.hero.titleLine1}
              <br />
              <span className="text-burgundy italic font-normal">{translations.hero.titleLine2}</span>
            </h1>

            <p className="text-charcoal/70 text-base lg:text-lg max-w-xl leading-relaxed mb-8">
              {translations.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/packages" className="btn-primary" id="hero-explore">
                {translations.hero.explorePackages}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/plan" className="btn-secondary" id="hero-plan">
                {translations.hero.planYourDay}
              </Link>
            </div>

            {/* Cultural accent line */}
            <div className="flex items-center gap-3 mt-10 pt-6 border-t border-charcoal/10">
              <span className="w-8 h-[1.5px] bg-gold" />
              <span className="text-xs text-charcoal/60 font-serif italic tracking-wide">
                {translations.hero.culturalAccent}
              </span>
            </div>
          </div>

          {/* Right Slideshow Block */}
          <div className="lg:col-span-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* ── OUR PACKAGES ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-charcoal/5" id="packages-section">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-3">
                <p className="eyebrow mb-3">{translations.packagesSection.eyebrow}</p>
                <h2 className="section-heading mb-4">
                  {translations.packagesSection.titleLine1}
                  <br />
                  <span className="text-burgundy italic">{translations.packagesSection.titleLine2}</span>
                </h2>
                <p className="text-charcoal/65 text-sm leading-relaxed mb-6 max-w-sm">
                  {translations.packagesSection.description}
                </p>
                <Link to="/packages" className="btn-secondary text-xs" id="view-all-packages">
                  {translations.packagesSection.viewAll}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Package Cards Grid */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredCategories.map((cat, i) => (
                  <PackageCard key={cat.slug} category={cat} index={i} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WEDDING TYPES / FOR EVERY FAITH & VISION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-charcoal" id="wedding-types">
        {/* Subtle background ambient overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/destination-wedding.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20 filter blur-xs"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left text panel */}
              <div className="lg:col-span-4 text-white">
                <p className="eyebrow text-gold mb-3">{translations.weddingTypes.eyebrow}</p>
                <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.1] text-white mb-6">
                  {translations.weddingTypes.titleLine1}
                  <br />
                  <span className="text-gold italic">{translations.weddingTypes.titleLine2}</span>
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
                  {translations.weddingTypes.description}
                </p>
                <Link
                  to="/packages"
                  className="btn-primary bg-white text-charcoal border-white hover:bg-gold hover:border-gold hover:text-white"
                >
                  {translations.weddingTypes.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Wedding type cards */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {weddingCategories.map((cat) => {
                  const catTrans = translations.categories[cat.slug as keyof typeof translations.categories];
                  const title = catTrans?.title || cat.title;
                  const nativeTitle = catTrans?.nativeTitle || cat.titleAmharic;
                  const highlights = catTrans?.highlights || cat.highlights;

                  return (
                    <Link
                      key={cat.slug}
                      to={`/packages/${cat.slug}`}
                      className="group block bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/15 hover:border-gold/60 transition-all hover:bg-white/15 hover:shadow-lg"
                      id={`wedding-type-${cat.slug}`}
                    >
                      <div className="img-zoom aspect-[4/3] overflow-hidden">
                        <img
                          src={cat.image}
                          alt={title}
                          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3.5">
                        <h3 className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                          {title}
                        </h3>
                        <p className="text-white/50 text-[11px] mb-2">{nativeTitle}</p>
                        <ul className="space-y-1">
                          {highlights.slice(0, 3).map((h, i) => (
                            <li key={i} className="text-white/60 text-[10px] flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                              <span className="truncate">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-20 lg:py-28 bg-ivory" id="gallery-section">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">{translations.gallerySection.eyebrow}</p>
              <h2 className="section-heading mb-4">{translations.gallerySection.title}</h2>
              <p className="text-charcoal/65 mt-2 max-w-lg mx-auto text-sm">
                {translations.gallerySection.description}
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10" id="gallery-filters">
              {galleryFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                    activeFilter === filter.value
                      ? 'bg-charcoal text-white shadow-sm'
                      : 'bg-white text-charcoal/70 hover:text-charcoal hover:bg-white/80 border border-charcoal/10'
                  }`}
                  id={`filter-${filter.value.toLowerCase()}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.slice(0, 8).map((image, i) => (
                <button
                  key={image.id}
                  onClick={() => setLightboxIndex(i)}
                  className="img-zoom rounded-xl overflow-hidden aspect-square cursor-pointer group relative shadow-xs hover:shadow-md transition-shadow"
                  id={`gallery-image-${image.id}`}
                  aria-label={`View ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-white/90 text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75 duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                        <path d="M11 8v6M8 11h6" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/gallery" className="btn-secondary" id="view-full-gallery">
                {translations.gallerySection.viewFull}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW KM WORKS ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-charcoal/5" id="how-it-works">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="eyebrow mb-3">{translations.howItWorks.eyebrow}</p>
              <h2 className="section-heading">{translations.howItWorks.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processStepsLocalized.map((step) => (
                <div key={step.number} className="text-center group p-6 rounded-xl transition-all duration-300 hover:bg-ivory/60">
                  <div className="w-16 h-16 rounded-full bg-charcoal text-white flex items-center justify-center mx-auto mb-6 font-serif text-lg group-hover:bg-burgundy transition-colors shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-3 group-hover:text-burgundy transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 lg:py-32 bg-charcoal text-center relative overflow-hidden" id="final-cta">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6 relative z-10">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] text-white leading-[1.1] mb-6">
              {translations.finalCta.titleLine1}
              <br />
              <span className="text-gold italic font-normal">{translations.finalCta.titleLine2}</span>
            </h2>
            <p className="text-white/65 mb-10 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              {translations.finalCta.description}
            </p>
            <Link to="/plan" className="btn-gold text-sm py-4 px-9 shadow-lg hover:shadow-xl" id="start-journey">
              {translations.finalCta.button}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages.slice(0, 8)}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
