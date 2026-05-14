'use client'

import { MessageCircle, MapPin, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, staggerItem, VIEWPORT } from '@/lib/animations'

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
  return (
    <section
      id="werkwijze"
      className="relative bg-warm-white py-20 md:py-28"
      aria-labelledby="process-heading"
    >
      {/* Fine grid background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-16 md:mb-20"
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
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting line — track + animated fill (desktop only) */}
          <div
            className="absolute left-0 right-0 top-8 hidden md:block"
            aria-hidden="true"
          >
            <div className="mx-auto max-w-2xl">
              {/* Track */}
              <div className="h-px w-full bg-border" />
              {/* Animated draw */}
              <motion.div
                className="relative -top-px h-px origin-left bg-brand-cyan"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </div>

          {/* Step cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid gap-10 md:grid-cols-3 md:gap-8"
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative flex flex-col"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex items-center gap-4 md:flex-col md:items-start">
                    {/* Circle with icon */}
                    <motion.div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brand-cyan bg-warm-white"
                      whileHover={{ scale: 1.08, borderColor: '#22D3EE' }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-6 w-6 text-brand-cyan" strokeWidth={1.5} />
                    </motion.div>

                    {/* Mobile: inline step number */}
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
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
