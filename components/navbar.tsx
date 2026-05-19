"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Tjänster", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Resultat", href: "#results" },
  { label: "Kontakt", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          {/* Clip to top half to show only the mint-green ZYNIQ wordmark */}
          <Image
            src="/Zyniq.png"
            alt="Zyniq"
            width={120}
            height={120}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-white/50 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-base font-medium px-5 py-2.5 rounded-full border border-[#c2d8c4]/30 text-[#c2d8c4] hover:bg-[#c2d8c4]/10 transition-all duration-200"
          >
            Boka demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — always rendered, animated height */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/5",
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(24px)" }}
      >
        <div className="px-6 pt-2 pb-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3.5 text-sm text-white/60 hover:text-white transition-colors border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-block text-sm font-medium px-5 py-2.5 rounded-full border border-[#c2d8c4]/30 text-[#c2d8c4] hover:bg-[#c2d8c4]/8 transition-colors"
          >
            Boka demo
          </a>
        </div>
      </div>
    </nav>
  )
}
