import { PageProps } from '@/types/PageProps';
import Image from 'next/image';
import Link from 'next/link';
import { useValueContext } from '../hooks/ValueProvider';

const MenuButton = ({ aPage }: { aPage: PageProps }) => {
  const { handleValue } = useValueContext();

  return (
    <li key={aPage.id} className="flex-grow h-5 text-[13px] leading-[18px]">
      <Link
        className="flex gap-1 items-center h-5 text-[13px] leading-[18px]"
        href={aPage.href}
        onClick={handleValue}
      >
        <Image src={aPage.simple_icon} width={20} height={20} alt={aPage.name} />
        {aPage.name}
      </Link>
    </li>
  );
};

export default MenuButton;
