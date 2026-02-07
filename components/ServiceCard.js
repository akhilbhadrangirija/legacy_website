import { cn } from '../lib/utils'

export function ServiceCard({ icon, title, description, className }) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-card-lg bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover',
        className
      )}
    >
      {icon && <div className="mb-4 text-accent" aria-hidden>{icon}</div>}
      <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
      {description && (
        <p className="text-warm-gray leading-relaxed text-[1.0625rem] flex-1">{description}</p>
      )}
    </div>
  )
}
