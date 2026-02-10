'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from './ui/sheet'
import { PrimaryButton } from './PrimaryButton'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  // { href: '/#living-options', label: 'Living Options' },
  // { href: '/#amenities', label: 'Amenities' },
  { href: '/contact-us', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-navy'
      }`}
    >
      <div className="mx-auto flex max-w-section items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Image src="/logo_tree.png" alt="Legacy" width={36} height={36} className="brightness-0 invert" />
            <span className="font-script text-2xl text-white lowercase">Legacy</span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wide text-white/70">
            Premium retirement living
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/95 text-[1.0625rem] font-medium hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <PrimaryButton href="/contact-us" className="!bg-white !text-navy hover:!bg-white/90 !border-0">
            Schedule a Visit
          </PrimaryButton>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy border-white/10">
              <nav className="flex flex-col gap-2 pt-8">
                {navLinks.map(({ href, label }) => (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-white/10"
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-4 border-t border-white/15 pt-4">
                  <SheetClose asChild>
                    <PrimaryButton href="/contact-us" className="w-full justify-center !bg-white !text-navy !border-0">
                      Schedule a Visit
                    </PrimaryButton>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
