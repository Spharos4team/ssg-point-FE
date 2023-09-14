'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Coupon() {
  const router = useRouter();
  useEffect(() => {
    router.push('/benefits/myCoupon');
  }, []);
  return <></>;
}
