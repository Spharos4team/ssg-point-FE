"use client";
import { createContext, useContext, useState } from "react";

const ValueContext = createContext({
  selectedValue: false,
  handleValue: () => {},
});

export const ValueProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedValue, setSelectedValue] = useState<boolean>(false);

  const handleValue = () => {
    console.log(selectedValue);
    setSelectedValue(!selectedValue);
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
