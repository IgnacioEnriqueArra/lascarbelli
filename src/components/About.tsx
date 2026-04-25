"use client";

import { motion } from "framer-motion";
import { Sparkles, Mic, Scissors, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="nosotras" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(34,211,238,0.02) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Conócenos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Somos las <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Carbelli</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dos sisters de San Martín, Mendoza creando contenido que hace que tu negocio{' '}
            <span className="text-cyan-400">explote</span> en TikTok e Instagram.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 md:gap-16 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center group"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-3xl overflow-hidden border-4 border-zinc-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500">
              <img 
                src="/zoe.jpeg" 
                alt="Zoe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-2">
                <Mic className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white font-bold text-lg">Zoe</p>
              <p className="text-zinc-500 text-sm">Voz + Creatividad</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center group"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-3xl overflow-hidden border-4 border-zinc-800 group-hover:border-pink-500/50 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500">
              <img 
                src="/guada.jpeg" 
                alt="Guada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-2">
                <Scissors className="w-5 h-5 text-pink-400" />
              </div>
              <p className="text-white font-bold text-lg">Guada</p>
              <p className="text-zinc-500 text-sm">Edición + Dirección</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="text-zinc-300">¿Tenés un negocio? </span>
            <a href="#contacto" className="text-cyan-400 font-semibold hover:underline">
              Hablemos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}