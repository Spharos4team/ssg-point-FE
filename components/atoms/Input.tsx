"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { phonHyphenShow } from "@/utils/FormatHelpers";
import { useEffect } from "react";

export default function Input({
  className,
  id,
  title,
  titleClass,
  type = "text",
  birthFormat,
  hyphenShow = false,
  ref,
  children,
  disabled = false,
}: {
  className?: string;
  id: string;
  title?: React.ReactNode;
  titleClass?: string;
  type?: "text" | "email" | "password" | "birth" | "cardNumber" | "phone";
  birthFormat?: "yyyy-mm-dd" | "yyyymmdd" | "yy-mm-dd" | "yymmdd";
  hyphenShow?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();

  const initValue = () => {
    if (appValueList[id] == "") {
      handleAppRecord(id, "");
    }
  };

  const inputType = ["birth", "cardNumber", "phone"].includes(type)
    ? "number"
    : type;

  useEffect(() => {
    if (type == "birth" && !birthFormat) {
      throw new Error("'birth' 타입은 'birthFormat' 속성이 필수입니다.");
    } else if (type !== "birth" && birthFormat) {
      throw new Error(
        "'birthFormat' 속성은 오직 'birth' 타입에만 사용할 수 있습니다."
      );
    }
    return () => {
      initValue();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");

    if (type === "phone") {
      handleAppRecord(id, onlyNumber.slice(0, 11));
    } else if (type === "birth") {
      handleAppRecord(id, onlyNumber.slice(0, 8));
    } else if (type === "cardNumber") {
      handleAppRecord(id, onlyNumber.slice(0, 4));
    } else {
      handleAppRecord(id, value);
    }
  };

  return (
    <div>
      {title && (
        <p className={`${titleClass} text-[13px] leading-5 pb-2`}>{title}</p>
      )}
      <div
        data-state
        className={`${className} relative inline-block w-full h-[48px] align-top box-border border border-inherit rounded-full`}
      >
        <label
          className="absolute table left-0 top-0 box-border w-full h-full px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
          htmlFor={id}
        >
          <span className="table-cell align-middle text-left break-all">
            {hyphenShow
              ? phonHyphenShow(String(appValueList[id]))
              : !appValueList[id] && children}
          </span>
        </label>
        <input
          className={`${className} appearance-none block text-sm h-full w-full px-[16px] rounded-full overflow-hidden caret-black focus-visible:relative peer`}
          id={id}
          type={inputType}
          value={appValueList[id] as string}
          onChange={handleInputChange}
          disabled={disabled}
          ref={ref}
        />
      </div>
    </div>
  );
}
