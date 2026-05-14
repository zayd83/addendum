'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function WhatsAppButton() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 120 && !hasScrolled) {
        setHasScrolled(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hasScrolled])

  return (
    <a
      href="https://wa.me/31624782834"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp-green text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-whatsapp-green focus:ring-offset-2 md:bottom-8 md:right-8 md:h-16 md:w-16 ${
        hasScrolled ? 'animate-bounce-subtle' : ''
      }`}
      aria-label="Contact ons via WhatsApp"
    >
      {/* Pulse ring — verschijnt na eerste scroll */}
      {hasScrolled && (
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp-green opacity-30"
          aria-hidden="true"
        />
      )}
      <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" />
    </a>
  )
}
