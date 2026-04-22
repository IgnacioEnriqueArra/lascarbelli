"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="py-12 md:py-24 bg-white relative flex flex-col items-center text-center overflow-hidden">
      {/* Background blobs for a fun vibe */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-brand-mint/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] bg-lila/10 rounded-full blur-[80px]" />

      <div className="container-custom px-4 w-full flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center justify-center mb-10 md:mb-16 gap-4 text-center max-w-2xl mx-auto w-full">
           <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center w-full">
              <div className="inline-flex items-center justify-center gap-1.5 mb-4 bg-brand-mint/10 px-4 py-2 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest text-brand-mint mx-auto">
                <span>💭 ¿Cómo lo hacemos?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-oscuro tracking-tighter leading-none mb-4 mx-auto block w-full">
                 Cero formalidades, <br className="hidden sm:block"/> <span className="text-gradient">puro disfrute</span>
              </h2>
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full flex justify-center">
              <p className="text-sm md:text-lg text-oscuro/60 font-body leading-relaxed md:px-0 px-4 mx-auto text-center block w-full">
                 Nada de agencias, luces molestas o libretos aburridos. Somos dos hermanas pasando el rato y mostrando lo genial que es tu marca.
              </p>
           </motion.div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 max-w-3xl mx-auto w-full justify-center">
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#FAFAFA] rounded-[2rem] p-6 sm:p-10 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-card hover:-translate-y-1 mx-auto w-full">
             <div className="text-6xl md:text-7xl mb-4 mx-auto group-hover:scale-110 transition-transform origin-center">💌</div>
             <h3 className="font-black text-2xl md:text-3xl mb-3 tracking-tight text-brand-pink">Nos invitan</h3>
             <p className="text-[14px] md:text-base text-oscuro/60 leading-relaxed font-body w-full">
               Cuadramos por WhatsApp y caemos a tu local o recibimos tus productos en casa. Grabamos todo de forma súper auténtica probando y divirtiéndonos de verdad.
             </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#FAFAFA] rounded-[2rem] p-6 sm:p-10 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-card hover:-translate-y-1 mx-auto w-full">
             <div className="text-6xl md:text-7xl mb-4 mx-auto group-hover:scale-110 transition-transform origin-center">💻</div>
             <h3 className="font-black text-2xl md:text-3xl mb-3 tracking-tight text-lila">Magia en casa</h3>
             <p className="text-[14px] md:text-base text-oscuro/60 leading-relaxed font-body w-full">
               Zoe se encierra en su compu a hacer mil cortes divertidos, poner música en tendencia, y Guada le graba una vocecita súper dulce para contar la experiencia.
             </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#FAFAFA] rounded-[2rem] p-6 sm:p-10 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-card hover:-translate-y-1 mx-auto w-full">
             <div className="text-6xl md:text-7xl mb-4 mx-auto group-hover:scale-110 transition-transform origin-center">🚀</div>
             <h3 className="font-black text-2xl md:text-3xl mb-3 tracking-tight text-brand-mint">Subimos y explota</h3>
             <p className="text-[14px] md:text-base text-oscuro/60 leading-relaxed font-body w-full">
               Te mandamos el video listo para subir a TikTok o Reels. La gente conecta con cosas reales, por lo que tu marca empezará a llenarse de clientes nuevos buscando la misma vibra.
             </p>
          </motion.div>

        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mt-12 md:mt-16 w-full">
          <a href="#contacto" className="btn-primary bg-oscuro text-white outline-none border-none hover:bg-lila inline-flex items-center justify-center gap-2 px-10 py-5 text-sm md:text-base w-full sm:w-auto shadow-glow mx-auto">
            ¡Nos re suma, hablemos!
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}