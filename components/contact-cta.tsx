'use client'

import { MessageCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'

export function ContactCta() {
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-midnight py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      {/* Center radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Top cyan accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.4) 30%, rgba(6,182,212,0.7) 50%, rgba(6,182,212,0.4) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Label */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Direct contact
          </p>

          <h2
            id="contact-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Klaar om te starten?
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/60">
            Stuur een appje en wij denken vrijblijvend met u mee. Reactie binnen 24 uur.
          </p>

          {/* CTA button */}
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="btn-cyan-glow gap-3 bg-brand-cyan px-10 py-6 text-lg font-semibold text-midnight hover:bg-brand-cyan-bright"
            >
              <a href="https://wa.me/31624782834" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                App ons: 06 24 78 28 34
              </a>
            </Button>
          </div>

          {/* Trust badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-brand-cyan" />
            Werkgebied: Nijmegen, Arnhem en heel Gelderland
          </div>
        </div>
      </div>
    </section>
  )
}
