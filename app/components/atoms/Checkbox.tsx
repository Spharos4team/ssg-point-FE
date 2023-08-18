"use client";
import { useState } from "react";

/**
 * @Component UI 컴포넌트
 * @param
 * @returns
 */
export const Checkbox = (
  /*{
  type,
  title,
  placeholder,
}: Pick<HTMLInputElement, "type" | "title" | "placeholder">*/ {
    id,
    name,
    children,
  }: { id: string; name: string; children?: React.ReactNode }
) => {
  //TODO: 초기상태를 props로 받아와야 함
  const [checkValue, setCheckValue] = useState(false);

  const handleCheckValue = () => {
    setCheckValue(!checkValue);
    console.log(checkValue);
  };

  const checked =
    "before:bg-[url('/images/check_mark.png')] before:bg-no-repeat before:bg-center before:bg-[length:12px_auto] before:bg-black";

  return (
    <>
      <div className="relative inline-block">
        <input
          type="checkbox"
          id={`terms-${id}`}
          className="absolute left-0 top-0 w-6 h-6 rounded-xl border-0 appearance-none"
          checked={checkValue}
          onChange={handleCheckValue}
        />
        <label
          htmlFor={`terms-${id}`}
          className={`block text-[10px] min-h-[22px] pt-[1px] pl-[30px] leading-[18px] align-middle whitespace-nowrap break-keep before:content-[''] before:absolute before:left-0 before:top:0 before:w-[22px] before:h-[22px] before:border before:border-[#505050] before:rounded-[50%] before:z-[2] ${
            checkValue || checked
          }`}
        >
          <span className="table-cell align-middle break-keep">{name}</span>
        </label>
      </div>

      {children ? (
        <div className="flex space-x-3 mt-[10px]">{children}</div>
      ) : (
        ""
      )}
    </>
  );
};
