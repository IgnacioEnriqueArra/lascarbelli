"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Send } from "lucide-react";

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
      setError("Completá todos los campos");
      return;
    }
    
    setSubmitted(true);
    setError("");

    const message = `*Mensaje desde la web*

Hola Carbellis! Somos de *${formData.local}* y queremos canjear *${formData.exchange}* por un video nuestro. Estamos en *${formData.location}*`;

    setTimeout(() => {
       window.open(`https://wa.me/5492634555069?text=${encodeURIComponent(message)}`, "_blank");
       setSubmitted(false);
       setFormData({ local: "", exchange: "", location: "" });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-custom max-w-xl px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
            ¿<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Hablamos</span>?
          </h2>
          <p className="text-zinc-400 text-center mb-10">
            Escribinos y arrancamos a trabajar juntos
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8"
          >
            {!submitted ? (
              <form onSubmit={handleAction} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Nombre de tu negocio
                  </label>
                  <input 
                    type="text" 
                    name="local"
                    value={formData.local}
                    onChange={handleChange}
                    required
                    placeholder="Tu negocio" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    ¿Qué das a cambio?
                  </label>
                  <input 
                    type="text" 
                    name="exchange"
                    value={formData.exchange}
                    onChange={handleChange}
                    required
                    placeholder="Producto, servicio, descuento..." 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Dónde estás
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Ciudad y zona" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
                 
                <button type="submit" className="mt-2 w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Enviar por WhatsApp
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-white font-medium text-lg">¡Listo! Te redirigimos a WhatsApp...</p>
              </div>
            )}
          </motion.div>
          
          <p className="text-zinc-500 text-center text-sm mt-8">
            Respondemos rápido • Mendoza, Argentina
          </p>
        </motion.div>
      </div>
    </section>
  );
}