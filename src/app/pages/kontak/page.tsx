'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, ChevronRight, ChevronLeft } from "lucide-react";

export default function Kontak() {
  return (
    <main className=" bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Solusi Kami */}
    <section className="bg-white pt-20 pb-32">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* Info Kontak */}
        <div className='block'>
            <div>
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">Kontak Kami</h2>
              <p className="text-zinc-600 mb-6">
                Jika ada pertanyaan, kritik, atau saran, jangan ragu untuk menghubungi kami. Kami selalu terbuka untuk mendengar masukan demi peningkatan layanan dan menjaga lingkungan bersama.
              </p>
              <ul className="space-y-4 text-zinc-700 text-sm">
                <li className="flex items-center gap-2">
                  📧 <span>info@trashinno.com</span>
                </li>
                <li className="flex items-center gap-2">
                  📞 <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  📍 <span>Jl. Bersih No. 10, Eco City, Indonesia</span>
                </li>
              </ul>
            </div>
            <div className="mt-10">
            <h3 className="text-lg font-semibold text-zinc-800 mb-4">Lokasi Kami</h3>
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.5808307169686!2d112.72255828966243!3d-7.466029933654948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6d71181af21%3A0x4232ab0204ccbfe5!2sSMK%20TELKOM%20Sidoarjo!5e0!3m2!1sen!2sid!4v1747582470174!5m2!1sen!2sid"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"></iframe>
            </div>
        </div>
    </div>

    {/* Form Kontak */}
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold pb-2 text-zinc-800">
            Say Something to <span className="text-green-600">Trashinno</span> Team
          </h3>
          <p className="text-zinc-800 pb-4">
            Pastikan untuk mengisi formulir ini dengan lengkap dan benar agar tim Trashinno dapat merespons dengan tepat dan cepat.
          </p>

          <form className="space-y-5">

            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full border text-zinc-700 border-zinc-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 transition"
              />
            </div>

            {/* No HP */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">No HP</label>
              <input
                type="tel"
                placeholder="Contoh: 081234567890"
                className="w-full border text-zinc-700 border-zinc-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">E-Mail</label>
              <input
                type="email"
                placeholder="emailkamu@example.com"
                className="w-full border text-zinc-700 border-zinc-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 transition"
              />
            </div>

            {/* Pesan */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Pesan</label>
              <textarea
                placeholder="Tulis pesan kamu di sini..."
                className="w-full border text-zinc-700 border-zinc-300 px-4 py-2 rounded resize-none h-32 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 transition"
              />
            </div>

            {/* Tombol */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow transition w-full sm:w-auto"
            >
              Kirim
            </button>
          </form>
        </div>
    </div>

    
    </div>
    </section>
    </main>
  );
}
