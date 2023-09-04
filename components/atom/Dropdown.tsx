"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { useEffect } from "react";

export default function Dropdown({
  className,
  id,
  name,
  initValue,
  options,
  onChange,
  disabled = false,
}: {
  className?: string;
  id: string;
  name: string;
  initValue?: string;
  options: string[];
  onChange?: () => void;
  disabled?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();
  const thisValue = appValueList[id];

  const handleThisValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleAppRecord(id, e.target.value);
  };

  useEffect(() => {
    console.log(appValueList[id]);
    if (!thisValue) handleAppRecord(id, options[0]);
  }, [thisValue]);

  return (
    <div className={""}>
      <select
        className={`${className} px-4`}
        name={"dropdown_" + name}
        id={id}
        value={thisValue as string}
        onChange={onChange || handleThisValue}
        disabled={disabled}
      >
        {initValue && <option value={initValue}>{initValue}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
