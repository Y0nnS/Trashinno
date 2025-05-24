'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, BrainCircuit, Touchpad, Battery, Monitor, ChevronRight } from 'lucide-react';

export default function TentangProject() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: 'Sensor Multi-Tipe',
      desc: 'Menggunakan kombinasi sensor optik, warna, dan berat untuk mendeteksi berbagai jenis sampah secara presisi.',
      color: 'bg-blue-50'
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-green-600" />,
      title: 'Otomatisasi AI',
      desc: 'Algoritma AI cerdas untuk mengklasifikasikan sampah dan mengarahkan ke tempat yang sesuai tanpa campur tangan manusia.',
      color: 'bg-purple-50'
    },
    {
      icon: <Touchpad className="w-8 h-8 text-green-600" />,
      title: 'Antarmuka Interaktif',
      desc: 'Layar touchscreen dengan game edukatif dan feedback suara yang membuat proses memilah jadi menyenangkan.',
      color: 'bg-yellow-50'
    },
    {
      icon: <Battery className="w-8 h-8 text-green-600" />,
      title: 'Hemat Energi',
      desc: 'Dilengkapi dengan mode tidur otomatis untuk menghemat energi saat tidak digunakan.',
      color: 'bg-green-50'
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-600" />,
      title: 'Dashboard Monitoring',
      desc: 'Memungkinkan admin sekolah memantau statistik pemilahan sampah secara realtime melalui aplikasi web.',
      color: 'bg-red-50'
    },
  ];

  const roadmap = [
    { date: 'Q1 2024', event: 'Riset dan Pengumpulan Data Kebiasaan Sampah di Sekolah', status: 'completed' },
    { date: 'Q2 2024', event: 'Desain Prototipe Alat Pemilah Sampah Otomatis', status: 'completed' },
    { date: 'Q3 2024', event: 'Pengembangan Hardware & Software AI', status: 'current' },
    { date: 'Q4 2024', event: 'Testing dan Implementasi Pilot di Sekolah', status: 'upcoming' },
    { date: 'Q1 2025', event: 'Evaluasi dan Penyempurnaan Fitur', status: 'upcoming' },
    { date: 'Q2 2025', event: 'Peluncuran Komersial dan Edukasi Massal', status: 'upcoming' },
  ];

  const faqs = [
    {
      question: 'Bagaimana alat ini membedakan jenis sampah?',
      answer: 'Alat kami menggunakan sensor optik, sensor berat, dan teknologi AI untuk mengenali material sampah seperti plastik, kertas, logam, dan organik secara akurat.',
    },
    {
      question: 'Apakah alat ini bisa digunakan di luar sekolah?',
      answer: 'Tentu saja! Alat ini dapat diterapkan di berbagai tempat umum seperti kantor, taman, atau area publik lain untuk mendukung pengelolaan sampah yang lebih baik.',
    },
    {
      question: 'Bagaimana cara perawatan alat ini?',
      answer: 'Perawatan cukup mudah, seperti membersihkan sensor secara rutin dan update perangkat lunak yang akan kami sediakan secara berkala melalui aplikasi pendamping.',
    },
    {
      question: 'Apakah ada program edukasi untuk siswa?',
      answer: 'Ya, kami menyediakan modul edukasi interaktif yang terintegrasi langsung di antarmuka alat, sehingga siswa belajar sambil berinteraksi dengan alat pemilah sampah.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      {/* Hero Section with Particles */}
      <section className="min-h-[75vh] relative overflow-hidden flex items-center px-6 md:px-10 lg:px-40">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/aboutProject/project-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-white max-w-4xl backdrop-blur-sm bg-black/30 p-8 rounded-2xl shadow-2xl border border-white/10">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
              <span className="text-green-400">Project</span> Trashinno
            </h1>
            <div className="w-20 h-1.5 bg-green-400 mb-4 rounded-full" />
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed">
              Solusi cerdas pemilah sampah otomatis berbasis AI untuk menciptakan kebiasaan memilah yang mudah dan menyenangkan di lingkungan sekolah.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                Masalah
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tantangan yang Kami Hadapi</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto">
                Kami mengamati bahwa banyak siswa di sekolah enggan memilah sampah karena prosesnya merepotkan dan kurang menarik, menyebabkan sampah bercampur dan menghambat daur ulang.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { 
                  value: '80%', 
                  label: 'Siswa Tidak Membiasakan Memilah Sampah',
                  icon: '❌'
                },
                { 
                  value: '50%', 
                  label: 'Sampah Sekolah Berakhir di TPA',
                  icon: '🗑️'
                },
                { 
                  value: '65%', 
                  label: 'Kurangnya Fasilitas Memilah yang Memadai',
                  icon: '🏫'
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200"
                >
                  <p className="text-4xl font-bold text-red-600 mb-2">{stat.value}</p>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                    Solusi
                  </span>
                  <h2 className="text-3xl font-bold mb-4">Alat Pemilah Sampah Otomatis</h2>
                  <div className="w-24 h-1 bg-white mb-6" />
                </div>
                <p className="mb-6 text-green-100">
                  Alat kami menggabungkan teknologi sensor mutakhir dan AI untuk mengidentifikasi jenis sampah dengan akurasi tinggi. Dengan antarmuka yang ramah anak dan mekanisme otomatis, alat ini mendorong kebiasaan memilah yang mudah dan menyenangkan.
                </p>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Akurasi identifikasi sampah hingga 95%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Antarmuka interaktif dengan elemen gamifikasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>Monitoring real-time untuk admin sekolah</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative min-h-64 md:min-h-full">
                <Image
                  src="/images/aboutProject/project-item.png"
                  alt="Alat Pemilah Sampah Otomatis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Unggulan</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Teknologi canggih yang membuat pemilahan sampah menjadi lebih mudah dan efektif
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${feature.color} p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all`}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Roadmap Pengembangan</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perjalanan kami dalam mengembangkan solusi pemilahan sampah yang lebih baik
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-green-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {roadmap.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-1/2 p-6 rounded-xl shadow-md border ${item.status === 'current' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
                    <div className={`absolute top-6 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${item.status === 'completed' ? 'bg-green-500' : item.status === 'current' ? 'bg-yellow-500' : 'bg-gray-300'} ${i % 2 === 0 ? '-right-3' : '-left-3'}`}>
                      {item.status === 'completed' ? (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <span className="text-white font-bold">{i + 1}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.date}</h3>
                    <p className="text-gray-600">{item.event}</p>
                    {item.status === 'current' && (
                      <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        Sedang Berjalan
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban atas pertanyaan yang sering diajukan tentang proyek kami
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <svg className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Bergabunglah Bersama Kami!</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Dukung inovasi kami dengan menjadi bagian dari perubahan menuju lingkungan yang lebih bersih.
            </p>
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-50 transition-colors flex items-center gap-2 mx-auto"
              >
                Hubungi Tim Kami
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}