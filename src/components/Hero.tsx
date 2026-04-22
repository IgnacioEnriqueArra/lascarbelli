"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-screen flex flex-col justify-center overflow-hidden bg-oscuro">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          id="hero-video"
          src="/hero.mp4"
          autoPlay
          loop
          muted // Controlled by EnterScreen
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-oscuro via-transparent to-transparent opacity-90" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center justify-end md:justify-center pt-24 pb-12 sm:px-12 h-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="w-full max-w-4xl flex flex-col items-center"
        >
          <div className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-xs uppercase tracking-widest mb-6 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            Las mejores de Mendoza
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] font-black tracking-tighter mb-4 text-white leading-none">
            Las <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-mint to-agua">Carbelli</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-12 font-body font-medium leading-relaxed px-4">
            Transformamos la vibra de tu local en contenido adictivo. Llegá a miles de clientes potenciales con videos genuinos, creativos y de alto alcance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
            <a href="#contacto" className="inline-flex items-center justify-center px-10 py-4 sm:py-5 bg-white text-oscuro font-black tracking-widest uppercase text-sm rounded-2xl hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto shadow-glow">
              Trabajemos
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black tracking-widest uppercase text-sm rounded-2xl hover:bg-white/20 active:scale-95 transition-all w-full sm:w-auto">
              Ver trabajos
            </a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}