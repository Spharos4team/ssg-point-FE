'use client';
import { useRadioContext } from '../hooks/RadioProvider';

/**
 *
 * @param id 각 RadioCard의 id는 고유한 값으로
 * @param name RadioCardGroup으로 통합하고자 하는 RadioCard의 name은 모두 같아야
 * @returns
 */
const RadioCard2 = ({
  id,
  value,

  radioType,
  theme,
  children,
}: {
  id: string;
  value: string;

  radioType?: 'titleLeft' | 'titleTop' | 'tabList';
  theme?: 'simpleMono' | 'simpleMonoWithCheckMark' | 'BlackActiveBottomLine';
  children: string;
}) => {
  const { selectedValue, handleRadio } = useRadioContext();
  const getStyle = (theme) => {
    switch (theme) {
      case 'simpleMono':
        return {
          wrapper: 'flex-auto relative h-12',
          input: 'block w-full h-full appearance-none',
          label:
            'flex items-center justify-center absolute left-0 top-0 box-border w-full p-3 z-[2] text-black text-center text-[14px] leading-6 rounded-lg bg-[#f5f5f5]',
          checked: 'bg-black text-white',
        };
      case 'BlackActiveBottomLine':
        return {
          wrapper: 'flex-auto relative h-12',
          input: 'block w-full h-full appearance-none',
          label:
            'flex items-center justify-center absolute left-0 top-0 box-border w-full p-3 z-[2] text-[#767676] text-center text-[14px] leading-6 bg-white',
          checked:
            "font-bold text-primary-active after:content-[''] after:block after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-primary-active",
        };
      default:
        return {};
    }
  };
  const style = getStyle(theme);

  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        type="radio"
        name={id + 'Radio'}
        id={id}
        value={value}
        checked={selectedValue === value}
        onChange={() => handleRadio(value)}
      />
      <label
        className={selectedValue === value ? style.checked + ' ' + style.label : style.label}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default RadioCard2;
