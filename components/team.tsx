"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Reveal } from "@/components/reveal"
import { RevealWords } from "@/components/ui/reveal-words"

const members = [
  {
    src: "https://avatars.githubusercontent.com/u/47919550?v=4",
    name: "Meschac Irung",
    role: "Lead AI Engineer",
    bio: "Jobbar mest med stora språkmodeller och hur man gör dem riktigt bra för specifika företag.",
    twitter: "https://x.com/MeschacIrung",
  },
  {
    src: "https://avatars.githubusercontent.com/u/31113941?v=4",
    name: "Bernard Ngandu",
    role: "ML Infrastructure",
    bio: "Tar hand om allt som krävs för att AI-modeller faktiskt ska funka i verkligheten.",
    twitter: "#",
  },
  {
    src: "https://avatars.githubusercontent.com/u/68236786?v=4",
    name: "Theo Balick",
    role: "Product & Design",
    bio: "Designar AI-grejer som folk faktiskt förstår och vill använda.",
    twitter: "#",
  },
  {
    src: "https://avatars.githubusercontent.com/u/99137927?v=4",
    name: "Glodie Lukose",
    role: "Data Science Lead",
    bio: "Analyserar data på djupet och säkerställer att modellerna vi bygger ger resultat i verkligheten.",
    twitter: "#",
  },
  {
    src: "https://avatars.githubusercontent.com/u/12345678?v=4",
    name: "Sarah Lindgren",
    role: "AI Solutions Architect",
    bio: "Ritar upp hur allt ska hänga ihop och ser till att det funkar med det du redan har.",
    twitter: "#",
  },
  {
    src: "https://avatars.githubusercontent.com/u/23456789?v=4",
    name: "Marcus Chen",
    role: "NLP Specialist",
    bio: "Specialist på hur AI förstår och hanterar svenska språket. Bygger konversationssystem som känns naturliga.",
    twitter: "#",
  },
  {
    src: "https://avatars.githubusercontent.com/u/34567890?v=4",
    name: "Aisha Patel",
    role: "Computer Vision",
    bio: "Bygger AI som ser och förstår bilder. Jobbar mycket med industri och e-handel.",
    twitter: "#",
  },
  {
    src: "https://avatars.githubusercontent.com/u/45678901?v=4",
    name: "Carlos Berg",
    role: "AI Ethics & Compliance",
    bio: "Ser till att det vi bygger är etiskt, rättvist och håller sig inom lagen.",
    twitter: "#",
  },
  {
    src: "https://avatars.githubusercontent.com/u/56789012?v=4",
    name: "Emma Svensson",
    role: "Business Development",
    bio: "Hjälper dig lista ut vad AI kan göra för ditt företag och se till att du faktiskt får ut något av det.",
    twitter: "#",
  },
]

export function Team() {
  return (
    <section id="team" className="bg-background py-20 md:py-28 px-6">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <Reveal variant="none" delay={0}>
              <p className="text-[#c2d8c4] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Teamet</p>
            </Reveal>
            <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.15] md:leading-[1.08]">
              <RevealWords text="Gänget" delay={60} stagger={55} />
              <br />
              <RevealWords text="bakom Zyniq" delay={220} stagger={55} />
            </div>
            <Reveal variant="blur" delay={450}>
              <p className="text-white/40 text-lg leading-relaxed">
                Vi är ett dedikerat team med djup erfarenhet inom AI, mjukvara och design. Vi gillar utmaningar och är genuint engagerade i varje kunds framgång.
              </p>
            </Reveal>
          </div>

          <Reveal variant="none" delay={320}>
            <Button
              asChild
              variant="outline"
              className="self-start md:self-auto h-9 rounded-full pr-3 border-[#c2d8c4]/25 text-[#c2d8c4] hover:bg-[#c2d8c4]/8 hover:text-[#c2d8c4] hover:border-[#c2d8c4]/40 transition-all shrink-0"
            >
              <Link href="#">
                Vi rekryterar
                <ChevronRight className="ml-1 size-4 opacity-70" />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Members grid */}
        <div
          role="list"
          aria-label="Teammedlemmar"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((member, index) => (
            <Reveal key={index} variant="up" delay={index * 50} threshold={0.04}>
            <HoverCard openDelay={120} closeDelay={80}>
              <HoverCardTrigger
                className={[
                  "group grid cursor-pointer grid-cols-[auto_1fr] items-center gap-4",
                  "rounded-xl border border-white/6 bg-card p-4",
                  "transition-all duration-200",
                  "hover:border-[#c2d8c4]/20 hover:bg-card/80",
                  "data-[state=open]:border-[#c2d8c4]/25 data-[state=open]:bg-card/80",
                  "focus:outline-none",
                ].join(" ")}
              >
                <Avatar className="rounded-xl size-11 border border-white/8 shadow">
                  <AvatarImage src={member.src} alt={member.name} />
                  <AvatarFallback className="rounded-xl text-sm">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <span className="text-white block truncate text-[15px] font-semibold leading-tight mb-0.5">
                    {member.name}
                  </span>
                  <span className="text-white/40 block truncate text-sm">
                    {member.role}
                  </span>
                </div>
              </HoverCardTrigger>

              <HoverCardContent align="start" sideOffset={10}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="rounded-xl size-12 border border-white/8 shadow">
                      <AvatarImage src={member.src} alt={member.name} />
                      <AvatarFallback className="rounded-xl">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="text-white truncate text-sm font-semibold">
                        {member.name}
                      </div>
                      <div className="text-[#c2d8c4] truncate text-xs mt-0.5">
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    aria-label={`${member.name} på X`}
                    className="shrink-0 h-8 w-8 text-white/30 hover:text-white hover:bg-white/8"
                  >
                    <Link href={member.twitter}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </Link>
                  </Button>
                </div>

                <p className="text-white/50 text-xs leading-relaxed border-t border-white/6 pt-3">
                  {member.bio}
                </p>
              </HoverCardContent>
            </HoverCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
