'use client'

import { MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerFast, staggerItem, ease, VIEWPORT } from '@/lib/animations'
import { products } from '@/lib/products'

export function Products() {
  return (
    <section
      id="producten"
      className="relative bg-midnight py-20 md:py-28"
      aria-labelledby="products-heading"
    >
      {/* Dot pattern overlay */}
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      {/* Top glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

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
            Direct te bestellen
          </p>
          <h2
            id="products-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Onze producten
          </h2>
          <p className="mt-3 max-w-md text-lg text-white/60">
            Hoogwaardige camera&apos;s en alarmsystemen — bestel eenvoudig online of via WhatsApp.
          </p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4"
        >
          {products.map((product, index) => (
            <motion.article
              key={product.slug}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2, ease } }}
              className={product.featured ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <Link href={`/producten/${product.slug}`} className="block h-full">
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border transition-shadow duration-300 ${
                    product.featured
                      ? 'border-brand-cyan/40 bg-midnight-mid hover:border-brand-cyan/70 hover:shadow-[0_0_32px_rgba(6,182,212,0.15)]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:shadow-[0_0_24px_rgba(6,182,212,0.08)]'
                  }`}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div
                      className={`absolute right-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        product.featured
                          ? 'bg-brand-cyan text-midnight'
                          : 'bg-white/15 text-white backdrop-blur-sm'
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Product image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-contain p-4 transition-transform duration-500 hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Product info */}
                  <div className="flex flex-col p-5">
                    <h3
                      className={`text-sm font-semibold leading-snug ${
                        product.featured ? 'text-white' : 'text-white/90'
                      }`}
                    >
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      {product.shortDescription}
                    </p>
                    <p
                      className={`mt-4 font-mono-brand text-2xl font-bold tracking-tight ${
                        product.featured ? 'text-brand-cyan' : 'text-white'
                      }`}
                    >
                      €{product.priceEuros}
                    </p>

                    {/* Primary CTA → product page */}
                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-cyan px-4 py-2.5 text-sm font-semibold text-midnight transition-colors hover:bg-brand-cyan-bright">
                      <span className="flex-1">Bekijk &amp; bestel</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </div>

                    {/* Secondary: WhatsApp */}
                    <a
                      href={`https://wa.me/31624782834?text=${encodeURIComponent(`Hallo, ik heb interesse in de ${product.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-2 flex items-center justify-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Vraag via WhatsApp
                    </a>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
