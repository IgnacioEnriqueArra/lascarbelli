"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-4 bg-zinc-950 border-t border-white/10">
      <div className="container-custom max-w-5xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 text-xs sm:text-sm whitespace-nowrap overflow-x-auto"
        >
          <span className="text-sm font-bold text-white flex items-center gap-1">
            Codere<span className="text-base text-cyan-400">.</span><span className="text-base text-purple-400">.</span><span className="text-base text-pink-400">.</span>
          </span>
          <span className="text-zinc-700 text-xs">|</span>
          <a
            href="https://wa.me/5492616921221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            Contacto: +54 9 2616921221
          </a>
        </motion.div>
      </div>
    </footer>
  );
}