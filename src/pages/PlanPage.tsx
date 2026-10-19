import { useSearchParams } from 'react-router-dom';
import SEOHead from '../components/layout/SEOHead';
import InquiryForm from '../components/forms/InquiryForm';
import { useLanguage } from '../i18n/LanguageContext';

export default function PlanPage() {
  const [searchParams] = useSearchParams();
  const preselectedCategory = searchParams.get('category') || undefined;
  const preselectedPackage = searchParams.get('package') || undefined;
  const { translations } = useLanguage();
  const tForm = translations.inquiryForm;

  return (
    <>
      <SEOHead
        title={`${tForm.pageTitle} — KM Wedding Planner`}
        description={tForm.pageSubtitle}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden bg-charcoal">
        <div className="relative h-[280px] md:h-[340px]">
          <img
            src="/images/hero-wedding.jpg"
            alt="Plan your Ethiopian wedding with KM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/45" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full pb-10 text-center animate-fade-in-up">
              <p className="eyebrow text-gold mb-2">{translations.hero.eyebrow}</p>
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-3 leading-tight">
                {tForm.pageTitle}
              </h1>
              <p className="text-white/70 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                {tForm.pageSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-6">
          <InquiryForm
            preselectedCategory={preselectedCategory}
            preselectedPackage={preselectedPackage}
          />
        </div>
      </section>
    </>
  );
}
