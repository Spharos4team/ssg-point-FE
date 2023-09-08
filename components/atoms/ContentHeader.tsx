export default function ContentHeader({
  className,
  type = 'basic',
  top,
  main,
  sub,
}: {
  className?: string;
  type?: 'basic' | 'hasTop';
  top?: React.ReactNode;
  main: React.ReactNode;
  sub?: string;
}) {
  switch (type) {
    case 'basic': {
      if (type == 'basic' && top) throw new Error("'basic' type은 'top' 속성이 필요없습니다.");
      return (
        <div className={`${className} py-10 px-5`}>
          <p className="text-xl leading-[30px] font-normal break-keep tracking-[-.5px]">{main}</p>
          {sub ? (
            <p
              className="text-sm text-[#767676] leading-6 break-keep pt-2"
              dangerouslySetInnerHTML={{ __html: sub }}
            ></p>
          ) : (
            <></>
          )}
        </div>
      );
    }
    case 'hasTop': {
      if (type == 'hasTop' && !top) throw new Error("'hasTop' type은 'top' 속성이 필요합니다.");
      return (
        <div className={`${className} py-10 px-5`}>
          {top}
          <p className="text-xl leading-[30px] font-normal break-keep tracking-[-.5px]">
            <strong className="font-normal">{main}</strong>
          </p>
          {sub ? (
            <p
              className="text-sm text-[#767676] leading-6 break-keep pt-2"
              dangerouslySetInnerHTML={{ __html: sub }}
            ></p>
          ) : (
            <></>
          )}
        </div>
      );
    }
  }
}
