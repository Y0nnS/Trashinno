'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, AlertTriangle, Fish, TreePine, Flame, Droplets } from "lucide-react";

export default function MasalahKita() {
  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      {/* Hero Section with Waste Problem Focus */}
      <section
        className="min-h-[75vh] bg-cover bg-center relative flex items-center justify-start px-6 md:px-16 lg:px-40"
        style={{ backgroundImage: "url('/images/masalahIMG/masalah-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-0" />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-2xl shadow-2xl border border-white/10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className='text-green-600'>Masalah Sampah</span> di Indonesia
            </h1>
            <div className="w-20 h-1.5 bg-green-400 mb-4 rounded-full" />
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed">
              Indonesia menghadapi krisis sampah yang semakin parah. Setiap tahun, 
              lebih dari 64 juta ton sampah dihasilkan, dan hanya 15% yang didaur ulang. 
              Mari kita bersama-sama mencari solusi untuk mengatasi masalah ini.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Waste Facts Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
            Fakta Mengejutkan
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sampah Indonesia dalam Angka
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Data berikut menunjukkan betapa seriusnya masalah sampah yang kita hadapi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: <span className="text-4xl">🗑️</span>,
              value: "64 Juta Ton", 
              label: "Sampah dihasilkan per tahun",
              desc: "Setara dengan berat 8,5 juta gajah"
            },
            { 
              icon: <span className="text-4xl">🏭</span>,
              value: "60%", 
              label: "Tidak terkelola",
              desc: "Berakhir di TPA atau lingkungan"
            },
            { 
              icon: <span className="text-4xl">♻️</span>,
              value: "15%", 
              label: "Didaur ulang",
              desc: "Padahal 70% bisa didaur ulang"
            },
            { 
              icon: <span className="text-4xl">🌊</span>,
              value: "175.000 Ton", 
              label: "Sampah plastik ke laut",
              desc: "Indonesia penyumbang terbesar ke-2 dunia"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{item.value}</p>
              <p className="text-gray-700 font-medium mb-2">{item.label}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-red-500 flex-shrink-0">
              <AlertTriangle className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Darurat Sampah Plastik</h3>
              <p className="text-red-700">
                Setiap menit, <span className="font-semibold">1.000 kantong plastik</span> masuk ke laut Indonesia. 
                Plastik butuh <span className="font-semibold">400 tahun</span> untuk terurai, dan selama itu 
                meracuni ekosistem laut dan masuk ke rantai makanan kita.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Environmental Impact Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Full Bleed Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/masalahIMG/masalah-bg2.jpg"  
            alt="Environmental Damage Background"
            fill
            className="object-cover blur-md brightness-75"
            priority
            quality={80}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
              Dampak Kerusakan Lingkungan
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
            <p className="text-green-100 max-w-2xl mx-auto text-lg drop-shadow">
              Sampah yang tidak dikelola dengan benar menyebabkan kerusakan ekosistem yang luas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pencemaran Laut",
                desc: "1 juta hewan laut mati tiap tahun karena sampah plastik. Mikroplastik telah ditemukan dalam ikan yang dikonsumsi manusia.",
                img: "/images/masalahIMG/sampahlaut.png"
              },
              {
                title: "Kerusakan Daratan",
                desc: "Lahan produktif terkontaminasi logam berat dari sampah elektronik. TPA menyebabkan pencemaran tanah dan air tanah.",
                img: "/images/masalahIMG/sampahdarat.jpg"
              },
              {
                title: "Perubahan Iklim",
                desc: "Sampah organik di TPA menghasilkan gas metana yang 25x lebih berbahaya dari CO₂. Pembakaran sampah meningkatkan polusi udara.",
                img: "/images/masalahIMG/iklim.png"
              },
              {
                title: "Pencemaran Air",
                desc: "Air tercemar limbah sampah menyebabkan berbagai penyakit. 80% sungai di Indonesia tercemar sampah plastik.",
                img: "/images/masalahIMG/air.png"
              },
              {
                title: "Kesehatan Masyarakat",
                desc: "Timbulan sampah menjadi sarang penyakit. Pembakaran sampah menyebabkan ISPA dan kanker paru-paru.",
                img: "/images/masalahIMG/masyarakat.png"
              },
              {
                title: "Kerugian Ekonomi",
                desc: "Indonesia kehilangan Rp 139 triliun/tahun akibat pengelolaan sampah buruk. Sektor pariwisata terkena dampak besar.",
                img: "/images/masalahIMG/ekonomi.png"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative bg-white/10 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm border border-white/20 hover:border-green-400 transition-all group">
                {/* Card Image with Overlay */}
                <div className="relative h-52">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-green-100/90">{item.desc}</p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
            Solusi
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kita Bisa Mengubah Ini!
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengan tindakan kecil dari setiap individu, kita bisa menciptakan perubahan besar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Pemilahan Sampah",
              desc: "Pisahkan sampah organik, anorganik, dan B3 sejak dari sumber",
              icon: "♻️",
              color: "bg-green-100 text-green-800"
            },
            {
              title: "Pengurangan Plastik",
              desc: "Gunakan tas belanja reusable dan kurangi kemasan sekali pakai",
              icon: "🛍️",
              color: "bg-blue-100 text-blue-800"
            },
            {
              title: "Daur Ulang Mandiri",
              desc: "Kreatif memanfaatkan sampah menjadi barang bernilai",
              icon: "🔄",
              color: "bg-purple-100 text-purple-800"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-xl shadow-md ${item.color} flex flex-col items-center text-center`}
            >
              <span className="text-4xl mb-4">{item.icon}</span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-current/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Teknologi Pemilahan Sampah Otomatis
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Trashinno menghadirkan solusi IoT untuk memudahkan pemilahan sampah dengan akurasi tinggi. 
            Sistem kami membantu rumah tangga dan bisnis mengelola sampah secara bertanggung jawab.
          </p>
          <Link 
            href="/solusi"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition shadow hover:shadow-md"
          >
            Pelajari Solusi Kami <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Mulai Kontribusimu Hari Ini
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan gerakan pengelolaan sampah berkelanjutan untuk Indonesia yang lebih bersih
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/edukasi"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Pelajari Edukasi Sampah
            </Link>
            <Link 
              href="/kontak"
              className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}