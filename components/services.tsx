'use client'

import { Wifi, Camera, BellRing, MessageCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, staggerItem, ease, VIEWPORT } from '@/lib/animations'

export function Services() {
  return (
    <section
      id="diensten"
      className="relative bg-warm-white py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section label + header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-12 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Wat wij doen
          </p>
          <h2
            id="services-heading"
            className="font-heading text-3xl font-bold tracking-tight text-midnight md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Onze diensten
          </h2>
          <p className="mt-3 max-w-md text-lg text-muted-foreground">
            Alles wat u nodig heeft, onder één dak.
          </p>
        </motion.div>

        {/* Asymmetric grid: big card left + two stacked right */}
        <div className="grid gap-4 md:grid-cols-[3fr_2fr] md:gap-6">

          {/* ── Primary: Beveiligingscamera's (large card) ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* Dark background */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #091729 0%, #1E3A5F 60%, #0e2240 100%)' }}
            />
            {/* Dot pattern */}
            <div className="absolute inset-0 dot-pattern" aria-hidden="true" />
            {/* Cyan glow */}
            <div
              className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)', opacity: 0.6 }}
              aria-hidden="true"
            />
            {/* Decorative rings */}
            <div className="absolute right-8 top-8 h-32 w-32 rounded-full border border-white/[0.06]" aria-hidden="true" />
            <div className="absolute right-2 top-2 h-48 w-48 rounded-full border border-white/[0.04]" aria-hidden="true" />

            <div className="relative flex h-full min-h-[320px] flex-col justify-between p-8 md:min-h-[380px] md:p-10">
              {/* Icon */}
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand-cyan/30 bg-brand-cyan/10"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <Camera className="h-7 w-7 text-brand-cyan" strokeWidth={1.5} />
              </motion.div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan/70">
                  Kernservice
                </p>
                <h3
                  className="font-heading text-2xl font-bold text-white md:text-3xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Beveiligingscamera&apos;s
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-white/60">
                  Vakkundige montage en configuratie van camera&apos;s, afgestemd op uw situatie. Inclusief uitleg over bediening.
                </p>
                <a
                  href="https://wa.me/31624782834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-all duration-200 hover:gap-3"
                >
                  <MessageCircle className="h-4 w-4" />
                  Meer info via WhatsApp
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Secondary: WiFi + Alarm stacked ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* WiFi & Netwerken */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2, ease } }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(6,182,212,0.05) 0%, transparent 60%)' }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col p-6 md:p-8">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight/5"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Wifi className="h-6 w-6 text-midnight" strokeWidth={1.5} />
                </motion.div>
                <h3 className="mt-5 text-lg font-semibold text-midnight">WiFi &amp; Netwerken</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Installatie van access points voor naadloos bereik in uw gehele pand. Inclusief analyse, configuratie en bereikstest.
                </p>
                <a
                  href="https://wa.me/31624782834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan transition-colors hover:text-brand-cyan-bright"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Meer info via WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Alarmsystemen */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2, ease } }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(6,182,212,0.05) 0%, transparent 60%)' }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col p-6 md:p-8">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-midnight/5"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <BellRing className="h-6 w-6 text-midnight" strokeWidth={1.5} />
                </motion.div>
                <h3 className="mt-5 text-lg font-semibold text-midnight">Alarmsystemen</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Complete alarmsystemen met bewegingsmelders, contacten en sirenes. Optioneel gekoppeld aan meldkamer.
                </p>
                <a
                  href="https://wa.me/31624782834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan transition-colors hover:text-brand-cyan-bright"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Meer info via WhatsApp
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
