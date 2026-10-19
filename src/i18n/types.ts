export type Language = 'en' | 'am' | 'ti' | 'om';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ' },
  { code: 'om', name: 'Afaan Oromo', nativeName: 'Afaan Oromoo' },
];

export interface Translations {
  common: {
    backToPackages: string;
    viewDetails: string;
    explorePackage: string;
    planYourDay: string;
    viewAllPackages: string;
    startJourney: string;
    contactUs: string;
    learnMore: string;
    close: string;
    all: string;
    events: string;
    options: string;
    included: string;
    chooseEvents: string;
    chooseOneEvent: string;
    dayOfCoordination: string;
  };
  nav: {
    home: string;
    packages: string;
    gallery: string;
    about: string;
    contact: string;
    planDay: string;
    selectLanguage: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    explorePackages: string;
    planYourDay: string;
    culturalAccent: string;
  };
  packagesSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    viewAll: string;
    featured: string;
    exploreMore: string;
  };
  weddingTypes: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
  };
  gallerySection: {
    eyebrow: string;
    title: string;
    description: string;
    viewFull: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  finalCta: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    button: string;
  };
  categories: {
    traditional: {
      title: string;
      nativeTitle: string;
      shortDesc: string;
      desc: string;
      highlights: string[];
    };
    muslim: {
      title: string;
      nativeTitle: string;
      shortDesc: string;
      desc: string;
      highlights: string[];
    };
    christian: {
      title: string;
      nativeTitle: string;
      shortDesc: string;
      desc: string;
      highlights: string[];
    };
    modern: {
      title: string;
      nativeTitle: string;
      shortDesc: string;
      desc: string;
      highlights: string[];
    };
    destination: {
      title: string;
      nativeTitle: string;
      shortDesc: string;
      desc: string;
      highlights: string[];
    };
    civil: {
      title: string;
      nativeTitle: string;
      shortDesc: string;
      desc: string;
      highlights: string[];
    };
    custom: {
      title: string;
      nativeTitle: string;
      shortDesc: string;
      desc: string;
      highlights: string[];
    };
  };
  packageTiers: {
    beteseb: {
      name: string;
      englishName: string;
      descTraditional: string;
      descMuslim: string;
    };
    guad: {
      name: string;
      englishName: string;
      descTraditional: string;
      descMuslim: string;
    };
    abroAdeg: {
      name: string;
      englishName: string;
      descTraditional: string;
      descMuslim: string;
    };
    engda: {
      name: string;
      englishName: string;
      descTraditional: string;
      descMuslim: string;
    };
  };
  events: {
    shimgelina: { name: string; desc: string };
    tloshi: { name: string; desc: string };
    bridalShower: { name: string; desc: string };
    serg: { name: string; desc: string };
    mels: { name: string; desc: string };
    kilkil: { name: string; desc: string };
    nikah: { name: string; desc: string };
    henna: { name: string; desc: string };
  };
  servicesList: {
    [key: string]: string;
  };
  inquiryForm: {
    pageTitle: string;
    pageSubtitle: string;
    coupleNames: string;
    coupleNamesPlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    weddingCategory: string;
    selectCategory: string;
    preferredPackage: string;
    selectPackage: string;
    weddingDate: string;
    cityOrVenue: string;
    cityOrVenuePlaceholder: string;
    estimatedGuests: string;
    selectGuests: string;
    eventsSupport: string;
    budgetRange: string;
    selectBudget: string;
    preferredContactMethod: string;
    selectContactMethod: string;
    additionalNotes: string;
    additionalNotesPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    demoNotice: string;
    successTitle: string;
    successMessage: string;
    demoNote: string;
    submitAnother: string;
    errors: {
      coupleNames: string;
      email: string;
      emailValid: string;
      phone: string;
      category: string;
      contactMethod: string;
      general: string;
    };
    budgets: {
      notSure: string;
      under50k: string;
      range50_100k: string;
      range100_250k: string;
      range250_500k: string;
      above500k: string;
      preferNotToSay: string;
    };
    guests: {
      notSure: string;
      under50: string;
      range50_100: string;
      range100_200: string;
      range200_500: string;
      above500: string;
    };
    contactMethods: {
      email: string;
      phone: string;
      whatsapp: string;
    };
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    valuesTitle: string;
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
    statsTitle: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    infoDesc: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    hoursLabel: string;
    hoursValue: string;
    faqTitle: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
  };
  galleryPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  notFound: {
    title: string;
    message: string;
    button: string;
  };
  footer: {
    tagline1: string;
    tagline2: string;
    navigation: string;
    packages: string;
    getInTouch: string;
    contactUs: string;
    planYourWedding: string;
    allRightsReserved: string;
  };
}
