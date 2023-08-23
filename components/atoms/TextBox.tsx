"use client";
import { useState } from "react";

const TextBox = ({
  className,
  id,
  type,
  disable = false,
  children,
}: {
  className?: string;
  id: string;
  type: "number" | "text" | "password";
  disable?: boolean;
  children: string;
}) => {
  const [value, setValue] = useState("");

  return (
    <div className={`${className} relative inline-block w-full align-top`}>
      <input
        className="flex flex-wrap justify-between px-4 box-border border rounded-lg border-[#e8e8e8] text-sm w-full h-[48px] appearance-none"
        type={type}
        id={id}
        value={value}
        disabled={disable}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        className={`absolute table left-0 top-0 box-border w-full h-12 px-4 leading-6 text-sm ${
          value ? "hidden" : ""
        }`}
        htmlFor={id}
      >
        <span
          className="table-cell align-middle break-keep text-left text-[#767676]"
          dangerouslySetInnerHTML={{ __html: children }}
        ></span>
      </label>
    </div>
  );
};

export default TextBox;
