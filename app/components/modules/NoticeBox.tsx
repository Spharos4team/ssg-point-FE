import { ReactNode } from "react";
import ListForNoticeBox from "../atoms/ListForNoticeBox";

const NoticeBox = ({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className={`${className} pt-8 pb-[80px] px-5`}>
      <h3 className="pb-2 text-[14px] leading-[14px] font-medium">[{title}]</h3>
      <ul>{children}</ul>
    </div>
  );
};

export default NoticeBox;
