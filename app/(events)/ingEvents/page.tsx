'use client';

import { usePathname } from 'next/navigation';

type PageParam = {
  slug: string;
};

//TODO: slug에 datils? 쿼리 받아서 상세 페이지 표시
export default function IngEventPage({ params }: { params: PageParam }) {
  const pathname = usePathname();

  console.log({ params });

  return (
    <div className="border rounded-md p-2 m-2">
      <div className="">Slug: {params.slug}</div>
      <div>{pathname}</div>
    </div>
  );
}
