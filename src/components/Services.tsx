"use client";

import { motion } from "framer-motion";
import { MessageCircle, Video, Share2 } from "lucide-react";

const steps = [
  { num: "01", title: "Contacto", desc: "Nos escribís y definimos el contenido perfecto para tu marca." },
  { num: "02", title: "Grabación", desc: "Capturamos tu producto o servicio con nuestra estética única." },
  { num: "03", title: "Publicación", desc: "Editamos, te mostramos, publicamos y miramos cómo growsea tu negocio." },
];

const icons = [MessageCircle, Video, Share2];

export default function Services() {
  return (
    <section id="servicios" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom px-4 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          <span className="text-white">Así </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">trabajamos</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-center text-lg max-w-xl mx-auto mb-16"
        >
          Proceso simple, resultados que{" "}
          <span className="text-pink-400">hablan solos</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-bold text-zinc-800">{item.num}</span>
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            Escribinos ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}