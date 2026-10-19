import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { WeddingCategory } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

const categoryIcons: Record<string, ReactNode> = {
  traditional: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  muslim: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3a9 9 0 100 18 6 6 0 000-18z" />
      <path d="M19 5l-1.5 2L19 9" />
    </svg>
  ),
  christian: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M7 7h10" />
    </svg>
  ),
  modern: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  destination: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  civil: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  custom: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
};

interface PackageCardProps {
  category: WeddingCategory;
  index: number;
}

export default function PackageCard({ category, index }: PackageCardProps) {
  const { translations } = useLanguage();
  const categoryTrans = translations.categories[category.slug as keyof typeof translations.categories];

  const title = categoryTrans?.title || category.title;
  const nativeTitle = categoryTrans?.nativeTitle || category.titleAmharic;
  const highlights = categoryTrans?.highlights || category.highlights;

  return (
    <Link
      to={`/packages/${category.slug}`}
      className="card-hover group flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-charcoal/8 shadow-xs hover:shadow-xl hover:border-gold/40 transition-all duration-300"
      id={`package-card-${category.slug}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div>
        {/* Image with subtle zoom on hover */}
        <div className="img-zoom aspect-[4/3] relative overflow-hidden bg-charcoal/5">
          <img
            src={category.image}
            alt={`${title} — KM Wedding Planner`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Icon */}
          <div className="text-gold mb-3 transition-transform duration-300 group-hover:scale-110">
            {categoryIcons[category.icon] || categoryIcons.custom}
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg text-charcoal mb-0.5 leading-snug group-hover:text-burgundy transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gold-dark font-medium mb-3">{nativeTitle}</p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-2">
            {highlights.slice(0, 4).map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-charcoal/70">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Arrow with subtle animation */}
      <div className="px-5 pb-5 pt-0 flex justify-end">
        <span className="arrow-circle group-hover:bg-charcoal group-hover:text-white transition-all transform group-hover:translate-x-0.5">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
