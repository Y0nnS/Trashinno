'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from 'next/image';

export default function SampahKhususPage() {
  return (
    <main className="min-h-screen py-16 px-6 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-40 items-center">
        {/* Gambar Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-72 md:h-96">
          <Image
            src="/images/sampah/khusus.png"
            alt="Sampah Khusus"
            className="w-full h-full object-cover shadow-xl hover:rotate-1 hover:scale-105 transition rounded-[20%_30%_40%_50%_/_50%_40%_30%_20%]"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Card Penjelasan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
          <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-4">
            Anorganik - Berbahaya
          </span>
          <h1 className="text-3xl font-bold text-green-800 mb-4">Sampah Khusus</h1>
          <p className="text-gray-700 mb-4">
            Sampah khusus mencakup limbah elektronik, baterai bekas, obat kedaluwarsa, dan limbah berbahaya lainnya yang membutuhkan penanganan khusus agar tidak mencemari lingkungan.
          </p>

          <div className="bg-green-100 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Contoh Sampah Khusus:</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Baterai dan aki bekas</li>
              <li>Perangkat elektronik rusak</li>
              <li>Lampu neon dan bohlam</li>
              <li>Obat-obatan dan kosmetik kedaluwarsa</li>
            </ul>
          </div>

          <div className="bg-green-100 rounded-xl p-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Cara Penanganan:</h2>
            <p className="text-gray-700 text-sm">
              Sampah ini tidak boleh dibuang sembarangan. Harus dikumpulkan dan diserahkan ke tempat pengolahan limbah B3 atau dropbox e-waste yang tersedia di beberapa lokasi kota.
            </p>
          </div>

          <div className="mt-6 flex justify-between">
            <Link href="/">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
                <ChevronLeft className="w-5 h-5 text-white hover:text-white" />
                Kembali ke Beranda
              </span>
            </Link>

            <Link href="../sampah/kertas">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
                Sampah Khusus
                <ChevronRight className="w-5 h-5 text-white hover:text-white" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
