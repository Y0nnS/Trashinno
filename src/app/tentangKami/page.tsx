'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {  ChevronRight } from "lucide-react";

export default function TentangKami() {
  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      <section
        className="min-h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/tentangKita/tentangkita-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Tentang Kami: Trashinno
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto">
          Kami adalah tim inovator muda yang berkomitmen untuk mengubah cara masyarakat memandang dan mengelola sampah. Dengan teknologi dan edukasi, kami hadir untuk menciptakan dampak positif bagi lingkungan.
          </p>
        </div>
      </section>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16 pt-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Image src="/images/about-logo2.png" alt="Recycle Icon" width={80} height={80} className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-green-800 mb-4">Misi Kami: Membangun Kebiasaan Memilah Sampah Lewat Teknologi</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Trashinno adalah gerakan berbasis teknologi yang bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya memilah sampah. Lewat alat IoT dan platform edukasi digital, kami bertekad menciptakan ekosistem daur ulang yang cerdas dan berkelanjutan.
          </p>
        </motion.div>
      </section>

      {/* Highlight Box */}
      <section className="bg-green-100 py-10 px-6 rounded-xl max-w-5xl mx-auto mb-20">
        <div className="md:flex items-center gap-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image src="/images/about-logo1.jpg" alt="Tim Trashinno" width={500} height={300} className="rounded-xl shadow" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold text-green-800 mb-4">Kami Bangun Inovasi, Bukan Sekadar Alat</h2>
            <p className="text-gray-700 text-sm">
              Tim kami terdiri dari anak muda kreatif yang percaya bahwa inovasi bisa menjadi jalan keluar dari krisis lingkungan. Kami menciptakan alat pemilah sampah otomatis berbasis IoT, yang terintegrasi dengan sistem digital untuk edukasi, pelaporan, dan penghargaan bagi pengguna.
            </p>
            <Link href="#">
            <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 mt-4 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
              Lihat Inovasi Kami
              <ChevronRight className="w-5 h-5 text-white hover:text-white" />
          </span>
        </Link>
          </div>
        </div>
      </section>

      {/* Solusi Kami */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-10">Solusi Kami</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '🧠', title: 'Smart IoT Bin', desc: 'Tempat sampah pintar yang bisa memilah otomatis berdasarkan jenisnya.' },
            { icon: '🌐', title: 'Website Edukasi', desc: 'Website yang mendidik pengguna tentang cara memilah sampah dan pentingnya daur ulang.' },
            { icon: '📊', title: 'Dashboard Pemantauan', desc: 'Pantau jumlah dan jenis sampah yang terkumpul secara real-time.' },
            { icon: '🎯', title: 'Gamifikasi & Reward', desc: 'Dapatkan poin dan hadiah untuk setiap aksi memilah sampah yang dilakukan.' },
            { icon: '🏫', title: 'Program Sekolah', desc: 'Kami membawa alat & edukasi langsung ke sekolah-sekolah untuk generasi muda.' },
            { icon: '🤝', title: 'Kemitraan Pemerintah & Brand', desc: 'Kolaborasi dengan instansi dan bisnis untuk membentuk ekosistem berkelanjutan.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow border-l-4 border-green-600">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dampak */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h2 className="text-2xl font-bold text-green-800 text-center mb-10">Hadir Menciptakan Dampak</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Lingkungan', img: '/images/tentangKita/lingkungan.png' },
            { title: 'Ekonomi', img: '/images/tentangKita/ekonomi.jpg' },
            { title: 'Sosial', img: '/images/tentangKita/social.jpg' },
            { title: 'Kesehatan', img: '/images/tentangKita/kesehatan.jpg' },
          ].map((item, i) => (
            <div key={i} className="relative h-40 rounded-xl overflow-hidden shadow">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h4 className="text-white font-semibold text-lg">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-16 px-12">
        <h2 className="text-xl font-semibold text-green-800 mb-4">Mari Jadi Bagian dari Perubahan!</h2>
        <Link href="/kontak">
        <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-full shadow hover:bg-green-700 transition cursor-pointer text-sm">
            Hubungi Kami
            <ChevronRight className="w-5 h-5 text-white hover:text-white" />
          </span>
        </Link>
      </section>
    </main>
  );
}
