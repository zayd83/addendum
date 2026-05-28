'use client'

import { useState } from 'react'
import { MessageCircle, Loader2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/products'

interface Props {
  product: Product
}

export function ProductOrderForm({ product }: Props) {
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [phone,   setPhone]   = useState('')
  const [loading, setLoading] = useState(false)
  const [errors,  setErrors]  = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim())                         e.name  = 'Vul uw naam in'
    if (!email.trim() || !email.includes('@')) e.email = 'Vul een geldig e-mailadres in'
    if (!phone.trim())                         e.phone = 'Vul uw telefoonnummer in'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)

    // TODO (Stap 4): vervang dit blok door een POST naar /api/checkout
    // const res = await fetch('/api/checkout', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ slug: product.slug, name, email, phone }),
    // })
    // const { checkoutUrl } = await res.json()
    // window.location.href = checkoutUrl

    // Tijdelijk: doorsturen via WhatsApp
    const msg = encodeURIComponent(
      `Hallo! Ik wil graag de ${product.name} (€${product.priceEuros}) bestellen.\n\nMijn gegevens:\nNaam: ${name}\nE-mail: ${email}\nTelefoon: ${phone}`
    )
    window.open(`https://wa.me/31624782834?text=${msg}`, '_blank')
    setLoading(false)
  }

  const inputClass =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-midnight placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Naam */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-midnight" htmlFor="order-name">
          Naam <span className="text-brand-cyan">*</span>
        </label>
        <input
          id="order-name"
          type="text"
          placeholder="Uw volledige naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputClass} ${errors.name ? 'border-red-400' : 'border-border'}`}
          autoComplete="name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* E-mail */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-midnight" htmlFor="order-email">
          E-mailadres <span className="text-brand-cyan">*</span>
        </label>
        <input
          id="order-email"
          type="email"
          placeholder="uwmail@voorbeeld.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputClass} ${errors.email ? 'border-red-400' : 'border-border'}`}
          autoComplete="email"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Telefoon */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-midnight" htmlFor="order-phone">
          Telefoonnummer <span className="text-brand-cyan">*</span>
        </label>
        <input
          id="order-phone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`${inputClass} ${errors.phone ? 'border-red-400' : 'border-border'}`}
          autoComplete="tel"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="btn-cyan-glow mt-2 h-12 w-full gap-2 bg-brand-cyan text-base font-semibold text-midnight hover:bg-brand-cyan-bright disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <MessageCircle className="h-5 w-5" />
            Bestelling bevestigen
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Wij nemen contact met u op voor bevestiging van installatie &amp; levering.
      </p>
    </form>
  )
}
