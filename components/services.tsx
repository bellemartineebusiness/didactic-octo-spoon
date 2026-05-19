import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="#c2d8c4" strokeWidth="1.4"/>
        <path d="M7.5 11l2.3 2.3L14.5 9" stroke="#c2d8c4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI-automation",
    desc: "Automatisera repetitiva arbetsflöden med skräddarsydda AI-agenter som lär sig och förbättras kontinuerligt.",
    tag: "Populärt",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2.5" y="2.5" width="7" height="7" rx="1.5" stroke="#c2d8c4" strokeWidth="1.4"/>
        <rect x="12.5" y="2.5" width="7" height="7" rx="1.5" stroke="#c2d8c4" strokeWidth="1.4"/>
        <rect x="2.5" y="12.5" width="7" height="7" rx="1.5" stroke="#c2d8c4" strokeWidth="1.4"/>
        <rect x="12.5" y="12.5" width="7" height="7" rx="1.5" stroke="#c2d8c4" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Data & analys",
    desc: "Förvandla rådata till insikter med avancerade modeller för prediktion, segmentering och realtidsanalys.",
    tag: null,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M19 14a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" stroke="#c2d8c4" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Konversations-AI",
    desc: "Intelligenta chatbottar och kundtjänstlösningar som förstår kontext och levererar precisa svar.",
    tag: null,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 6.5l9 4.5 9-4.5L11 2z" stroke="#c2d8c4" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M2 15.5l9 4.5 9-4.5" stroke="#c2d8c4" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M2 11l9 4.5 9-4.5" stroke="#c2d8c4" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: "ML-infrastruktur",
    desc: "Skalbar infrastruktur för maskininlärning — från träning till driftsättning och monitorering i produktion.",
    tag: null,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="#c2d8c4" strokeWidth="1.4"/>
        <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M4.22 17.78l1.42-1.42M16.36 5.64l1.42-1.42" stroke="#c2d8c4" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Computer Vision",
    desc: "Bildklassificering, objektdetektering och visuell inspektion för industri, handel och medicinsk diagnostik.",
    tag: null,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M8 3H4a1 1 0 0 0-1 1v4m5-5h10a1 1 0 0 1 1 1v4M8 3v16m0 0h10a1 1 0 0 0 1-1V8M8 19H4a1 1 0 0 1-1-1V8m0 0h18" stroke="#c2d8c4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI-strategi",
    desc: "Kartlägg er AI-mognad, identifiera möjligheter och bygg en färdplan som skapar mätbart affärsvärde.",
    tag: "Nytt",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
          <div className="max-w-xl">
            <Reveal variant="none" delay={0}>
              <p className="text-[#c2d8c4] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Tjänster</p>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
                Allt ni behöver<br />för att lyckas med AI
              </h2>
            </Reveal>
            <Reveal variant="blur" delay={300}>
              <p className="text-white/40 text-lg leading-relaxed">
                Från strategi till implementation — vi täcker hela kedjan.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal variant="up" delay={120} threshold={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4 rounded-2xl overflow-hidden border border-white/4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-background p-8 hover:bg-card transition-colors duration-300"
              >
                {s.tag && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border border-[#c2d8c4]/25 text-[#c2d8c4]/80">
                    {s.tag}
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-[#c2d8c4]/6 flex items-center justify-center mb-5 group-hover:bg-[#c2d8c4]/10 transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-white font-semibold text-[17px] mb-2 tracking-tight">{s.title}</h3>
                <p className="text-white/38 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
