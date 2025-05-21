'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { handleLogin, getAccountProfile } from '@/utils/auth'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const success = searchParams.get('success')
    if (success === 'register') {
      setSuccessMessage('Account registered successfully! Check your email, and Verify your account.')
      setTimeout(() => setSuccessMessage(null), 5000)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
  
    try {
      // 1. Login
      const loginData = await handleLogin(email, password)
  
      // 2. Ambil profil dari tabel accounts
      const profile = await getAccountProfile()
  
      // 3. Redirect sesuai role
      if (profile.role === 'admin') {
        router.push('/admin/dashboard')
      } else {
        router.push('../../user-home/')
      }
    } catch (error: any) {
      setError(error.message || 'Login gagal')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-270 flex items-center justify-center bg-[#F8F8FF]0 px-4 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authIMG/login-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-[#F8F8FF] rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-white">
          <Image
            src="/images/authIMG/login.jpg"
            alt="Login Illustration"
            width={1200}
            height={800}
          />
        </div>

        {/* Right Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Login to <span className="font-bold text-green-600">Trashinno</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {successMessage && (
              <div className="p-2 text-green-700 bg-green-100 border border-green-600 rounded mb-4">
                {successMessage}
              </div>
            )}
            {error && (
              <div className="p-2 text-red-600 border border-red-600 rounded">
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-zinc-800">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-zinc-800"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-800">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-zinc-800"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" className="text-green-600" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-600">
            Don&#39;t have an account?
            <Link href="/auth/register" className="text-green-600 font-medium hover:underline ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
