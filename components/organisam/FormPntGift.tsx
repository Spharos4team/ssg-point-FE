'use client';
import { useAppContext } from '@/provider/AppContextProvider';
import Button from '../atom/Button';
import Input from '../atom/Input';
import Modal from '../atom/Modal';
import ContentTitle from '../atom/ContentTitle';
import Subtitle from '../atom/Subtitle';
import ListHeader from '@/components/atom/ListHeader';
import ListItem from '@/components/atom/ListItem';
import ListBody from '@/components/atom/ListBody';
import Link from 'next/link';

export default function FormPntGift() {
  const { appValueList, handleAppRecord } = useAppContext();
  const handleAddressBook = () => {
    handleAppRecord('AddressBook', true);
  };
  const handleSearch = () => {
    handleAppRecord('Search', true);
  };
  const handleSearchF = () => {
    handleAppRecord('Search', false);
  };
  return (
    <>
      <div className="px-5">
        <div className="flex gap-x-2 pb-2">
          <Input className="rounded-lg" id="addressBook" type="phone">
            - 없이 휴대폰 번호를 입력해주세요.
          </Input>
          <div>
            {/* TODO: 선물하기 api 확인 후 기능 추가 */}
            <Button className="w-1/4 min-w-[110px]" onClick={handleAddressBook}>
              주소록
            </Button>
          </div>
        </div>
        <Input className="rounded-lg" id="tagetUser">
          실명을 정확하게 입력해주세요.
        </Input>
      </div>

      <div className="px-5 py-10">
        <Button bgColor="black" onClick={handleSearch}>
          조회하기
        </Button>
      </div>

      <Modal id="AddressBook" center>
        <ContentTitle>현재 선물하기를 위한 주소록 기능을 사용할 수 없습니다.</ContentTitle>
        <Subtitle>모바일에서 이용해 주세요.</Subtitle>
      </Modal>

      <Modal id="Search" center>
        <ContentTitle className="!text-sm text-center font-medium py-5">
          선물하려는 분이 맞는지 확인해 주세요.
        </ContentTitle>
        <div className="text-xs border-x-0 border-t-black border-[2px] border-t-solid px-2 py-3 text-[#767676] font-medium">
          <ul className="flex w-full">
            <li className="py-2 w-1/5">이름</li>
            <li className="py-2 text-black font-medium ">조*일</li>
          </ul>
          <ul className="flex w-full">
            <li className="py-2 w-1/5">아이디</li>
            <li className="py-2 text-black font-medium">cr**********</li>
          </ul>
        </div>
        <div className="flex border-none pt-5">
          <Button onClick={handleSearchF} className="mr-1 h-12 font-normal text-gray-500">
            아니요
          </Button>
          {/*선물하고 리다이렉션 어딘지는 모름 임시로 선물하기 메인*/}
          <Link className="w-full" href={'/myPoint/pntGiftMain'}>
            <Button className="h-12 font-normal" bgColor={'black'}>
              네
            </Button>
          </Link>
        </div>
      </Modal>

      <ListBody className="px-5 pb-10">
        <ListHeader className="text-sm leading-7 font-medium bg-[#fbfbfb]" border>
          유의사항
        </ListHeader>
        <ListItem bullet className="text-xs text-[#eb0000]">
          신세계포인트 본인인증을 완료한 회원에게만 선물하기가 가능합니다. (본인 인증을 하지않은
          회원, 휴먼회원, 법인회원은 불가합니다.)
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          주소록 서비스는 모바일앱에서만 사용하실 수 있어요.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          ID당 1회 최대 10만 포인트, 연간 200만 포인트까지 선물하실 수 있어요.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          포인트를 선물하시면 즉시 포인트가 차감되며 받으시는 분이 거정하거나 15일 이내에 수락하지
          않을 경우 차감된 포인트를 자동으로 반환됩니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          포인트 선물하기 시 포인트 비밀번호(숫자 4자리) 입력이 필요합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          포인트 선물하기 완료 후 선물을 취소할 수 없어요.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          포인트 선물하기 완료 후 선물을 취소할 수 없어요.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          신세계포인트 앱이 설치되어 있어야 선물을 수락할 수 있어요.
        </ListItem>
      </ListBody>
    </>
  );
}
