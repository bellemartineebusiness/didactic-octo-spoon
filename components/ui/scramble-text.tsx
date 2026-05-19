"use client"

import { useEffect, useRef, useState } from "react"

const POOL = "0123456789"

interface ScrambleTextProps {
  text: string
  duration?: number
  className?: string
}

export function ScrambleText({ text, duration = 1100, className }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [chars, setChars] = useState<{ char: string; locked: boolean }[]>(
    () => text.split("").map((c) => ({ char: c, locked: false }))
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.unobserve(el)

        const letters = text.split("")
        const start = performance.now()
        let raf: number

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)

          setChars(
            letters.map((orig, i) => {
              // Each character locks in when progress passes its threshold
              const lockAt = (i + 1) / letters.length
              const locked = t >= lockAt

              if (locked) return { char: orig, locked: true }

              // Special chars stay put, digits scramble
              if (!/\d/.test(orig)) return { char: orig, locked: false }

              return {
                char: POOL[Math.floor(Math.random() * POOL.length)],
                locked: false,
              }
            })
          )

          if (t < 1) raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
      },
      { threshold: 0.6 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [text, duration])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={i}
          style={{
            color: c.locked ? "#c2d8c4" : "rgba(194,216,196,0.35)",
            transition: c.locked ? "color 0.08s" : "none",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {c.char}
        </span>
      ))}
    </span>
  )
}
