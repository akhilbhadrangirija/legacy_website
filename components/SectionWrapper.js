import { cn } from '../lib/utils'

/**
 * Controls section padding and max width. All spacing and widths flow through here.
 */
export function SectionWrapper({ children, className, size = 'default' }) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6',
        size === 'narrow' && 'max-w-3xl',
        size === 'default' && 'max-w-section',
        size === 'wide' && 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  )
}
