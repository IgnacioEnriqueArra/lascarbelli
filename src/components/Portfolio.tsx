"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Grido Heladería", gradient: "from-brand-pink to-brand-mint" },
  { name: "La Casita del Peinador", gradient: "from-brand-mint to-agua" },
  { name: "La Chica de los Ramos", gradient: "from-agua to-lila" },
  { name: "Momy Comidas", gradient: "from-lila to-brand-pink" },
  { name: "Chamu Rockería", gradient: "from-brand-mint to-brand-pink" },
  { name: "Alma Gaucha", gradient: "from-brand-pink to-agua" },
  { name: "...y muchos más", gradient: "from-white/40 to-white/20" }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-32 bg-oscuro relative flex flex-col items-center text-center overflow-hidden">
      {/* Luces sutiles de fondo para estética pro */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-mint/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom px-4 z-10 relative w-full flex flex-col items-center gap-12 md:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="w-full max-w-3xl"
        >
          <div className="inline-flex py-1.5 px-6 rounded-full bg-white/5 border border-white/10 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] mb-6 mx-auto justify-center text-white/50">
             Confían en nosotras
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
            Marcas que ya <br className="hidden md:block"/> dieron el <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-mint">salto</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/60 text-base md:text-xl font-body leading-relaxed">
             Hablamos con contenido genuino que llega a la gente. Cientos de miles de vistas generadas para locales como el tuyo.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6 max-w-5xl mx-auto w-full">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-default"
            >
              <span className={`text-2xl md:text-5xl font-black tracking-tighter transition-all duration-500 inline-block bg-clip-text
                ${brand.name.includes("...") ? "text-white/20 italic" : "text-transparent bg-gradient-to-r hover:scale-110 drop-shadow-sm"} 
                ${brand.gradient}
              `}>
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="mt-4 md:mt-8 w-full flex justify-center"
        >
           <a href="https://www.tiktok.com/@las.carbelli" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black tracking-widest uppercase text-xs md:text-sm rounded-full hover:bg-white hover:text-oscuro active:scale-95 transition-all">
              Ver trabajos en TikTok
           </a>
        </motion.div>
      </div>
    </section>
  );
}