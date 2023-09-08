'use client';
import { createContext, useContext, useRef, useState } from 'react';

const ValueContext = createContext({
  value: false,
  valueList: {} as Record<string, boolean | string>,
  handleValue: (value: boolean) => {},
  handleValueList: (id: string, value: boolean | string) => {},
});

export const ValueProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<boolean>(false);
  const [valueList, setValueList] = useState<Record<string, boolean | string>>({});

  const handleValue = (value: boolean) => {
    setValue(value);
  };
  const handleValueList = (id: string, value: boolean | string) => {
    setValueList((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <ValueContext.Provider value={{ value, handleValue, valueList, handleValueList }}>
      {children}
      {/* {selectedValue} */}
    </ValueContext.Provider>
  );
};

//custom hook
export const useValueContext = () => {
  return useContext(ValueContext);
};
