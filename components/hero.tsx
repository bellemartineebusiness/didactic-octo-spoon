"use client"

import { WebGLShaderContained } from "@/components/ui/web-gl-shader-contained"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { RevealWords } from "@/components/ui/reveal-words"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <WebGLShaderContained className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(194,216,196,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge — fades in first */}
        <Reveal variant="none" delay={100} threshold={0}>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#c2d8c4]/20 bg-[#c2d8c4]/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c2d8c4] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c2d8c4]" />
            </span>
            <span className="text-xs text-[#c2d8c4]/80 font-medium tracking-wide">
              Tar emot nya kunder
            </span>
          </div>
        </Reveal>

        {/* Headline — word by word, triggered on mount */}
        <h1 className="text-[2.15rem] sm:text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold tracking-tighter text-white leading-[0.97] sm:leading-[0.93] mb-5 sm:mb-7">
          <RevealWords
            text="AI som gör"
            triggerOnMount
            delay={240}
            stagger={60}
          />
          <br className="hidden sm:block" />
          <RevealWords
            text="jobbet"
            className="text-[#c2d8c4]"
            triggerOnMount
            delay={480}
            stagger={60}
          />{" "}
          <RevealWords
            text="åt dig"
            triggerOnMount
            delay={560}
            stagger={60}
          />
        </h1>

        {/* Subtext — blur fade */}
        <Reveal variant="blur" delay={750} threshold={0}>
          <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Vi bygger AI-lösningar som sparar dig tid, tar hand om tråkiga
            processer och ger dig faktisk koll på din data.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal variant="up" delay={900} threshold={0}>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <LiquidButton
              className="text-white border border-white/20 rounded-full font-semibold tracking-tight"
              size="xl"
            >
              Kom igång idag
            </LiquidButton>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors duration-200 group"
            >
              Utforska tjänster
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />
    </section>
  )
}
