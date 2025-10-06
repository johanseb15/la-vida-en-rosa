import Providers from '@/components/Providers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Bella Nails - Salón de Uñas',
  description: 'Diseños exclusivos, técnicas profesionales y un ambiente relajante',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}