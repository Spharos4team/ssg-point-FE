"use client";
import { useState } from "react";

const InputTextBasic = ({
  className,
  id,
  inputType,
  title,
  placeholder,
  disabled = false,
}: {
  className?: string;
  id: string;
  inputType: "email" | "text" | "password" | "phone" | "birth" | "card";
  title: string;
  placeholder: string;
  disabled?: boolean;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    if (inputType === "phone") {
      setInputValue(onlyNumber.slice(0, 11));
    } else if (inputType === "birth") {
      setInputValue(onlyNumber.slice(0, 8));
    } else if (inputType === "card") {
      setInputValue(onlyNumber.slice(0, 4));
    } else {
      setInputValue(value);
    }
  };

  const focusColor = "focus-visible:shadow-[0_0_0_2px_#1101ff]";
  return (
    <div
      data-state
      className={`${className} relative inline-block w-full h-[48px] align-top box-border border border-inherit rounded-full`}
    >
      <label
        className="absolute table left-0 top-0 box-border w-full h-full px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
        htmlFor={id}
      >
        <span className="table-cell align-middle text-left break-all">
          {!inputValue && (
            <>
              {placeholder}
              {inputType == "password" && (
                <em className="inline-block text-xs text-[#bcbcbc]">
                  (영문, 숫자, 특수문자 8-20자)
                </em>
              )}
            </>
          )}
          {inputType == "password" && (
            <input
              className={`absolute block w-[19px] h-[14px] translate-y-[-50%] right-[22px] top-1/2 z-[99]`}
              type="checkbox"
              checked={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </span>
      </label>
      <input
        className={`${className} block text-sm h-full w-full px-[16px] rounded-full overflow-hidden caret-black focus-visible:relative peer`}
        id={id}
        type={
          showPassword
            ? "text"
            : inputType === "phone"
            ? "text"
            : inputType === "card"
            ? "text"
            : inputType
        }
        title={title}
        value={inputValue}
        onChange={handleInputValue}
        disabled={disabled}
      />
    </div>
  );
};

export default InputTextBasic;
