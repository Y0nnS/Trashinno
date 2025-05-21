'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, ChevronRight, ChevronLeft } from "lucide-react";

export default function MasalahKitaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Masalah Kita</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Sampah adalah masalah serius yang sering dianggap sepele. Tapi dampaknya bisa menghancurkan lingkungan, ekonomi, dan kesehatan kita jika terus diabaikan.
          </p>
        </motion.div>

        {/* Masalah Utama */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/masalahKami/masalah-logo.jpg" 
            alt="Sampah Menumpuk"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Sampah Tak Terkelola = Bom Waktu</h2>
            <p className="text-gray-700 mb-3">
              Di Indonesia, lebih dari 60 juta ton sampah dihasilkan setiap tahun. Sayangnya, sebagian besar tidak dikelola dengan baik, dan hanya sebagian kecil yang didaur ulang.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Pencemaran sungai, laut, dan tanah</li>
              <li>Penyebaran penyakit melalui limbah organik</li>
              <li>Produksi gas rumah kaca dari sampah organik</li>
              <li>Penurunan kualitas hidup masyarakat</li>
            </ul>
          </div>
        </motion.div>

        {/* Edukasi dan Aksi */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-green-100 rounded-xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Lalu Kita Harus Apa?</h2>
          <p className="text-gray-700 mb-4">
            Solusi terbaik adalah memulai dari <strong>kesadaran memilah sampah</strong> organik, anorganik, dan berbahaya. Tapi kita tahu, itu tidak mudah jika hanya mengandalkan kebiasaan manusia.
          </p>
          <p className="text-gray-700 mb-2">
            Itulah kenapa Trashinno hadir. Kami membuat alat <strong>IoT Pintar</strong> yang dapat <span className="text-green-700 font-medium">memilah sampah secara otomatis</span>, mengurangi intervensi manusia, dan membuat sistem pengelolaan jadi lebih efisien.
          </p>
        </motion.div>

        {/* Solusi Kita */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Trashinno: Inovasi untuk Masa Depan</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              <li>Alat IoT yang mendeteksi & memilah sampah otomatis</li>
              <li>Sensor cerdas untuk mengidentifikasi jenis sampah</li>
              <li>Terintegrasi dengan sistem data & pelaporan</li>
              <li>Bisa digunakan di sekolah, kantor, hingga lingkungan publik</li>
            </ul>
          </div>
          <Image
            src="/images/masalahKami/masalah-img2.png"
            alt="Alat IoT Trashinno"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl"/>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10">
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Jangan tunggu sampai terlambat.
          </h3>
          <p className="text-gray-600 mb-4">Mari kita mulai perubahan kecil hari ini. Bersama, kita bisa wujudkan Indonesia yang bersih dan berkelanjutan.</p>
          <Link href="/tentang-kami">
          <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 mt-4 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
              Kenali Trashinno Lebih Lanjut <ChevronRight className="w-5 h-5 text-white hover:text-white" />
            </span>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
