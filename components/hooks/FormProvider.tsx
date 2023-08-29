"use client";
import { createContext, useContext, useState } from "react";

const FormContext = createContext({
  valueList: {} as Record<string, string | boolean>,
  handleValueList: (id: string, value: string | boolean) => {},
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [valueList, setValueList] = useState<Record<string, string | boolean>>(
    {}
  );

  const handleValueList = (id: string, value: string | boolean) => {
    setValueList((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <FormContext.Provider value={{ valueList, handleValueList }}>
      {children}
    </FormContext.Provider>
  );
};

//custom hook
export const useFormContext = () => {
  return useContext(FormContext);
};
