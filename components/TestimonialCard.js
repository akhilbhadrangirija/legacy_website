import { cn } from '../lib/utils'
import { Star } from 'lucide-react'

export function TestimonialCard({ quote, name, role, className }) {
  return (
    <div
      className={cn(
        'rounded-card-lg bg-surface p-8 shadow-card flex flex-col',
        className
      )}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-charcoal/10 flex items-center justify-center text-charcoal font-bold text-lg shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <cite className="not-italic font-semibold text-charcoal">{name}</cite>
          {role && <span className="text-warm-gray text-sm block">{role}</span>}
        </div>
      </div>
      <div className="flex gap-0.5 mb-4" aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <blockquote className="text-charcoal text-base md:text-lg leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </div>
  )
}
