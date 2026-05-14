'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navLinks = [
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-warm-white transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border shadow-[0_1px_16px_rgba(9,23,41,0.06)]'
          : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <ShieldMark className="h-7 w-7 text-midnight transition-colors duration-200 group-hover:text-brand-cyan" />
          <div className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-midnight md:text-xl">
              Addendum
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-muted-foreground md:block">
              Networks &amp; Security
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdnavigatie">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-midnight after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="gap-2 bg-brand-cyan font-semibold text-midnight hover:bg-brand-cyan-bright"
          >
            <a href="https://wa.me/31624782834" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6 text-midnight" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-warm-white">
            <SheetTitle className="sr-only">Navigatiemenu</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setIsOpen(false)}
              >
                <ShieldMark className="h-6 w-6 text-midnight" />
                <span className="font-heading text-lg font-bold text-midnight">Addendum</span>
              </Link>
              <nav className="flex flex-col gap-1" aria-label="Mobiele navigatie">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-warm-surface hover:text-midnight"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button
                asChild
                className="mt-2 gap-2 bg-brand-cyan font-semibold text-midnight hover:bg-brand-cyan-bright"
              >
                <a href="https://wa.me/31624782834" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp ons
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}
