import Link from 'next/link'
import { MessageCircle, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#producten', label: 'Producten' },
  { href: '#werkwijze', label: 'Werkwijze' },
  { href: '#contact', label: 'Contact' },
]

function ShieldMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 3L5 8.5V16C5 22.5 9.8 28.2 16 29C22.2 28.2 27 22.5 27 16V8.5L16 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">

          {/* Logo & tagline */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <ShieldMark className="h-6 w-6 text-white/60 transition-colors duration-200 group-hover:text-brand-cyan" />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold text-white">Addendum</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">
                  Networks &amp; Security
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              Professionele installatie van camera&apos;s, alarmsystemen en WiFi-netwerken in Gelderland.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigatie
            </h3>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigatie">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/31624782834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand-cyan"
                >
                  <MessageCircle className="h-4 w-4" />
                  06 24 78 28 34 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="tel:+31624782834"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  06 24 78 28 34
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@addendum.nl"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  info@addendum.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/30">
            © 2026 Addendum Networks &amp; Security. Alle rechten voorbehouden. — KVK [nummer]
          </p>
        </div>
      </div>
    </footer>
  )
}
