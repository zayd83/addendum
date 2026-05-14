'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const products = [
  {
    name: 'Ajax Hub 2 Beveiligingspakket',
    price: 370,
    description: 'Compleet draadloos alarmsysteem voor woningen en bedrijven.',
    image: '/products/ajax-hub-2.png',
    alt: 'Ajax Hub 2 draadloos alarmsysteem voor woningen en bedrijven',
    badge: 'Bestseller',
    featured: true,
  },
  {
    name: 'Dahua IPC-HDW2849TM-2-IL',
    price: 180,
    description: '8MP full-color camera met nachtzicht en bewegingsdetectie.',
    image: '/products/dahua-hdw2849.png',
    alt: 'Dahua IPC-HDW2849TM-2-IL beveiligingscamera met nachtzicht',
    badge: null,
    featured: false,
  },
  {
    name: 'Dahua IPC-PDW3849P 180° Duallens',
    price: 190,
    description: '8MP TiOC Eyeball camera met 180° dubbele lens.',
    image: '/products/dahua-pdw3849.png',
    alt: 'Dahua IPC-PDW3849P beveiligingscamera met 180 graden duallens',
    badge: null,
    featured: false,
  },
  {
    name: 'Hikvision DS-2CD2343G2-IU 4MP',
    price: 180,
    description: '4MP Turret IP Camera met 2.8mm lens en ingebouwde microfoon.',
    image: '/products/hikvision-ds2cd2343.png',
    alt: 'Hikvision DS-2CD2343G2-IU 4MP beveiligingscamera met microfoon',
    badge: 'Populair',
    featured: false,
  },
]

export function Products() {
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
      id="producten"
      className="relative bg-midnight py-20 md:py-28"
      aria-labelledby="products-heading"
    >
      {/* Dot pattern overlay */}
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      {/* Top section glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Direct te bestellen
          </p>
          <h2
            id="products-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Onze producten
          </h2>
          <p className="mt-3 max-w-md text-lg text-white/60">
            Hoogwaardige camera&apos;s en alarmsystemen — bestel eenvoudig via WhatsApp.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {products.map((product, index) => {
            const whatsappMessage = encodeURIComponent(`Hallo, ik heb interesse in de ${product.name}`)
            const whatsappUrl = `https://wa.me/31624782834?text=${whatsappMessage}`

            return (
              <article
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${product.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-300 group-hover:-translate-y-1 ${
                    product.featured
                      ? 'border-brand-cyan/40 bg-midnight-mid group-hover:border-brand-cyan/70 group-hover:shadow-[0_0_32px_rgba(6,182,212,0.15)]'
                      : 'border-white/10 bg-white/5 group-hover:border-white/20 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.08)]'
                  }`}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div
                      className={`absolute right-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        product.featured
                          ? 'bg-brand-cyan text-midnight'
                          : 'bg-white/15 text-white backdrop-blur-sm'
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Product image */}
                  <div
                    className={`relative w-full overflow-hidden ${
                      product.featured ? 'aspect-[4/3]' : 'aspect-[4/3]'
                    } bg-white/5`}
                  >
                    {/* Hover glow on image */}
                    <div
                      className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
                      aria-hidden="true"
                    />
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Product info */}
                  <div className="flex flex-col p-5">
                    <h3
                      className={`text-sm font-semibold leading-snug ${
                        product.featured ? 'text-white' : 'text-white/90'
                      }`}
                    >
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      {product.description}
                    </p>
                    <p
                      className={`mt-4 font-mono-brand text-2xl font-bold tracking-tight ${
                        product.featured ? 'text-brand-cyan' : 'text-white'
                      }`}
                    >
                      €{product.price}
                    </p>

                    <Button
                      asChild
                      className={`mt-4 w-full gap-2 text-sm font-semibold transition-all duration-200 ${
                        product.featured
                          ? 'bg-brand-cyan text-midnight hover:bg-brand-cyan-bright'
                          : 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" />
                        Bestel via WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
