export default function ListForModal({
  stepnum,
  txt,
  children,
}: {
  stepnum: number;
  txt: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="flex flex-wrap pb-4 !text-[13px] leading-[21px] font-normal text-black">
      <span className="inline-block w-12 h-[19px] mr-[7px] text-white text-[10px] leading-[19px] font-normal text-center bg-black rounded-3xl">
        STEP {stepnum}
      </span>
      <span className="shrink-[1] grow-[1] basis-0">{txt}</span>
      {children}
    </li>
  );
}
