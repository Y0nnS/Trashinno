'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match')
      return
    }
    setLoading(true)
  
    try {
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
  
      const user = data.user
      if (!user) throw new Error('Failed to get user after sign up.')
  
      const { data: insertData, error: insertError } = await supabase.from('accounts').insert([
        {
          id: user.id,
          email: user.email,
          full_name: fullName,
          role: 'user',
        },
      ])      
      
        .select()
  
        if (insertError) {
          console.error('Insert error details:', insertError)
          throw new Error(
            'Account created, but failed to save profile: ' +
              (insertError.message || JSON.stringify(insertError))
          )
        }        
                
      console.log('Insert success:', insertData)
  
      router.push('/auth/login')
    } catch (error: any) {
      setError(error.message || JSON.stringify(error))
    } finally {
      setLoading(false)
    }
  }  

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gray-100 px-4 overflow-hidden">
      {/* Background Image Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/authIMG/login-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Register Card */}
      <div className="relative z-10 bg-white shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2 w-full h-auto max-w-4xl">
        <div className="hidden md:flex items-center justify-center bg-gray-50">
          <img
            src="/images/authIMG/register.jpg"
            alt="Illustration"
            className="w-full"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Register to <span className="text-green-600">Trashinno</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-2 text-red-600 border border-red-600 rounded">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="text-zinc-800 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required/>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="show-password"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"/>
              <label htmlFor="show-password" className="text-sm text-gray-600">
                Show Password
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}>
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
