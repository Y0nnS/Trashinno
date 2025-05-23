'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from 'next/image';

export default function KacaPage() {
  return (
    <main className="min-h-screen  bg-[#F8F8FF]">
      <section
        className="min-h-[9vh] bg-cover bg-[center_25%] relative flex items-center px-0 md:px-10 lg:px-40"
        style={{ backgroundImage: "url('/images/sampah/sampah-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
      </section>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-40 items-center py-20 px-6 ">
        {/* Gambar Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-72 md:h-96">
          <Image
            src="/images/sampah/kaca.png"
            alt="Sampah Kaca"
            className="w-full h-full object-cover shadow-xl hover:scale-105 transition rounded-[35%_40%_45%_50%_/_55%_50%_40%_45%]"
            width={500}
            height={500}
          />
        </motion.div>

        {/* Card Penjelasan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600"
        >
          <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-4">
            Anorganik - Daur Ulang
          </span>
          <h1 className="text-3xl font-bold text-green-800 mb-4">Sampah Kaca</h1>
          <p className="text-gray-700 mb-4">
            Sampah kaca berasal dari botol, gelas, jendela, dan barang kaca lain yang sudah tidak terpakai. Kaca dapat didaur ulang berulang kali tanpa kehilangan kualitasnya.
          </p>

          <div className="bg-green-100 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Contoh Sampah Kaca:</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Botol minuman bekas</li>
              <li>Gelas pecah atau rusak</li>
              <li>Kaca jendela</li>
              <li>Peralatan dapur kaca</li>
            </ul>
          </div>

          <div className="bg-green-100 rounded-xl p-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Cara Daur Ulang:</h2>
            <p className="text-gray-700 text-sm">
              Sampah kaca dikumpulkan, dibersihkan, lalu dilebur dan dibentuk ulang menjadi produk kaca baru seperti botol atau kaca jendela.
            </p>
          </div>

          <div className="mt-6 flex justify-between">
            <Link href="/">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
                <ChevronLeft className="w-5 h-5 text-white hover:text-white" />
                Kembali ke Beranda
              </span>
            </Link>

            <Link href="../sampah/khusus">
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
