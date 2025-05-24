'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface Props {
  setSuccessMessage: (msg: string | null) => void;
}

export default function SearchParamsSuccess({ setSuccessMessage }: Props) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get('success');
    if (success === 'register') {
      setSuccessMessage('Account registered successfully! Check your email, and verify your account.');
      setTimeout(() => setSuccessMessage(null), 5000);
    }
  }, [searchParams, setSuccessMessage]);

  return null;
}
