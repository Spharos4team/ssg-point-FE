"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { useEffect } from "react";

export default function Tab({
  className,
  id,
  label,
  activeColor = "black",
  initValue = false,
  children,
  disabled = false,
}: {
  className?: string;
  id: string;
  label: string;
  activeColor?: "black" | "primary" | "spoint";
  initValue?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();

  const handleTab = () => {
    handleAppRecord(id, label);
  };

  useEffect(() => {
    if (initValue) {
      handleAppRecord(id, label);
    }
  }, []);

  const selected =
    activeColor == "primary"
      ? "!bg-gradient-primary-line"
      : activeColor == "black"
      ? "!bg-black text-white"
      : activeColor == "spoint"
      ? "bg-[#fff4eb] border-b border-spoint"
      : "";

  return (
    <li
      className={`${className} flex flex-col flex-1 justify-center items-center text-[13px] text-center rounded-lg ${
        appValueList[id] == label ? selected : "off"
      }`}
    >
      <button
        className={`w-full h-full`}
        onClick={handleTab}
        disabled={disabled}
      >
        {children}
      </button>
    </li>
  );
}
