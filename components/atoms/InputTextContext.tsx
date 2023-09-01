"use client";
import { useContext, useEffect, useState } from "react";
import { useFormContext } from "../hooks/FormProvider";
import { useValueContext } from "../hooks/ValueProvider";

const InputTextContext = ({
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
  const { valueList, handleValueList } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (id.toLowerCase().includes("email")) {
      const storedLoginId = localStorage.getItem("email");
      if (storedLoginId) {
        handleValueList(id, storedLoginId);
      }
    }
    // if (id.toLowerCase().includes("id")) {
    //   const storedLoginId = localStorage.getItem("email");
    //   if (storedLoginId) {
    //     handleValueList(id, storedLoginId);
    //   }
    // }
  }, []);

  const handleThisValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    if (inputType === "phone") {
      handleValueList(id, onlyNumber.slice(0, 11));
    } else if (inputType === "birth") {
      handleValueList(id, onlyNumber.slice(0, 8));
    } else if (inputType === "card") {
      handleValueList(id, onlyNumber.slice(0, 4));
    } else {
      handleValueList(id, value);
    }
  };

  const focusColor = "focus-visible:shadow-[0_0_0_2px_#1101ff]";
  return (
    <div
      data-state
      className={`${className} inoput_box relative inline-block w-full h-[48px] align-top box-border border border-inherit rounded-full`}
    >
      <label
        className="absolute table left-0 top-0 box-border w-full h-full px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
        htmlFor={id}
      >
        <span className="table-cell align-middle text-left break-all">
          {!valueList[id] && (
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
              className={`absolute block w-[19px] h-[14px] translate-y-[-50%] right-[22px] top-1/2 z-[99] appearance-none ${
                showPassword
                  ? "bg-[url('/images/icon_password_show.png')]"
                  : "bg-[url('/images/icon_password_hidden.png')]"
              } bg-no-repeat bg-[100%_auto]`}
              type="checkbox"
              checked={showPassword}
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}

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
        value={valueList[id] as string}
        onChange={handleThisValue}
        disabled={disabled}
      />
    </div>
  );
};

export default InputTextContext;
