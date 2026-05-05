'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'

const reviews = [
  {
    quote: 'Snel geregeld en netjes geïnstalleerd. Camera\'s werken perfect en het advies was duidelijk.',
    name: 'Mark de Vries',
    location: 'Nijmegen',
    rating: 5,
  },
  {
    quote: 'Eindelijk overal stabiel WiFi in huis. Vakkundig werk en eerlijke prijs.',
    name: 'Fatima El Hamdi',
    location: 'Arnhem',
    rating: 5,
  },
  {
    quote: 'Professioneel team, snelle reactie via WhatsApp en alles werkt zoals afgesproken.',
    name: 'Jeroen Bakker',
    location: 'Wijchen',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-amber-500">★</span>
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <section 
        ref={sectionRef}
        className="bg-soft-gray py-20 md:py-28" 
        aria-labelledby="reviews-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 
              id="reviews-heading" 
              className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl"
            >
              Wat klanten zeggen
            </h2>
          </div>

          {/* Review Cards */}
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
            {reviews.map((review, index) => (
              <article 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <Card className="relative h-full rounded-xl border-border bg-white shadow-sm">
                  <CardContent className="relative flex h-full flex-col p-6 md:p-8">
                    {/* Decorative Quote Mark */}
                    <span 
                      className="absolute -top-1 left-4 text-7xl font-serif leading-none text-gray-200 select-none" 
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    {/* Stars */}
                    <div className="relative z-10">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Quote */}
                    <blockquote className="relative z-10 mt-4 flex-1 text-lg leading-relaxed text-foreground">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <footer className="relative z-10 mt-6">
                      <p className="font-medium text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </footer>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
