"use client";
import { Category } from "@/types/CategoryProps";
import React, { useEffect, useState } from "react";
import { useValueContext } from "../modules/ValueContext";
import JsonChecker from "@/utils/JsonChecker";

const Dropdown = ({
  id,
  title,
  theme = "round",
  options, //json?
  initialValue = 0,
  onClick,
  parentSeleted,
  children,
}: {
  id: string;
  title: string;
  theme?: "mini" | "round" | "fullWidth";
  options?: string[];
  initialValue?: number;
  onClick?: () => void;
  parentSeleted?: string;
  children?: React.ReactNode;
}) => {
  const [selectValue, setSelectValue] = useState<string>();
  console.log(parentSeleted);

  const style =
    theme === "mini"
      ? {
          wrapper: "relative inline-block align-top w-full",
          select:
            "relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border",
        }
      : theme === "round"
      ? {
          wrapper: "relative inline-block align-top w-full rounded-lg",
          select:
            "relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border rounded-lg",
        }
      : theme === "fullWidth"
      ? {
          wrapper: "",
        }
      : {};

  return (
    <>
      <div className={style.wrapper}>
        <select
          className={style.select}
          id={id}
          title={title}
          onChange={(e) => setSelectValue(e.target.value)}
          value={selectValue}
          onClick={onClick}
        >
          {options?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {children &&
        React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, {
            parentSeleted: selectValue,
          })
        )}
    </>
  );
};

export default Dropdown;
