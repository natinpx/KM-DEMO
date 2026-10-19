import type { WeddingCategory, ProcessStep, GalleryImage } from '../types';

// ─── WEDDING CATEGORIES ───

export const weddingCategories: WeddingCategory[] = [
  // ── 1. Traditional Weddings ──
  {
    slug: 'traditional',
    title: 'Traditional Weddings',
    titleAmharic: 'የተለመደ ሰርግ',
    description:
      'Celebrate your union through the rich, time-honored customs of Ethiopian tradition. From the shimgelina negotiations to the joyous mels celebration, KM ensures every ritual is honored with care, beauty, and authentic cultural detail.',
    shortDescription:
      'Honor every tradition — from shimgelina to mels — with a wedding rooted in Ethiopian heritage.',
    icon: 'traditional',
    image: '/images/traditional-wedding.jpg',
    hasDetailedPackages: true,
    highlights: ['Beteseb (Family)', 'Guad (Friend)', 'Abro Adeg (Companion)', 'Engda (Guest)'],
    packages: [
      {
        id: 'trad-beteseb',
        categorySlug: 'traditional',
        nameAmharic: 'ቤተሰብ',
        nameTransliterated: 'Beteseb',
        nameEnglish: 'Family Package',
        description:
          'The most comprehensive traditional wedding package. Covers every stage of the Ethiopian wedding journey — from the formal family negotiations to the post-wedding celebrations.',
        eventCount: '6 events',
        events: [
          {
            name: 'Shimgelina',
            nameAmharic: 'ሽምግልና',
            description:
              'The formal engagement negotiation where respected elders from both families meet to discuss and agree on the union. A deeply cultural and meaningful ceremony that sets the tone for the wedding.',
          },
          {
            name: 'Tloshi / Dowry',
            nameAmharic: 'ጥሎሽ',
            description:
              'The traditional exchange of gifts and dowry between families, symbolizing commitment, respect, and the merging of two households.',
          },
          {
            name: 'Bridal Shower',
            description:
              'A pre-wedding celebration honoring the bride, bringing together close friends and family for an intimate gathering filled with blessings, gifts, and joy.',
          },
          {
            name: 'Serg',
            nameAmharic: 'ሰርግ',
            description:
              'The main wedding day — a grand celebration of music, dance, feasting, and joy, where the couple is officially celebrated by their community.',
          },
          {
            name: 'Mels',
            nameAmharic: 'መልስ',
            description:
              'The post-wedding reception hosted by the groom\'s family, welcoming the bride into her new family. A beautiful continuation of the celebration.',
          },
          {
            name: 'Kilkil',
            nameAmharic: 'ቅልቅል',
            description:
              'A light, joyful gathering that follows the wedding, bringing both families together in a relaxed atmosphere to strengthen the new bond.',
          },
        ],
      },
      {
        id: 'trad-guad',
        categorySlug: 'traditional',
        nameAmharic: 'ጓድ',
        nameTransliterated: 'Guad',
        nameEnglish: 'Friend Package',
        description:
          'A flexible package designed for couples who want professional planning for key wedding events. Choose the combination that fits your celebration.',
        eventCount: 'Choose 2 events',
        events: [],
        options: [
          { label: 'Option 1', events: ['Shimgelina (ሽምግልና)', 'Serg (ሰርግ)'] },
          { label: 'Option 2', events: ['Serg (ሰርግ)', 'Mels (መልስ)'] },
        ],
      },
      {
        id: 'trad-abro-adeg',
        categorySlug: 'traditional',
        nameAmharic: 'አብሮ አደግ',
        nameTransliterated: 'Abro Adeg',
        nameEnglish: 'Companion Package',
        description:
          'A well-rounded package covering the three core events of an Ethiopian traditional wedding. Ideal for couples who want expert planning for the essential ceremonies.',
        eventCount: '3 events',
        events: [
          {
            name: 'Shimgelina',
            nameAmharic: 'ሽምግልና',
            description:
              'The formal engagement negotiation where respected elders from both families meet to discuss and agree on the union.',
          },
          {
            name: 'Serg',
            nameAmharic: 'ሰርግ',
            description:
              'The main wedding day — a grand celebration of music, dance, feasting, and joy.',
          },
          {
            name: 'Mels',
            nameAmharic: 'መልስ',
            description:
              'The post-wedding reception hosted by the groom\'s family, welcoming the bride into her new family.',
          },
        ],
      },
      {
        id: 'trad-engda',
        categorySlug: 'traditional',
        nameAmharic: 'እንግዳ',
        nameTransliterated: 'Engda',
        nameEnglish: 'Guest Package',
        description:
          'Focused planning for the main wedding day. Perfect for couples who need professional coordination for their serg celebration.',
        eventCount: 'Main day only',
        events: [
          {
            name: 'Serg',
            nameAmharic: 'ሰርግ',
            description:
              'The main wedding day event — full coordination and planning for your grand celebration.',
          },
        ],
      },
    ],
  },

  // ── 2. Muslim Weddings ──
  {
    slug: 'muslim',
    title: 'Muslim Weddings',
    titleAmharic: 'የሙስሊም ሰርግ',
    description:
      'KM creates beautiful Muslim wedding celebrations that honor Islamic traditions while reflecting the unique cultural heritage of Ethiopian Muslim families. From the sacred nikah to the joyous serg, every detail is handled with respect and care.',
    shortDescription:
      'From nikah to henna, plan a wedding that honors Islamic traditions with Ethiopian warmth.',
    icon: 'muslim',
    image: '/images/muslim-wedding.jpg',
    hasDetailedPackages: true,
    highlights: ['Beteseb (Family)', 'Guad (Friend)', 'Abro Adeg (Companion)', 'Engda (Guest)'],
    packages: [
      {
        id: 'muslim-beteseb',
        categorySlug: 'muslim',
        nameAmharic: 'ቤተሰብ',
        nameTransliterated: 'Beteseb',
        nameEnglish: 'Family Package',
        description:
          'The most comprehensive Muslim wedding package. Covers every stage from the sacred nikah ceremony to the post-wedding celebrations, ensuring each tradition is beautifully represented.',
        eventCount: '7 events',
        events: [
          {
            name: 'Nikah',
            description:
              'The sacred Islamic marriage ceremony — the spiritual foundation of the wedding, conducted according to Islamic tradition with prayers, vows, and blessings.',
          },
          {
            name: 'Henna Day',
            description:
              'A vibrant pre-wedding celebration where the bride\'s hands and feet are adorned with intricate henna designs. A joyful gathering of women, music, and blessings.',
          },
          {
            name: 'Bridal Shower',
            description:
              'An intimate pre-wedding celebration honoring the bride with gifts, blessings, and quality time with loved ones.',
          },
          {
            name: 'Tloshi / Dowry',
            nameAmharic: 'ጥሎሽ',
            description:
              'The traditional exchange of gifts between families, symbolizing respect, commitment, and the joining of two households.',
          },
          {
            name: 'Serg',
            nameAmharic: 'ሰርግ',
            description:
              'The main wedding day celebration — a grand event bringing together family and community in a feast of music, joy, and togetherness.',
          },
          {
            name: 'Mels',
            nameAmharic: 'መልስ',
            description:
              'The post-wedding reception where the groom\'s family officially welcomes the bride. A warm and meaningful continuation of the celebration.',
          },
          {
            name: 'Kilkil',
            nameAmharic: 'ቅልቅል',
            description:
              'A relaxed post-wedding gathering that brings both families closer together in a joyful, informal atmosphere.',
          },
        ],
      },
      {
        id: 'muslim-guad',
        categorySlug: 'muslim',
        nameAmharic: 'ጓድ',
        nameTransliterated: 'Guad',
        nameEnglish: 'Friend Package',
        description:
          'A flexible package for couples who want professional planning for selected wedding events. Choose the combination that best fits your celebration.',
        eventCount: 'Choose 2 events',
        events: [],
        options: [
          { label: 'Option 1', events: ['Nikah', 'Serg (ሰርግ)'] },
          { label: 'Option 2', events: ['Serg (ሰርግ)', 'Mels (መልስ)'] },
        ],
      },
      {
        id: 'muslim-abro-adeg',
        categorySlug: 'muslim',
        nameAmharic: 'አብሮ አደግ',
        nameTransliterated: 'Abro Adeg',
        nameEnglish: 'Companion Package',
        description:
          'A focused package covering the three core events of a Muslim Ethiopian wedding. Expert planning for the ceremonies that matter most.',
        eventCount: '3 events',
        events: [
          {
            name: 'Nikah',
            description:
              'The sacred Islamic marriage ceremony, conducted with reverence and beauty.',
          },
          {
            name: 'Serg',
            nameAmharic: 'ሰርግ',
            description:
              'The main wedding day — a grand celebration with family and community.',
          },
          {
            name: 'Mels',
            nameAmharic: 'መልስ',
            description:
              'The post-wedding reception welcoming the bride into the groom\'s family.',
          },
        ],
      },
      {
        id: 'muslim-engda',
        categorySlug: 'muslim',
        nameAmharic: 'እንግዳ',
        nameTransliterated: 'Engda',
        nameEnglish: 'Guest Package',
        description:
          'Focused planning for the main wedding day celebration. Ideal for couples who need professional coordination for their serg.',
        eventCount: 'Main day only',
        events: [
          {
            name: 'Serg',
            nameAmharic: 'ሰርግ',
            description:
              'Complete planning and coordination for your main wedding day celebration.',
          },
        ],
      },
    ],
  },

  // ── 3. Christian Weddings ──
  {
    slug: 'christian',
    title: 'Christian Weddings',
    titleAmharic: 'የክርስቲያን ሰርግ',
    description:
      'Celebrate your sacred union with a Christian wedding that reflects your faith and Ethiopian heritage. KM coordinates church ceremonies, receptions, and every detail to create a wedding that is both spiritually meaningful and beautifully executed.',
    shortDescription:
      'A sacred celebration of faith — from church ceremony to reception, planned with reverence.',
    icon: 'christian',
    image: '/images/christian-wedding.jpg',
    hasDetailedPackages: false,
    highlights: ['Church Ceremony', 'Reception Planning', 'Décor & Styling', 'Photography & More'],
    packages: [],
    services: [
      'Church ceremony coordination',
      'Reception planning and management',
      'Venue selection and booking',
      'Décor and floral design',
      'Photography and videography coordination',
      'Music and entertainment',
      'Catering coordination',
      'Wedding party coordination',
      'Timeline and logistics management',
      'Day-of coordination',
    ],
  },

  // ── 4. Modern Weddings ──
  {
    slug: 'modern',
    title: 'Modern Weddings',
    titleAmharic: 'ዘመናዊ ሰርግ',
    description:
      'For couples who want a contemporary celebration with a fresh, stylish approach. KM offers flexible planning that blends modern aesthetics with personal touches — creating a wedding that feels uniquely yours.',
    shortDescription:
      'A fresh, contemporary approach to wedding planning — stylish, personal, and uniquely yours.',
    icon: 'modern',
    image: '/images/modern-wedding.jpg',
    hasDetailedPackages: false,
    highlights: ['Custom Themes', 'Elegant Décor', 'Full Planning', 'Photography & More'],
    packages: [],
    services: [
      'Custom theme and concept development',
      'Styling and décor coordination',
      'Venue planning and selection',
      'Photography and videography coordination',
      'Entertainment and music coordination',
      'Catering and menu design',
      'Floral design and arrangements',
      'Guest management and RSVPs',
      'Timeline and logistics',
      'Day-of coordination',
    ],
  },

  // ── 5. Destination Weddings ──
  {
    slug: 'destination',
    title: 'Destination Weddings',
    titleAmharic: 'የመድረሻ ሰርግ',
    description:
      'Dream of exchanging vows in a breathtaking location? KM plans destination weddings both within Ethiopia and internationally — handling venue selection, travel coordination, and every logistical detail so you can focus on the celebration.',
    shortDescription:
      'Exchange vows anywhere — KM handles venue, travel, and every detail of your destination dream.',
    icon: 'destination',
    image: '/images/destination-wedding.jpg',
    hasDetailedPackages: false,
    highlights: ['Local & International', 'Travel Planning', 'Venue Selection', 'On-Site Coordination'],
    packages: [],
    services: [
      'Local and international destination planning',
      'Destination and venue selection',
      'Travel and accommodation coordination',
      'Guest coordination and logistics',
      'Event scheduling and timeline',
      'Décor and styling for the venue',
      'Personalized consultations',
      'Vendor sourcing at destination',
      'Day-of on-site coordination',
      'Post-wedding celebration planning',
    ],
  },

  // ── 6. Civil Weddings ──
  {
    slug: 'civil',
    title: 'Civil Weddings',
    titleAmharic: 'የሲቪል ሰርግ',
    description:
      'Simple, elegant, and meaningful. KM plans civil wedding ceremonies with the same care and attention to detail as any grand celebration. Whether it\'s an intimate registry ceremony or a styled civil event, we make it beautiful.',
    shortDescription:
      'Simple and elegant — a beautifully planned civil ceremony with thoughtful details.',
    icon: 'civil',
    image: '/images/civil-wedding.jpg',
    hasDetailedPackages: false,
    highlights: ['Registry Ceremony', 'Legal Support', 'Simple & Elegant', 'Personalized Planning'],
    packages: [],
    services: [
      'Civil ceremony planning and coordination',
      'Registry ceremony coordination',
      'Venue selection for the ceremony',
      'Simple and elegant décor',
      'Photography coordination',
      'Optional reception planning',
      'Personalized planning consultations',
      'Guest management',
      'Timeline and logistics',
      'Day-of coordination',
    ],
  },

  // ── 7. Custom Wedding Planning ──
  {
    slug: 'custom',
    title: 'Custom Wedding Planning',
    titleAmharic: 'ብጁ ሰርግ ዕቅድ',
    description:
      'No two love stories are the same. KM offers fully customized wedding planning where you choose the services, traditions, and details that matter most. Whether you\'re blending cultures, creating something entirely new, or need support for specific events — we build your wedding around your vision.',
    shortDescription:
      'Your wedding, your way — a fully personalized plan built around your unique vision.',
    icon: 'custom',
    image: '/images/modern-wedding.jpg',
    hasDetailedPackages: false,
    highlights: ['Fully Personalized', 'Mix & Match Services', 'Any Tradition', 'Flexible Budget'],
    packages: [],
    services: [
      'Personalized service selection',
      'Multi-tradition and multicultural planning',
      'Custom event design and concept',
      'Flexible budget planning',
      'Vendor coordination',
      'Venue selection and booking',
      'Décor, floral, and styling',
      'Photography and videography',
      'Catering and entertainment',
      'Full or partial planning options',
    ],
  },
];

// ─── HOW IT WORKS STEPS ───

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Share Your Vision',
    description:
      'Tell us about your dream wedding — your traditions, preferences, and everything that makes your love story unique.',
    icon: 'vision',
  },
  {
    number: '02',
    title: 'Choose Your Package',
    description:
      'Select a package that fits your celebration, or let us create a custom plan tailored to your needs and budget.',
    icon: 'package',
  },
  {
    number: '03',
    title: 'Plan Every Detail',
    description:
      'Our team handles venue, décor, catering, and coordination — while keeping you involved in every decision.',
    icon: 'planning',
  },
  {
    number: '04',
    title: 'Celebrate Your Day',
    description:
      'Relax and enjoy every moment. We manage the logistics so you can be fully present on your special day.',
    icon: 'celebrate',
  },
];

// ─── GALLERY IMAGES ───

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/images/traditional-wedding.jpg', alt: 'Ethiopian traditional wedding celebration with cultural decorations', category: 'Traditional' },
  { id: 'g2', src: '/images/christian-wedding.jpg', alt: 'Ethiopian Orthodox Christian wedding ceremony in church', category: 'Christian' },
  { id: 'g3', src: '/images/muslim-wedding.jpg', alt: 'Ethiopian Muslim wedding celebration with beautiful decorations', category: 'Muslim' },
  { id: 'g4', src: '/images/modern-wedding.jpg', alt: 'Modern Ethiopian wedding reception with contemporary styling', category: 'Modern' },
  { id: 'g5', src: '/images/destination-wedding.jpg', alt: 'Breathtaking destination wedding in scenic Ethiopian landscape', category: 'Destination' },
  { id: 'g6', src: '/images/civil-wedding.jpg', alt: 'Elegant civil wedding ceremony in a garden setting', category: 'Civil' },
  { id: 'g7', src: '/images/hero-wedding.jpg', alt: 'Ethiopian couple in traditional attire overlooking mountain landscape', category: 'Traditional' },
  { id: 'g8', src: '/images/traditional-wedding.jpg', alt: 'Traditional Ethiopian wedding with coffee ceremony', category: 'Traditional' },
  { id: 'g9', src: '/images/muslim-wedding.jpg', alt: 'Beautiful Muslim wedding with henna decorations', category: 'Muslim' },
  { id: 'g10', src: '/images/modern-wedding.jpg', alt: 'Stylish modern wedding venue with gold accents', category: 'Modern' },
  { id: 'g11', src: '/images/destination-wedding.jpg', alt: 'Lakeside destination wedding with panoramic views', category: 'Destination' },
  { id: 'g12', src: '/images/christian-wedding.jpg', alt: 'Christian wedding with traditional crowns and candles', category: 'Christian' },
];

// ─── NAVIGATION ───

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Packages', path: '/packages' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// ─── FORM OPTIONS ───

export const budgetRanges = [
  'Not sure yet',
  'Under 50,000 ETB',
  '50,000 – 100,000 ETB',
  '100,000 – 250,000 ETB',
  '250,000 – 500,000 ETB',
  '500,000+ ETB',
  'Prefer not to say',
];

export const guestCountRanges = [
  'Not sure yet',
  'Under 50',
  '50 – 100',
  '100 – 200',
  '200 – 500',
  '500+',
];

export const contactMethods = ['Email', 'Phone', 'WhatsApp'];

export const getCategoryBySlug = (slug: string): WeddingCategory | undefined =>
  weddingCategories.find((c) => c.slug === slug);
