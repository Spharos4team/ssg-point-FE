export default function ContentHeader({
  className,
  main,
  sub,
}: {
  className?: string;
  main: React.ReactNode;
  sub: string;
}) {
  return (
    <div className={className}>
      <p className="text-xl leading-[30px] font-normal break-keep tracking-[-.5px]">
        <strong className="font-medium">{main}</strong>
      </p>
      <p
        className="text-sm text-[#767676] leading-6 break-keep pt-2"
        dangerouslySetInnerHTML={{ __html: sub }}
      ></p>
    </div>
  );
}
