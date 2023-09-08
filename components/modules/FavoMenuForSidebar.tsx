import { PageProps } from '@/types/PageProps';
import Image from 'next/image';
import Link from 'next/link';

const FavoMenuForSidebar = ({ favoPage }: { favoPage: PageProps }) => {
  return (
    <p className="items-center h-[80px] w-1/3">
      <Link className="relative block w-full text-[11px] text-center pt-10" href={favoPage.href}>
        <Image
          className="absolute top-0 left-1/2 ml-[-20px]"
          height={40}
          width={40}
          src={favoPage.primary_icon}
          alt="포인트내역"
        />
        {favoPage.name}
      </Link>
    </p>
  );
};

export default FavoMenuForSidebar;
