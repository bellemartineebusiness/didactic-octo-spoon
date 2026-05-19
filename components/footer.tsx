import Image from "next/image"

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Tjänster: [
    { label: "AI-automation",    href: "#services" },
    { label: "Data & analys",    href: "#services" },
    { label: "Konversations-AI", href: "#services" },
    { label: "ML-infrastruktur", href: "#services" },
    { label: "Computer Vision",  href: "#services" },
  ],
  Företaget: [
    { label: "Om oss",   href: "#team"    },
    { label: "Karriär",  href: "#contact" },
    { label: "Press",    href: "#contact" },
    { label: "Partners", href: "#contact" },
  ],
  Resurser: [
    { label: "Blogg",         href: "#results" },
    { label: "Case studies",  href: "#results" },
    { label: "Dokumentation", href: "#contact" },
    { label: "API-status",    href: "#contact" },
  ],
  Juridiskt: [
    { label: "Integritetspolicy", href: "#contact" },
    { label: "Villkor",           href: "#contact" },
    { label: "Cookies",           href: "#contact" },
    { label: "GDPR",              href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <div>
                <Image
                  src="/Zyniq.png"
                  alt="Zyniq"
                  width={36}
                  height={36}
                />
              </div>
            </div>
            <p className="text-white/28 text-sm leading-relaxed mb-5">
              AI-lösningar som skapar mätbara resultat för moderna företag.
            </p>
            <div className="flex gap-2.5">
              {[
                {
                  label: "LinkedIn",
                  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                },
                {
                  label: "X / Twitter",
                  d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/8 flex items-center justify-center text-white/25 hover:text-white/60 hover:border-white/20 transition-colors duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-white/50 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/28 hover:text-white/60 text-sm transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© 2026 Zyniq AB. Alla rättigheter förbehållna.</p>
          <p className="text-white/20 text-xs">Byggd med precision. Driven av data.</p>
        </div>
      </div>
    </footer>
  )
}
