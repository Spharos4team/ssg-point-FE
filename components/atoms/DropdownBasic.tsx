import { useState } from "react";

const DropdownBasic = ({
  id,
  mainTitle,
  wrapper,
  select,
  options,
  disabled,
}: {
  id: string;
  mainTitle?: string;
  wrapper: string;
  select: string;
  options: string[];
  disabled: boolean;
}) => {
  const [thisValue, setThisValue] = useState("");
  const handleThisValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThisValue(e.target.value);
  };
  return (
    <>
      {options && (
        <div className={wrapper}>
          <select
            className={select}
            id={id}
            name={"main_" + mainTitle}
            value={thisValue}
            onChange={handleThisValue}
            disabled={disabled}
          >
            {mainTitle && <option value={mainTitle}>{mainTitle}</option>}
            {options?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default DropdownBasic;
