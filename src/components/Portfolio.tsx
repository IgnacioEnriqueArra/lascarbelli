"use client";

import { motion } from "framer-motion";

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container-custom px-4 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          <span className="text-white">Negocios que </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">confiaron</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-center text-lg max-w-xl mx-auto mb-12"
        >
          Más de 50 negocios en Mendoza ya confían en nuestro trabajo
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="https://www.instagram.com/las_carbelli/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center py-4 md:py-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200"
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
          className="flex justify-center mt-12"
        >
          <a
            href="https://www.instagram.com/las_carbelli/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-700 hover:border-zinc-500 transition-all"
          >
            Ver todos en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}