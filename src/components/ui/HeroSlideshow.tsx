import { useState, useEffect, useCallback, useRef } from 'react';

export interface HeroSlide {
  image: string;
  alt: string;
  categoryKey: string;
  titleKey: string;
}

const slides: HeroSlide[] = [
  {
    image: '/images/hero-wedding.jpg',
    alt: 'Ethiopian wedding couple in traditional attire overlooking a stunning mountain landscape at sunset',
    categoryKey: 'traditional',
    titleKey: 'Traditional Ethiopian Wedding',
  },
  {
    image: '/images/traditional-wedding.jpg',
    alt: 'Traditional Ethiopian wedding celebration with rich cultural rituals and authentic attire',
    categoryKey: 'traditional',
    titleKey: 'Authentic Cultural Customs',
  },
  {
    image: '/images/muslim-wedding.jpg',
    alt: 'Sacred Nikah and vibrant Henna day celebration honoring Ethiopian Muslim families',
    categoryKey: 'muslim',
    titleKey: 'Sacred Nikah & Henna Celebration',
  },
  {
    image: '/images/christian-wedding.jpg',
    alt: 'Ethiopian Christian wedding ceremony with crowns and solemn church blessings',
    categoryKey: 'christian',
    titleKey: 'Holy Church Blessing & Reception',
  },
  {
    image: '/images/destination-wedding.jpg',
    alt: 'Scenic destination wedding in breathtaking landscape with panoramic views',
    categoryKey: 'destination',
    titleKey: 'Breathtaking Destination Wedding',
  },
];

interface HeroSlideshowProps {
  onSlideChange?: (index: number) => void;
}

export default function HeroSlideshow({ onSlideChange }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Preload all slides
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % slides.length;
      if (onSlideChange) onSlideChange(next);
      return next;
    });
  }, [onSlideChange]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIdx = (prev - 1 + slides.length) % slides.length;
      if (onSlideChange) onSlideChange(prevIdx);
      return prevIdx;
    });
  }, [onSlideChange]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (onSlideChange) onSlideChange(index);
  };

  // Timer loop with reduced motion check
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || prefersReducedMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds display duration

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl h-[460px] sm:h-[520px] lg:h-[600px] w-full group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Wedding highlights slideshow"
    >
      {/* Slides crossfade stack */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out scale-100 group-hover:scale-[1.02]"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Subtle multi-layer gradient overlay to guarantee text legibility & elegant tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-charcoal/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 to-transparent" />

            {/* Slide title pill */}
            <div className="absolute bottom-6 left-6 right-16 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wide uppercase mb-2 border border-white/20">
                {slide.titleKey}
              </span>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-1.5 bg-charcoal/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/15">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all rounded-full ${
              i === currentIndex
                ? 'w-6 h-1.5 bg-gold'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === currentIndex}
          />
        ))}
      </div>

      {/* Manual Arrow Controls (visible on hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-charcoal/50 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-charcoal/80"
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-charcoal/50 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-charcoal/80"
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slide Counter Indicator */}
      <div className="absolute top-5 right-5 z-30 bg-charcoal/50 backdrop-blur-md rounded-full px-3 py-1 border border-white/15 text-[11px] font-medium text-white/90">
        <span className="text-gold font-bold">0{currentIndex + 1}</span>
        <span className="text-white/40 mx-1">/</span>
        <span className="text-white/60">0{slides.length}</span>
      </div>
    </div>
  );
}
