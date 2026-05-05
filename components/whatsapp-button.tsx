'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31624782834"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp-green text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-whatsapp-green focus:ring-offset-2 animate-bounce-subtle md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Contact ons via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  )
}
