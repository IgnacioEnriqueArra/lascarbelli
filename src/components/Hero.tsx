"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-pink-500/10" />
      </div>

      <motion.div 
        style={{ y }}
        className="fixed inset-0 z-10 pointer-events-none"
      >
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] -right-[10%] w-[550px] h-[550px] bg-gradient-to-l from-pink-500/20 to-cyan-500/20 rounded-full blur-[120px]"
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 container-custom text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
           Contenido que hace crecer tu negocio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,12vw,8rem)] font-black tracking-tight leading-[0.9] mb-8"
        >
          <span className="block text-white">
            Las
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Carbelli
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl text-zinc-300 max-w-xl mx-auto mb-10 font-light"
        >
          Creamos contenido que hace que tu negocio{' '}
          <span className="text-cyan-400 font-medium">explote</span> en redes sociales
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-semibold uppercase tracking-wider text-white rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              Start Ahora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-zinc-300 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50 transition-all"
          >
            <Play className="w-5 h-5 mr-2" fill="currentColor" />
            Ver Trabajos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}