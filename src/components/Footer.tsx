export default function Footer() {
  return (
    <footer className="bg-pink-100 text-center py-6 mt-20">
      <p className="text-gray-700 text-sm">
        © {new Date().getFullYear()} Bella Nails. Todos los derechos reservados.
      </p>
    </footer>
  );
}