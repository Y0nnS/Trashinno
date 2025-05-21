'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function AluminiumPage() {
  return (
    <main className="min-h-screen py-16 px-6 bg-gradient-to-bl from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-40 items-center">
        {/* Gambar Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-72 md:h-96">
          <img
            src="/images/sampah/aluminium.png"
            alt="Sampah Aluminium"
            className="w-full h-full object-cover shadow-xl hover:scale-105 transition rounded-[40%_30%_35%_30%_/_30%_40%_30%_35%]"
          />
        </motion.div>

        {/* Card Penjelasan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
          <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-4">
            Anorganik - Daur Ulang
          </span>
          <h1 className="text-3xl font-bold text-green-800 mb-4">Sampah Aluminium</h1>
          <p className="text-gray-700 mb-4">
            Sampah aluminium biasanya berasal dari kaleng minuman, foil makanan, dan produk sejenis. Aluminium sangat mudah untuk didaur ulang
            dan bisa digunakan kembali tanpa kehilangan kualitas.
          </p>

          <div className="bg-green-100 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Contoh Aluminium:</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Kaleng minuman bekas</li>
              <li>Aluminium foil</li>
              <li>Bagian elektronik tertentu</li>
              <li>Peralatan dapur aluminium</li>
            </ul>
          </div>

          <div className="bg-green-100 rounded-xl p-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Cara Daur Ulang:</h2>
            <p className="text-gray-700 text-sm">
              Aluminium dikumpulkan, dilebur dalam suhu tinggi, dan dibentuk ulang menjadi bahan mentah baru untuk kaleng, sparepart, dan
              komponen industri lainnya.
            </p>
          </div>

          <div className="mt-6 flex justify-between">
            <Link href="/">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
                <ChevronLeft className="w-5 h-5 text-white hover:text-white" />
                Kembali ke Beranda
              </span>
            </Link>
          
            <Link href="../sampah/besi">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
                Sampah Besi dan Logam
                <ChevronRight className="w-5 h-5 text-white hover:text-white" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
