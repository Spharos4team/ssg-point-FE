"use client";
import { ImageProp } from "@/types/LinkProps";
import LinkImageWithFallback from "../ui/LinkImageWithFallback";
import DefListSimple from "./DefListSimple";
import { useRadioContext } from "../hooks/RadioProvider";

const TabContent = ({
  className,
  id,
  name,
  nameHidden = false,
  children,
  h4=false,
}: {
  className?: string;
  id: string;
  name: string;
  nameHidden?: boolean;
  children: React.ReactNode;
  h4?: boolean;
}) => {
  const { selectedValue } = useRadioContext();
  const HeaderTag = h4 ? "h4" : "h3";
  return (
    <div className={`${className} p-5 ${selectedValue === id ? "" : "hidden"}`}>
      {!nameHidden && <HeaderTag>{name}</HeaderTag>}
      {children}
    </div>
  );
};

export default TabContent;
