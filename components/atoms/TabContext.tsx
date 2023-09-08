'use client';
import { useRadioContext } from '../hooks/RadioProvider';

const TabContext = ({
  className,
  id,
  name,
  children,
  color = 'red',
}: {
  className?: string;
  id: string;
  name?: string;
  children?: React.ReactNode;
  color?: 'red' | 'brown';
}) => {
  const red = 'bg-[#fff3f8] text-[#d9044b] font-medium !border-[#d9044b]';
  const brown = 'bg-[#fff4eb] !border-[#a16c0c]';
  const active = color === 'red' ? red : brown;

  const { selectedValue, handleRadio } = useRadioContext();
  const handleThisValue = () => {
    handleRadio(id);
  };

  return (
    <li className="flex-1 table relative align-middle">
      <button
        className={`${className} ${
          selectedValue == id ? active : ''
        } block w-full h-11 border-b border-[#fbfbfb] box-border text-sm text-center`}
        onClick={handleThisValue}
        dangerouslySetInnerHTML={{ __html: name }}
      >
        {children}
      </button>
    </li>
  );
};

export default TabContext;
