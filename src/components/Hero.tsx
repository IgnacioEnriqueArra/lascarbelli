"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const mousePos = { x: useMotionValue(0), y: useMotionValue(0) };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    mousePos.x.set(x);
    mousePos.y.set(y);
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-0"
        onMouseMove={handleMouseMove}
      >
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/50 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-pink-500/10" />
      </div>

      <motion.div 
        style={{ y }}
        className="fixed inset-0 z-10 pointer-events-none"
      >
        <motion.div
          animate={{
            x: mousePos.x.get() * 20,
            y: mousePos.y.get() * 20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-[15%] -left-[5%] w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            x: -mousePos.x.get() * 15,
            y: -mousePos.y.get() * 15,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 25 }}
          className="absolute bottom-[15%] -right-[5%] w-[450px] h-[450px] rounded-full bg-pink-500/20 blur-[100px]"
        />
      </motion.div>

      <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="relative z-20 container-custom text-center px-4 py-32">
          <motion.div
            style={{ opacity }}
            className="flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,12vw,8rem)] font-black tracking-tight leading-[0.9] mb-6"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
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
              Videos que hacen que tu negocio{" "}
              <span className="text-cyan-400">explote</span> en redes sociales
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contacto"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Trabajar juntos
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold uppercase tracking-widest text-zinc-300 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all gap-2"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Ver trabajos
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}