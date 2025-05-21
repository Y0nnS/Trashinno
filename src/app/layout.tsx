'use client';

import { usePathname } from 'next/navigation';
import NavbarDefault from '../components/layout/navbar';
import NavbarUser from '../components/layout/navbarUser';
import Footer from '../components/layout/footer';
import '../styles/globals.css';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isUserRoute = pathname.startsWith('/user');
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <html lang="en" className={poppins.className}>
      <body>
        {!isAdminRoute && (isUserRoute ? <NavbarUser /> : <NavbarDefault />)}

        {children}

        {!isUserRoute && !isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
