import { useState } from 'react';

const DropdownModal = ({
  id,
  mainTitle,
  wrapper,
  select,
  disabled,
  onClick,
}: {
  id: string;
  mainTitle?: string;
  wrapper: string;
  select: string;
  disabled: boolean;
  onClick?: () => {};
}) => {
  const [thisValue, setThisValue] = useState('');
  const handleThisValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThisValue(e.target.value);
  };
  return (
    <>
      <div className={wrapper}>
        <select
          className={select}
          id={id}
          name={'main_' + mainTitle}
          value={thisValue}
          onClick={onClick}
          disabled={disabled}
        >
          {mainTitle && <option value={mainTitle}>{mainTitle}</option>}
        </select>
      </div>
    </>
  );
};

export default DropdownModal;
