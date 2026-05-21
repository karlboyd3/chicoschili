"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      if (current > lastScrollY.current && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(28, 13, 6, 0.97)" : "rgba(28, 13, 6, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(201, 162, 39, 0.2)" : "1px solid transparent",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-6">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image src="/logo.png" alt="Chico's Chili" width={360} height={144} className="object-contain" style={{ maxHeight: "140px", width: "auto" }} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
              style={{ color: "rgba(253,245,230,0.75)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--chili-orange)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(253,245,230,0.75)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--chili-orange)",
              color: "var(--cream)",
            }}
          >
            Order Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              transform: mobileOpen ? "translateY(8px) rotate(45deg)" : "",
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              transform: mobileOpen ? "translateY(-8px) rotate(-45deg)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "400px" : "0",
          backgroundColor: "rgba(28, 13, 6, 0.98)",
        }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium py-2 border-b"
              style={{
                color: "var(--cream)",
                borderColor: "rgba(201,162,39,0.15)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-3 text-center rounded-full text-sm font-bold"
            style={{ backgroundColor: "var(--chili-orange)", color: "var(--cream)" }}
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
