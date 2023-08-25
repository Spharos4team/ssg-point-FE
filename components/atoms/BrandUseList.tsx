export default function BrandUseList({
    brand_no,
    brand_name,
    count,
    unit,
}: {
    brand_no: number;
    brand_name: string;
    count: string;
    unit: string;
}) {
  return (
      <ol className="border-t-[1px] border-t-solid border-t-black pt-2">
          <li className="flex w-full justify-between py-2">
              <p className="font-bold text-[14px]">{brand_no}.</p>
              <p className="text-[14px] pl-[5px] break-keep whitespace-nowrap">{brand_name}</p>
              <span className="clear-both content-[''] inline-block bg-[url('/images/dots.png')] bg-[y_no-repeat] bg-[length:4px_2px] w-full h-[2px] indent-[-999em] overflow-hidden font-[0] m-[10px_5px_0_10px]"></span>
              <p className="text-[12px] leading-[20px] text-[#767676] break-keep">({count}{unit})</p>
          </li>
      </ol>
  );
};