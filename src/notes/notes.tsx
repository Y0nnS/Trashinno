'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8FF] text-gray-800 font-sans">

<section
      className="min-h-[75vh] relative flex items-center justify-start px-6 md:px-16 lg:px-40 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-bg2.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl text-white space-y-6 backdrop-blur-sm bg-black/20 p-6 rounded-xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Ayo Jaga Lingkungan Kita Bersama <br />
          <span className="text-green-600">Trashinno!</span>
        </h1>

        <p className="text-sm md:text-lg text-zinc-200 leading-relaxed">
          Bergabunglah dengan kami untuk mengurangi sampah dan menciptakan lingkungan yang lebih bersih dan sehat. Dengan teknologi dan edukasi, kita bisa membuat perbedaan!
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            href="/aboutUs"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition shadow-md"
          >
            Pelajari Lebih Lanjut
          </Link>
          <Link
            href="/contact"
            className="border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-2 rounded-full transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.div>
    </section>

      {/* Edukasi Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Mengelola Sampah Itu Penting 🌱
          </h2>
          <p className="text-sm md:text-lg mb-8 text-gray-700">
            Yuk mulai gaya hidup berkelanjutan dengan memisahkan sampah organik, anorganik, dan B3 (Bahan Berbahaya & Beracun). Kecil tapi berdampak besar!
          </p>
          <Link href="/auth/register">
            <div className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition text-sm cursor-pointer">
              Bergabung Sekarang
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Tipe Sampah */}
      <section
        id="pelajari-lebih"
        className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10"
      >
        {[
          {
            title: "Sampah Organik",
            desc: "Sisa makanan, daun, dan bahan alami lainnya. Dapat dikomposkan untuk menyuburkan tanah.",
            anim: { x: -50 },
            img: "/images/homePage/homeOrganikTrash.png", 
            alt: "Ilustrasi Sampah Organik",
          },
          {
            title: "Sampah Anorganik",
            desc: "Termasuk plastik, logam, dan kaca. Bisa didaur ulang untuk mengurangi limbah.",
            anim: { y: 50 },
            img: "/images/homePage/homeUnOrganikTrash.png", 
            alt: "Ilustrasi Sampah Anorganik",
          },
          {
            title: "Sampah B3",
            desc: "Baterai, obat, elektronik rusak. Harus dikelola khusus agar tidak membahayakan lingkungan.",
            anim: { x: 50 },
            img: "/images/homePage/homeB3Trash.png", 
            alt: "Ilustrasi Sampah B3",
          },
        ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, ...item.anim }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
            <Image
              src={item.img}
              alt={item.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-md">{item.desc}</p>
        </motion.div>

        ))}
      </section>

      {/* Jenis Sampah yang Didaur Ulang */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-green-800"
          >
            Jenis Sampah
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-2 text-sm md:text-lg"
          >
            Lihat semua jenis sampah yang dapat didaur ulang.
          </motion.p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[{
            icon: "📄", label: "Kertas", link: "/database-sampah/sampah/kertas", anim: { x: -50 }
          }, {
            icon: "🧴", label: "Plastik", link: "/database-sampah/sampah/plastik", anim: { y: 50 }
          }, {
            icon: "🥫", label: "Aluminium", link: "/database-sampah/sampah/aluminium", anim: { x: 50 }
          }, {
            icon: "🛠️", label: "Besi & Logam", link: "/database-sampah/sampah/besi", anim: { x: -50 }
          }, {
            icon: "💻", label: "Elektronik", link: "/database-sampah/sampah/elektronik", anim: { y: 50 }
          }, {
            icon: "🍾", label: "Botol Kaca", link: "/database-sampah/sampah/kaca", anim: { x: 50 }
          }, {
            icon: "🍂", label: "Khusus", link: "/database-sampah/sampah/khusus", anim: { y: 50 }
          }].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              initial={{ opacity: 0, ...item.anim }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center justify-center text-center"
            >
              <Link href={item.link} className="w-full">
                <div className="text-4xl mb-4 select-none">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Tambahan */}
      <section className="bg-[#00752c] text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2">Siap Jadi Bagian dari Perubahan?</h2>
          <p className="mb-6">Gabung bersama kami untuk masa depan yang lebih bersih dan sehat 🌿</p>
          <Link href="/auth/register">
            <div className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition cursor-pointer">
              Daftar Sekarang
            </div>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
