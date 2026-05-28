'use client'

import { MessageCircle, MapPin, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, staggerItem, VIEWPORT } from '@/lib/animations'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contact',
    description: 'U neemt contact op via WhatsApp of telefoon. Wij reageren binnen 24 uur met een eerlijk antwoord.',
    tag: 'Via WhatsApp · Altijd bereikbaar',
    dark: false,
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Advies op locatie',
    description: 'Wij komen langs voor een vrijblijvend advies en offerte op maat. Geen verborgen kosten, geen druk.',
    tag: 'Gratis · Vrijblijvend',
    dark: true,
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installatie & uitleg',
    description: 'Vakkundige installatie en duidelijke uitleg. Wij regelen alles van A tot Z — u hoeft alleen maar te genieten van uw nieuwe beveiliging.',
    tag: 'Professioneel · Inclusief nazorg',
    dark: false,
  },
]

export function Process() {
  return (
    <section
      id="werkwijze"
      className="relative bg-warm-white py-20 md:py-28"
      aria-labelledby="process-heading"
    >
      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-14 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Onze werkwijze
          </p>
          <h2
            id="process-heading"
            className="font-heading text-3xl font-bold tracking-tight text-midnight md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Van contact naar{' '}
            <span className="font-display italic text-brand-cyan">compleet systeem</span>
          </h2>
          <p className="mt-3 max-w-lg text-lg text-muted-foreground">
            In drie stappen zorgen wij voor een werkende installatie — zonder gedoe.
          </p>
        </motion.div>

        {/* Step cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-4 md:grid-cols-3 md:gap-5"
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl ${
                  step.dark
                    ? 'bg-midnight text-white'
                    : 'border border-border bg-white text-midnight'
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`h-1 w-full ${
                    step.dark ? 'bg-brand-cyan' : 'bg-gradient-to-r from-brand-cyan to-brand-cyan-bright'
                  }`}
                />

                {/* Decorative large number — background watermark */}
                <span
                  className={`pointer-events-none absolute right-4 top-4 select-none font-mono-brand text-[88px] font-bold leading-none ${
                    step.dark ? 'text-white/[0.06]' : 'text-midnight/[0.05]'
                  }`}
                  aria-hidden="true"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {step.number}
                </span>

                <div className="relative flex flex-1 flex-col p-7 md:p-8">

                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${
                      step.dark
                        ? 'bg-brand-cyan/15'
                        : 'bg-midnight/5'
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${step.dark ? 'text-brand-cyan' : 'text-midnight'}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Step number + title */}
                  <div className="mt-6">
                    <p
                      className={`mb-2 font-mono-brand text-xs font-bold tracking-widest ${
                        step.dark ? 'text-brand-cyan/60' : 'text-muted-foreground'
                      }`}
                    >
                      STAP {step.number}
                    </p>
                    <h3
                      className={`font-heading text-xl font-bold ${
                        step.dark ? 'text-white' : 'text-midnight'
                      }`}
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        step.dark ? 'text-white/60' : 'text-muted-foreground'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Tag pill */}
                  <div className="mt-6">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        step.dark
                          ? 'bg-brand-cyan/10 text-brand-cyan'
                          : 'bg-brand-cyan/8 text-brand-cyan'
                      }`}
                    >
                      {step.tag}
                    </span>
                  </div>

                </div>

                {/* Dark card: subtle glow on hover */}
                {step.dark && (
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                    style={{ boxShadow: 'inset 0 0 40px rgba(6,182,212,0.06)' }}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Connecting visual — numbers strip below cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4 md:gap-8"
        >
          {['01', '02', '03'].map((n, i) => (
            <div key={n} className="flex items-center gap-4 md:gap-8">
              <span
                className="font-mono-brand text-sm font-bold text-border"
                style={{ letterSpacing: '-0.02em' }}
              >
                {n}
              </span>
              {i < 2 && (
                <motion.div
                  className="h-px bg-brand-cyan/30"
                  initial={{ width: 0 }}
                  whileInView={{ width: '3rem' }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                  style={{ width: '3rem' }}
                />
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
