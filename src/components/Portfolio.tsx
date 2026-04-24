"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const brands = [
  { name: "Grido Heladería", gradient: "from-cyan-400 to-blue-500" },
  { name: "La Casita del Peinador", gradient: "from-purple-400 to-violet-500" },
  { name: "Momy Comidas", gradient: "from-orange-400 to-amber-500" },
  { name: "Chamu Rockería", gradient: "from-pink-400 to-rose-500" },
  { name: "Alma Gaucha", gradient: "from-green-400 to-emerald-500" },
  { name: "La Chica de los Ramos", gradient: "from-rose-400 to-pink-500" },
  { name: "Expreso 2000", gradient: "from-blue-400 to-indigo-500" },
  { name: "Believe", gradient: "from-violet-400 to-purple-500" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '45px 45px' }} />
        
        <div className="absolute top-32 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
      </div>
      
      <div className="container-custom px-4 z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-12"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Negocios que nos eligieron
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://www.instagram.com/las_carbelli/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center px-4 py-3 md:px-5 md:py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <span className="font-semibold text-sm md:text-base text-zinc-300 group-hover:text-white truncate">{brand.name}</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <motion.a
            href="https://www.instagram.com/las_carbelli/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full text-sm hover:border-cyan-500 hover:bg-white/10 transition-all"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            <span>Ver todos</span>
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}