// ─── Core Types ───

export interface EventInclusion {
  name: string;
  nameAmharic?: string;
  description: string;
}

export interface PackageOption {
  label: string;
  events: string[];
}

export interface WeddingPackage {
  id: string;
  categorySlug: string;
  nameAmharic: string;
  nameTransliterated: string;
  nameEnglish: string;
  description: string;
  events: EventInclusion[];
  options?: PackageOption[];
  eventCount?: string;
}

export interface WeddingCategory {
  slug: string;
  title: string;
  titleAmharic: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  packages: WeddingPackage[];
  highlights: string[];
  hasDetailedPackages: boolean;
  services?: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface InquiryFormData {
  coupleNames: string;
  email: string;
  phone: string;
  weddingCategory: string;
  preferredPackage: string;
  weddingDate: string;
  cityOrVenue: string;
  estimatedGuests: string;
  eventsNeedingSupport: string[];
  budgetRange: string;
  additionalNotes: string;
  preferredContactMethod: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
