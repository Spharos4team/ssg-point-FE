import Button from '@/components/atom/Button';
import ContentHeader from '@/components/atom/ContentHeader';
import ContentTitle from '@/components/atom/ContentTitle';
import Dropdown from '@/components/atom/Dropdown';
import Input from '@/components/atom/Input';
import ListHeader from '@/components/atom/ListHeader';
import Subtitle from '@/components/atom/Subtitle';
import ListBody from '@/components/atom/ListBody';
import ListItem from '@/components/atom/ListItem';

export default function SavePointPage() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          포인트 적립을 깜빡하셨나요? <br />
          <span className="text-benefits font-medium">영수증 정보만 입력해 주세요.</span>
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          이마트, 신세계백화점, 이마트 에브리데이에서
          <br />
          구매하신 영수증 정보로 포인트 적립이 가능합니다.
        </Subtitle>
      </ContentHeader>

      <div className="pb-10 px-5 font-normal">
        <ListHeader className="font-medium">영수증 정보 등록</ListHeader>
        <Dropdown
          className="mb-4 w-full h-12 border rounded-lg"
          id="affili"
          options={[]}
          title={`제휴사`}
        />
        <Dropdown
          className="mb-4 w-full h-12 border rounded-lg"
          id="affili"
          options={[]}
          title={`브랜드`}
        />
        <Dropdown
          className="mb-4 w-full h-12 border rounded-lg text-sm text-gray-600"
          id="affili"
          options={[]}
          title={`매장명`}
          initValue="매장을 선택하세요."
        />
        <Input
          className="mb-4 rounded-lg"
          id="recieptNumber"
          type="text"
          title={'영수증 일련번호'}
        />

        <Button className="mt-4" bgColor="primary">
          등록하기
        </Button>
      </div>

      <ListBody className="px-5 pb-10">
        <ListHeader className="text-sm h-auto leading-7 font-medium bg-[#fbfbfb]">
          [유의사항]
        </ListHeader>
        <ListItem bullet className="text-xs text-[#767676]">
          영수증 적립은 이마트, 신세계백화점, 이마트 에브리데이에서 구매한 영수증만 가능합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          영수증 일련번호는 가맹사별로 상이하며, 자세한 내용은 ⓘ버튼을 클릭하시면 확인하실 수
          있습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          30일 이내 발급된 신세계포인트 미적립 영수증인 경우 등록하실 수 있습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          영수증 적립은 적립 후 취소하실 수 없습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          ID당 1일 최대 10개 영수증 등록이 가능합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          영수증 적립은 등록 후 다음 날 포인트 적립이 완료됩니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          신세계백화점에서 스마일페이 결제수단 중 스마일캐시를 사용하여 결제한 영수증은 포인트
          적립이 불가능합니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          신세계백화점에서 스마일캐시와 다른 결제수단을 복합결제 했을 시 해당 영수증은 포인트 적립이
          불가능합니다.
        </ListItem>
      </ListBody>
    </>
  );
}
