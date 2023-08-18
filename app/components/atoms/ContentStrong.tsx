import { ReactNode } from "react";

const ContentStrong = ({ children }: { children: ReactNode }) => {
  return (
    <strong className="block pt-10 pb-2 px-5 font-medium text-base leading-[26px] border-b border-[#e5e5e5]">
      {children}
    </strong>
  );
};

export default ContentStrong;
