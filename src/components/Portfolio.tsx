"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Dona Celes", tag: "Food Porn", img: "🍔", bg: "bg-brand-pink" },
  { title: "Paseo La Estación", tag: "Recorrido", img: "🛍️", bg: "bg-brand-mint" },
  { title: "SmartTech", tag: "Unboxing", img: "🎧", bg: "bg-lila" },
  { title: "PetShop Amigos", tag: "Mascotas", img: "🐶", bg: "bg-agua" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-claro relative flex flex-col items-center text-center">
      <div className="container-custom px-4 z-10 relative w-full flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full mb-10 md:mb-16">
          <div className="inline-flex py-1.5 px-4 rounded-full bg-white border border-oscuro/5 font-black uppercase text-[10px] md:text-xs tracking-widest mb-4 mx-auto justify-center">
             👀 Nuestro Impacto
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-oscuro tracking-tighter mb-4 w-full">
            Casos de <span className="text-gradient">Éxito</span>
          </h2>
          <p className="max-w-md mx-auto text-oscuro/60 text-sm md:text-lg font-body px-4 w-full block">
             Contenido adictivo que la gente no puede parar de mirar. Literalmente llevamos clientes a tu puerta.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto w-full justify-center">
           {projects.map((proj, i) => (
             <motion.div 
               key={proj.title}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: i * 0.1 }}
               className="group relative rounded-3xl md:rounded-[2rem] overflow-hidden flex flex-col items-center justify-end h-56 md:h-80 shadow-soft cursor-pointer hover:shadow-card-hover transition-all text-center mx-auto w-full w-full"
             >
                <div className={`absolute inset-0 ${proj.bg} opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-6xl md:text-[7rem] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                     {proj.img}
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-oscuro/90 via-oscuro/10 to-transparent" />
                
                <div className="relative p-4 md:p-6 flex flex-col items-center justify-center w-full">
                   <div className="inline-block px-3 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest mb-2 md:mb-3 shadow-sm mx-auto">
                     {proj.tag}
                   </div>
                   <h3 className="text-white font-black text-[15px] md:text-2xl tracking-tighter leading-none mx-auto text-center w-full block break-words">{proj.title}</h3>
                </div>
             </motion.div>
           ))}
        </div>
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 md:mt-16 w-full flex justify-center">
           <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-black text-brand-pink uppercase tracking-widest hover:text-lila transition-colors underline underline-offset-4 decoration-2 mx-auto inline-flex justify-center">
              Ver todos los videos en Instagram &rarr;
           </a>
        </motion.div>
      </div>
    </section>
  );
}