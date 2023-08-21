"use client";
import { ReactNode, useState } from "react";

const ToggleButtonBasic = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggleValue = () => {
    setToggleValue(!toggleValue);
    console.log("toggleValue", toggleValue);
  };

  const checkedCss = "before:bg-[#fc348c] after:left-7";
  return (
    <div className="relative inline-block ml-[10px]">
      <input
        type="checkbox"
        id={id}
        className="absolute left-0 top-0 w-full h-full opacity-[-1] z-[-1]"
        checked={toggleValue}
        onChange={handleToggleValue}
      />
      <label
        htmlFor={id}
        className={`block w-14 h-8 overflow-hidden indent-[-999em] select-none before:content-[''] before:block before:absolute before:w-full before:h-8 before:rounded-[2em] before:transition-all after:transition-all after:content-[''] after:block after:absolute after:cursor-pointer after:top-1 after:w-6 after:h-6 after:rounded-full after:bg-white ${
          toggleValue ? checkedCss : "before:bg-[#bcbcbc] after:left-[5px]"
        }`}
      >
        {children} {toggleValue ? "on" : "off"}
      </label>
    </div>
  );
};

export default ToggleButtonBasic;
