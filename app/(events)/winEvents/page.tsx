"use client";
import { usePathname } from "next/navigation";

type PageParam = {
  slug: string;
};

export default function WinEventPage({ params }: { params: PageParam }) {
  const pathname = usePathname();

  console.log({ params });

  return (
    <div className="border rounded-md p-2 m-2">
      <div className="">Slug: {params.slug}</div>
      <div>{pathname}</div>
    </div>
  );
}
