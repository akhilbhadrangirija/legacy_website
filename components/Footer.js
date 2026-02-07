import Link from 'next/link'
import Image from 'next/image'
import { SectionWrapper } from './SectionWrapper'
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#community', label: 'Community' },
]

const servicesLinks = [
  { href: '/#living-options', label: 'Living Options' },
  { href: '/#amenities', label: 'Amenities' },
]

const supportLinks = [
  { href: '/contact-us', label: 'Contact' },
]

const socialIcons = [
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'YouTube', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 py-14">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded">
              <div className="flex items-center gap-2">
                <Image src="/logo_tree.png" alt="Legacy" width={32} height={32} className="brightness-0 invert" />
                <span className="font-script text-2xl text-white lowercase">Legacy</span>
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wide text-white/70 mt-0.5">
                Premium retirement living
              </span>
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-prose">
              A serene, senior-centric community in the heart of Kerala. Comfort, care, and connection.
            </p>
            <p className="mt-3 text-white/60 text-sm">
              A project of Manivelil Retirement Living (P) Ltd.
            </p>
            <div className="flex gap-3 mt-6">
              {socialIcons.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-4">
              Contact
            </h3>
            <address className="text-white/80 text-sm not-italic leading-relaxed">
              <p>6/342A, Vadavucode P.O.,<br />Puthencruz, Ernakulam – 682310</p>
              <p className="mt-3">
                <a href="tel:04842828282" className="hover:text-white transition-colors">0484 2828282</a>
                <br />
                <a href="tel:+919895088888" className="hover:text-white transition-colors">+91 98950 88888</a>
              </p>
              <p className="mt-2">
                <a href="mailto:info@legacy.com" className="hover:text-white transition-colors">info@legacy.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="py-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Legacy Retirement Living. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/contact-us" className="text-white/60 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  )
}
