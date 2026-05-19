"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Variant = "up" | "blur" | "card" | "left" | "none"
type Tag = "div" | "span" | "section" | "article"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: Variant
  threshold?: number
  as?: Tag
}

const variantClass: Record<Variant, string> = {
  up:   "reveal-up",
  blur: "reveal-blur",
  card: "reveal-card",
  left: "reveal-left",
  none: "reveal-none",
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  threshold = 0.1,
  as: Tag = "div",
}: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)

  useEffect(() => {
    const el = ref.current as HTMLElement | null
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add("reveal-in")
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, threshold])

  return (
    <Tag
      ref={ref}
      className={cn("reveal-base", variantClass[variant], className)}
    >
      {children}
    </Tag>
  )
}
