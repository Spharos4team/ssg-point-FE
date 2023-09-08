export default function PointWrap({
  txt,
  count,
  unit,
}: {
  txt: string;
  count: string;
  unit: string;
}) {
  return (
    <div className="point_wrap flex border-b-[1px] border-b-[#e8e8e8] border-b-solid justify-between items-center h-[74px]">
      <div className="point_head pl-4">
        <p className="point_tit text-[13px] leading-[21px]">신세계포인트</p>
        <p className="point_txt text-[13px] leading-[21px] font-medium">{txt}</p>
      </div>
      <p className="point_cont text-[23px] font-medium pr-[25px]">
        <span className="ff_lato text-[23px] font-medium mr-[3px]">{count}</span>
        <span>{unit}</span>
      </p>
    </div>
  );
}
