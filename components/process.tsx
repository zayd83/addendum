'use client'

import { MessageCircle, MapPin, Wrench } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contact',
    description: 'U neemt contact op via WhatsApp of telefoon. Wij reageren binnen 24 uur.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Advies op locatie',
    description: 'Wij komen langs voor een vrijblijvend advies en offerte op maat.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installatie',
    description: 'Vakkundige installatie en uitleg. Wij regelen alles van A tot Z.',
  },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="werkwijze"
      className="relative bg-warm-white py-20 md:py-28"
      aria-labelledby="process-heading"
    >
      {/* Fine grid background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Onze werkwijze
          </p>
          <h2
            id="process-heading"
            className="font-heading text-3xl font-bold tracking-tight text-midnight md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Zo werken wij
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-8 hidden md:block"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          >
            <div className="mx-auto max-w-2xl">
              {/* Track */}
              <div className="h-px w-full bg-border" />
              {/* Animated fill */}
              <div
                ref={lineRef}
                className="relative -top-px h-px bg-brand-cyan transition-none"
                style={{
                  width: isVisible ? '100%' : '0%',
                  transition: isVisible ? 'width 0.9s ease-out 0.4s' : 'none',
                }}
              />
            </div>
          </div>

          {/* Step cards */}
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative flex flex-col transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex items-center gap-4 md:flex-col md:items-start">
                    {/* Circle with icon */}
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 bg-warm-white transition-colors duration-300 ${
                        isVisible ? 'border-brand-cyan' : 'border-border'
                      }`}
                    >
                      <Icon className="h-6 w-6 text-brand-cyan" strokeWidth={1.5} />
                    </div>

                    {/* Mobile: step number inline */}
                    <span
                      className="font-mono-brand text-4xl font-bold leading-none text-border md:hidden"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6 md:mt-7">
                    {/* Desktop: decorative large number */}
                    <span
                      className="mb-2 hidden font-mono-brand text-6xl font-bold leading-none text-border md:block"
                      aria-hidden="true"
                      style={{ letterSpacing: '-0.04em' }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-midnight">{step.title}</h3>
                    <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
