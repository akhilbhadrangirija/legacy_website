export function SectionSeparator({ text = 'LIVING SERVICES' }) {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="text-[clamp(2rem,6vw,4rem)] font-bold uppercase tracking-wider text-surface-warm text-center whitespace-nowrap">
        {text}
      </p>
    </div>
  )
}
