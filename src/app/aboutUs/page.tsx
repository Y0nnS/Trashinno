'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Leaf, Recycle, Users, Globe, Cpu, BarChart } from 'lucide-react';

export default function TentangKami() {
  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      {/* Hero Section with Particles */}
      <section className="min-h-[75vh] relative overflow-hidden flex items-center px-6 md:px-10 lg:px-40">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/tentangKita/tentangkita-bg.jpg')" }}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />
        
        {/* Floating Leaves Animation */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-green-400/60"
            style={{
              fontSize: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}>
            <Leaf className="w-full h-full" />
          </motion.div>
        ))}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-white max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-2xl shadow-2xl border border-white/10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className="text-green-400">Tentang</span> Trashinno
            </h1>
            <div className="w-20 h-1.5 bg-green-400 mb-4 rounded-full" />
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed">
              Kami adalah <span className="font-bold text-white">tim inovator</span> yang berkomitmen mengubah pengelolaan sampah melalui teknologi dan edukasi, menciptakan dampak positif bagi lingkungan dan masyarakat.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Visi & Misi
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membangun Kebiasaan Memilah Sampah Lewat Teknologi</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trashinno menghadirkan solusi berbasis teknologi untuk meningkatkan kesadaran masyarakat tentang pentingnya memilah sampah dan menciptakan ekosistem daur ulang yang berkelanjutan.
            </p>
          </motion.div>

          {/* Team Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white mb-20 shadow-xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/about-logo1.jpg" 
                    alt="Tim Trashinno" 
                    fill 
                    className="object-cover" 
                  />
                </motion.div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  <span>Kami Bangun Inovasi, Bukan Sekadar Alat</span>
                </h3>
                <p className="text-green-100">
                  Tim kami terdiri dari anak muda kreatif yang percaya bahwa inovasi teknologi bisa menjadi solusi krisis lingkungan. Kami menggabungkan IoT, edukasi digital, dan pendekatan komunitas untuk menciptakan perubahan nyata.
                </p>
                <div className="pt-4">
                  <Link href="/solusi-kami">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-50 transition-colors">
                      Lihat Solusi Kami
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Solusi Komprehensif Kami</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-10" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Cpu className="w-8 h-8 text-green-600" />,
                  title: 'Smart IoT Bin', 
                  desc: 'Tempat sampah pintar dengan sensor canggih yang bisa memilah otomatis dan memonitor kapasitas.',
                  color: 'bg-green-50'
                },
                { 
                  icon: <Globe className="w-8 h-8 text-green-600" />,
                  title: 'Platform Digital', 
                  desc: 'Website edukasi interaktif dengan panduan lengkap pengelolaan sampah dan daur ulang.',
                  color: 'bg-blue-50'
                },
                { 
                  icon: <BarChart className="w-8 h-8 text-green-600" />,
                  title: 'Dashboard Real-time', 
                  desc: 'Sistem pemantauan data sampah secara real-time untuk pengelolaan yang lebih efisien.',
                  color: 'bg-yellow-50'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`${item.color} p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all`}>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Dampak Positif Kami</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Lingkungan',
                  desc: 'Pengurangan sampah ke TPA dan emisi karbon',
                  img: '/images/tentangKita/lingkungan.png',
                  icon: <Leaf className="w-6 h-6 text-green-600" />
                },
                { 
                  title: 'Ekonomi',
                  desc: 'Peningkatan nilai ekonomi dari daur ulang',
                  img: '/images/tentangKita/ekonomi.jpg',
                  icon: <Recycle className="w-6 h-6 text-green-600" />
                },
                { 
                  title: 'Sosial',
                  desc: 'Pemberdayaan masyarakat melalui program edukasi',
                  img: '/images/tentangKita/social.jpg',
                  icon: <Users className="w-6 h-6 text-green-600" />
                },
                { 
                  title: 'Kesehatan',
                  desc: 'Lingkungan yang lebih bersih dan sehat',
                  img: '/images/tentangKita/kesehatan.jpg',
                  icon: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group"
                >
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-green-100 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mari Bersama Menciptakan Perubahan!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Bergabunglah dengan gerakan kami untuk lingkungan yang lebih bersih dan berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition-colors flex items-center gap-2">
                  Hubungi Kami
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/ourSolution">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-50 text-green-700 px-8 py-3 rounded-lg font-semibold shadow border border-gray-200 transition-colors flex items-center gap-2">
                  Pelajari Solusi
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}