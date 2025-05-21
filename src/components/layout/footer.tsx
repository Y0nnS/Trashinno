"use client";

import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-600">Trashinno.</h2>
          <p className="text-sm text-zinc-300 mb-4">
            Edukasi pengelolaan sampah & gaya hidup berkelanjutan untuk masa depan yang lebih hijau 🌱
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-zinc-300 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-zinc-300 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-zinc-300 hover:text-white" />
            </a>
            <a href="mailto:support@trashinno.id">
              <Mail className="w-5 h-5 text-zinc-300 hover:text-white" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><Link href="/pages/tentangKami" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/pages/masalahKita" className="hover:text-white">Masalah Kita</Link></li>
            <li><Link href="/pages/solusiKita" className="hover:text-white">Solusi Kita</Link></li>
            <li><Link href="/pages/kontakKami" className="hover:text-white">Kontak Kami</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-white mb-3">Hubungi Kami</h3>
          <div className="space-y-2">
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 text-zinc-300 hover:text-white" />
              </a>
              <p className="text-zinc-400 text-sm">+62 812-3456-7890</p>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 text-zinc-300 hover:text-white" />
              </a>
              <p className="text-zinc-400 text-sm">support@trashinno.id</p>
              
            </div>
          </div>
          
        </div>
      </div>

      <div className="border-t border-zinc-700 text-sm text-center py-4 text-zinc-500">
        &copy; {new Date().getFullYear()} Trashinno. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
