import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Оценка ${value} из 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn("h-4 w-4", i <= value ? "fill-accent text-accent" : "fill-none text-muted-foreground/40")}
        />
      ))}
    </div>
  )
}
