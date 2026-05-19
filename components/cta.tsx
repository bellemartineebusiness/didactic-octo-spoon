"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { WebGLShaderContained } from "@/components/ui/web-gl-shader-contained"
import { Reveal } from "@/components/reveal"
import { RevealWords } from "@/components/ui/reveal-words"

export function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-36 px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-25">
        <WebGLShaderContained />
      </div>
      <div className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-linear-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-linear-to-t from-background to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(194,216,196,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal variant="none" delay={0}>
          <p className="text-[#c2d8c4] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Kom igång</p>
        </Reveal>
        <div className="text-4xl md:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.15] md:leading-[1.05] mb-5 md:mb-6">
          <RevealWords text="Redo att ta nästa" delay={80} stagger={52} />
          <br />
          <RevealWords text="steg med AI?" delay={290} stagger={52} />
        </div>
        <Reveal variant="blur" delay={560}>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Boka ett kostnadsfritt 30-minutersmöte där vi kartlägger hur AI kan skapa konkret värde för er verksamhet.
          </p>
        </Reveal>
        <Reveal variant="up" delay={680}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LiquidButton
              className="text-white border border-[#c2d8c4]/30 rounded-full font-semibold tracking-tight"
              size="xl"
            >
              Boka gratis demo
            </LiquidButton>
            <a
              href="mailto:hej@zyniq.se"
              className="text-white/40 hover:text-white/70 text-sm font-medium transition-colors duration-200"
            >
              hej@zyniq.se
            </a>
          </div>
        </Reveal>
        <Reveal variant="none" delay={320} threshold={0.05}>
          <div className="mt-10 flex items-center justify-center gap-7 flex-wrap">
            {["Ingen bindningstid", "Svar inom 24h", "NDA på begäran"].map((s) => (
              <div key={s} className="flex items-center gap-2 text-white/30 text-xs">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="#c2d8c4" strokeWidth="1.2" strokeOpacity="0.35"/>
                  <path d="M4.5 7l1.8 1.8L9.5 5" stroke="#c2d8c4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6"/>
                </svg>
                {s}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
