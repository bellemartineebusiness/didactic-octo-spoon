"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealWordsProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  threshold?: number
  triggerOnMount?: boolean
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 65,
  threshold = 0.25,
  triggerOnMount = false,
  as: Tag = "span",
}: RevealWordsProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (triggerOnMount) {
      const t = setTimeout(() => setVisible(true), 80)
      return () => clearTimeout(t)
    }

    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [triggerOnMount, threshold])

  const words = text.split(" ")

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block">
          <span
            className="inline-block"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.55s ease",
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  )
}
