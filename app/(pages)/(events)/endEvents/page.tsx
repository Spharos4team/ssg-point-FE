"use client";

import BodyNavTop from "@/components/BodyNavTop";
import { usePathname } from "next/navigation";

type PageParam = {
  slug: string;
};

export default function EndEventPage({ params }: { params: PageParam }) {
  const pathname = usePathname();

  console.log({ params });

  return (
    <div className="border rounded-md p-2 m-2">
      <div className="">Slug: {params.slug}</div>
      <div>{pathname}</div>
    </div>
  );
}
