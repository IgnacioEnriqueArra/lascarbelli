"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotras" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-widest mb-6">
            Conócenos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Somos las<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"> Carbelli</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Zoe y Guada, dos hermanas de San Martín, Mendoza. Creamos contenido que hace que tu negocio brille en TikTok e Instagram.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 md:gap-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-32 h-32 md:w-44 md:h-44 mx-auto rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-cyan-500/50 transition-colors duration-300">
              <img 
                src="/zoe.jpeg" 
                alt="Zoe"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white font-medium text-lg mt-4">Zoe</p>
            <p className="text-zinc-500 text-sm">Voz y creatividad</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-32 h-32 md:w-44 md:h-44 mx-auto rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-pink-500/50 transition-colors duration-300">
              <img 
                src="/guada.jpeg" 
                alt="Guada"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white font-medium text-lg mt-4">Guada</p>
            <p className="text-zinc-500 text-sm">Edición y magia visual</p>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-zinc-500 text-center text-base mt-12"
        >
          <span className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">
            ¿Tenés un negocio? Hablemos.
          </span>
        </motion.p>
      </div>
    </section>
  );
}