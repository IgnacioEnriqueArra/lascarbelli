"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    local: "",
    exchange: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hola Las Carbelli! ✨
Quiero hacer un video para mi marca.

🏪 *Local:* ${formData.local}
🎁 *Para canjear:* ${formData.exchange}
📍 *Ubicación:* ${formData.location}`;

    setTimeout(() => {
       window.open(`https://wa.me/5492612345678?text=${encodeURIComponent(message)}`, "_blank");
       setSubmitted(false);
       setFormData({ local: "", exchange: "", location: "" });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-16 md:py-32 bg-white flex flex-col items-center relative overflow-hidden">
      <div className="container-custom max-w-2xl px-4 z-10 text-center w-full">
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-6xl md:text-7xl mb-4 block animate-bounce">💌</span>
            <h2 className="text-4xl md:text-6xl font-black text-oscuro tracking-tighter mb-4">
              ¿Hacemos <br className="hidden md:block" /> un trato?
            </h2>
            <p className="text-oscuro/60 font-body text-sm md:text-xl mb-10 px-4">
               Cero vueltas. Contanos qué tenés para ofrecer, nosotras vamos y armamos un video espectacular.
            </p>
         </motion.div>
         
         <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            viewport={{ once: true }}
            className="bg-[#FAFAFA] rounded-[2rem] p-6 md:p-10 shadow-card border border-oscuro/5 w-full mx-auto"
         >
           {!submitted ? (
             <form onSubmit={handleAction} className="flex flex-col gap-5">
                
                <div className="flex flex-col text-left group">
                  <label htmlFor="local" className="text-xs md:text-[13px] font-black uppercase tracking-widest text-oscuro mb-2 pl-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-pink block" />
                    Nombre del Local o Marca
                  </label>
                  <input 
                     type="text" 
                     id="local"
                     name="local"
                     value={formData.local}
                     onChange={handleChange}
                     required
                     placeholder="Ej. Burguería La Estación" 
                     className="w-full bg-white rounded-2xl px-5 py-4 font-bold outline-none border-2 border-oscuro/5 focus:border-brand-pink shadow-sm text-sm"
                  />
                </div>

                <div className="flex flex-col text-left group">
                  <label htmlFor="exchange" className="text-xs md:text-[13px] font-black uppercase tracking-widest text-oscuro mb-2 pl-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-mint block" />
                    ¿Qué querés canjear por la publicidad?
                  </label>
                  <input 
                     type="text" 
                     id="exchange"
                     name="exchange"
                     value={formData.exchange}
                     onChange={handleChange}
                     required
                     placeholder="Ej. 2 Hamburguesas dobles con papas" 
                     className="w-full bg-white rounded-2xl px-5 py-4 font-bold outline-none border-2 border-oscuro/5 focus:border-brand-mint shadow-sm text-sm"
                  />
                </div>

                <div className="flex flex-col text-left group">
                  <label htmlFor="location" className="text-xs md:text-[13px] font-black uppercase tracking-widest text-oscuro mb-2 pl-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lila block" />
                    Ubicación (Zona/Dpto)
                  </label>
                  <input 
                     type="text" 
                     id="location"
                     name="location"
                     value={formData.location}
                     onChange={handleChange}
                     required
                     placeholder="Ej. San Martín Centro" 
                     className="w-full bg-white rounded-2xl px-5 py-4 font-bold outline-none border-2 border-oscuro/5 focus:border-lila shadow-sm text-sm"
                  />
                </div>

                <button type="submit" className="mt-4 w-full bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#20BD5A] transition-colors active:scale-95 shadow-lg shadow-[#25D366]/30 hover:scale-[1.02]">
                  <MessageCircle className="w-6 h-6" fill="currentColor" />
                  Contactar por WhatsApp
                </button>
             </form>
           ) : (
             <div className="flex flex-col items-center justify-center gap-3 py-10 text-brand-verde font-black bg-white rounded-2xl">
               <CheckCircle className="w-10 h-10 animate-pulse" />
               ¡Súper! Abriendo WhatsApp...
             </div>
           )}
         </motion.div>
         
      </div>
    </section>
  );
}