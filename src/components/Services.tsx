"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Contacto", desc: "Nos escribís, coordinamos el contenido según el producto o servicio que ofrecés." },
  { num: "02", title: "Grabación", desc: "Grabamos tu producto o servicio y mostramos nuestra experiencia con tu marca." },
  { num: "03", title: "Publicación", desc: "Editamos, nos das el okay y subimos a nuestras redes." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-[10%] left-[-10%] w-[250px] h-[250px] bg-pink-500 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[250px] h-[250px] bg-cyan-400 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom px-4 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-center mb-10"
        >
          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Así trabajamos
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl md:text-6xl font-black text-white/10">{item.num}</span>
                  <span className="text-3xl">{
                    i === 0 ? '💬' : i === 1 ? '📹' : '📱'
                  }</span>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg md:text-xl">{item.title}</h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold rounded-full text-sm uppercase tracking-wider cursor-pointer"
          >
            Escribinos
          </a>
        </motion.div>
      </div>
    </section>
  );
}