'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Smartphone, BellRing, Eye } from 'lucide-react'
import { fadeUp, stagger, staggerItem, VIEWPORT } from '@/lib/animations'

/* ── Live clock ── */
function LiveClock() {
  const [time, setTime] = useState('--:--:--')
  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="font-mono-brand text-[10px] tabular-nums text-white/40">{time}</span>
}

/* ── Single camera feed with HUD ── */
interface FeedProps {
  src: string
  alt: string
  channel: string
  zone: string
  showRec?: boolean
}
function CameraFeed({ src, alt, channel, zone, showRec }: FeedProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#030810]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover opacity-80"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(3,8,16,0.75) 100%)' }}
        aria-hidden="true"
      />
      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 3px)' }}
        aria-hidden="true"
      />
      {/* Top HUD */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-2.5 py-2">
        <span className="font-mono-brand text-[9px] font-semibold tracking-widest text-white/75">{channel}</span>
        {showRec && (
          <div className="flex items-center gap-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-red-500 opacity-80" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            <span className="font-mono-brand text-[8px] font-bold tracking-[0.2em] text-white/80">REC</span>
          </div>
        )}
      </div>
      {/* Corner brackets */}
      <div className="absolute left-2 top-8 z-20 h-3 w-3 border-l border-t border-brand-cyan/60" aria-hidden="true" />
      <div className="absolute right-2 top-8 z-20 h-3 w-3 border-r border-t border-brand-cyan/60" aria-hidden="true" />
      <div className="absolute bottom-8 left-2 z-20 h-3 w-3 border-b border-l border-brand-cyan/60" aria-hidden="true" />
      <div className="absolute bottom-8 right-2 z-20 h-3 w-3 border-b border-r border-brand-cyan/60" aria-hidden="true" />
      {/* Bottom HUD */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-2.5 py-2">
        <span className="font-mono-brand text-[9px] tracking-widest text-white/45">{zone}</span>
      </div>
    </div>
  )
}

/* ── Benefit cards ── */
const benefits = [
  {
    icon: Smartphone,
    title: 'Live op uw telefoon',
    body: 'Bekijk al uw camera\'s realtime via de app — iOS en Android, overal ter wereld.',
  },
  {
    icon: BellRing,
    title: 'Directe meldingen',
    body: 'Ontvang een pushbericht bij beweging of alarm — dag en nacht.',
  },
  {
    icon: Eye,
    title: '24/7 bewaking',
    body: 'Dag en nacht scherpe full-color beelden, ook bij volledige duisternis.',
  },
]

/* ── Main component ── */
export function CameraShowcase() {
  const monitorRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative bg-midnight py-20 md:py-28" aria-labelledby="showcase-heading">
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      {/* Ambient center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-10 md:mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Live monitoring
          </p>
          <h2
            id="showcase-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Uw beelden,{' '}
            <span className="font-display italic text-brand-cyan">altijd bij de hand</span>
          </h2>
          <p className="mt-3 max-w-xl text-lg text-white/60">
            Bekijk al uw camera&apos;s live via de app — 24/7, op elke telefoon, overal ter wereld.
          </p>
        </motion.div>

        {/* Monitor bezel */}
        <motion.div
          ref={monitorRef}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl border border-white/[0.08] bg-[#040b14] p-3 shadow-[0_0_80px_rgba(6,182,212,0.07)] md:p-4"
        >
          {/* Monitor top bar */}
          <div className="mb-3 flex items-center justify-between px-1">
            {/* Mac-style dots */}
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
            </div>
            <span className="font-mono-brand text-[10px] tracking-widest text-brand-cyan">
              ADDENDUM · BEVEILIGINGSSYSTEEM
            </span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              <span className="font-mono-brand text-[9px] text-white/35">3 KANALEN ACTIEF</span>
            </div>
          </div>

          {/* Camera grid */}
          <div className="flex flex-col gap-2 md:flex-row md:gap-3">

            {/* Main feed — Camera3 */}
            <div className="w-full md:w-[66%]">
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <CameraFeed
                  src="/cameras/Camera3.png"
                  alt="Live cameraoverzicht — voorgevel"
                  channel="CAM-01 · HOOFD"
                  zone="ZONE A · VOORGEVEL"
                  showRec
                />
              </div>
            </div>

            {/* Side feeds — Camera2 + Camera1 */}
            <div className="flex gap-2 md:flex-1 md:flex-col md:gap-3">
              <div className="flex-1 aspect-video md:aspect-auto relative overflow-hidden rounded-xl md:min-h-0">
                <CameraFeed
                  src="/cameras/Camera2.png"
                  alt="Live cameraoverzicht — zij-ingang"
                  channel="CAM-02 · ZIJGEVEL"
                  zone="ZONE B · INGANG"
                />
              </div>
              <div className="flex-1 aspect-video md:aspect-auto relative overflow-hidden rounded-xl md:min-h-0">
                <CameraFeed
                  src="/cameras/Camera1.png"
                  alt="Live cameraoverzicht — oprit"
                  channel="CAM-03 · OPRIT"
                  zone="ZONE C · PARKEER"
                />
              </div>
            </div>

          </div>

          {/* Status bar */}
          <div className="mt-3 flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
                <span className="font-mono-brand text-[9px] text-white/45">SYSTEEM ONLINE</span>
              </div>
              <span className="hidden h-3 w-px bg-white/10 md:block" aria-hidden="true" />
              <span className="hidden font-mono-brand text-[9px] text-white/25 md:block">
                MOTION DETECTION ACTIEF
              </span>
            </div>
            <LiveClock />
          </div>
        </motion.div>

        {/* Benefit cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-6 grid gap-3 sm:grid-cols-3 md:mt-8"
        >
          {benefits.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-5 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15">
                <Icon className="h-5 w-5 text-brand-cyan" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
