'use client'

import { useEffect, useRef, useState } from 'react'

const reviews = [
  {
    quote: 'Snel geregeld en netjes geïnstalleerd. Camera\'s werken perfect en het advies was duidelijk.',
    name: 'Mark de Vries',
    location: 'Nijmegen',
    rating: 5,
    featured: true,
  },
  {
    quote: 'Eindelijk overal stabiel WiFi in huis. Vakkundig werk en eerlijke prijs.',
    name: 'Fatima El Hamdi',
    location: 'Arnhem',
    rating: 5,
    featured: false,
  },
  {
    quote: 'Professioneel team, snelle reactie via WhatsApp en alles werkt zoals afgesproken.',
    name: 'Jeroen Bakker',
    location: 'Wijchen',
    rating: 5,
    featured: false,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} van 5 sterren`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400" aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featured = reviews.find((r) => r.featured)!
  const secondary = reviews.filter((r) => !r.featured)

  return (
    <section
      ref={sectionRef}
      className="relative bg-midnight py-20 md:py-28"
      aria-labelledby="reviews-heading"
    >
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Klantbeoordelingen
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Wat klanten zeggen
          </h2>
        </div>

        {/* Layout: featured large + two compact */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">

          {/* ── Featured review (spans 2 cols on lg) ── */}
          <article
            className={`relative overflow-hidden rounded-2xl border border-brand-cyan/25 bg-midnight-mid transition-all duration-700 lg:col-span-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Corner glow */}
            <div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
              {/* Large decorative quote mark */}
              <span
                className="font-display select-none text-8xl leading-none text-brand-cyan/20 md:text-9xl"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="-mt-6 md:-mt-8">
                <Stars count={featured.rating} />
                <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-white md:text-2xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">{featured.name}</p>
                    <p className="text-xs text-white/50">{featured.location}</p>
                  </div>
                </footer>
              </div>
            </div>
          </article>

          {/* ── Secondary reviews stacked ── */}
          <div className="flex flex-col gap-4 md:gap-6">
            {secondary.map((review, index) => (
              <article
                key={index}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex h-full flex-col justify-between p-6">
                  <div>
                    <Stars count={review.rating} />
                    <blockquote className="mt-3 text-sm italic leading-relaxed text-white/70">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>
                  <footer className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-medium text-white">{review.name}</p>
                    <p className="text-xs text-white/40">{review.location}</p>
                  </footer>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
