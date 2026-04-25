"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Send, MessageCircle, Sparkles, TrendingUp } from "lucide-react";

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

    const message = `*Hola Carbellis!*\n\n🏪 *Negocio:* ${formData.local}\n🎁 *Ofrecemos:* ${formData.exchange}\n📍 *Zona:* ${formData.location}\n\n*Quiero hacer un canje por un video publicitario!*`;

    setTimeout(() => {
       window.open(`https://wa.me/5492634555069?text=${encodeURIComponent(message)}`, "_blank");
       setSubmitted(false);
       setFormData({ local: "", exchange: "", location: "" });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-28 md:py-40 bg-zinc-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(34,211,238,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>
      
      <div className="container-custom max-w-2xl px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            Hablemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Transformamos</span> tu negocio?
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            Dejá tu mensaje y te respondemos al toque. Sin compromiso.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-10"
        >
          {!submitted ? (
            <form onSubmit={handleAction} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Nombre del negocio
                  </label>
                  <input 
                    type="text" 
                    name="local"
                    value={formData.local}
                    onChange={handleChange}
                    required
                    placeholder="Tu negocio"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    ¿Qué das a cambio?
                  </label>
                  <input 
                    type="text" 
                    name="exchange"
                    value={formData.exchange}
                    onChange={handleChange}
                    required
                    placeholder="Producto, servicio, descuento..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Dónde estás?
                </label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Ciudad y zona"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
             
              <button type="submit" className="mt-2 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-8 py-5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                Enviar mensaje por WhatsApp
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <p className="text-white font-bold text-2xl mb-2">¡Mensaje enviado!</p>
              <p className="text-zinc-400">Te redirigimos a WhatsApp...</p>
            </div>
          )}
        </motion.div>
          
        <p className="text-zinc-500 text-center text-sm mt-8">
          💬 Respondemos rápido • Ubicados en San Martín, Mendoza
        </p>
      </div>
    </section>
  );
}