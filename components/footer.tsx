import Link from 'next/link'
import { MessageCircle, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#producten', label: 'Producten' },
  { href: '#werkwijze', label: 'Werkwijze' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-white" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold text-navy">Addendum</span>
              <span className="text-sm text-muted-foreground">Networks & Security</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigatie
            </h3>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigatie">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/31624782834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  06 24 78 28 34 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="tel:+31624782834"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  06 24 78 28 34
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@addendum.nl"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  info@addendum.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Addendum Networks & Security. Alle rechten voorbehouden. — KVK [nummer]
          </p>
        </div>
      </div>
    </footer>
  )
}
