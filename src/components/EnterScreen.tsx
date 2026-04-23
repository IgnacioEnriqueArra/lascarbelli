"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnterScreen() {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fake loading effect for a premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = entered ? "unset" : "hidden";
  }, [entered]);

  const handleEnter = () => {
    if (loading) return;
    setEntered(true);
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      video.muted = false;
      video.volume = 0.8;
      video.play().catch((e) => console.log(e));
    }
  };

  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Subtle cinematic light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6 text-center">
            
            <div className="overflow-hidden mb-12">
              <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase"
              >
                Las Carbelli
              </motion.h1>
              <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-0.5 bg-white/20 mt-4 mx-auto block"
              >
                <div className="h-full bg-white w-1/3 animate-pulse" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]"
                >
                  Cargando Experiencia...
                </motion.div>
              ) : (
                <motion.button
                  key="enter-btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={handleEnter}
                  className="group relative flex items-center justify-center px-12 py-4 bg-white text-oscuro font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <span>Ingresar</span>
                  </div>
                </motion.button>
              )}
            </AnimatePresence>

          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none">
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
               Agencia de Creación de Contenido
             </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
