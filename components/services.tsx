'use client'

import { Wifi, Camera, BellRing, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: Wifi,
    title: 'WiFi & Netwerken',
    description:
      'Installatie van access points voor naadloos bereik in uw gehele pand. Inclusief analyse, configuratie en bereikstest.',
    color: 'bg-blue-500',
  },
  {
    icon: Camera,
    title: 'Beveiligingscamera\'s',
    description:
      'Vakkundige montage en configuratie van camera\'s, afgestemd op uw situatie. Inclusief uitleg over bediening.',
    color: 'bg-emerald-500',
  },
  {
    icon: BellRing,
    title: 'Alarmsystemen',
    description:
      'Complete alarmsystemen met bewegingsmelders, contacten en sirenes. Optioneel gekoppeld aan meldkamer.',
    color: 'bg-amber-500',
  },
]

export function Services() {
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
        id="diensten" 
        className="bg-white py-20 md:py-28" 
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 
              id="services-heading" 
              className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl"
            >
              Onze diensten
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Alles wat u nodig heeft, onder één dak.
            </p>
          </div>

          {/* Service Cards */}
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden rounded-xl border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Hover gradient overlay */}
                <div 
                  className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 ${service.color}`}
                  aria-hidden="true"
                />
                
                <CardContent className="relative flex flex-col items-start p-6 md:p-8">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>

                  {/* WhatsApp Link */}
                  <a
                    href="https://wa.me/31624782834"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Meer info via WhatsApp
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
