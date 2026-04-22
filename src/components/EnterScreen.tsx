"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          {/* Fun abstract blobs perfectly subtle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-mint/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-5xl md:text-7xl font-black text-oscuro tracking-tighter mb-10"
            >
              Las <span className="text-gradient">Carbelli</span>
            </motion.h1>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={handleEnter}
              className="group relative w-full flex items-center justify-center px-10 py-5 rounded-3xl bg-oscuro text-white font-black uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink via-lila to-agua opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center">
                <span>Conocernos</span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
