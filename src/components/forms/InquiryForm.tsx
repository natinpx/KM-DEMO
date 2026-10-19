import { useState } from 'react';
import type { InquiryFormData } from '../../types';
import { weddingCategories } from '../../data/packages';
import { useLanguage } from '../../i18n/LanguageContext';

interface InquiryFormProps {
  preselectedCategory?: string;
  preselectedPackage?: string;
}

const initialFormData: InquiryFormData = {
  coupleNames: '',
  email: '',
  phone: '',
  weddingCategory: '',
  preferredPackage: '',
  weddingDate: '',
  cityOrVenue: '',
  estimatedGuests: '',
  eventsNeedingSupport: [],
  budgetRange: '',
  additionalNotes: '',
  preferredContactMethod: '',
};

type FormErrors = Partial<Record<keyof InquiryFormData, string>>;

export default function InquiryForm({ preselectedCategory, preselectedPackage }: InquiryFormProps) {
  const { translations, language } = useLanguage();
  const tForm = translations.inquiryForm;

  const [formData, setFormData] = useState<InquiryFormData>({
    ...initialFormData,
    weddingCategory: preselectedCategory || '',
    preferredPackage: preselectedPackage || '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const selectedCategory = weddingCategories.find((c) => c.slug === formData.weddingCategory);

  const budgetOptions = [
    { value: '', label: tForm.selectBudget },
    { value: 'under-50k', label: tForm.budgets.under50k },
    { value: '50k-100k', label: tForm.budgets.range50_100k },
    { value: '100k-250k', label: tForm.budgets.range100_250k },
    { value: '250k-500k', label: tForm.budgets.range250_500k },
    { value: '500k-plus', label: tForm.budgets.above500k },
    { value: 'not-sure', label: tForm.budgets.notSure },
    { value: 'prefer-not-to-say', label: tForm.budgets.preferNotToSay },
  ];

  const guestOptions = [
    { value: '', label: tForm.selectGuests },
    { value: 'under-50', label: tForm.guests.under50 },
    { value: '50-100', label: tForm.guests.range50_100 },
    { value: '100-200', label: tForm.guests.range100_200 },
    { value: '200-500', label: tForm.guests.range200_500 },
    { value: '500-plus', label: tForm.guests.above500 },
    { value: 'not-sure', label: tForm.guests.notSure },
  ];

  const contactMethodsList = [
    { value: 'Email', label: tForm.contactMethods.email },
    { value: 'Phone', label: tForm.contactMethods.phone },
    { value: 'WhatsApp', label: tForm.contactMethods.whatsapp },
  ];

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.coupleNames.trim()) errs.coupleNames = tForm.errors.coupleNames;
    if (!formData.email.trim()) errs.email = tForm.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = tForm.errors.emailValid;
    if (!formData.phone.trim()) errs.phone = tForm.errors.phone;
    if (!formData.weddingCategory) errs.weddingCategory = tForm.errors.category;
    if (!formData.preferredContactMethod) errs.preferredContactMethod = tForm.errors.contactMethod;
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckbox = (event: string) => {
    setFormData((prev) => ({
      ...prev,
      eventsNeedingSupport: prev.eventsNeedingSupport.includes(event)
        ? prev.eventsNeedingSupport.filter((e) => e !== event)
        : [...prev.eventsNeedingSupport, event],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = document.querySelector('.form-error');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store submission with language metadata in localStorage
      const submissionPayload = {
        ...formData,
        language,
        timestamp: new Date().toISOString(),
      };
      console.log('[KM Wedding Planner — Dev Mode] Form submission:', submissionPayload);
      localStorage.setItem('km_last_inquiry', JSON.stringify(submissionPayload));

      // Simulated network submission
      await new Promise((resolve) => setTimeout(resolve, 1400));

      setIsSubmitted(true);
    } catch {
      setSubmitError(tForm.errors.general);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (isSubmitted) {
    return (
      <div className="text-center py-16 px-6 animate-fade-in-up bg-white rounded-2xl border border-charcoal/8 shadow-sm" id="form-success">
        <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gold-dark">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-charcoal mb-3">{tForm.successTitle}</h3>
        <p className="text-charcoal/70 max-w-md mx-auto mb-4 text-base leading-relaxed">
          {tForm.successMessage}
        </p>
        <div className="mt-4 p-4 bg-ivory border border-charcoal/10 rounded-xl max-w-md mx-auto text-left">
          <p className="text-xs text-charcoal/60 leading-relaxed">
            <strong className="text-charcoal">Metadata:</strong> Language: <span className="font-mono text-burgundy uppercase">{language}</span> · Submitted to local storage.
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData(initialFormData);
          }}
          className="btn-primary mt-8"
        >
          {tForm.submitAnother}
        </button>
      </div>
    );
  }

  const eventOptions =
    selectedCategory?.packages
      .flatMap((pkg) => pkg.events.map((e) => e.name))
      .filter((v, i, a) => a.indexOf(v) === i) || [];

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-charcoal/8 shadow-sm" id="inquiry-form" noValidate>
      {/* Dev notice banner */}
      <div className="p-3.5 bg-ivory border border-charcoal/10 rounded-xl flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
        <p className="text-xs text-charcoal/70">
          {tForm.demoNotice}
        </p>
      </div>

      {/* Couple's Names */}
      <div>
        <label htmlFor="coupleNames" className="form-label">
          {tForm.coupleNames} <span className="text-burgundy">*</span>
        </label>
        <input
          type="text"
          id="coupleNames"
          name="coupleNames"
          value={formData.coupleNames}
          onChange={handleChange}
          placeholder={tForm.coupleNamesPlaceholder}
          className="form-input"
          aria-required="true"
        />
        {errors.coupleNames && <p className="form-error">{errors.coupleNames}</p>}
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="form-label">
            {tForm.email} <span className="text-burgundy">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={tForm.emailPlaceholder}
            className="form-input"
            aria-required="true"
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            {tForm.phone} <span className="text-burgundy">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={tForm.phonePlaceholder}
            className="form-input"
            aria-required="true"
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
      </div>

      {/* Category + Package */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="weddingCategory" className="form-label">
            {tForm.weddingCategory} <span className="text-burgundy">*</span>
          </label>
          <select
            id="weddingCategory"
            name="weddingCategory"
            value={formData.weddingCategory}
            onChange={handleChange}
            className="form-input"
            aria-required="true"
          >
            <option value="">{tForm.selectCategory}</option>
            {weddingCategories.map((cat) => {
              const catTrans = translations.categories[cat.slug as keyof typeof translations.categories];
              return (
                <option key={cat.slug} value={cat.slug}>
                  {catTrans?.title || cat.title} ({catTrans?.nativeTitle || cat.titleAmharic})
                </option>
              );
            })}
          </select>
          {errors.weddingCategory && <p className="form-error">{errors.weddingCategory}</p>}
        </div>

        <div>
          <label htmlFor="preferredPackage" className="form-label">
            {tForm.preferredPackage}
          </label>
          <select
            id="preferredPackage"
            name="preferredPackage"
            value={formData.preferredPackage}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">{tForm.selectPackage}</option>
            {selectedCategory?.packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.nameTransliterated} — {pkg.nameEnglish} ({pkg.nameAmharic})
              </option>
            ))}
            <option value="custom">Custom / Personalized Plan</option>
          </select>
        </div>
      </div>

      {/* Date + Venue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="weddingDate" className="form-label">
            {tForm.weddingDate}
          </label>
          <input
            type="date"
            id="weddingDate"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="cityOrVenue" className="form-label">
            {tForm.cityOrVenue}
          </label>
          <input
            type="text"
            id="cityOrVenue"
            name="cityOrVenue"
            value={formData.cityOrVenue}
            onChange={handleChange}
            placeholder={tForm.cityOrVenuePlaceholder}
            className="form-input"
          />
        </div>
      </div>

      {/* Guests + Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="estimatedGuests" className="form-label">
            {tForm.estimatedGuests}
          </label>
          <select
            id="estimatedGuests"
            name="estimatedGuests"
            value={formData.estimatedGuests}
            onChange={handleChange}
            className="form-input"
          >
            {guestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budgetRange" className="form-label">
            {tForm.budgetRange}
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="form-input"
          >
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Events needing support */}
      {eventOptions.length > 0 && (
        <div>
          <p className="form-label">{tForm.eventsSupport}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
            {eventOptions.map((event) => {
              const isChecked = formData.eventsNeedingSupport.includes(event);
              return (
                <label
                  key={event}
                  className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                    isChecked
                      ? 'border-burgundy bg-burgundy/5 text-burgundy font-semibold'
                      : 'border-charcoal/10 hover:border-charcoal/30 text-charcoal/80'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckbox(event)}
                    className="w-4 h-4 accent-burgundy rounded"
                  />
                  <span>{event}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Contact method */}
      <div>
        <p className="form-label">
          {tForm.preferredContactMethod} <span className="text-burgundy">*</span>
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-2">
          {contactMethodsList.map((method) => (
            <label
              key={method.value}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                formData.preferredContactMethod === method.value
                  ? 'border-burgundy bg-burgundy/5 text-burgundy font-semibold'
                  : 'border-charcoal/10 hover:border-charcoal/30 text-charcoal/80'
              }`}
            >
              <input
                type="radio"
                name="preferredContactMethod"
                value={method.value}
                checked={formData.preferredContactMethod === method.value}
                onChange={handleChange}
                className="w-4 h-4 accent-burgundy"
              />
              <span>{method.label}</span>
            </label>
          ))}
        </div>
        {errors.preferredContactMethod && <p className="form-error">{errors.preferredContactMethod}</p>}
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="additionalNotes" className="form-label">
          {tForm.additionalNotes}
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          rows={4}
          maxLength={500}
          placeholder={tForm.additionalNotesPlaceholder}
          className="form-input resize-none"
        />
        <p className="text-xs text-charcoal/40 mt-1.5 text-right">{formData.additionalNotes.length}/500</p>
      </div>

      {/* Error message */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs text-red-800">{submitError}</p>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
        id="inquiry-submit"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {tForm.submittingButton}
          </>
        ) : (
          <>
            {tForm.submitButton}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
