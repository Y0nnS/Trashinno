'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Cpu, Globe, Users, Home, Trash2, Recycle, AlertTriangle, Leaf, Clock, Database, TrendingUp } from 'lucide-react';

export default function SolusiKami() {
  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      <section
        className="min-h-[80vh] relative flex items-center justify-start px-6 md:px-16 lg:px-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/solusiIMG/solusi.png')" }}>
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
              <span className='text-green-600'>Solusi Kami</span> untuk Mengatasi Krisis Sampah
            </h1>
            <div className="w-20 h-1.5 bg-green-400 mb-4 rounded-full" />
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed">
              Kami percaya bahwa setiap orang dapat berkontribusi dalam mengatasi masalah sampah. Dengan teknologi dan edukasi, kita bisa membuat perubahan nyata.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Scale Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Krisis Sampah yang Kita Hadapi</h2>
            </div>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Indonesia menghasilkan jutaan ton sampah setiap tahunnya. Berikut fakta yang perlu kita hadapi bersama:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Database className="w-10 h-10 text-red-500" />,
                value: "64 Juta Ton/Tahun",
                title: "Total Sampah Indonesia",
                desc: "Setiap tahun Indonesia menghasilkan sampah yang setara dengan berat 8,5 juta gajah"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-red-500" />,
                value: "3,2% Peningkatan",
                title: "Pertumbuhan Sampah",
                desc: "Jumlah sampah meningkat setiap tahun seiring pertumbuhan populasi dan konsumsi"
              },
              {
                icon: <Leaf className="w-10 h-10 text-red-500" />,
                value: "60% Tidak Terkelola",
                title: "Sampah Tidak Terolah",
                desc: "Sebagian besar berakhir di TPA, sungai, atau laut mencemari lingkungan"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: i * 0.1
                }}
                className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold text-red-600 mb-2">{item.value}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" /> Dampak Jangka Panjang
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Polusi mikroplastik dalam rantai makanan berdampak pada kesehatan manusia</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Emisi metana dari TPA berkontribusi pada perubahan iklim</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Kerugian ekonomi mencapai triliunan rupiah akibat pengelolaan sampah yang tidak optimal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rusaknya ekosistem laut dan terumbu karang</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updated Solusi Kami Section */}
      <section id="solusi-kami" className="max-w-6xl mx-auto px-6 pb-20 pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
            Solusi Nyata
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan yang Kami Tawarkan</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dalam menghadapi krisis sampah ini, kami menyediakan solusi teknologi untuk membantu pengelolaan sampah yang lebih baik
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              icon: <Cpu className="w-10 h-10 text-green-600" />,
              title: 'Perangkat IoT Pengelola Sampah', 
              desc: 'Alat pintar buatan kami yang membantu memonitor dan mengelola sampah secara lebih efisien.',
              features: [
                'Sensor kapasitas sampah real-time',
                'Sistem notifikasi ketika penuh',
                'Kompatibel dengan berbagai jenis tempat sampah',
                'Dapat diintegrasikan dengan sistem pengelolaan'
              ],
              impact: "Mengoptimalkan pengumpulan sampah hingga 30% lebih efisien, mengurangi emisi karbon dari truk sampah"
            },
            { 
              icon: <Globe className="w-10 h-10 text-green-600" />,
              title: 'Platform Informasi Sampah', 
              desc: 'Website kami menyediakan berbagai informasi dan panduan tentang pengelolaan sampah yang benar.',
              features: [
                'Panduan pemilahan sampah',
                'Artikel edukasi tentang daur ulang',
                'Tips mengurangi sampah sehari-hari',
                'Informasi titik pengumpulan sampah'
              ],
              impact: "Meningkatkan kesadaran masyarakat dan partisipasi dalam daur ulang hingga 45% berdasarkan pilot project"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ 
                duration: 0.4,
                delay: i * 0.1,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-green-300 transition-all">
              <div className="mb-4 flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-green-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-center mb-4">{item.desc}</p>
              
              <div className="space-y-2 mt-6">
                <h4 className="text-sm font-semibold text-green-700 mb-2">FITUR UTAMA:</h4>
                <ul className="space-y-2">
                  {item.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-sm font-semibold text-green-700 mb-1">DAMPAK POSITIF:</h4>
                <p className="text-sm text-green-800">{item.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Visualization Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dampak Solusi Kami</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Implementasi teknologi kami memberikan perubahan nyata dalam pengelolaan sampah
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6">
              {[
                {
                  title: "Pengurangan Sampah ke TPA",
                  value: "40%",
                  desc: "Lebih banyak sampah terpilah dan terdaur ulang"
                },
                {
                  title: "Efisiensi Pengumpulan Sampah",
                  value: "35%",
                  desc: "Penghematan biaya operasional"
                },
                {
                  title: "Peningkatan Partisipasi Warga",
                  value: "60%",
                  desc: "Lebih banyak masyarakat yang aktif memilah sampah"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-700 mb-1">{item.value}</h3>
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Alur Kerja Solusi Kami</h3>
              <div className="space-y-4">
                {[
                  "Pemantauan tingkat pengisian tempat sampah via IoT",
                  "Notifikasi otomatis ke petugas ketika mendekati kapasitas",
                  "Optimasi rute pengumpulan sampah berbasis data",
                  "Edukasi masyarakat melalui platform digital",
                  "Peningkatan daur ulang dan pengolahan sampah"
                ].map((step, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updated Solusi untuk Masyarakat Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Panduan Praktis Pengelolaan Sampah</h2>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Setiap tindakan kecil Anda berkontribusi besar bagi lingkungan. Berikut panduan dasar yang bisa langsung diterapkan:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Home className="w-10 h-10 text-green-600" />,
                title: "Pemilahan Dasar",
                steps: [
                  "Pisahkan sampah organik dan anorganik",
                  "Kumpulkan sampah B3 (baterai, elektronik) terpisah",
                  "Bersihkan kemasan sebelum dibuang"
                ],
                tips: "Mulai dengan dua tempat sampah: organik dan non-organik",
                impact: "Mengurangi 0.5kg sampah/rumah/hari yang berakhir di TPA"
              },
              {
                icon: <Trash2 className="w-10 h-10 text-green-600" />,
                title: "Pengurangan Sampah",
                steps: [
                  "Gunakan tas belanja reusable",
                  "Pilih produk dengan kemasan minimal",
                  "Hindari produk sekali pakai"
                ],
                tips: "Bawa botol minum sendiri bisa mengurangi sampah plastik",
                impact: "Mencegah 300kg plastik/keluarga/tahun masuk ke laut"
              },
              {
                icon: <Recycle className="w-10 h-10 text-green-600" />,
                title: "Daur Ulang Sederhana",
                steps: [
                  "Manfaatkan sampah organik untuk kompos",
                  "Kumpulkan kertas/kardus untuk didaur ulang",
                  "Manfaatkan bank sampah terdekat"
                ],
                tips: "Cari informasi titik daur ulang di platform kami",
                impact: "Menghemat 17 pohon/ton kertas yang didaur ulang"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: i * 0.1
                }}
                className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
                </div>
                
                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-gray-800">Langkah Praktis:</h4>
                  <ul className="space-y-2 pl-5">
                    {item.steps.map((step, j) => (
                      <li key={j} className="relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                        <span className="pl-3 text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border border-green-200 mb-3">
                  <p className="text-sm text-green-700 font-medium">💡 Tips: {item.tips}</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 font-medium">🌱 Dampak: {item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-green-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Bersama Kita Bisa Membuat Perubahan</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Dengan mengadopsi solusi kami dan mengubah kebiasaan kecil, setiap rumah dapat mengurangi 180kg sampah/tahun yang berakhir di TPA.
            </p>
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
              Gabung Gerakan Ini
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}