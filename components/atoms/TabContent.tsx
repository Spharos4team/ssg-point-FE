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
}: {
  className?: string;
  id: string;
  name: string;
  nameHidden?: boolean;
  children: React.ReactNode;
}) => {
  const { selectedValue } = useRadioContext();
  return (
    <div className={`${className} p-5 ${selectedValue === id ? "" : "hidden"}`}>
      {!nameHidden && <h3>{name}</h3>}
      {children}
    </div>
  );
};

export default TabContent;
