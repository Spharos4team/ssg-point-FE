"use client";
import { createContext, useContext, useState } from "react";

const ValueContext = createContext({
  selectedValue: "",
  handleValue: (value: string) => {},
});

export const ValueProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleValue = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <ValueContext.Provider value={{ selectedValue, handleValue }}>
      {children}
      {/* {selectedValue} */}
    </ValueContext.Provider>
  );
};

//custom hook
export const useValueContext = () => {
  return useContext(ValueContext);
};
