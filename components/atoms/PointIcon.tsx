export default function PointIcon({ point }: { point: number }) {
  return (
    <p
      className="point_cont ff_lato flex pr-0 text-[24px] leading-[30px] font-bold
                        after:content-[''] after:inline-block after:ml-[7px] after:w-[33px] after:h-[30px] after:bg-[url('/images/point_gradi.png')] after:bg-no-repeat after:bg-[100%_auto]"
    >
      {point}
    </p>
  );
}
