"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom max-w-4xl px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para hacer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              crecer tu negocio?
            </span>
          </h3>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Escribinos y arrancamos a trabajar juntos. Transformamos tu presença en redes sociales.
          </p>
          
          <a
            href="https://wa.me/5492634555069"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.673.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01.57-.01.198 0 .52.074.792.372.272.297.814 1.162.888 1.246.075.084.149.198.249.298.089.1.173.1.348.1.174.01.347.01.521-.075.173-.149.773-1.176.773-1.277.025-.174-.025-.397.1-.52.174-.149.347-.223.471-.347v-.002c.248-.248.461-.298.669-.346.173-.04.347-.009.521.075.173.084.297.173.495.248.174.074.372.099.521.024.174-.074.471-.347.795-.521.174-.174.371-.298.595-.248.174.05.347.099.521-.024.174-.124.297-.223.398-.274q.133-.066.265-.146c.124-.074.223-.149.323-.248.099-.099.198-.149.298-.223.347-.248.595-.421.768-.57.521-.448.818-1.015.869-1.412.025-.199-.025-.497-.099-.744-.173-.595-1.033-1.162-1.78-1.462-.347-.149-.619-.223-.884-.347-.174-.099-.372-.174-.595-.248-.223-.074-.447-.099-.669-.024-.174.074-.371.173-.544.297-.174.124-.322.223-.449.298l-.033.041zM11.403 5.512c-.273 0-.546.025-.793.099-.247.074-.456.173-.644.348-.188.174-.322.397-.447.645-.124.248-.2.546-.249.844 0 .174.025.347.075.496.05.149.099.273.149.372.05.099.124.173.198.247.075.074.174.124.298.174.124.05.223.074.372.099.149.025.297.025.446 0 .149-.025.272-.074.396-.124.124-.05.223-.124.322-.198l.05-.05c.124-.149.223-.322.298-.521.075-.198.124-.421.149-.644 0-.223-.025-.446-.075-.669-.05-.223-.124-.456-.247-.696-.124-.24-.297-.496-.595-.771-.297-.272-.669-.568-1.216-.885-.546-.317-1.164-.594-1.854-.831-.69-.237-1.446-.421-2.266-.553-.82-.132-1.693-.198-2.618-.198-.925 0-1.798.066-2.618.198-.82.132-1.576.316-2.266.553-.69.237-1.308.514-1.854.831-.547.317-1.114.645-1.69.908-.575.264-1.033.545-1.374.844-.34.298-.595.669-.768 1.114-.173.445-.273.937-.298 1.477-.025.54.025 1.093.149 1.66.124.566.348 1.14.669 1.718.32.578.77 1.213 1.349 1.904.579.69 1.32 1.457 2.222 2.3.902.842 1.95 1.772 3.144 2.79 1.194 1.017 2.56 2.03 4.097 3.04 1.536 1.008 3.166 1.773 4.89 2.292 1.723.518 3.548.777 5.475.777 1.927 0 3.752-.259 5.475-.777 1.723-.519 3.354-1.274 4.89-2.292 1.535-1.01 2.94-2.023 4.217-3.04 1.277-1.017 2.241-2.048 2.891-3.094.65-1.045 1.029-2.013 1.138-2.901.109-.887-.025-1.64-.397-2.257-.372-.617-.933-1.037-1.683-1.261z"/>
            </svg>
            Escribinos WhatsApp
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-16 pt-8 border-t border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">
              Las <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Carbelli</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="https://instagram.com/las_carbelli" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              Instagram
            </a>
            <a href="https://tiktok.com/@las.carbelli" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              TikTok
            </a>
            <a href="https://wa.me/5492616921221" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              Contacto
            </a>
          </div>
          
          <p className="text-zinc-500 text-sm">
            © {currentYear} Las Carbelli. Mendoza, Argentina.
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-zinc-600 text-xs">
            Desarrollado por <a href="https://wa.me/5492616921221" className="text-cyan-400 hover:text-cyan-300">Ignacio Enrique Arra</a>
          </p>
        </div>
      </div>
    </footer>
  );
}