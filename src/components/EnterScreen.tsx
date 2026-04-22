"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function EnterScreen() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "unset" : "hidden";
  }, [entered]);

  const handleEnter = () => {
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
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* Fun abstract blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-mint/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            <motion.div
               animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="mb-8 p-6 bg-white shadow-card-hover rounded-full border-4 border-oscuro/5"
            >
               <span className="text-6xl">✨</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-black text-oscuro tracking-tighter mb-4">
              Las <span className="text-gradient">Carbelli</span>
            </h1>
            <p className="text-oscuro/60 font-body mb-10 font-bold">
              Bienvenido/a. Recomendamos subir el volumen para la experiencia completa 🎧
            </p>
            
            <button
              onClick={handleEnter}
              className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 rounded-3xl bg-oscuro text-white font-black uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink via-lila to-agua opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-2">
                <span>Ingresar</span>
                <Play className="w-5 h-5 fill-current" />
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
