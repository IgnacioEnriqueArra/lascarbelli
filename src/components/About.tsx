"use client";

import { motion } from "framer-motion";

const sisters = [
  {
    name: "Zoe",
    age: 12,
    role: "Editora & Directora",
    description: "Creatividad al 100%. Edita con ritmo impecable y logra captar la esencia de tu lugar para que destaque en TikTok. 🎬✨",
    gradient: "from-agua to-brand-mint",
    emoji: "💖",
  },
  {
    name: "Guada",
    age: 8,
    role: "Voz & Carisma",
    description: "La energía del team. Su carisma natural engancha a los usuarios al instante. Dale el libreto y ella pondrá la magia real. ✨🎙️",
    gradient: "from-brand-pink to-lila",
    emoji: "🔥",
  },
];

export default function About() {
  return (
    <section id="nosotras" className="py-12 md:py-24 bg-claro relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-pink/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10 px-4 w-full flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="w-full mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center gap-1.5 mb-3 bg-white border border-oscuro/5 px-4 py-1.5 rounded-full shadow-soft font-black text-xs uppercase tracking-widest text-oscuro/60 mx-auto">
            <span>👋 Conócenos</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-oscuro mb-3 md:mb-4 tracking-tighter mx-auto">
            Detrás de las <span className="text-gradient">cámaras</span>
          </h2>
          <p className="text-sm md:text-xl text-oscuro/60 max-w-lg mx-auto font-body px-2">
            Dos hermanas unidas por la creatividad. Armamos videos para que tu restaurante o local explote de clientes. 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-10 max-w-5xl mx-auto w-full">
          {sisters.map((sister, index) => (
            <motion.div
              key={sister.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 lg:p-10 border-2 border-transparent hover:border-brand-pink/10 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col items-center justify-center gap-5 md:gap-6 group mx-auto w-full max-w-lg"
            >
              <div className={`w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${sister.gradient} flex items-center justify-center shadow-lg relative -rotate-3 group-hover:rotate-0 transition-transform mx-auto`}>
                <span className="text-5xl md:text-6xl drop-shadow-md">{sister.emoji}</span>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white text-oscuro font-black text-sm md:text-base flex items-center justify-center shadow-md">
                   {sister.age}
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center mt-2 w-full">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2">{sister.name}</h3>
                <span className={`text-xs md:text-sm font-black uppercase tracking-widest bg-gradient-to-r ${sister.gradient} bg-clip-text text-transparent mb-3 block`}>
                   {sister.role}
                </span>
                <p className="text-[14px] md:text-base font-body text-oscuro/60 leading-relaxed max-w-sm mx-auto w-full">
                   {sister.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}