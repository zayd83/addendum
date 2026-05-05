'use client'

import { MessageCircle, ChevronDown, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
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
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-12 md:py-16 lg:py-20" 
      aria-labelledby="hero-heading"
      style={{
        background: 'radial-gradient(ellipse at top center, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 1) 70%)'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div 
            className={`flex flex-col items-start transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Status Indicator */}
            <div className="mb-6 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Beschikbaar voor nieuwe projecten
              </span>
            </div>

            {/* Headline with glow effect */}
            <div className="relative">
              {/* Subtle radial glow behind headline */}
              <div 
                className="absolute -inset-x-20 -inset-y-10 -z-10 blur-3xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%)'
                }}
                aria-hidden="true"
              />
              <h1
                id="hero-heading"
                className="font-heading text-balance text-4xl font-black leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Altijd snel internet en maximale beveiliging.
              </h1>
            </div>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Voor woningen en bedrijven. Wij regelen uw netwerk, WiFi en beveiliging van A tot Z — zonder gedoe.
            </p>
            
            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-blue-600 px-8 text-white hover:bg-blue-700"
              >
                <a href="https://wa.me/31624782834" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp ons direct
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-navy text-navy hover:bg-navy hover:text-white"
              >
                <a href="#producten">
                  <ChevronDown className="h-5 w-5" />
                  Bekijk camera&apos;s
                </a>
              </Button>
            </div>

            {/* Trust line */}
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-amber-500">★★★★★</span>
              <span>Beoordeeld door klanten in heel Gelderland</span>
            </div>
          </div>

          {/* Hero Product Visual */}
          <div 
            className={`relative aspect-[3/4] w-full max-w-md justify-self-center overflow-hidden rounded-2xl bg-navy lg:aspect-[4/5] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Soft blue glow around the card */}
            <div 
              className="absolute -inset-4 -z-10 rounded-3xl blur-2xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.3) 0%, transparent 70%)'
              }}
              aria-hidden="true"
            />
            
            {/* Live Badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-white">Live</span>
            </div>

            {/* Camera Visual */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Soft blue glow effect inside */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at bottom right, rgba(37, 99, 235, 0.2) 0%, transparent 60%)'
                }}
                aria-hidden="true"
              />
              
              {/* Camera icon with glow */}
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)'
                  }}
                  aria-hidden="true"
                />
                <Camera className="relative h-24 w-24 text-white/80" strokeWidth={1} />
              </div>
              
              <p className="mt-6 text-center text-sm font-medium text-white/60">
                Beveiligingscamera geïnstalleerd
              </p>
              <p className="mt-1 text-center text-xs text-white/40">
                Professionele montage op locatie
              </p>
            </div>

            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
