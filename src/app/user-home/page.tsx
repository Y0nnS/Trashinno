'use client'

import { useEffect, useState } from 'react'
import { getAccountProfile } from '@/utils/auth'
import { useRouter } from 'next/navigation'

type AccountProfile = {
  full_name?: string
  email?: string
}

export default function UserHome() {
  const [profile, setProfile] = useState<AccountProfile | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchProfile() {
      try {
        const account = await getAccountProfile()
        if (!account) {
          // Jika tidak ada akun / belum login, tampilkan tombol login/register
          setProfile(null)
          return
        }
        setProfile(account)
      } catch (error) {
        console.error('Gagal mengambil profile:', error)
        setProfile(null)
      }
    }
    fetchProfile()
  }, [])

  const handleLoginClick = () => {
    router.push('/auth/login')
  }

  const handleRegisterClick = () => {
    router.push('/auth/register')
  }

  if (profile === null) {
    // User belum login, tampilkan UI dengan tombol Login & Register
    return (
      <main className="min-h-screen bg-white text-gray-800 font-sans p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Selamat Datang di Aplikasi Sampah!</h1>
        <p className="mb-8 text-center max-w-md text-gray-600">
          Yuk mulai memilah sampah dengan benar dan berkontribusi menjaga lingkungan.
          Silakan login atau daftar terlebih dahulu untuk melanjutkan.
        </p>

        <div className="flex space-x-6">
          <button
            onClick={handleLoginClick}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Login
          </button>

          <button
            onClick={handleRegisterClick}
            className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            Register
          </button>
        </div>
      </main>
    )
  }

  // Jika sudah login, tampilkan dashboard
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans p-8">
      <header className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-2">
          Selamat Datang, {profile.full_name ?? 'User'}! 👋
        </h1>
        <p className="text-green-600 text-lg">{profile.email}</p>
      </header>

      <section className="max-w-5xl mx-auto bg-green-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">Dashboard User</h2>
        <p className="mb-8 text-gray-700 max-w-3xl">
          Di sini kamu bisa mulai belajar cara memilah sampah dengan benar, mengelola sampah di rumah, dan ikut berkontribusi menjaga lingkungan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer">
            <h3 className="font-semibold text-green-800 mb-3 text-xl">Sampah Organik ♻️</h3>
            <p className="text-gray-700 leading-relaxed">
              Pelajari cara mengelola sampah organik seperti sisa makanan dan daun.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer">
            <h3 className="font-semibold text-green-800 mb-3 text-xl">Sampah Anorganik 🧴</h3>
            <p className="text-gray-700 leading-relaxed">
              Ketahui jenis sampah anorganik dan cara mendaur ulangnya.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer">
            <h3 className="font-semibold text-green-800 mb-3 text-xl">Sampah Berbahaya ☠️</h3>
            <p className="text-gray-700 leading-relaxed">
              Informasi penting tentang sampah B3 dan cara penanganannya.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
