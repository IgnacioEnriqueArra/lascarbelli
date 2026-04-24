"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    local: "",
    exchange: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.local || !formData.exchange || !formData.location) {
      setError("Por favor completa todos los campos");
      return;
    }
    
    setSubmitted(true);
    setError("");

    const message = `*Mensaje enviado desde la web*

Hola Carbellis, Somos de ${formData.local} estamos interesados en canjear ${formData.exchange} por un video publicitario con ustedes, somos de ${formData.location}`;

    setTimeout(() => {
       window.open(`https://wa.me/5492634555069?text=${encodeURIComponent(message)}`, "_blank");
       setSubmitted(false);
       setFormData({ local: "", exchange: "", location: "" });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-zinc-950 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="container-custom max-w-lg px-4 z-10 w-full">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-black text-center mb-8"
          >
             <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ¿Trabajamos juntos?
             </span>
          </motion.h2>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true }}
             className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 w-full border border-white/10"
          >
            {!submitted ? (
              <form onSubmit={handleAction} className="flex flex-col gap-5">
                 <div className="flex flex-col">
                   <label htmlFor="local" className="text-sm font-semibold text-zinc-400 mb-2">
                     Nombre de tu negocio
                   </label>
                   <input 
                      type="text" 
                      id="local"
                      name="local"
                      value={formData.local}
                      onChange={handleChange}
                      required
                      placeholder="Ej: Grido Heladería" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-medium text-white placeholder-zinc-500 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                   />
                 </div>

                 <div className="flex flex-col">
                   <label htmlFor="exchange" className="text-sm font-semibold text-zinc-400 mb-2">
                     ¿Qué das a cambio?
                   </label>
                   <input 
                      type="text" 
                      id="exchange"
                      name="exchange"
                      value={formData.exchange}
                      onChange={handleChange}
                      required
                      placeholder="Ej: Producto, servicio o descuento" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-medium text-white placeholder-zinc-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                   />
                 </div>

                 <div className="flex flex-col">
                   <label htmlFor="location" className="text-sm font-semibold text-zinc-400 mb-2">
                     Dónde estás
                   </label>
                   <input 
                      type="text" 
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="Ej: Ciudad y zona" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-medium text-white placeholder-zinc-500 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                   />
                 </div>

                 {error && (
                   <p className="text-red-400 text-sm mt-1">{error}</p>
                 )}
                 
                 <button type="submit" className="mt-2 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Enviar mensaje
                  </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-6 py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-bold text-xl">¡Listo!</p>
                <p className="text-zinc-400 text-sm">Abriendo WhatsApp...</p>
              </div>
            )}
          </motion.div>
          
          <p className="text-zinc-500 text-center text-sm mt-8">
            Mendoza, Argentina
          </p>
      </div>
    </section>
  );
}