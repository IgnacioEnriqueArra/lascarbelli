"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotras" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-pink-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-400 rounded-full blur-[120px]" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 font-bold text-xs uppercase tracking-widest mb-4 hover:border-pink-500 transition-all cursor-pointer"
          >
            Conócenos
          </a>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-6 mb-4">
            Las Carbelli
          </h2>
          <p className="text-white/50 text-center text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed px-4">
            Somos Zoe y Guada, dos sisters de San Martín, Mendoza. 
            Hacemos videos para TikTok e Instagram. Zoe pone la voz y Guada edita. 
            Juntas creamos contenido auténtico para tu negocio.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 md:gap-8 max-w-xl mx-auto">
          {/* Zoe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-pink-500 hover:border-cyan-400 transition-all duration-300">
              <img 
                src="/zoe.jpeg" 
                alt="Zoe"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white font-medium text-sm mt-2">Zoe</p>
          </motion.div>

          {/* Guada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-pink-500 hover:border-cyan-400 transition-all duration-300">
              <img 
                src="/guada.jpeg" 
                alt="Guada"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white font-medium text-sm mt-2">Guada</p>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-center text-sm mt-6"
        >
          Si tenés un negocio y querés llegar a más gente, mandanos un mensaje.
        </motion.p>
      </div>
    </section>
  );
}
