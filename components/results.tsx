import { Reveal } from "@/components/reveal"
import { RevealWords } from "@/components/ui/reveal-words"

const testimonials = [
  {
    quote: "87% av vår manuella datainmatning är borta. Teamet kan äntligen lägga tiden på det som faktiskt spelar roll.",
    name: "Anna Bergström",
    role: "COO, NordTech AB",
    initials: "AB",
  },
  {
    quote: "Deras AI-modell förutspår kundchurn med 94% träffsäkerhet. Vi har sparat miljontals kronor sedan vi satte den i drift.",
    name: "Marcus Lindqvist",
    role: "Head of Data, Retailflow",
    initials: "ML",
  },
  {
    quote: "Onboardingen tog tre dagar och resultaten kom inom en vecka. Enkelt, snabbt och utan krångel.",
    name: "Sofia Ek",
    role: "CTO, Payflow Nordic",
    initials: "SE",
  },
]

const stats = [
  { value: "2.4M+", label: "API-anrop per dag" },
  { value: "120+",  label: "Projekt klara" },
  { value: "40+",   label: "Nöjda kunder" },
  { value: "99.9%", label: "Drifttid SLA" },
]

export function Results() {
  return (
    <section id="results" className="bg-background py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Stats — blur fade, numbers pop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 pb-14 md:mb-24 md:pb-24 border-b border-white/6">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="blur" delay={i * 100} threshold={0.2}>
              <div className="text-center">
                <p className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: "#c2d8c4" }}>
                  {s.value}
                </p>
                <p className="text-white/35 text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Header */}
        <div className="max-w-xl mb-12">
          <Reveal variant="none" delay={0}>
            <p className="text-[#c2d8c4] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Kundröster</p>
          </Reveal>
          <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] md:leading-[1.08]">
            <RevealWords text="Vad våra" delay={60} stagger={60} />
            <br />
            <RevealWords text="kunder berättar" delay={210} stagger={60} />
          </div>
        </div>

        {/* Testimonials — card spring variant */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              variant="card"
              delay={i * 85}
              threshold={0.08}
              className="rounded-2xl border border-white/6 bg-card p-7 flex flex-col gap-5 hover:border-[#c2d8c4]/15 transition-colors duration-300"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 14 14" fill="#c2d8c4" opacity="0.7">
                    <path d="M7 1l1.5 4.5H13L9.5 8l1.5 4.5L7 10 3 12.5 4.5 8 1 5.5h4.5z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/6">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: "linear-gradient(135deg, #c2d8c4 0%, #8ab890 100%)", color: "#222" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium leading-tight">{t.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
