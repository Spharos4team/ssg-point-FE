"use client";
import { createContext, useContext, useState } from "react";

const RadioContext = createContext({
  selectedValue: "",
  handleRadio: (value: string) => {},
});

export const RadioProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

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
