// ToDo:포인트에 따른 바의 길이 변화
export default function PointBar({
  className,
  type,
  point,
  color,
  height,
}: {
  className?: string;
  type: 'accumulate' | 'use';
  point: number;
  color: 'red' | 'purple';
  height: number;
}) {
  return (
    <ul className={`${className} list-none h-full `}>
      <li className="box-border pt-[45px] pb-4 flex flex-col items-end">
        {/*after:border-t-color 적용이 안됨, -left-[30%] 실제 페이지와 다름, 높이 받아오는 것*/}
        <div
          style={{
            height: `${height}%`,
            width: '24px',
            borderRadius: '30px',
            backgroundColor: color === 'red' ? '#ea035c' : '#5c1880',
            marginTop: 'auto',
            position: 'relative',
          }}
          className=".pointbar"
        >
          <span>
            <span className="point_count ff_lato text-[11px] text-white absolute -top-[30px] -left-[30%] right-[unset] -translate-[49%] block bg-[#ea035c] h-[22px] z-[1] rounded-[4px] leading-[21px] px-[7px] w-auto font-bold min-w-[39px] bottom-[unset]">
              {point}P
            </span>
          </span>
        </div>
        <p className="accumulate_txt text-[13px] leading-[21px] font-medium">
          {type === 'accumulate' ? '적립' : '사용'}
        </p>
      </li>
    </ul>
  );
}
