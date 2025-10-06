'use client';
import { motion } from 'framer-motion';

const galleryItems = [
  { name: 'Diseño Floral', emoji: '🌸', gradient: 'from-pink-200 to-pink-300' },
  { name: 'Francés Moderno', emoji: '💅', gradient: 'from-pink-300 to-pink-400' },
  { name: 'Glitter Elegante', emoji: '✨', gradient: 'from-pink-400 to-pink-500' },
  { name: 'Ombré Suave', emoji: '🌈', gradient: 'from-pink-200 to-pink-400' },
  { name: 'Cristales', emoji: '💎', gradient: 'from-pink-300 to-pink-500' },
  { name: 'Minimalista', emoji: '⚪', gradient: 'from-pink-400 to-pink-300' },
  { name: 'Geométrico', emoji: '🔷', gradient: 'from-pink-500 to-pink-400' },
  { name: 'Vintage', emoji: '🌹', gradient: 'from-pink-200 to-pink-500' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Galería de Trabajos</h3>
          <p className="text-gray-600 text-lg">
            Descubrí algunos de nuestros diseños más hermosos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`gallery-item bg-gradient-to-br ${item.gradient} rounded-2xl aspect-square flex items-center justify-center shadow-lg cursor-pointer relative`}
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-center z-10">
                <svg
                  className="w-12 h-12 text-white mx-auto mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87..." />
                </svg>
                <p className="text-white font-semibold text-2xl">{item.emoji}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-center font-semibold py-3 px-2 text-sm">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}