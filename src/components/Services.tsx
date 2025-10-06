'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Manicura Clásica',
    description: 'Cuidado completo de cutículas, limado y esmaltado tradicional',
    price: '$25',
    icon: '💅',
    badge: 'Popular',
    badgeColor: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Gel Polish',
    description: 'Esmaltado semipermanente con duración de hasta 3 semanas',
    price: '$35',
    icon: '🌸',
  },
  {
    title: 'Nail Art',
    description: 'Diseños personalizados y decoraciones artísticas únicas',
    price: '$45',
    icon: '🎨',
    badge: 'Premium',
    badgeColor: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Pedicura Spa',
    description: 'Tratamiento relajante completo para pies con exfoliación',
    price: '$40',
    icon: '🦶',
  },
  {
    title: 'Uñas Acrílicas',
    description: 'Extensiones duraderas con acabado profesional',
    price: '$55',
    icon: '💎',
  },
  {
    title: 'Tratamiento Spa',
    description: 'Hidratación profunda y cuidado integral de manos',
    price: '$30',
    icon: '👐',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h3>
          <p className="text-gray-600 text-lg">
            Tratamientos profesionales para el cuidado perfecto de tus uñas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-white rounded-2xl p-8 shadow-lg text-center relative"
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                boxShadow: '0px 20px 40px rgba(244, 114, 182, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <p className="text-2xl font-bold text-pink-400">{service.price}</p>

              {service.badge && (
                <div
                  className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full font-semibold ${service.badgeColor}`}
                >
                  {service.badge}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}