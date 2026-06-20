'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { fadeUp, slideLeft, slideRight, stagger, staggerItem, VIEWPORT } from '@/lib/animations'

const highlights = [
  'Persoonlijk contact — altijd direct met de vakman zelf',
  'Vakkundige installatie, netjes afgewerkt zonder rommel',
  'Eerlijk advies op maat, zonder verkooppraat',
  'Nazorg en ondersteuning na elke oplevering',
]

const actionPhotos = [
  { src: '/team/installatie-a.jpeg', alt: 'Installatie van beveiligingscamera aan gevel' },
  { src: '/team/installatie-b.jpeg', alt: 'Meerdere camera\'s gemonteerd op gevel' },
  { src: '/team/installatie-c.jpeg', alt: 'Dome camera montage close-up' },
]

export function About() {
  return (
    <section className="relative bg-midnight py-20 md:py-28 overflow-hidden" aria-labelledby="about-heading">
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      {/* Ambient glow — left */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-20">

          {/* ── Left: Photos ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-3"
          >
            {/* Main portrait */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/team/abdullah.jpeg"
                alt="Abdullah — oprichter en installateur van Addendum Networks & Security"
                width={700}
                height={880}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Cyan border glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(6,182,212,0.25)' }}
                aria-hidden="true"
              />
              {/* Name badge overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-5">
                <p className="font-heading text-lg font-bold text-white" style={{ letterSpacing: '-0.01em' }}>Abdullah</p>
                <p className="font-mono-brand text-[10px] tracking-widest text-brand-cyan">
                  OPRICHTER · INSTALLATEUR
                </p>
              </div>
            </div>

            {/* 3 action photos */}
            <div className="grid grid-cols-3 gap-3">
              {actionPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="group relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                  {/* Dark overlay */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(4,11,20,0.5) 100%)' }}
                    aria-hidden="true"
                  />
                  {/* Border */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(6,182,212,0.12)' }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="md:pt-4 lg:pt-8"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Wie zijn wij
            </p>
            <h2
              id="about-heading"
              className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Installatie door{' '}
              <span className="font-display italic text-brand-cyan">de vakman zelf</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Bij Addendum Networks & Security is er geen tussenpersoon. Abdullah installeert elk systeem persoonlijk — van de eerste schroef tot de laatste configuratie. Zo weet u zeker dat het goed zit.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Of het nu gaat om één beveiligingscamera, een compleet alarmsysteem of een professioneel WiFi-netwerk: u krijgt eerlijk advies, vakkundige installatie en een installateur die ook na de oplevering bereikbaar is.
            </p>

            {/* Highlights */}
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="mt-8 space-y-3.5"
            >
              {highlights.map((item) => (
                <motion.li key={item} variants={staggerItem} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-white/70">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Divider */}
            <div className="my-10 h-px bg-white/10" />

            {/* Quote / trust signal */}
            <blockquote className="border-l-2 border-brand-cyan/40 pl-5">
              <p className="font-display text-lg italic leading-relaxed text-white/55">
                &ldquo;Ik installeer elk systeem zelf, zodat ik zeker weet dat u tevreden naar huis gaat.&rdquo;
              </p>
              <footer className="mt-3 font-mono-brand text-[10px] tracking-widest text-brand-cyan">
                — ABDULLAH, ADDENDUM NETWORKS & SECURITY
              </footer>
            </blockquote>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/31624782834?text=Hallo%2C%20ik%20wil%20graag%20meer%20informatie%20over%20een%20installatie"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan-glow inline-flex items-center gap-2.5 rounded-xl bg-brand-cyan px-6 py-3.5 text-sm font-semibold text-midnight transition-all duration-200 hover:bg-brand-cyan-bright"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Direct contact via WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
