import { useState } from 'react';
import SEOHead from '../components/layout/SEOHead';
import Lightbox from '../components/ui/Lightbox';
import ScrollReveal from '../components/ui/ScrollReveal';
import { galleryImages } from '../data/packages';
import { useLanguage } from '../i18n/LanguageContext';

export default function GalleryPage() {
  const { translations } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
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

  return (
    <>
      <SEOHead
        title={`${translations.galleryPage.title} — KM Wedding Planner`}
        description={translations.galleryPage.subtitle}
      />

      {/* Header */}
      <section className="pt-36 pb-12 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
          <p className="eyebrow mb-3">{translations.galleryPage.eyebrow}</p>
          <h1 className="section-heading mb-4">{translations.galleryPage.title}</h1>
          <p className="text-charcoal/65 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {translations.galleryPage.subtitle}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-2" id="gallery-page-filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                  activeFilter === filter.value
                    ? 'bg-charcoal text-white shadow-md'
                    : 'bg-white text-charcoal/70 hover:text-charcoal border border-charcoal/10'
                }`}
                id={`gallery-filter-${filter.value.toLowerCase()}`}
              >
                {filter.label}
                {filter.value !== 'All' && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    ({galleryImages.filter((img) => img.category === filter.value).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            {filteredImages.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-charcoal/40">No images found for this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image, i) => (
                  <button
                    key={image.id}
                    onClick={() => setLightboxIndex(i)}
                    className="img-zoom rounded-xl overflow-hidden aspect-square cursor-pointer group relative shadow-xs hover:shadow-lg transition-all"
                    id={`gallery-item-${image.id}`}
                    aria-label={`View ${image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center transform scale-75 group-hover:scale-100 duration-300">
                        <span className="w-10 h-10 rounded-full bg-white/90 text-charcoal flex items-center justify-center mx-auto mb-1.5">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                            <path d="M11 8v6M8 11h6" />
                          </svg>
                        </span>
                        <span className="text-white text-xs font-medium px-2 py-0.5 rounded bg-charcoal/60 backdrop-blur-xs">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
