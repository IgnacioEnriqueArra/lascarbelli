"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#nosotras", label: "Las Jefas" },
  { href: "#servicios", label: "Nuestra Magia" },
  { href: "#portfolio", label: "TRABAJOS" },
  { href: "#contacto", label: "Mandá WhatsApp" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.9]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 opacity-100" : "py-4"
      }`}
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-black/90 border-b border-white/10 backdrop-blur-md"
      />

      <div className="relative container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-black text-white tracking-tight">
            Las <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">Carbelli</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full p-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-xs font-bold text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-white text-xs font-black hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
            >
              ¡A Volar!
            </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden mx-2 mt-2 bg-black/95 backdrop-blur-2xl rounded-2xl border border-white/10"
      >
        <div className="px-6 py-6 flex flex-col gap-3 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-sm font-bold text-white hover:text-pink-500 bg-white/5 rounded-xl transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-4 mt-2 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-white text-sm font-black uppercase tracking-widest"
          >
            ¡Dale, empecemos!
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}