import Image from 'next/image';
import Link from 'next/link';
import { useValueContext } from '../hooks/ValueProvider';
import { useEffect, useState } from 'react';

const HeaderStatusBox = () => {
  const { value, valueList, handleValue, handleValueList } = useValueContext();
  const [isLogined, setIsLogined] = useState<boolean>();

  const handleShow = () => {
    //sidbar
    handleValue(!value);
    document.body.style.overflow = 'hidden';
  };

  const getUserData = async () => {
    try {
      const res = await fetch(`http://localhost:3030/users/${localStorage.getItem('userId')}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      // if (data.status === 200) {
      if (data) {
        console.log(data);
        localStorage.setItem('token', data.accessToken);
        setIsLogined(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(localStorage.getItem('userId'));
    getUserData();
  }, []);

  return (
    <>
      {isLogined ? (
        <button
          className="flex items-center"
          onClick={() => handleValueList('barcodeBox', !valueList['barcodeBox'])}
        >
          <Image className="mr-1" src={'/images/barcode_mini.png'} width={27} height={15} alt="" />
          <strong className="font-medium text-sm leading-6 mt-[-2px]">12</strong>
          <span className="ml-1 indent-[-99em] overflow-hidden  w-6 h-6 bg-[url('/images/my-point.png')] bg-[100%_auto] bg-no-repeat">
            P
          </span>
        </button>
      ) : (
        <Link
          className="flex items-center text-[14px] leading-[21px] whitespace-nowrap"
          href={'/login'}
        >
          로그인
        </Link>
      )}

      {/* LinkImageWithFallback 사용하지 않음(toggle 필요) */}
      <button className="absolute right-[2px] top-[2px] w-[56px] h-[52px]" onClick={handleShow}>
        <Image
          className="absolute left-[35%] top-[35%] mt-[-1px]"
          src="/images/align-justify.png"
          height={20}
          width={20}
          alt="전체메뉴"
          quality={100}
          sizes="(max-width: 22px)"
        />
      </button>
    </>
  );
};

export default HeaderStatusBox;
