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
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw new Error(error.message)
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

  if (authError) throw new Error(authError.message)

  const { data: account, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('id', user?.id)
    .single()

  if (error) throw new Error(error.message)

  return account
}