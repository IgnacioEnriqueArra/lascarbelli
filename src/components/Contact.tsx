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
    setError(""); // Clear error on input
  };

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
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
    <section id="contacto" className="py-24 md:py-32 bg-black flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-pink-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom max-w-md px-4 z-10 w-full">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-black text-center mb-8"
          >
             <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                ¿Trabajamos juntos?
             </span>
          </motion.h2>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true }}
             className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full"
          >
            {!submitted ? (
              <form onSubmit={handleAction} className="flex flex-col gap-4">
                 <div className="flex flex-col">
                   <label htmlFor="local" className="text-sm font-medium uppercase tracking-wider text-white/50 mb-1">
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
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 font-medium text-white placeholder-white/40 outline-none focus:border-pink-500/50 transition-all"
                   />
                 </div>

                 <div className="flex flex-col">
                   <label htmlFor="exchange" className="text-sm font-medium uppercase tracking-wider text-white/50 mb-1">
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
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 font-medium text-white placeholder-white/40 outline-none focus:border-cyan-400/50 transition-all"
                   />
                 </div>

                 <div className="flex flex-col">
                   <label htmlFor="location" className="text-sm font-medium uppercase tracking-wider text-white/50 mb-1">
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
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 font-medium text-white placeholder-white/40 outline-none focus:border-pink-500/50 transition-all"
                   />
                 </div>

                 {error && (
                   <p className="text-red-400 text-sm mt-2">{error}</p>
                 )}
                 
<button type="submit" className="mt-3 w-full bg-gradient-to-r from-pink-500 to-cyan-400 text-white px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                    Enviar mensaje
                  </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-6 py-8">
                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-7 h-7 text-green-400" />
                </div>
                <p className="text-white font-bold text-lg">¡Listo!</p>
                <p className="text-white/60 text-sm mt-2">Abriendo WhatsApp...</p>
              </div>
            )}
          </motion.div>
          
          <p className="text-white/30 text-center text-xs mt-6">
            Mendoza, Argentina
          </p>
      </div>
    </section>
  );
}