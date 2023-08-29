"use client";
import { createContext, useContext, useEffect, useState } from "react";

const RadioContext = createContext({
  selectedValue: "",
  handleRadio: (value: string) => {},
});

export const RadioProvider = ({
  defaultValue,
  children,
}: {
  defaultValue?: string;
  children: React.ReactNode;
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue as string
  );

  const handleRadio = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <RadioContext.Provider value={{ selectedValue, handleRadio }}>
      {children}
    </RadioContext.Provider>
  );
};

//custom hook
export const useRadioContext = () => {
  return useContext(RadioContext);
};
