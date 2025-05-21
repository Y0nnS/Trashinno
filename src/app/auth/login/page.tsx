'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 px-4 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authIMG/login-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-white">
          <Image
            src="/images/authIMG/login.jpg"
            alt="Login Illustration"
            className="w-full h-auto"/>
        </div>

        {/* Right Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Login to <span className="font-bold text-green-600">Trashinno</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-2 text-red-600 border border-red-600 rounded">
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required/>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required/>
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
