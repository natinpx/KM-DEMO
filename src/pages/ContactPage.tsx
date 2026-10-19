import { Link } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import ScrollReveal from '../components/ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { translations } = useLanguage();
  const tContact = translations.contactPage;

  return (
    <>
      <SEOHead
        title={`${tContact.eyebrow} — KM Wedding Planner`}
        description={tContact.subtitle}
      />

      {/* Header */}
      <section className="pt-36 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
          <p className="eyebrow mb-3">{tContact.eyebrow}</p>
          <h1 className="section-heading mb-4">{tContact.title}</h1>
          <p className="text-charcoal/65 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {tContact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content & FAQ */}
      <section className="pb-24 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Contact info cards */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-3">{tContact.infoTitle}</h2>
                  <p className="text-charcoal/65 text-sm leading-relaxed mb-8">{tContact.infoDesc}</p>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-charcoal/8 shadow-xs">
                    <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold-dark">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-1">
                        {tContact.locationLabel}
                      </h3>
                      <p className="text-charcoal font-medium text-sm leading-snug">{tContact.locationValue}</p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-charcoal/8 shadow-xs">
                    <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold-dark">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-1">
                        {tContact.phoneLabel}
                      </h3>
                      <p className="text-charcoal font-medium text-sm leading-snug">+251 91 123 4567 / WhatsApp Available</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-charcoal/8 shadow-xs">
                    <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold-dark">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-1">
                        {tContact.hoursLabel}
                      </h3>
                      <p className="text-charcoal font-medium text-sm leading-snug">{tContact.hoursValue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion / List */}
              <div className="bg-white rounded-2xl border border-charcoal/8 p-8 shadow-xs">
                <h2 className="font-serif text-2xl text-charcoal mb-6">{tContact.faqTitle}</h2>

                <div className="space-y-6">
                  <div className="pb-5 border-b border-charcoal/8">
                    <h3 className="text-sm font-semibold text-charcoal mb-2">{tContact.faq1Q}</h3>
                    <p className="text-charcoal/65 text-xs sm:text-sm leading-relaxed">{tContact.faq1A}</p>
                  </div>

                  <div className="pb-5 border-b border-charcoal/8">
                    <h3 className="text-sm font-semibold text-charcoal mb-2">{tContact.faq2Q}</h3>
                    <p className="text-charcoal/65 text-xs sm:text-sm leading-relaxed">{tContact.faq2A}</p>
                  </div>

                  <div className="pb-5 border-b border-charcoal/8">
                    <h3 className="text-sm font-semibold text-charcoal mb-2">{tContact.faq3Q}</h3>
                    <p className="text-charcoal/65 text-xs sm:text-sm leading-relaxed">{tContact.faq3A}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-2">{tContact.faq4Q}</h3>
                    <p className="text-charcoal/65 text-xs sm:text-sm leading-relaxed">{tContact.faq4A}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-charcoal/10 text-center">
                  <Link to="/plan" className="btn-primary w-full justify-center">
                    {translations.common.planYourDay}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
