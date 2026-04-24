"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Contacto", desc: "Nos escribís, coordinamos el contenido según el producto o servicio que ofrecés." },
  { num: "02", title: "Grabación", desc: "Grabamos tu producto o servicio y mostramos nuestra experiencia con tu marca." },
  { num: "03", title: "Publicación", desc: "Editamos, nos das el okay y subimos a nuestras redes." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[150px]" />
        
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="container-custom px-4 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center mb-12"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Así trabajamos
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl group-hover:bg-pink-500/30 transition-all" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl md:text-7xl font-black text-white/10">{item.num}</span>
                  <span className="text-4xl">{
                    i === 0 ? '💬' : i === 1 ? '📹' : '📱'
                  }</span>
                </div>
                <h3 className="font-bold text-white mb-3 text-xl">{item.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-full text-sm uppercase tracking-wider cursor-pointer hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            Escribinos
          </a>
        </motion.div>
      </div>
    </section>
  );
}