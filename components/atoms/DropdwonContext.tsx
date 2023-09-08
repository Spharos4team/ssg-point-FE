import { useState } from 'react';
import { useFormContext } from '../hooks/FormProvider';

const DropdwonContext = ({
  id,
  mainTitle,
  wrapper,
  select,
  options,
  disabled,
}: {
  id: string;
  mainTitle: string;
  wrapper: string;
  select: string;
  options: string[];
  disabled: boolean;
}) => {
  const { valueList, handleValueList } = useFormContext();
  const handleThisValue = () => {
    handleValueList(id, valueList[id]);
  };

  return (
    <>
      {options && (
        <div className={wrapper}>
          <select
            className={select}
            id={id}
            name={'main_' + mainTitle}
            value={valueList[id] as string}
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

export default DropdwonContext;
