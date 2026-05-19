import { Reveal } from "@/components/reveal"
import { RevealWords } from "@/components/ui/reveal-words"
import { ScrambleText } from "@/components/ui/scramble-text"

const steps = [
  {
    num: "01",
    title: "Kartläggning",
    desc: "Vi börjar med en djupdykning i era processer, datakällor och mål för att identifiera var AI skapar störst värde.",
  },
  {
    num: "02",
    title: "Prototyp & validering",
    desc: "Snabb prototyputveckling testad mot verkliga data. Ni ser konkreta resultat inom veckor, inte månader.",
  },
  {
    num: "03",
    title: "Bygge & integration",
    desc: "Vi bygger produktionsklara lösningar som integreras sömlöst med era befintliga system och arbetsflöden.",
  },
  {
    num: "04",
    title: "Lansering & optimering",
    desc: "Driftsättning med fullständig monitorering. Vi fortsätter att optimera modeller baserat på reell användning.",
  },
]

const kpis = [
  { value: "4–8 v",  label: "Kickoff till produktion" },
  { value: "340%",  label: "Genomsnittlig ROI" },
  { value: "98%",   label: "Levererade i tid & budget" },
]

export function Process() {
  return (
    <section id="process" className="bg-card py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-10 md:mb-16">
          <Reveal variant="none" delay={0}>
            <p className="text-[#c2d8c4] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Hur vi arbetar</p>
          </Reveal>
          <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.15] md:leading-[1.08]">
            <RevealWords text="Från idé till" delay={60} stagger={55} />
            <br />
            <RevealWords text="produktion på rekordtid" delay={260} stagger={42} />
          </div>
          <Reveal variant="blur" delay={500}>
            <p className="text-white/40 text-lg leading-relaxed">
              Vår beprövade process minimerar risk och maximerar tid till värde.
            </p>
          </Reveal>
        </div>

        {/* Steps — left slide with blur */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          {steps.map((step, i) => (
            <Reveal key={step.num} variant="left" delay={i * 110} threshold={0.08}>
              <div className="flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-full border border-[#c2d8c4]/20 flex items-center justify-center mt-0.5">
                  <span className="text-[#c2d8c4] text-xs font-bold tabular-nums">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* KPI bar */}
        <Reveal variant="up" delay={80} threshold={0.15}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(194,216,196,0.06) 0%, rgba(194,216,196,0.02) 100%)",
              border: "1px solid rgba(194,216,196,0.1)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/6">
              {kpis.map((kpi, i) => (
                <div key={kpi.label} className="px-6 py-7 md:px-10 md:py-8 text-center">
                  <p className="text-4xl font-extrabold tracking-tight mb-1.5 font-mono">
                    <ScrambleText text={kpi.value} duration={900 + i * 120} />
                  </p>
                  <p className="text-white/40 text-sm">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
