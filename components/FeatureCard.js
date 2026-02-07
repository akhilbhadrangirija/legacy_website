import { cn } from '../lib/utils'

export function FeatureCard({ icon, title, description, className }) {
  return (
    <div
      className={cn(
        'rounded-card bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover',
        className
      )}
    >
      {icon && <div className="mb-4 text-accent" aria-hidden>{icon}</div>}
      <h3 className="text-lg font-bold text-charcoal mb-2">{title}</h3>
      {description && <p className="text-warm-gray leading-relaxed text-[1.0625rem]">{description}</p>}
    </div>
  )
}
