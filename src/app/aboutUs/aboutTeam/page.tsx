'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Leaf, Target, Handshake, Heart, Lightbulb, ChevronRight } from 'lucide-react';

export default function TentangTeam() {
  const team = [
    {
      name: 'Andika Arifin',
      role: 'Website Developer',
      img: '/images/team/anfin.jpg',
      desc: 'Pengembang website yang berfokus pada pengalaman pengguna dan desain yang responsif. Keahlian utama: HTML, CSS, JavaScript.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: 'Inovatif',
      desc: 'Menghadirkan solusi baru berbasis teknologi untuk masalah lingkungan yang nyata'
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      title: 'Kolaboratif',
      desc: 'Bekerja sama dengan berbagai pihak demi dampak yang lebih luas'
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'Empatik',
      desc: 'Memahami tantangan masyarakat dan hadir sebagai solusi'
    }
  ];

  const stats = [
    { value: '12+', label: 'Komunitas Binaan' },
    { value: '3K+', label: 'Pengguna Terdaftar' },
    { value: '15 Ton', label: 'Sampah Dikelola' },
    { value: '5 Kota', label: 'Wilayah Aktif' }
  ];

  return (
    <main className="min-h-screen bg-[#F8F8FF]">
      {/* Hero Section with Particles */}
      <section className="min-h-[75vh] relative overflow-hidden flex items-center px-6 md:px-10 lg:px-40">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/team/team-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0" />

        Content
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
              <span className="text-green-400">Tim</span> Trashinno
            </h1>
            <div className="w-20 h-1.5 bg-green-400 mb-4 rounded-full" />
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed">
              Dibangun oleh tim yang berkomitmen menggabungkan teknologi dan kepedulian lingkungan untuk menciptakan perubahan nyata.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-[#F8F8FF] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Tim Kami
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kenalan dengan Anggota Tim</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Individu berbakat yang membawa keahlian unik untuk mewujudkan visi Trashinno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.desc}</p>
                  
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-500 hover:text-green-600 transition">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-500 hover:text-green-600 transition">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-500 hover:text-green-600 transition">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-green-50 py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Visi Kami</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Menjadi pelopor gerakan pengelolaan sampah digital yang edukatif, inklusif, dan berkelanjutan untuk seluruh lapisan masyarakat Indonesia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Misi Kami</h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Mengedukasi masyarakat akan pentingnya pemilahan dan daur ulang sampah</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Menyediakan platform digital yang memudahkan pengelolaan sampah</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Berinovasi dalam teknologi yang mendukung ekonomi sirkular</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Mendorong kolaborasi antara komunitas, pelajar, dan pemerintah</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai Inti Kami</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah dan keputusan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6"
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-green-100">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00752c] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Tertarik Bergabung dengan Tim Kami?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Kami selalu mencari talenta baru yang berbagi semangat dan visi kami untuk lingkungan yang lebih baik.
            </p>
            <div className="pt-6">
              <Link href="/karir">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-50 transition-colors flex items-center gap-2 mx-auto"
                >
                  Lihat Lowongan
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