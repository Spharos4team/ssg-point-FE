"use client";
import { useEffect, useState } from "react";
import { useFormContext } from "../hooks/FormProvider";

const CheckboxContext = ({
  className,
  id,
  name,
  checkedStyle,
  children,
}: {
  className?: string;
  id: string;
  name: string;
  checkedStyle: string;
  children: React.ReactNode;
}) => {
  const { valueList, handleValueList } = useFormContext();

  useEffect(() => {
    const storedChecked = localStorage.getItem(id);
    if (storedChecked) {
      handleValueList(id, JSON.parse(storedChecked));
    }
  }, []);

  const handleCheckValue = () => {
    handleValueList(id, !valueList[id]);
  };

  return (
    <>
      <div className={`${className} relative inline-block text-[10px]`}>
        <input
          type="checkbox"
          id={id}
          className="absolute left-0 top-0 w-6 h-6 rounded-xl border-0 appearance-none"
          checked={valueList[id] as boolean}
          onChange={handleCheckValue}
        />
        <label
          htmlFor={id}
          className={`block min-h-[22px] pt-[1px] pl-[30px] leading-[18px] align-middle whitespace-nowrap break-keep before:content-[''] before:absolute before:left-0 before:top:0 before:w-[22px] before:h-[22px] before:border before:border-[#505050] before:rounded-[50%] before:z-[2] ${
            valueList[id] ? checkedStyle : ""
          }`}
        >
          <span className={`table-cell align-middle break-keep`}>{name}</span>
        </label>
      </div>
      {children}
    </>
  );
};

export default CheckboxContext;
