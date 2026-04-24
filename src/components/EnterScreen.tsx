"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnterScreen() {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = entered ? "unset" : "hidden";
  }, [entered]);

  const handleEnter = () => {
    setEntered(true);
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.muted = false;
      video.volume = 0.3;
      video.play().catch(() => {});
    });
  };

  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
        >
          <div className="absolute inset-0">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-zinc-950/70" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2">
              Las <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Carbelli</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base mb-8">Contenido que hace growwear tu negocio</p>
            
            {!loading && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleEnter}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                Entrar
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}