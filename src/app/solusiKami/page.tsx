'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function SolusiKami() {
  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      {/* Solusi Kami */}
      <section className="max-w-6xl mx-auto mb-20 px-6 pt-20">
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
