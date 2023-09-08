"use client";
import post from "@/data/post.json";
import { useSearchParams } from "next/navigation";
export default function NoticeDetailPage({
  params,
}: {
  params: { id: string; details: string };
}) {
  const search = useSearchParams();
  const thisPost = post;
  return (
    <>
      <div className="mt-9 px-5">
        <div className="pb-5">
          <p>ParamId: {params.id}</p>
          <p>PostId: {params.details}</p>
          <p>UseSearchParams: {search}</p>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: thisPost.map((post) => post.content),
          }}
        />
      </div>
    </>
  );
}
