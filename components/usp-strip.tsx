'use client'

import { Shield, Zap, Settings, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const usps = [
  {
    icon: Shield,
    label: 'Professionele installatie',
  },
  {
    icon: Zap,
    label: 'Snel geholpen',
  },
  {
    icon: Settings,
    label: 'Op maat advies',
  },
  {
    icon: Phone,
    label: 'Altijd bereikbaar',
  },
]

export function UspStrip() {
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
      className="border-y border-border bg-soft-gray py-12" 
      aria-label="Voordelen"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
          {usps.map((usp, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${
                index < usps.length - 1 ? 'md:border-r md:border-border' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <usp.icon className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-foreground md:text-base">{usp.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
