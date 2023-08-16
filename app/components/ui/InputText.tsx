import React from "react";

export const InputText = ({
  type,
  title,
  placeholder,
}: Pick<HTMLInputElement, "type" | "title" | "placeholder">) => {
  const focusColor = "focus-visible:shadow-[0_0_0_2px_#1101ff]";
  return (
    <div
      data-state
      className="inoput_box relative inline-block w-full h-[48px] align-top box-border border border-inherit rounded-full"
    >
      <label
        className="absolute table left-0 top-0 box-border w-full h-full px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
        htmlFor={type}
      >
        <span className="table-cell align-middle text-left break-all">
          {placeholder}
          {type == "password" ? (
            <em className="inline-block text-xs text-[#bcbcbc]">
              (영문, 숫자, 특수문자 8-20자)
            </em>
          ) : (
            <></>
          )}
        </span>
      </label>
      <input
        className="block text-sm h-full w-full px-[16px] rounded-full overflow-hidden caret-black focus-visible:relative peer"
        id={type}
        type={type}
        title={title}
      />
    </div>
  );
};
