'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 text-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0" />

      {/* Partículas decorativas */}
      <div className="sparkle">✨</div>
      <div className="sparkle">💎</div>
      <div className="sparkle">⭐</div>
      <div className="sparkle">✨</div>

      {/* Contenido principal */}
      <div className="container mx-auto relative z-10">
        <motion.div
          className="floating mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <svg
            className="w-20 h-20 mx-auto text-pink-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Belleza en tus <span className="text-pink-400">manos</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Descubrí la experiencia única en cuidado de uñas. Diseños exclusivos, técnicas profesionales y un ambiente relajante te esperan.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg btn-ripple"
        >
          Reservar Cita
        </motion.button>
      </div>
    </section>
  );
}