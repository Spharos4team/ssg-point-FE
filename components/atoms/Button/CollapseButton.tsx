'use client';
import { useState } from 'react';

/**
 *
 * @param
 * @returns
 */
const CollapseButton = ({
  children,
  buttonName,
}: {
  children: React.ReactNode;
  buttonName: string;
}) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="relative min-h-[48px] mx-5 border-b border-black">
      <div className={`w-full px-4 pt-[26px] pb-[52px] ${!collapse ? 'hidden' : ''}`}>
        {children}
      </div>
      <button
        className={`absolute left-1/2 bottom-3 block translate-x-[-50%] text-[#000] font-medium
          ${
            !collapse ? '' : 'after:rotate-180'
          } after:content-[''] after:bg-[url('/images/arrow_down.png')] after:bg-[length:10px_auto] after:bg-no-repeat after:inline-block after:align-top after:w-[10px] after:h-[7px] after:mt-[10px] after:ml-[10px]`}
        onClick={handleCollapse}
      >
        {buttonName}
        {!collapse ? ' 열기' : ' 닫기'}
      </button>
    </div>
  );
};

export default CollapseButton;
