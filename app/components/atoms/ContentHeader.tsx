export default function ContentHeader({
  main,
  sub,
}: {
  main: React.ReactElement;
  sub: string;
}) {
  return (
    <div className="py-10 px-5">
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
