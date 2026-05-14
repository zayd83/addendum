'use client'

import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { stagger, staggerItem, VIEWPORT } from '@/lib/animations'

// TODO: Vervang door echte cijfers van klant
const stats = [
  { value: '150+', label: 'Installaties uitgevoerd' },
  { value: '10+',  label: 'Jaar ervaring' },
  { value: '24u',  label: 'Reactietijd gegarandeerd' },
  { value: '5.0',  label: 'Gemiddelde beoordeling' },
]

function CountUp({ raw }: { raw: string }) {
  const numeric  = parseFloat(raw.replace(/[^0-9.]/g, ''))
  const suffix   = raw.replace(/[0-9.]/g, '')
  const decimals = raw.includes('.') ? 1 : 0

  const ref       = useRef<HTMLSpanElement>(null)
  const isInView  = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(decimals ? '0.0' : '0')

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate(v) {
        setDisplay(decimals ? v.toFixed(decimals) : Math.floor(v).toString())
      },
    })
    return controls.stop
  }, [isInView, numeric, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  )
}

export function UspStrip() {
  return (
    <section
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
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-2 gap-y-10 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`flex flex-col items-center gap-2 text-center ${
                index < stats.length - 1 ? 'md:border-r md:border-white/10' : ''
              }`}
            >
              <span
                className="font-mono-brand text-4xl font-bold leading-none text-brand-cyan md:text-5xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                <CountUp raw={stat.value} />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
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
