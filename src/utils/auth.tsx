import { supabase } from '@/lib/supabaseClient'
import type { User } from '@supabase/supabase-js'

export const handleRegister = async (
  email: string,
  password: string,
  fullName?: string
) => {
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName ?? null,
      },
    },
  })

  if (signUpError) throw new Error(signUpError.message)

  const user = signUpData.user
  if (!user) throw new Error('User tidak ditemukan setelah registrasi.')
  if (!user.email) throw new Error('User email tidak tersedia setelah registrasi.')

  const accountData = {
    id: user.id,
    email: user.email,
    full_name: fullName ?? null,
    role: 'user',
  }
  console.log('Inserting account:', accountData)

  const { error: insertError } = await supabase.from('accounts').insert([accountData])

  if (insertError) {
    console.error('Insert error:', JSON.stringify(insertError, null, 2))
    throw new Error(`Gagal insert akun: ${insertError.message}`)
  }

  return user  
}

export const handleLogin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  console.log('Login result:', data)

  if (error) throw new Error(error.message)
  if (!data.session || !data.user) throw new Error('Login gagal: Session atau User tidak ditemukan')

  return data
}


export const handleLogout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}

export const getCurrentUser = async (): Promise<User | null> => {
  const { data, error } = await supabase.auth.getUser()
  if (error) throw new Error(error.message)
  return data.user
}

export const getAccountProfile = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  console.log('=== DEBUG: getUser() ===')
  console.log('User:', user)
  console.log('User ID:', user?.id)
  console.log('User Email:', user?.email)
  console.log('Auth Error:', authError)

  if (authError) throw new Error(authError.message)
  if (!user?.id) throw new Error('User ID tidak ditemukan')

  const { data: account, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('id', user.id)
    .maybeSingle()

  console.log('=== DEBUG: getAccountProfile DB Query ===')
  console.log('Account:', account)
  console.log('Query Error:', error)

  if (error) throw new Error(error.message)

  // 🧩 Jika akun tidak ada, buat akun baru secara otomatis
  if (!account) {
    const insertData = {
      id: user.id,
      email: user.email,
      full_name: user.user_metadata?.full_name ?? null,
      role: 'user',
    }

    const { error: insertError } = await supabase.from('accounts').insert([insertData])

    if (insertError) {
      console.error('Gagal membuat akun secara otomatis:', insertError)
      throw new Error('Akun tidak ditemukan dan gagal dibuat.')
    }

    // Setelah insert, return data baru
    return insertData
  }

  return account
}
