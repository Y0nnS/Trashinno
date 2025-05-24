// app/auth/login/SearchParamsSuccess.tsx
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function SearchParamsSuccess({
  setSuccessMessage,
}: {
  setSuccessMessage: (msg: string | null) => void
}) {
  const searchParams = useSearchParams()

  useEffect(() => {
    const success = searchParams.get('success')
    if (success === 'register') {
      setSuccessMessage(
        'Account registered successfully! Check your email, and Verify your account.'
      )
      setTimeout(() => setSuccessMessage(null), 5000)
    }
  }, [searchParams, setSuccessMessage])

  return null
}
