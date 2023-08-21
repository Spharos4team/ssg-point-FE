import { before } from "node:test";

const ListForNoticeBox = ({
  className,
  isBullet = true,
  level,
  children,
}: {
  className?: string;
  isBullet?: boolean;
  level: 1 | 2 | 3 | 4 | 5;
  children: string;
}) => {
  const levelColor = {
    1: "text-black font-bold before:text-black before:font-bold",
    2: "text-[#767676] before:text-[#767676]",
    3: "text-yellow-400 before:text-yellow-400",
    4: "text-orange-500 before:text-orange-500",
    5: "text-[#eb0000] before:text-[#eb0000]",
  };
  const bullet =
    "pl-[7px] before:content-['·'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5 before:font-bold";

  return (
    <li
      className={`${className} relative text-xs leading-5 tracking-[-0.5px] break-keep ${
        isBullet ? bullet : "pl-0 list-none"
      } ${levelColor[level]}`}
      dangerouslySetInnerHTML={{ __html: children }}
    ></li>
  );
};

export default ListForNoticeBox;
