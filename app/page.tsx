import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Results } from "@/components/results"
import { Team } from "@/components/team"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Results />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
