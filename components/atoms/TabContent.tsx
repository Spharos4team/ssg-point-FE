"use client";
import { ImageProp } from "@/types/LinkProps";
import LinkImageWithFallback from "../ui/LinkImageWithFallback";
import DefListSimple from "./DefListSimple";
import { useRadioContext } from "../hooks/RadioProvider";

const TabContent = ({
  className,
  id,
  name,
  children,
}: {
  className?: string;
  id: string;
  name: string;
  children: React.ReactNode;
}) => {
  const { selectedValue } = useRadioContext();
  return (
    <div className={`${className} p-5 ${selectedValue === id ? "" : "hidden"}`}>
      <h3 className="hidden">{name}</h3>
      {children}
    </div>
  );
};

export default TabContent;
