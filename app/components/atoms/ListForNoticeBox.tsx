import { before } from "node:test";

const ListForNoticeBox = ({
  classProps,
  level,
  children,
}: {
  classProps?: string;
  level: 1 | 2 | 3 | 4 | 5;
  children: string;
}) => {
  const levelColor = {
    1: "text-green-500 before:text-green-500",
    2: "text-[#767676] before:text-[#767676]",
    3: "text-yellow-400 before:text-yellow-400",
    4: "text-orange-500 before:text-orange-500",
    5: "text-[#eb0000] before:text-[#eb0000]",
  };

  return (
    <li
      className={`relative text-xs leading-5 pl-[7px] tracking-[-0.5px] before:content-['·'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5  before:font-bold ${levelColor[level]}`}
    >
      {children}
    </li>
  );
};

export default ListForNoticeBox;
