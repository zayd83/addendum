'use client'

import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, staggerItem, VIEWPORT } from '@/lib/animations'

const reviews = [
  {
    quote: 'Snel geregeld en netjes geïnstalleerd. Camera\'s werken perfect en het advies was duidelijk.',
    name: 'Mark de Vries',
    location: 'Rotterdam',
    rating: 5,
    featured: true,
  },
  {
    quote: 'Eindelijk overal stabiel WiFi in huis. Vakkundig werk en eerlijke prijs.',
    name: 'Fatima El Hamdi',
    location: 'Den Haag',
    rating: 5,
    featured: false,
  },
  {
    quote: 'Professioneel team, snelle reactie via WhatsApp en alles werkt zoals afgesproken.',
    name: 'Jeroen Bakker',
    location: 'Zoetermeer',
    rating: 5,
    featured: false,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} van 5 sterren`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400" aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export function Reviews() {
  const featured   = reviews.find((r) => r.featured)!
  const secondary  = reviews.filter((r) => !r.featured)

  return (
    <section
      className="relative bg-midnight py-20 md:py-28"
      aria-labelledby="reviews-heading"
    >
      {/* Dot pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-12 md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Klantbeoordelingen
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Wat klanten zeggen
          </h2>
        </motion.div>

        {/* Layout: featured large + two compact */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">

          {/* ── Featured review ── */}
          <motion.article
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative overflow-hidden rounded-2xl border border-brand-cyan/25 bg-midnight-mid lg:col-span-2"
          >
            {/* Corner glow */}
            <div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
              {/* Large decorative quote mark */}
              <span
                className="font-display select-none text-8xl leading-none text-brand-cyan/20 md:text-9xl"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="-mt-6 md:-mt-8">
                <Stars count={featured.rating} />
                <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-white md:text-2xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">{featured.name}</p>
                    <p className="text-xs text-white/50">{featured.location}</p>
                  </div>
                </footer>
              </div>
            </div>
          </motion.article>

          {/* ── Secondary reviews stacked ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-4 md:gap-6"
          >
            {secondary.map((review, index) => (
              <motion.article
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="flex h-full flex-col justify-between p-6">
                  <div>
                    <Stars count={review.rating} />
                    <blockquote className="mt-3 text-sm italic leading-relaxed text-white/70">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>
                  <footer className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-medium text-white">{review.name}</p>
                    <p className="text-xs text-white/40">{review.location}</p>
                  </footer>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
