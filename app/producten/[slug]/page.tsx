import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ChevronRight, MessageCircle, ShieldCheck, Truck, Clock } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ProductOrderForm } from '@/components/product-order-form'
import { products, getProductBySlug, getOtherProducts } from '@/lib/products'
import { Button } from '@/components/ui/button'

/* ─── Static params voor alle 4 producten ─── */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

/* ─── SEO metadata per product ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  return {
    title: `${product.name} — Addendum Networks & Security`,
    description: `${product.shortDescription} Professionele installatie in Zuid-Holland en heel Nederland. Direct te bestellen via Addendum.`,
    openGraph: {
      title: `${product.name} — Addendum Networks & Security`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.alt }],
      type: 'website',
    },
  }
}

/* ─── Category labels ─── */
const categoryLabel: Record<string, string> = {
  alarm:  'Alarmsysteem',
  camera: 'Beveiligingscamera',
}

/* ─── Trust badges ─── */
const trustItems = [
  { icon: ShieldCheck, label: 'Professionele installatie mogelijk' },
  { icon: Truck,       label: 'Levering & installatie op afspraak' },
  { icon: Clock,       label: 'Reactie binnen 24 uur' },
]

/* ─── Product page ─── */
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const others = getOtherProducts(slug)

  return (
    <>
      <Header />

      <main className="min-h-screen bg-warm-white">

        {/* ── Breadcrumb ── */}
        <div className="border-b border-border bg-warm-white">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm text-muted-foreground md:px-6 lg:px-8">
            <Link href="/" className="transition-colors hover:text-midnight">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
            <Link href="/#producten" className="transition-colors hover:text-midnight">Producten</Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
            <span className="max-w-[200px] truncate font-medium text-midnight">{product.name}</span>
          </div>
        </div>

        {/* ── Product hero ── */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

              {/* Image panel */}
              <div className="relative">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-brand-cyan px-3 py-1 text-xs font-semibold text-midnight shadow">
                    {product.badge}
                  </div>
                )}

                {/* Main image */}
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      priority
                      className="object-contain p-8"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Category pill below image */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                    {categoryLabel[product.category]}
                  </span>
                  {product.category === 'camera' && (
                    <span className="rounded-full border border-border bg-warm-surface px-3 py-1 text-xs text-muted-foreground">
                      PoE · IP67
                    </span>
                  )}
                </div>
              </div>

              {/* Info panel */}
              <div className="flex flex-col">

                {/* Name */}
                <h1
                  className="font-heading text-3xl font-bold text-midnight md:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className="font-mono-brand text-5xl font-bold text-brand-cyan"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    €{product.priceEuros}
                  </span>
                  <span className="text-sm text-muted-foreground">incl. BTW</span>
                </div>

                {/* Short description */}
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {product.shortDescription}
                </p>

                {/* Trust badges */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {trustItems.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-midnight shadow-sm"
                    >
                      <Icon className="h-3.5 w-3.5 text-brand-cyan" />
                      {label}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="btn-cyan-glow flex-1 gap-2 bg-brand-cyan font-semibold text-midnight hover:bg-brand-cyan-bright"
                  >
                    <a href="#bestellen">
                      Nu bestellen
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1 gap-2 border-border text-midnight hover:border-midnight hover:bg-midnight hover:text-white"
                  >
                    <a
                      href={`https://wa.me/31624782834?text=${encodeURIComponent(`Hallo, ik heb een vraag over de ${product.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Vraag via WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Specs preview (first 4) */}
                <div className="mt-8 rounded-2xl border border-border bg-white p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Kernspecificaties
                  </p>
                  <ul className="flex flex-col gap-3">
                    {product.specs.slice(0, 4).map((spec) => (
                      <li key={spec.label} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                        <span>
                          <span className="font-medium text-midnight">{spec.label}: </span>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#specificaties"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-cyan transition-colors hover:text-brand-cyan-bright"
                  >
                    Alle specificaties bekijken
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Description + full specs ── */}
        <section id="specificaties" className="border-t border-border bg-warm-surface py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Long description */}
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                  Over dit product
                </p>
                <h2 className="font-heading text-2xl font-bold text-midnight md:text-3xl" style={{ letterSpacing: '-0.02em' }}>
                  Waarom de {product.name}?
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {product.longDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Full specs */}
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                  Technische specificaties
                </p>
                <h2 className="font-heading text-2xl font-bold text-midnight md:text-3xl" style={{ letterSpacing: '-0.02em' }}>
                  Alle specificaties
                </h2>
                <dl className="mt-6 divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 px-5 py-4 text-sm"
                    >
                      <dt className="w-40 shrink-0 font-medium text-midnight">{spec.label}</dt>
                      <dd className="flex-1 text-muted-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

            </div>
          </div>
        </section>

        {/* ── Order section ── */}
        <section id="bestellen" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

              {/* Left: order form */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                  Uw bestelling
                </p>
                <h2 className="font-heading text-2xl font-bold text-midnight md:text-3xl" style={{ letterSpacing: '-0.02em' }}>
                  Bestel de {product.category === 'alarm' ? 'beveiliging' : 'camera'} direct
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Vul uw gegevens in — wij nemen contact op voor installatie en levering.
                </p>

                {/* Order summary card */}
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-contain p-2"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-midnight truncate">{product.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">Eénmalige aankoop</p>
                  </div>
                  <span className="font-mono-brand text-xl font-bold text-brand-cyan shrink-0">
                    €{product.priceEuros}
                  </span>
                </div>

                <div className="mt-6">
                  <ProductOrderForm product={product} />
                </div>
              </div>

              {/* Right: why Addendum */}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                    Waarom Addendum?
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-midnight md:text-3xl" style={{ letterSpacing: '-0.02em' }}>
                    Vakmanschap dat werkt
                  </h2>
                </div>

                {[
                  {
                    title: 'Altijd bereikbaar via WhatsApp',
                    body: 'Vragen? Stuur een appje. Wij reageren snel en duidelijk — geen callcenter, gewoon direct contact.',
                  },
                  {
                    title: 'Installatie op maat',
                    body: 'Na uw bestelling plannen wij samen een installatiemoment in. Wij regelen alles van A tot Z.',
                  },
                  {
                    title: 'Alleen A-merken',
                    body: 'Wij werken uitsluitend met bewezen merken: Ajax, Dahua en Hikvision. Betrouwbaar en toekomstbestendig.',
                  },
                  {
                    title: 'Actief door heel Nederland',
                    body: 'Werkzaam in Zuid-Holland en omgeving, maar ook bereikbaar voor installaties door heel Nederland. Snel ter plaatse, u kent het gezicht achter het bedrijf.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10">
                      <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Other products ── */}
        <section className="border-t border-border bg-warm-surface py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Ook interessant
            </p>
            <h2 className="mb-8 font-heading text-2xl font-bold text-midnight md:text-3xl" style={{ letterSpacing: '-0.02em' }}>
              Andere producten
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/producten/${p.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-cyan/30 hover:shadow-md"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-warm-surface">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-midnight">{p.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.shortDescription.split('.')[0]}</p>
                    <p className="mt-1.5 font-mono-brand text-base font-bold text-brand-cyan">€{p.priceEuros}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-cyan" />
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
