'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Contact',
    description: 'U neemt contact op via WhatsApp of telefoon. Wij reageren binnen 24 uur.',
  },
  {
    number: '02',
    title: 'Advies op locatie',
    description: 'Wij komen langs voor een vrijblijvend advies en offerte op maat.',
  },
  {
    number: '03',
    title: 'Installatie',
    description: 'Vakkundige installatie en uitleg. Wij regelen alles van A tot Z.',
  },
]

export function Process() {
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
        id="werkwijze" 
        className="bg-white py-20 md:py-28" 
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 
              id="process-heading" 
              className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl"
            >
              Zo werken wij
            </h2>
          </div>

          {/* Steps */}
          <div className="relative mt-12 md:mt-16">
            {/* Connecting Line (Desktop) - Accent blue */}
            <div className="absolute left-0 right-0 top-12 hidden h-1 md:block" aria-hidden="true">
              <div className="mx-auto max-w-3xl px-16">
                <div className="h-full w-full bg-blue-600" />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Step Number - 96px circles with bolder numbers */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-600 bg-white">
                    <span className="text-3xl font-extrabold text-blue-600">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
