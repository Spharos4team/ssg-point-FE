"use client";
import { useState } from "react";

const RadioBox = ({
  id,
  name,
  value,
  children,
}: {
  id: string;
  name: string;
  value: string;
  children: string;
}) => {
  const [checked, setChecked] = useState(false);

  //TODO: 현재 제대로 작동하고 있지 않음.
  return (
    <div className="relative inline-block w-[calc(50%-33px)] h-12">
      <input
        className="block w-full h-full opacity-100 appearance-none"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={() => setChecked(!checked)}
      />
      <label
        className={`absolute left-0 top-0 flex justify-center box-border items-center p-3 w-full h-12 bg-[#f5f5f5] text-sm text-center leading-6 rounded-lg z-[2]
        ${checked ? "bg-black text-white" : ""}`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default RadioBox;
