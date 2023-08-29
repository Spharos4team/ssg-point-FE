"use client";
import { useRadioContext } from "../hooks/RadioProvider";

const TabContext = ({
  className,
  id,
  name,
}: {
  className?: string;
  id: string;
  name: string;
}) => {
  const active = "bg-[#fff3f8] text-[#d9044b] font-medium !border-[#d9044b]";

  const { selectedValue, handleRadio } = useRadioContext();
  const handleThisValue = () => {
    handleRadio(id);
  };

  return (
    <li className="flex-1 table relative align-middle">
      <button
        className={`${className} ${
          selectedValue == id ? active : ""
        } block w-full h-11 border-b border-[#fbfbfb] box-border text-sm text-center`}
        onClick={handleThisValue}
        dangerouslySetInnerHTML={{ __html: name }}
      ></button>
    </li>
  );
};

export default TabContext;
