"use client";

import { motion } from "framer-motion";
import { MessageCircle, Video, Upload, Sparkles, ArrowRight, Zap, Shield, Heart } from "lucide-react";

const steps = [
  { 
    num: "01", 
    title: "Contacto", 
    desc: "彼此 Escribís y definimos el contenido perfecto para tu marca. Sin compromiso.",
    icon: MessageCircle,
    color: "cyan"
  },
  { 
    num: "02", 
    title: "Producción", 
    desc: "Capturamos tu producto o servicio con nuestra estética única y profesional.",
    icon: Video,
    color: "purple"
  },
  { 
    num: "03", 
    title: "Resultado", 
    desc: "Editamos, te mostramos, publicamos y miramos cómo tu negocio crece.",
    icon: Upload,
    color: "pink"
  },
];

const benefits = [
  { icon: Zap, title: "Entrega rápida", desc: "Videos listos en 48-72hs" },
  { icon: Shield, title: "Calidad profesional", desc: "Edición con estándares comerciales" },
  { icon: Heart, title: "100% personalizado", desc: "Contenido único para tu marca" },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="container-custom px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Proceso
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Así <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">trabajamos</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Un proceso simple pero efectivo para crear contenido que realmente funciona.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b from-${item.color}-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                <div className="relative p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-black text-zinc-800/50">{item.num}</span>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-500/10 flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 text-${item.color}-400`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{benefit.title}</p>
                  <p className="text-xs text-zinc-500">{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            Start Ahora
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}