import { Category } from '@/types/CategoryProps';
import { useState } from 'react';

const DropdownCategory = ({
  id,
  mainTitle,
  subTitle,
  wrapper,
  select,
  options,
  disabled,
}: {
  id: string;
  mainTitle: string;
  subTitle?: string;
  wrapper: string;
  select: string;
  options: Category[];
  disabled: boolean;
}) => {
  const MainCategory = options.filter((item) => item.parent_id === '');
  const getSubCategory = (parentId: string) => {
    return options?.filter((item) => item.parent_id === parentId);
  };

  const [parent, setParent] = useState('');
  const [child, setChild] = useState('');

  const handleParent = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParent(e.target.value);
    setChild('');
  };
  const handleChild = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChild(e.target.value);
  };

  return (
    <>
      {/* MainCategory */}
      {MainCategory && (
        <div className={wrapper}>
          <select
            className={select}
            id={id}
            name={'main_' + mainTitle}
            value={parent}
            onChange={handleParent}
            disabled={disabled}
          >
            <option value={mainTitle}>{mainTitle}</option>
            {MainCategory?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* SubCategory */}
      {options.every((item) => item.parent_id === '') || (
        <div className={wrapper}>
          <select
            className={select}
            id={id}
            name={'sub_' + subTitle}
            value={child}
            onChange={handleChild}
            disabled={disabled}
          >
            <option value={subTitle}>{subTitle}</option>
            {getSubCategory(parent)?.map((subItem: Category) => (
              <option key={subItem.id} value={subItem.id}>
                {subItem.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default DropdownCategory;
