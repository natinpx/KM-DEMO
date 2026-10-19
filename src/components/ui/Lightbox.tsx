import { useState, useCallback } from 'react';
import type { GalleryImage } from '../../types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handlePrev = useCallback(() => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setIsLoading(true);
    onNavigate(prevIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setIsLoading(true);
    onNavigate(nextIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    },
    [onClose, handlePrev, handleNext]
  );

  const current = images[currentIndex];

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-label="Image lightbox"
      id="lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
        id="lightbox-close"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-all z-10"
        aria-label="Previous image"
        id="lightbox-prev"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div className="max-w-[90vw] max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <img
          src={current.src}
          alt={current.alt}
          className={`max-w-full max-h-[85vh] object-contain rounded-lg transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
        />
        <p className="text-center text-white/60 text-sm mt-4">
          {current.alt}
          <span className="ml-2 text-white/30">
            {currentIndex + 1} / {images.length}
          </span>
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-all z-10"
        aria-label="Next image"
        id="lightbox-next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
