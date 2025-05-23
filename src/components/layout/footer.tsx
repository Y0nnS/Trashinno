"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white relative overflow-hidden">
      {/* Gradient Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-500" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Deskripsi */}
        <div className="flex flex-col space-y-6">
          <Image
            src="/images/logo.png"
            alt="Trashinno Logo"
            width={160}
            height={80}
            className="shadow-xl"
            priority
          />
          <p className="text-sm text-zinc-300 leading-relaxed">
            Edukasi pengelolaan sampah & gaya hidup berkelanjutan 🌱
          </p>
          <blockquote className="text-lime-400 italic text-sm">
            “Hijaukan bumi, mulai dari langkah kecil kita.”
          </blockquote>

          {/* Sosial Media */}
          <div className="flex space-x-5 pt-2">
            {[ 
              { href: "https://facebook.com", icon: <Facebook /> },
              { href: "https://twitter.com", icon: <Twitter /> },
              { href: "https://instagram.com", icon: <Instagram /> },
              { href: "mailto:support@trashinno.id", icon: <Mail /> },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigasi */}
        <nav className="flex flex-col space-y-5">
          <h3 className="text-white font-semibold text-lg">Navigasi</h3>
          <div className="h-px bg-zinc-700 w-10 mb-2" />
          <ul className="space-y-3 text-zinc-400 text-sm">
            {[
              { href: "/pages/tentangKami", label: "Tentang Kami" },
              { href: "/pages/masalahKita", label: "Masalah Kita" },
              { href: "/pages/solusiKita", label: "Solusi Kita" },
              { href: "/pages/kontakKami", label: "Kontak Kami" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontak */}
        <div className="flex flex-col space-y-5">
          <h3 className="text-white font-semibold text-lg">Hubungi Kami</h3>
          <div className="h-px bg-zinc-700 w-10 mb-2" />
          <div className="space-y-4 text-sm text-zinc-400">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-zinc-400" />
              <a href="tel:+6281234567890" className="hover:text-white transition">
                +62 812-3456-7890
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-zinc-400" />
              <a href="mailto:support@trashinno.id" className="hover:text-white transition">
                support@trashinno.id
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800 text-sm text-center py-5 text-zinc-500 select-none">
        &copy; {new Date().getFullYear()} <span className="text-white font-medium">Trashinno</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
