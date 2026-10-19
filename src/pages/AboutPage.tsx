import { Link } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import ScrollReveal from '../components/ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { translations } = useLanguage();
  const tAbout = translations.aboutPage;

  return (
    <>
      <SEOHead
        title={`${tAbout.eyebrow} — KM Wedding Planner`}
        description={tAbout.subtitle}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 animate-fade-in-up">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">{tAbout.eyebrow}</p>
            <h1 className="font-serif text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.1] text-charcoal mb-6">
              {tAbout.title}
            </h1>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
              {tAbout.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="pb-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-auto sm:h-[480px]">
                <img
                  src="/images/traditional-wedding.jpg"
                  alt="KM Wedding Planner — traditional Ethiopian wedding celebration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="font-serif text-3xl text-charcoal mb-6">{tAbout.storyTitle}</h2>
                <div className="space-y-4 text-charcoal/70 leading-relaxed text-sm sm:text-base">
                  <p>{tAbout.storyP1}</p>
                  <p>{tAbout.storyP2}</p>
                </div>

                {/* Values */}
                <div className="mt-10 pt-8 border-t border-charcoal/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
                      {tAbout.value1Title}
                    </h3>
                    <p className="text-xs text-charcoal/65 leading-relaxed">{tAbout.value1Desc}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
                      {tAbout.value2Title}
                    </h3>
                    <p className="text-xs text-charcoal/65 leading-relaxed">{tAbout.value2Desc}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-burgundy mb-2">
                      {tAbout.value3Title}
                    </h3>
                    <p className="text-xs text-charcoal/65 leading-relaxed">{tAbout.value3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats and Highlights */}
      <section className="py-20 bg-white border-t border-charcoal/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="eyebrow mb-3">{tAbout.valuesTitle}</p>
              <h2 className="section-heading">{tAbout.statsTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-ivory/60 rounded-2xl border border-charcoal/5">
                <span className="font-serif text-4xl lg:text-5xl text-gold-dark font-normal block mb-2">
                  100%
                </span>
                <h3 className="font-serif text-lg text-charcoal mb-2">{tAbout.value1Title}</h3>
                <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">{tAbout.stat1Label}</p>
              </div>

              <div className="text-center p-8 bg-ivory/60 rounded-2xl border border-charcoal/5">
                <span className="font-serif text-4xl lg:text-5xl text-burgundy font-normal block mb-2">
                  7+
                </span>
                <h3 className="font-serif text-lg text-charcoal mb-2">{tAbout.value2Title}</h3>
                <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">{tAbout.stat2Label}</p>
              </div>

              <div className="text-center p-8 bg-ivory/60 rounded-2xl border border-charcoal/5">
                <span className="font-serif text-4xl lg:text-5xl text-charcoal font-normal block mb-2">
                  24/7
                </span>
                <h3 className="font-serif text-lg text-charcoal mb-2">{tAbout.value3Title}</h3>
                <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed">{tAbout.stat3Label}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-3xl text-white mb-4">
            {translations.finalCta.titleLine1} {translations.finalCta.titleLine2}
          </h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            {translations.finalCta.description}
          </p>
          <Link to="/plan" className="btn-gold">
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
