"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotras" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[200px]" />
        
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <a 
            href="https://www.instagram.com/las_carbelli/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-6 hover:border-cyan-500 hover:bg-white/10 transition-all cursor-pointer"
          >
            Conócenos
          </a>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mt-6 mb-6">
            Las <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Carbelli</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed px-4">
            Somos Zoe y Guada, dos sisters de San Martín, Mendoza. 
            Hacemos videos para TikTok e Instagram. Zoe pone la voz y Guada edita. 
            Juntas creamos contenido auténtico para tu negocio.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 md:gap-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <img 
                src="/zoe.jpeg" 
                alt="Zoe"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-cyan-400 font-semibold text-lg mt-4">Zoe</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
              <img 
                src="/guada.jpeg" 
                alt="Guada"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-pink-400 font-semibold text-lg mt-4">Guada</p>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-zinc-500 text-center text-base mt-10"
        >
          Si tenés un negocio y querés llegar a más gente, mandanos un mensaje.
        </motion.p>
      </div>
    </section>
  );
}