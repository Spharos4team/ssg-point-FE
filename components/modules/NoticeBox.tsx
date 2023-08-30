import { ReactNode } from "react";

const NoticeBox = ({
  className,
  title,
  type,
  children,
}: {
  className?: string;
  title?: string;
  type: "info" | "strong" | "simple";
  children: ReactNode;
}) => {
  return (
    <div className={`${className} pt-8 pb-[80px]`}>
      {type == "info" ? (
        <h3 className="pb-2 text-[14px] leading-[24px] font-medium">
          [{title}]
        </h3>
      ) : type == "strong" ? (
        <strong className="text-sm leading-6">{title}</strong>
      ) : (
        <>{title}</>
      )}

      <ul>{children}</ul>
    </div>
  );
};

export default NoticeBox;
