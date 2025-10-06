'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

    // Simulación de envío — reemplazar con fetch a /api/appointment
    setTimeout(() => {
      setSent(false);
      e.currentTarget.reset();
    }, 2000);
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h3>
          <p className="text-gray-600 text-lg">
            Reserva tu cita o contáctanos para más información
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información */}
          <div className="space-y-6">
            <Info icon="📍" title="Dirección" text="Av. Belleza 123, Centro\nCiudad, CP 12345" />
            <Info icon="📞" title="Teléfono" text="+1 (555) 123-4567" />
            <Info icon="📧" title="Email" text="info@bellanails.com" />
            <Info icon="⏰" title="Horarios" text="Lun-Vie: 9–19\nSáb: 9–18\nDom: 10–16" />
          </div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 shadow-lg space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Reserva tu Cita</h4>

            <FloatingInput label="Nombre Completo" type="text" required />
            <FloatingInput label="Teléfono" type="tel" required />
            <FloatingInput label="Email" type="email" required />
            <FloatingSelect label="Servicio" options={[
              'Manicura Clásica', 'Gel Polish', 'Nail Art',
              'Pedicura Spa', 'Uñas Acrílicas', 'Tratamiento Spa'
            ]} />
            <FloatingInput label="Fecha Preferida" type="date" required />
            <FloatingTextarea label="Mensaje (Opcional)" />

            <button
              type="submit"
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg btn-ripple ${
                sent ? 'bg-green-500 text-white' : 'bg-pink-400 hover:bg-pink-500 text-white'
              }`}
            >
              {sent ? '¡Solicitud Enviada!' : 'Enviar Solicitud'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

// Subcomponentes
function Info({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}

function FloatingInput({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div className="floating-label">
      <input
        type={type}
        placeholder=" "
        required={required}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
      />
      <label className="font-semibold">{label}</label>
    </div>
  );
}

function FloatingSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="floating-label">
      <select
        required
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
      >
        <option value="">Selecciona un servicio</option>
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
      <label className="font-semibold">{label}</label>
    </div>
  );
}

function FloatingTextarea({ label }: { label: string }) {
  return (
    <div className="floating-label">
      <textarea
        rows={4}
        placeholder=" "
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-none"
      />
      <label className="font-semibold">{label}</label>
    </div>
  );
}