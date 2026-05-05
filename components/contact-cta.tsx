'use client'

import { MessageCircle } from 'lucide-react'
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
        id="contact" 
        className="bg-navy py-20 md:py-28" 
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div 
            className={`mx-auto flex max-w-2xl flex-col items-center text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 
              id="contact-heading" 
              className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Stuur een appje en wij denken vrijblijvend met u mee. Reactie binnen 24 uur.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 gap-3 bg-green-500 px-10 py-5 text-lg font-semibold text-white hover:bg-green-600"
            >
              <a href="https://wa.me/31624782834" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                App ons: 06 24 78 28 34
              </a>
            </Button>

            <p className="mt-6 text-sm text-white/60">
              Werkgebied: Nijmegen, Arnhem en heel Gelderland
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
