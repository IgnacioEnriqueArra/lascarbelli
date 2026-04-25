"use client";

import { motion } from "framer-motion";
import { Play, Star, Users, Sparkles } from "lucide-react";

const brands = [
  "Grido Heladería",
  "La Casita del Peinador", 
  "Momy Comidas",
  "Chamu Rockería",
  "Alma Gaucha",
  "La Chica de los Ramos",
  "Expreso 2000",
  "Believe",
];

const stats = [
  { num: "50+", label: "Negocios", icon: Star },
  { num: "200+", label: "Videos", icon: Play },
  { num: "1M+", label: "Vistas", icon: Users },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="container-custom px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Negocios que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">confiaron</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Más de 50 negocios en Mendoza ya trabajan con nosotras.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.num}</p>
                <p className="text-zinc-500 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <a
                href="https://instagram.com/las_carbelli"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center py-5 md:py-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-800/50 transition-all duration-300"
              >
                <span className="font-medium text-sm md:text-base text-zinc-300 text-center">{brand}</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://instagram.com/las_carbelli"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-700 hover:border-cyan-500/50 transition-all"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Ver todos los trabajos
          </a>
        </motion.div>
      </div>
    </section>
  );
}