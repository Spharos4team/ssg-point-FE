'use client';
import { useEffect, useState } from 'react';
import { useValueContext } from '../hooks/ValueProvider';

const CheckboxBasicMulti = ({
  className,
  id,
  name,
  checkedStyle,
  children,
}: {
  className?: string;
  id: string;
  name: string;
  checkedStyle: string;
  children: React.ReactNode;
}) => {
  const [thisValue, setThisValue] = useState(false);
  const { value, valueList, handleValue, handleValueList } = useValueContext();

  const handleCheckValue = () => {
    const currValue = !thisValue;
    handleValueList(id, currValue);
  };
  useEffect(() => {
    if (!children) {
      setThisValue(valueList[id]);
    }
  }, [id, valueList]);

  const handleAllCheck = () => {
    const currValue = !value;
    handleValue(currValue);
  };
  // valueList 값에 따른 전체(value) 값 변경
  useEffect(() => {
    const isAllChildrenChecked = () => {
      return Object.values(valueList).every((value) => value === true);
    };
    handleValue(isAllChildrenChecked());
    console.log(valueList);
  }, [thisValue]);

  useEffect(() => {
    if (!children) {
      if (value == true) {
        handleValueList(id, value);
      }
    }
    console.log(valueList);
  }, [value]);

  return (
    <>
      <div className={`${className} relative inline-block text-[10px]`}>
        <input
          type="checkbox"
          id={id}
          className="absolute left-0 top-0 w-6 h-6 rounded-xl border-0 appearance-none"
          checked={children ? value : thisValue}
          onChange={children ? handleAllCheck : handleCheckValue}
        />
        <label
          htmlFor={id}
          className={`block min-h-[22px] pt-[1px] pl-[30px] leading-[18px] align-middle whitespace-nowrap break-keep before:content-[''] before:absolute before:left-0 before:top:0 before:w-[22px] before:h-[22px] before:border before:border-[#505050] before:rounded-[50%] before:z-[2] ${
            children ? (value ? checkedStyle : '') : thisValue ? checkedStyle : ''
          }`}
        >
          <span
            className={`table-cell align-middle break-keep`}
            dangerouslySetInnerHTML={{ __html: name }}
          />
        </label>
      </div>
      {children}
    </>
  );
};

export default CheckboxBasicMulti;
