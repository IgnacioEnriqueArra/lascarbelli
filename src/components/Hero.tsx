"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 500, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => setIsHovering(false);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div 
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{ 
          x: cursorXSpring, 
          y: cursorYSpring,
          translate: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          animate={{ 
            scale: isHovering ? 2 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: '#ec4899' }}
        />
      </motion.div>

      <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <motion.div
            animate={{
              x: mousePos.x * 30,
              y: mousePos.y * 30,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full bg-cyan-500/30 blur-[120px]"
          />
          <motion.div
            animate={{
              x: -mousePos.x * 20,
              y: -mousePos.y * 20,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 25 }}
            className="absolute bottom-[10%] -right-[5%] w-[550px] h-[550px] rounded-full bg-pink-500/30 blur-[120px]"
          />
          <motion.div
            animate={{
              x: -mousePos.x * 15,
              y: mousePos.y * 15,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[150px]"
          />
        </motion.div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-20 container-custom min-h-[100svh] flex flex-col justify-center items-center text-center py-24 px-4">
          <div className="absolute top-4 left-4 w-px h-20 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />
          <div className="absolute top-4 right-4 w-px h-20 bg-gradient-to-b from-pink-500/0 via-pink-500/50 to-pink-500/0" />
          <div className="absolute bottom-4 left-1/4 w-px h-10 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0" />
          <div className="absolute bottom-4 right-1/4 w-px h-10 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />
          <motion.div
            style={{ opacity }}
            className="flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,13vw,9rem)] font-black tracking-tight leading-[0.9] mb-3"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Las
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Carbelli
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-3xl text-zinc-400 max-w-lg mx-auto mb-8 font-medium"
            >
              Videos para tu negocio con la magia de las Carbelli
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <a
                href="#contacto"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white rounded-full overflow-hidden w-full sm:w-auto shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <span>Trabajemos</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all gap-2 w-full sm:w-auto"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                <span>Ver trabajos</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">Desplaza</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-20" />
      </section>
    </>
  );
}