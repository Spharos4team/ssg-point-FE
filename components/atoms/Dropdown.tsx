'use client';
import { Category } from '@/types/CategoryProps';
import DropdownCategory from './DropdownCategory';
import DropdownBasic from './DropdownBasic';
import DropdwonContext from './DropdwonContext';
import DropdownModal from './DropdownModal';

const Dropdown = ({
  className,
  id,
  type = 'basic',
  mainTitle,
  subTitle,
  theme = 'round',
  options, //json?
  disabled = false,
  onClick,
}: {
  className?: string;
  id: string;
  type?: 'basic' | 'category' | 'form' | 'modal';
  mainTitle?: string;
  subTitle?: string;
  theme?: 'mini' | 'mini_inline' | 'round' | 'fullWidth';
  options: Category[] | string[];
  disabled?: boolean;
  onClick?: () => {};
}) => {
  const style =
    theme === 'mini'
      ? {
          wrapper: `relative inline-block align-top w-full ${disabled ? 'bg-[#e4e4e4]' : ''}`,
          select: 'relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border',
        }
      : theme === 'round'
      ? {
          wrapper: `relative inline-block align-top w-full rounded-lg ${
            disabled ? 'bg-[#e4e4e4]' : ''
          }`,
          select:
            'relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border rounded-lg',
        }
      : theme === 'fullWidth'
      ? {
          wrapper: '',
        }
      : theme === 'mini_inline'
      ? {
          wrapper: `relative inline-block align-top w-full mr-[5px] rounded-md ${
            disabled ? 'bg-[#e4e4e4]' : ''
          }`,
          select:
            'relative block w-full h-[30px] pr-[32px] pl-[6px] text-sm box-border z-[1] border rounded-md',
        }
      : {};

  switch (type) {
    case 'basic': {
      if (
        !(Array.isArray(options) && Object(options).every((item: any) => typeof item === 'string'))
      ) {
        new Error("type 속성이 'basic'으로 설정되어 있습니다. 'options'가 string[] 이 아닙니다.");
      }
      return (
        <DropdownBasic
          id={id}
          mainTitle={mainTitle as string}
          wrapper={style.wrapper as string}
          select={style.select as string}
          options={options as string[]}
          disabled={disabled}
        />
      );
    }
    case 'category': {
      if (
        !(
          Array.isArray(options) &&
          Object(options).every(
            (item: any) =>
              typeof item === 'object' &&
              'id' in item &&
              'parent_id' in item &&
              'slug' in item &&
              'name' in item,
          )
        )
      ) {
        throw new Error(
          "type 속성이 'category'로 설정되어 있습니다. 'options'가 Category[] 이 아닙니다.",
        );
      }
      return (
        <DropdownCategory
          id={id}
          mainTitle={mainTitle as string}
          subTitle={subTitle}
          wrapper={style.wrapper as string}
          select={style.select as string}
          options={options as Category[]}
          disabled={disabled}
        />
      );
    }
    case 'form': {
      if (
        !(Array.isArray(options) && Object(options).every((item: any) => typeof item === 'string'))
      ) {
        new Error("type 속성이 'form'으로 설정되어 있습니다. 'options'가 string[] 이 아닙니다.");
      }
      return (
        <DropdwonContext
          id={id}
          mainTitle={mainTitle as string}
          wrapper={style.wrapper as string}
          select={style.select as string}
          options={options as string[]}
          disabled={disabled}
        />
      );
    }

    case 'modal': {
      if (options) {
        new Error("type 속성이 'modal'로 설정되어 있습니다. 'onClick'이 필요합니다.");
      }
      return (
        <DropdownModal
          id={id}
          mainTitle={mainTitle as string}
          wrapper={style.wrapper as string}
          select={style.select as string}
          onClick={onClick}
          disabled={disabled}
        />
      );
    }
  }
};
export default Dropdown;
