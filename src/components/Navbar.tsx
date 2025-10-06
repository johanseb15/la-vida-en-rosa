'use client';

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48..." />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800">Bella Nails</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-pink-500">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-pink-500">Servicios</a>
          <a href="#galeria" className="text-gray-700 hover:text-pink-500">Galería</a>
          <a href="#contacto" className="text-gray-700 hover:text-pink-500">Contacto</a>
        </div>
      </nav>
    </header>
  );
}