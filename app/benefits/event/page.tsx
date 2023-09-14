'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Event() {
  const router = useRouter();
  useEffect(() => {
    router.push('/benefits/myEvent');
  }, []);
  return <></>;
}
