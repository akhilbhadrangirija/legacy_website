'use client'

import Link from 'next/link'
import { cn } from '../lib/utils'

export function SecondaryButton({ href, children, className, onClick, type = 'button', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-lg border-2 border-charcoal bg-transparent px-6 py-3.5 text-base font-medium text-charcoal transition-colors hover:bg-charcoal/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'

  if (href) {
    return (
      <Link href={href} className={cn(base, className)} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cn(base, className)} {...props}>
      {children}
    </button>
  )
}
