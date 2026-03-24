interface AdSlotProps {
  id: string
  label?: string
  className?: string
}

export default function AdSlot({ id, label = 'Advertisement', className = '' }: AdSlotProps) {
  return (
    <div
      id={id}
      aria-label={label}
      className={`w-full min-h-[90px] bg-cream-dark border border-dashed border-stone-300/70 rounded-sm flex items-center justify-center my-8 ${className}`}
    >
      {/* Google AdSense — replace with script tag when live */}
      <span className="text-xs font-sans font-light text-stone-400 tracking-widest uppercase">
        {label}
      </span>
    </div>
  )
}
