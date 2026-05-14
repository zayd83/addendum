'use client'

import { MessageCircle, ChevronDown, Shield, Wifi, Video, Bell, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, slideRight, ease, VIEWPORT } from '@/lib/animations'

const badges = [
  { label: 'WiFi Actief',    icon: Wifi,   pos: 'top-4 left-4',     delay: '0.5s' },
  { label: 'Camera Online',  icon: Video,  pos: 'top-4 right-4',    delay: '0.7s' },
  { label: 'Alarm Bewaakt',  icon: Bell,   pos: 'bottom-4 left-4',  delay: '0.9s' },
  { label: 'Verbonden',      icon: Radio,  pos: 'bottom-4 right-4', delay: '1.1s' },
]

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const badgesVisible = useInView(cardRef, { once: true, margin: '-40px' })

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes badge-in {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .badge-animate { opacity: 0; animation: badge-in 0.45s ease forwards; }
      `}</style>

      <section
        className="relative overflow-hidden bg-warm-white py-16 md:py-20 lg:py-28"
        aria-labelledby="hero-heading"
      >
        {/* Fine grid overlay */}
        <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />

        {/* Top-left radial glow */}
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">

            {/* ── Left: Content ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex flex-col items-start"
            >
              {/* Status badge */}
              <div className="mb-6 flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Beschikbaar voor nieuwe projecten
                </span>
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="font-heading text-balance text-5xl font-bold leading-[1.08] text-midnight md:text-6xl lg:text-7xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Altijd snel internet en{' '}
                <span className="font-display italic text-brand-cyan" style={{ letterSpacing: '-0.01em' }}>
                  maximale beveiliging
                </span>
                .
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Voor woningen en bedrijven. Wij regelen uw netwerk, WiFi en beveiliging van A tot Z — zonder gedoe.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="btn-cyan-glow gap-2 bg-brand-cyan px-8 font-semibold text-midnight hover:bg-brand-cyan-bright"
                  >
                    <a href="https://wa.me/31624782834" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp ons direct
                    </a>
                  </Button>
                </motion.div>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-border bg-transparent text-midnight hover:border-midnight hover:bg-midnight hover:text-white"
                >
                  <a href="#producten">
                    <ChevronDown className="h-5 w-5" />
                    Bekijk camera&apos;s
                  </a>
                </Button>
              </div>

              {/* Trust line */}
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden="true">★</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Beoordeeld door klanten in heel Gelderland
                </span>
              </div>
            </motion.div>

            {/* ── Right: Camera card ── */}
            <motion.div
              ref={cardRef}
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative flex items-center justify-center"
            >
              {/* Outer ambient glow */}
              <div
                className="absolute inset-4 -z-10 rounded-3xl blur-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.18) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Floating wrapper */}
              <div className="animate-float w-full">
                {/* Dark card */}
                <div
                  className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, #091729 0%, #1E3A5F 55%, #0e2240 100%)' }}
                >
                  {/* Inner cyan glow */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(6,182,212,0.18) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />

                  {/* Subtle grid on card */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                    aria-hidden="true"
                  />

                  {/* Shield icon — background */}
                  <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <Shield className="h-36 w-36 text-white/[0.07]" strokeWidth={1} />
                  </div>

                  {/* Cyan ring accents */}
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-cyan/20" aria-hidden="true" />
                  <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-cyan/10" aria-hidden="true" />

                  {/* Status badges — appear after card is in view */}
                  {badgesVisible && badges.map(({ label, icon: Icon, pos, delay }) => (
                    <div
                      key={label}
                      className={`badge-animate absolute ${pos} flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm`}
                      style={{ animationDelay: delay }}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                      </span>
                      <Icon className="h-3 w-3 text-white/60" strokeWidth={1.5} />
                      <span className="text-[11px] font-medium text-white">{label}</span>
                    </div>
                  ))}

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[11px] font-medium uppercase tracking-widest text-brand-cyan">
                      Systeem Actief
                    </p>
                    <p className="mt-0.5 text-xs text-white/50">Alle systemen operationeel</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 section-divider" aria-hidden="true" />
      </section>
    </>
  )
}
