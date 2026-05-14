'use client'

import { MessageCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { fadeUp, ease, VIEWPORT } from '@/lib/animations'

function LiveTimestamp() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('nl-NL', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono-brand text-[10px] tracking-widest text-white/60">
      {time}
    </span>
  )
}

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null)
  const frameInView = useInView(frameRef, { once: true, margin: '-60px' })

  return (
    <>
      <style>{`
        @keyframes badge-in {
          from { opacity: 0; transform: translateY(6px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .badge-animate { opacity: 0; animation: badge-in 0.4s ease forwards; }
        @keyframes scanline {
          0%   { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
      `}</style>

      <section
        className="relative overflow-hidden bg-warm-white py-12 md:py-16 lg:py-20"
        aria-labelledby="hero-heading"
      >
        {/* Fine grid overlay */}
        <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />

        {/* Ambient left glow */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* ── Left: Content ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex flex-col items-start"
            >
              {/* Status badge */}
              <div className="mb-6 flex items-center gap-2.5 rounded-full border border-border bg-white px-3.5 py-1.5 shadow-sm">
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
                className="font-heading text-balance text-5xl font-bold leading-[1.07] text-midnight md:text-6xl lg:text-7xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Altijd snel internet en{' '}
                <span
                  className="font-display italic text-brand-cyan"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  maximale beveiliging
                </span>
                .
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Voor woningen en bedrijven. Wij regelen uw netwerk, WiFi en beveiliging van A tot Z — zonder gedoe.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            {/* ── Right: Camera monitoring frame ── */}
            <motion.div
              ref={frameRef}
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease }}
              className="relative pb-6"
            >
              {/* Outer ambient glow */}
              <div
                className="absolute -inset-4 -z-10 rounded-3xl blur-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Camera monitoring frame */}
              <div className="relative overflow-hidden rounded-2xl border border-midnight/40 shadow-[0_0_0_1px_rgba(6,182,212,0.15),0_32px_64px_rgba(9,23,41,0.3)]">

                {/* ─ Top HUD bar ─ */}
                <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-midnight/95 via-midnight/70 to-transparent px-4 py-3">
                  {/* REC indicator */}
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-80" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="font-mono-brand text-[10px] font-bold tracking-[0.25em] text-white">
                      REC
                    </span>
                  </div>
                  {/* Camera name */}
                  <span className="font-mono-brand text-[10px] tracking-widest text-white/55">
                    CAM-01 · ADDENDUM
                  </span>
                  {/* LIVE badge */}
                  <span className="rounded border border-brand-cyan/50 px-2 py-0.5 font-mono-brand text-[10px] font-semibold tracking-widest text-brand-cyan">
                    LIVE
                  </span>
                </div>

                {/* ─ Camera image ─ */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/cameras/Camera3.png"
                    alt="Beveiligingscamera van Addendum Networks & Security, professioneel geïnstalleerd op een gevelmuur"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Vignette overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(9,23,41,0.55) 100%)' }}
                    aria-hidden="true"
                  />

                  {/* Scanlines */}
                  <div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Subtle cyan tint */}
                  <div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{ background: 'rgba(6,182,212,0.04)' }}
                    aria-hidden="true"
                  />

                  {/* Corner targeting brackets */}
                  <div aria-hidden="true" className="absolute left-3 top-[52px] z-20 h-5 w-5 border-l-2 border-t-2 border-brand-cyan/70" />
                  <div aria-hidden="true" className="absolute right-3 top-[52px] z-20 h-5 w-5 border-r-2 border-t-2 border-brand-cyan/70" />
                  <div aria-hidden="true" className="absolute bottom-[52px] left-3 z-20 h-5 w-5 border-b-2 border-l-2 border-brand-cyan/70" />
                  <div aria-hidden="true" className="absolute bottom-[52px] right-3 z-20 h-5 w-5 border-b-2 border-r-2 border-brand-cyan/70" />

                  {/* ─ PiP: Camera1 (second channel) ─ */}
                  {frameInView && (
                    <div
                      className="badge-animate absolute right-3 top-[60px] z-30 overflow-hidden rounded-lg border border-white/20 shadow-xl"
                      style={{ width: 88, height: 66, animationDelay: '0.8s' }}
                    >
                      <Image
                        src="/cameras/Camera1.png"
                        alt="Camera kanaal 2"
                        fill
                        className="object-cover"
                        sizes="88px"
                      />
                      {/* PiP overlay */}
                      <div
                        className="absolute inset-0 z-10"
                        style={{ background: 'rgba(9,23,41,0.25)' }}
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-1 left-0 right-0 z-20 text-center font-mono-brand text-[8px] tracking-widest text-white/80">
                        CAM-02
                      </div>
                    </div>
                  )}
                </div>

                {/* ─ Bottom HUD bar ─ */}
                <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between bg-gradient-to-t from-midnight/95 via-midnight/70 to-transparent px-4 py-3">
                  <LiveTimestamp />
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" aria-hidden="true" />
                    <span className="font-mono-brand text-[10px] tracking-widest text-white/50">
                      ZONE A · BEVEILIGD
                    </span>
                  </div>
                </div>

              </div>{/* /camera frame */}

              {/* Floating status badge below frame */}
              {frameInView && (
                <div
                  className="badge-animate absolute -bottom-4 left-6 z-30 flex items-center gap-2.5 rounded-xl border border-border bg-warm-white px-4 py-2.5 shadow-xl"
                  style={{ animationDelay: '1s' }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-midnight">Systeem actief</p>
                    <p className="text-[10px] text-muted-foreground">Alle camera&apos;s operationeel</p>
                  </div>
                </div>
              )}

            </motion.div>{/* /right panel */}

          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 section-divider" aria-hidden="true" />
      </section>
    </>
  )
}
