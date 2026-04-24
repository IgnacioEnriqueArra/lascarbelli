"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#nosotras", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
      />

      <div className="relative container-custom flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-xl md:text-2xl font-bold text-white">
          Las <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Carbelli</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              Escribinos
            </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl"
      >
        <div className="px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-sm font-medium text-zinc-400 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 mt-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full"
          >
            Escribinos
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}