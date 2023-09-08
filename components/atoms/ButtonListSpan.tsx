export default function ButtonListSpan({
  logo,
  brandName,
  isSelected,
}: {
  logo: string;
  brandName: string;
  isSelected?: boolean;
}) {
  return (
    <li className="{/*border-b-[#a16c0c]*/} inline-block w-1/6 align-top h-[58px] border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-b-solid border-b-[#e8e8e8] relative box-border">
      <button className="w-[calc(100%+2px)] h-[calc(100%+1px)] -left-[1px] -top-[1px] bg-[#fff4eb] relative border-none align-middle cursor-pointer">
        <span
          className={`block w-full h-full bg-[position:50%_center] bg-[length:62px_58px] bg-no-repeat`}
        >
          {brandName}
        </span>
        <span className="hidden">선택됨</span>
      </button>
    </li>
  );
}
