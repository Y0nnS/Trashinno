'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Plus, Minus } from "lucide-react";

// Testimonial Component
const testimonials = [
  { 
    id: 1, 
    name: 'Dina', 
    text: 'Trashinno membantu saya lebih sadar akan pentingnya memilah sampah. Sekarang keluarga kami sudah terbiasa memisahkan sampah organik dan anorganik.', 
    role: 'Ibu Kantin SMK Telkom Sidoarjo',
    avatar: '👩'
  },
  { 
    id: 2, 
    name: 'Artha', 
    text: 'Komunitas yang aktif dan edukasi yang mudah dipahami. Aplikasinya sangat membantu dalam menjadwalkan pengambilan sampah daur ulang.', 
    role: 'Siswa SMK Telkom Sidoarjo',
    avatar: '👨‍🎓'
  },
  { 
    id: 3, 
    name: 'Glory Geo', 
    text: 'Saya jadi lebih semangat hidup berkelanjutan berkat Trashinno. Sistem reward-nya memotivasi kami untuk terus memilah sampah dengan benar.', 
    role: 'Komdis SMK Telkom Sidoarjo',
    avatar: '👩‍💼'
  },
];

function Testimoni() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <div className="mb-16">
        <span className="text-green-600 font-semibold">Testimoni</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-3">Apa Kata Mereka Tentang Trashinno</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
      </div>
      
      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center text-3xl">
              {testimonials[index].avatar}
            </div>
            <p className="italic text-gray-700 text-lg mb-6 leading-relaxed">{testimonials[index].text}</p>
            <div>
              <h3 className="text-green-700 font-bold text-xl">{testimonials[index].name}</h3>
              <p className="text-gray-500">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${index === i ? 'bg-green-600 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${i+1}`}
            />
          ))}
        </div>

        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-green-50 transition"
          aria-label="Previous testimonial">
          <ChevronLeft className="w-5 h-5 text-green-600" />
        </button>
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-green-50 transition"
          aria-label="Next testimonial">
          <ChevronRight className="w-5 h-5 text-green-600" />
        </button>
      </div>
    </section>
  );
}

// FAQ Component
const faqs = [
  {
    q: 'Kenapa harus memilah sampah?',
    a: 'Pemilahan sampah membantu proses daur ulang menjadi lebih efisien. Sampah yang sudah dipilah dapat mengurangi hingga 60% sampah yang berakhir di TPA. Selain itu, pemilahan yang benar mencegah kontaminasi antara sampah berbahaya dan tidak berbahaya.'
  },
  {
    q: 'Apa itu sampah B3?',
    a: 'B3 adalah singkatan dari Bahan Berbahaya dan Beracun. Contohnya termasuk baterai, lampu neon, elektronik rusak, obat kadaluarsa, dan bahan kimia rumah tangga. Sampah ini memerlukan penanganan khusus karena dapat mencemari lingkungan dan membahayakan kesehatan jika tidak dikelola dengan benar.'
  },
  {
    q: 'Bagaimana saya bisa ikut berkontribusi?',
    a: 'Anda bisa mulai dengan langkah sederhana: 1) Gabung komunitas Trashinno, 2) Mulai memilah sampah dari rumah, 3) Ikuti workshop edukasi kami, 4) Gunakan aplikasi untuk penjadwalan pengambilan sampah, dan 5) Sebarkan kesadaran ini ke orang-orang di sekitar Anda.'
  },
  {
    q: 'Apa saja jenis sampah yang bisa didaur ulang?',
    a: 'Beberapa jenis sampah yang bisa didaur ulang antara lain: plastik (perhatikan kode 1-7), kertas dan karton (kecuali yang kotor), logam (kaleng, besi), kaca, dan beberapa komponen elektronik. Pastikan untuk membersihkan kontaminan sebelum mendaur ulang.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleIndex = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-16 text-center">
        <span className="text-green-600 font-semibold">FAQ</span>
        <h2 className="text-4xl font-bold text-gray-900 mt-3">Pertanyaan yang Sering Diajukan</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
      </div>
      
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-green-300">
            <button
              onClick={() => toggleIndex(i)}
              className="w-full flex justify-between items-center px-6 py-5 bg-white hover:bg-gray-50 text-gray-800 font-semibold transition text-left"
              aria-expanded={openIndex === i}
              aria-controls={`faq-${i}`}>
              <span className="text-lg">{item.q}</span>
              {openIndex === i ? (
                <Minus className="w-5 h-5 text-green-600" />
              ) : (
                <Plus className="w-5 h-5 text-green-600" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  id={`faq-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 bg-white text-gray-600"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

// Waste Types Component
function WasteTypes() {
  const wasteCategories = [
    {
      name: 'Organik',
      description: 'Sampah yang bisa terurai alami seperti sisa makanan, daun, dan sayuran. Dapat diolah menjadi kompos.',
      icon: '🍂',
      color: 'from-green-50 to-green-100',
      border: 'border-green-200'
    },
    {
      name: 'Anorganik',
      description: 'Sampah plastik, kertas, logam, dan kaca yang bisa didaur ulang. Bersihkan sebelum dibuang.',
      icon: '♻️',
      color: 'from-blue-50 to-blue-100',
      border: 'border-blue-200'
    },
    {
      name: 'B3 (Bahan Berbahaya)',
      description: 'Baterai, elektronik rusak, obat kadaluarsa, dan bahan kimia. Membutuhkan penanganan khusus.',
      icon: '⚠️',
      color: 'from-red-50 to-red-100',
      border: 'border-red-200'
    },
    {
      name: 'Residu',
      description: 'Sampah yang tidak bisa didaur ulang seperti tisu bekas dan popok. Minimalkan penggunaannya.',
      icon: '🗑️',
      color: 'from-gray-50 to-gray-100',
      border: 'border-gray-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-green-600 font-semibold">Klasifikasi</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">Jenis-Jenis Sampah</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Memahami jenis sampah adalah langkah pertama dalam pengelolaan yang bertanggung jawab</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wasteCategories.map((category, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-b ${category.color} p-6 rounded-xl shadow-sm border ${category.border} h-full flex flex-col`}>
              <div className="text-5xl mb-5">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{category.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent my-3"></div>
              <Link href="/edukasi" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                Pelajari lebih lanjut <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Impact Stats Component
function ImpactStats() {
  const stats = [
    { value: '64 juta ton', label: 'Sampah per tahun', desc: 'Jumlah total sampah yang dihasilkan setiap tahun di Indonesia.' },
    { value: '60%', label: 'Tidak terkelola', desc: 'Sebagian besar sampah tidak dikelola dengan baik atau dibuang sembarangan.' },
    { value: '15%', label: 'Didaur ulang', desc: 'Hanya sebagian kecil sampah yang berhasil didaur ulang secara optimal.' },
    { value: '175.000 ton', label: 'Sampah plastik dilaut', desc: 'Volume sampah plastik yang mencemari lautan Indonesia setiap tahun.' }
  ];  
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-green-200 font-semibold">Fakta Menarik</span>
          <h2 className="text-4xl font-bold mt-3">Fakta Sampah Di Indonesia</h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold mb-1">{stat.label}</h3>
              <p className="text-green-100 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Component
function HowItWorks() {
  const steps = [
    {
      title: 'Pasang Perangkat',
      description: 'Dapatkan perangkat IoT Trashinno untuk memilah sampah secara otomatis di rumah atau bisnis Anda',
      icon: '📱',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Mulai Memilah',
      description: 'Biarkan sensor cerdas kami mengidentifikasi dan memilah sampah dengan akurasi tinggi',
      icon: '🤖',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Pantau Data',
      description: 'Akses laporan real-time melalui aplikasi untuk melihat pola dan volume sampah Anda',
      icon: '📊',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Edukasi & Kontribusi',
      description: 'Dapatkan tips edukasi dan lihat dampak positif Anda terhadap lingkungan',
      icon: '🌱',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-green-600 font-semibold">Solusi Kami</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">Cara Kerja Teknologi Trashinno</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Kami menyediakan alat IoT cerdas untuk memudahkan pemilahan sampah, dilengkapi dengan edukasi berkelanjutan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-all hover:shadow-md h-full">
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-2xl mb-5`}>
                {step.icon}
              </div>
              <div className="text-gray-500 font-mono mb-2">0{index + 1}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 flex-grow">{step.description}</p>
              {index === 0 && (
                <Link 
                  href="/produk" 
                  className="mt-4 text-sm text-green-600 hover:text-green-700 font-medium flex items-center justify-center gap-1">
                  Lihat produk <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fokus Kami: Teknologi & Edukasi</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trashinno tidak mengelola sampah secara langsung, tetapi memberikan alat dan pengetahuan untuk membantu masyarakat 
            memilah sampah dengan benar. Perangkat kami dilengkapi dengan fitur edukasi untuk meningkatkan kesadaran lingkungan.
          </p>
          <Link 
            href="/edukasi" 
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6 rounded-full font-medium transition shadow hover:shadow-md"
          >
            Pelajari Materi Edukasi <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memulai Perjalanan Ramah Lingkungan?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan orang yang telah berkomitmen untuk pengelolaan sampah yang lebih baik dan masa depan yang berkelanjutan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/auth/register" 
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            Daftar Sekarang <ChevronRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/about" 
            className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2">
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </div>
    </section>
  );
}

// Home Page
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">

      {/* Hero Section */}
      <section
        className="min-h-[80vh] relative flex items-center justify-start px-6 md:px-16 lg:px-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home-bg2.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-0" />

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
              <span className='text-green-600'>Bersama</span> Kita Ciptakan Lingkungan Bersih
            </h1>
            <div className="w-20 h-1.5 bg-green-400 mb-4 rounded-full" />
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed">
              Trashinno adalah solusi inovatif untuk memilah sampah secara otomatis. Bergabunglah dengan kami untuk mengurangi dampak sampah di lingkungan.
            </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/aboutUs" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition">
              Pelajari Lebih Lanjut
            </Link>
            <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full transition">
              Hubungi Kami
            </Link>
          </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Waste Sorting Technology */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image 
                  src="/images/iot.png" 
                  alt="Smart Waste Bin" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <span className="text-green-600 font-semibold">Teknologi Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Pemilahan Sampah <span className="text-green-600">Cerdas</span>
              </h2>
              
              <p className="text-gray-600 mb-6">
                Tempat sampah pintar kami menggunakan sensor canggih dan kecerdasan buatan untuk mengidentifikasi dan memilah sampah secara otomatis. Sistem kami mencapai akurasi hingga 95% dalam klasifikasi sampah.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Monitoring Real-time</h3>
                    <p className="text-gray-600 text-sm">Pantau volume sampah dan dapatkan notifikasi ketika tempat sampah penuh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Analisis Data</h3>
                    <p className="text-gray-600 text-sm">Laporan periodik untuk memahami pola pembuangan sampah Anda</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Integrasi Aplikasi</h3>
                    <p className="text-gray-600 text-sm">Kelola semua dari satu aplikasi mobile yang mudah digunakan</p>
                  </div>
                </div>
              </div>
              
              <Link href="/produk" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6 rounded-full font-medium transition shadow hover:shadow-md">
                Jelajahi Produk Kami <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waste Types */}
      <WasteTypes />

      {/* Edukasi Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold">Edukasi</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Kenapa Pemilahan Sampah Penting?</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Setiap tahun, Indonesia menghasilkan 64 juta ton sampah. Dengan tindakan kecil dari kita semua, kita bisa membuat perubahan besar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-all">
              <div className="text-green-600 text-4xl mb-5">🌱</div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Lingkungan Sehat</h3>
              <p className="text-gray-600 mb-4">
                Mengurangi polusi tanah, air, dan udara dari sampah yang tidak terkelola. Sampah organik yang terurai di TPA menghasilkan gas metana penyebab pemanasan global.
              </p>
              <Link href="/edukasi" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                Pelajari dampaknya <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-all">
              <div className="text-green-600 text-4xl mb-5">💼</div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Ekonomi Sirkular</h3>
              <p className="text-gray-600 mb-4">
                Mendorong industri daur ulang dan menciptakan lapangan kerja baru. Material daur ulang bisa bernilai ekonomi tinggi jika diproses dengan benar.
              </p>
              <Link href="/edukasi" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                Lihat peluang ekonomi <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-all">
              <div className="text-green-600 text-4xl mb-5">🏡</div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Rumah Bersih</h3>
              <p className="text-gray-600 mb-4">
                Menciptakan lingkungan rumah yang lebih bersih, sehat, dan bebas bau. Pemilahan mengurangi risiko kontaminasi bakteri dan penyakit.
              </p>
              <Link href="/edukasi" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                Tips pemilahan rumah <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <Testimoni />

      {/* How It Works */}
      <HowItWorks />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}