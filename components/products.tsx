'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const products = [
  {
    name: 'Ajax Hub 2 Beveiligingspakket',
    price: 370,
    description: 'Compleet draadloos alarmsysteem voor woningen en bedrijven.',
    image: '/products/ajax-hub-2.jpg',
    badge: 'Bestseller',
  },
  {
    name: 'Dahua IPC-HDW2849TM-2-IL',
    price: 180,
    description: '8MP full-color camera met nachtzicht en bewegingsdetectie.',
    image: '/products/dahua-hdw2849.jpg',
    badge: null,
  },
  {
    name: 'Dahua IPC-PDW3849P 180° Duallens',
    price: 190,
    description: '8MP TiOC Eyeball camera met 180° dubbele lens.',
    image: '/products/dahua-pdw3849.jpg',
    badge: null,
  },
  {
    name: 'Hikvision DS-2CD2343G2-IU 4MP',
    price: 180,
    description: '4MP Turret IP Camera met 2.8mm lens en ingebouwde microfoon.',
    image: '/products/hikvision-ds2cd2343.jpg',
    badge: 'Populair',
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
        id="producten" 
        className="bg-soft-gray py-20 md:py-28" 
        aria-labelledby="products-heading"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div 
            className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 
              id="products-heading" 
              className="font-heading text-3xl font-bold tracking-tight text-navy md:text-4xl"
            >
              Direct te bestellen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hoogwaardige camera&apos;s en alarmsystemen — bestel eenvoudig via WhatsApp.
            </p>
          </div>

          {/* Product Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-8">
            {products.map((product, index) => {
              const whatsappMessage = encodeURIComponent(`Hallo, ik heb interesse in de ${product.name}`)
              const whatsappUrl = `https://wa.me/31624782834?text=${whatsappMessage}`

              return (
                <article 
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <Card className="group relative h-full overflow-hidden rounded-xl border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute right-3 top-3 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                        {product.badge}
                      </div>
                    )}
                    <CardContent className="flex h-full flex-col p-0">
                      {/* Product Image Placeholder */}
                      <div className="relative aspect-[4/3] w-full bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-medium text-muted-foreground">Productfoto</span>
                        </div>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover opacity-0"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                        <p className="mt-4 text-2xl font-bold text-navy">€{product.price}</p>

                        <Button
                          asChild
                          className="mt-4 w-full gap-2 bg-blue-600 text-white hover:bg-blue-700"
                        >
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4" />
                            Bestel via WhatsApp
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
