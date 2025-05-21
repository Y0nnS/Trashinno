'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function SolusiKami() {
  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      <section
        className="min-h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/solusiIMG/solusi-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Solusi Kami untuk Mengatasi Masalah Sampah
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto">
          Kami percaya teknologi dan edukasi adalah kunci mengubah perilaku masyarakat dalam pengelolaan sampah, demi lingkungan yang lebih bersih dan sehat bagi generasi mendatang.
          </p>
        </div>
      </section>
      {/* Solusi Kami */}
      <section className="max-w-6xl h-200 mx-auto px-6 pt-20">
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

    </main>
  );
}
