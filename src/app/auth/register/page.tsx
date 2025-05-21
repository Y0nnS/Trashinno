'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  type UnknownError = {
    message?: string
    [key: string]: unknown
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match')
      return
    }

    setLoading(true)
    try {
      // Signup user via Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })
      if (signUpError) throw signUpError

      // Dapatkan session user
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
      if (sessionError) throw sessionError
      const session = sessionData?.session
      if (!session || !session.user) throw new Error('Session not available after sign up')

      // Cek apakah user sudah ada di tabel accounts
      const { data: existingUser, error: selectError } = await supabase
        .from('accounts')
        .select('id')
        .eq('id', session.user.id)
        .single()

      // Error selain "no rows found" (kode PGRST116) dilempar
      if (selectError && selectError.code !== 'PGRST116') {
        throw selectError
      }

      // Kalau user belum ada, baru insert
      if (!existingUser) {
        const { error: insertError } = await supabase
          .from('accounts')
          .upsert([
            {
              id: session.user.id,
              email: session.user.email,
              full_name: fullName,
              role: 'user',
            },
          ])

        if (insertError) throw insertError
      }

      router.push('/auth/login?success=register')
    } catch (err: unknown) {
      const e = err as UnknownError
      setError(e.message ?? 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-200 flex items-center justify-center bg-gray-100 px-4 overflow-hidden">
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

      <div className="relative z-10 bg-[#F8F8FF] shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2 w-full h-auto max-w-4xl">
        <div className="hidden md:flex items-center justify-center bg-gray-50">
          <Image
            src="/images/authIMG/register.jpg"
            alt="Illustration"
            className="w-full"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="p-8 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Register to <span className="text-green-600">Trashinno</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {error && (
              <div className="p-2 text-red-600 border border-red-600 rounded" role="alert">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="show-password"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label htmlFor="show-password" className="text-sm text-gray-600">
                Show Password
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
