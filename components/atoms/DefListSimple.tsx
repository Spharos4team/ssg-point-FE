export default function DefListSimple({ dt, dd }: { dt: string; dd: string }) {
  return (
    <dl className="flex text-[13px] leading-[21px]">
      <dt className="font-medium min-w-[64px]">적용상품</dt>
      <dd dangerouslySetInnerHTML={{ __html: dd }}></dd>
    </dl>
  );
}
