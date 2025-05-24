'use client'

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LoginPage = dynamic(() => import('./loginPage'), {
  ssr: false,
});

export default function LoginWrapper() {
  return (
    <Suspense fallback={<div>Loading login page...</div>}>
      <LoginPage />
    </Suspense>
  );
}
