"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-900">
      <div className="container-custom max-w-5xl px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              Las <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Carbelli</span>
            </span>
          </div>
          
          <p className="text-zinc-500 text-sm">
            © 2024 Las Carbelli. Mendoza, Argentina.
          </p>
          
          <a
            href="https://wa.me/5492616921221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            +54 9 2616921221
          </a>
        </motion.div>
      </div>
    </footer>
  );
}