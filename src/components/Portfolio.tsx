"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const brands = [
  { name: "Grido Heladería", gradient: "from-pink-500 to-rose-500" },
  { name: "La Casita del Peinador", gradient: "from-cyan-400 to-blue-500" },
  { name: "Momy Comidas", gradient: "from-amber-500 to-orange-500" },
  { name: "Chamu Rockería", gradient: "from-purple-500 to-pink-500" },
  { name: "Alma Gaucha", gradient: "from-green-400 to-emerald-500" },
  { name: "La Chica de los Ramos", gradient: "from-rose-500 to-red-500" },
  { name: "Expreso 2000", gradient: "from-blue-500 to-indigo-500" },
  { name: "Believe", gradient: "from-violet-500 to-purple-500" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom px-4 z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-center mb-10"
        >
          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Negocios que nos eligieron
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <a
                href="https://www.instagram.com/las_carbelli/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center px-3 py-2 md:px-4 md:py-2.5 rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-none bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <span className="font-semibold text-xs md:text-sm text-white/80 group-hover:text-white truncate">{brand.name}</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.a
            href="https://www.instagram.com/las_carbelli/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full text-sm hover:bg-white hover:text-black transition-all"
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