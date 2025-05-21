'use client';

import { usePathname } from 'next/navigation';
import NavbarDefault from '../components/layout/navbar';
import NavbarUser from '../components/layout/navbarUser';
import Footer from '../components/layout/footer';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isUserRoute = pathname.startsWith('/user');
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body>
    {/* Navbar */}
    {!isAdminRoute && (
      isUserRoute ? <NavbarUser /> : <NavbarDefault />
    )}

    {/* Halaman Utama */}
    {children}

    {/* Footer hanya untuk halaman default */}
    {!isUserRoute && !isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
