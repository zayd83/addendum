'use client'

import { useEffect, useRef, useState } from 'react'

// TODO: Vervang door echte cijfers van klant
const stats = [
  { value: '150+', label: 'Installaties uitgevoerd' },
  { value: '10+',  label: 'Jaar ervaring' },
  { value: '24u',  label: 'Reactietijd gegarandeerd' },
  { value: '5.0',  label: 'Gemiddelde beoordeling' },
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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-midnight py-12 md:py-14"
      aria-label="Kerncijfers"
    >
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      {/* Top cyan accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.4) 30%, rgba(6,182,212,0.7) 50%, rgba(6,182,212,0.4) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 text-center transition-all duration-500 ${
                index < stats.length - 1 ? 'md:border-r md:border-white/10' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span
                className="font-mono-brand text-4xl font-bold leading-none tracking-tight text-brand-cyan md:text-5xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom cyan accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.2) 30%, rgba(6,182,212,0.4) 50%, rgba(6,182,212,0.2) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
