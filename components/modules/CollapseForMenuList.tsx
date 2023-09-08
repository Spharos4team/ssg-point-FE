import { PageProps } from '@/types/PageProps';
import { useEffect, useState } from 'react';
import MenuButton from '../atoms/MenuButton';

const CollapseForMenuList = ({
  parent,
  parentChildMap,
}: {
  parent: PageProps;
  parentChildMap: Record<string | number, PageProps[]>;
}) => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  useEffect(() => {
    if (parent.id === 5) {
      setMenuCollapse(true);
    }
  }, []);

  return (
    <div key={parent.id} className="border-b">
      <button
        className="relative block w-full h-12 text-left text-sm leading-[24px]"
        onClick={() => setMenuCollapse(!menuCollapse)}
      >
        {parent.name}
        <span
          className={`absolute right-0 top-5 w-3 h-2 -indent-[999em] bg-[url('/images/arrow_up_down.png')] bg-[100%_auto] bg-[center_top_1px] bg- opacity-50`}
        >
          <em>메뉴닫기</em>
        </span>
      </button>
      <div className={`${menuCollapse ? '' : 'hidden'}`}>
        {/* hidden */}
        <ul className="grid grid-cols-2 gap-y-5 pb-[34px]">
          {parentChildMap[parent.id]
            .filter((child) => child.parent_id === parent.id)
            .map((child) => (
              <MenuButton key={child.id} aPage={child} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CollapseForMenuList;
