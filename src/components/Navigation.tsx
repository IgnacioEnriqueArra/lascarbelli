"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#nosotras", label: "Nosotras" },
  { href: "#servicios", label: "El Método" },
  { href: "#portfolio", label: "Impacto" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const bgBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(20px)"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 sm:py-3 opacity-0 pointer-events-none" : "py-4 sm:py-6 opacity-100"
      }`}
    >
      <motion.div
        style={{ opacity: bgOpacity, backdropFilter: bgBlur }}
        className="absolute inset-x-2 sm:inset-x-6 md:inset-x-12 inset-y-0 bg-white/80 border border-white/50 rounded-[2rem] shadow-sm"
      />

      <div className="relative container-custom flex items-center justify-between px-4 sm:px-0">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-oscuro group-hover:scale-105 transition-transform flex items-center gap-1.5">
            Las <span className="px-2 py-0.5 bg-oscuro text-white rounded-lg -rotate-2">Carbelli</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 backdrop-blur-md rounded-full p-1.5 border border-oscuro/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2 text-[13px] font-black text-oscuro/70 hover:text-oscuro hover:bg-white rounded-full transition-all duration-300 uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-[1rem] bg-gradient-to-r from-brand-pink to-brand-mint text-white text-xs sm:text-sm font-black shadow-soft hover:shadow-card hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
            >
              Hagamos Magia
            </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-full bg-white text-oscuro shadow-soft hover:shadow-card transition-all"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden mx-2 sm:mx-6 mt-2 bg-white/95 backdrop-blur-2xl rounded-[2rem] border border-oscuro/5 shadow-card"
      >
        <div className="px-6 py-6 flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg font-black text-oscuro hover:text-brand-pink bg-gray-50 rounded-2xl transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-4 mt-2 rounded-[1.25rem] bg-oscuro text-white text-base font-black uppercase tracking-widest"
          >
            Hagamos Magia ✨
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}