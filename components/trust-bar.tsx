import { Reveal } from "@/components/reveal"

const companies = ["Volvo", "Ericsson", "Spotify", "Klarna", "IKEA", "H&M", "Scania", "ABB"]

export function TrustBar() {
  return (
    <section className="bg-background border-y border-white/5 py-10 overflow-hidden">
      <Reveal variant="none" threshold={0.3}>
        <p className="text-center text-white/25 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
          Betrodda av ledande företag
        </p>
      </Reveal>
      <Reveal variant="none" delay={120} threshold={0.3}>
        <div className="relative flex overflow-hidden">
          {[0, 1].map((i) => (
            <div
              key={i}
              aria-hidden={i === 1}
              className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-16 items-center"
            >
              {[...companies, ...companies].map((name, j) => (
                <span
                  key={j}
                  className="text-white/18 font-semibold text-base tracking-tight whitespace-nowrap select-none hover:text-white/35 transition-colors duration-300"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
          <div className="absolute inset-y-0 left-0 w-32 pointer-events-none bg-linear-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-32 pointer-events-none bg-linear-to-l from-background to-transparent" />
        </div>
      </Reveal>
    </section>
  )
}
