import { before } from 'node:test';

const ListForNoticeBox = ({
  className,
  isBullet = false,
  isHyphen = false,
  isReference = false,
  level,
  children,
  isCheck = false,
}: {
  className?: string;
  isBullet?: boolean;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
  isHyphen?: boolean;
  isReference?: boolean;
  isCheck?: boolean;
}) => {
  const levelColor = {
    1: 'text-black font-bold before:text-black before:font-bold',
    2: 'text-[#767676] before:text-[#767676]',
    3: 'text-yellow-400 before:text-yellow-400',
    4: 'text-orange-500 before:text-orange-500',
    5: 'text-[#eb0000] before:text-[#eb0000]',
    6: 'text-black before:text-[#767676]',
  };
  const bullet =
    "pl-[7px] before:content-['·'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5 before:font-bold";
  const hyphen =
    "pl-[7px] -tracking-[.5px] before:content-['-'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5 before:font-normal";
  const reference =
    "pl-[14px] -tracking-[.5px] before:content-['※'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5 before:font-normal";
  const check =
    "text-[13px] leading-[21px] pl-[14px] -tracking-[.5px] before:content-[''] before:relative before:top-6 before:mt-[1px] before:ml-1 before:inline-block before:w-[11px] before:h-[7px] before:bg-[url('/images/arrow_down_form.png')] before:opacity-50 before:bg-no-repeat before:bg-[100%_auto]";
  return (
    <li
      className={`${className} relative text-xs leading-5 tracking-[-0.5px] break-keep list-none ${
        isBullet ? bullet : isHyphen ? hyphen : isReference ? reference : isCheck ? check : 'pl-0 list-none'
      } ${levelColor[level]}`}
      dangerouslySetInnerHTML={{ __html: children }}
    ></li>
  );
};

export default ListForNoticeBox;