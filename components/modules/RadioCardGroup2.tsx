'use client';

import React, { useEffect } from 'react';
import { useRadioContext } from '../hooks/RadioProvider';

const RadioCardGroup2 = ({
  title,
  radioType,
  defaultValue = false,
  theme = 'simpleMono',
  children,
}: {
  title?: string;
  radioType?: 'titleLeft' | 'titleTop' | 'tabList';
  defaultValue?: boolean | string;
  theme?: 'simpleMono' | 'simpleMonoWithCheckMark' | 'BlackActiveBottomLine';
  children: React.ReactNode;
}) => {
  //TODO: 아래 useEffect는 사용자가 직접 하위 컴포넌트의 value를 입력하지 않았거나, 처음 (빈)페이지가 로드될 때만 실행되어야 한다.
  const { handleRadio } = useRadioContext();
  useEffect(() => {
    if (defaultValue !== undefined) {
      handleRadio(defaultValue as string);
    }
  }, []);

  return (
    <div className="flex gap-1.5 flex-wrap pb-4 text-center w-full">
      {title &&
        (radioType === 'titleTop' ? (
          <p className="flex-1 min-w-full leading-[21px] font-medium text-[13px] text-left">
            {title}
          </p>
        ) : radioType === 'titleLeft' ? (
          <p className="w-[60px] leading-[21px] font-medium text-[13px] text-left">{title}</p>
        ) : null)}
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          radioType: radioType,
          theme: theme,
        }),
      )}
    </div>
  );
};

export default RadioCardGroup2;
