import Button from "@/components/atom/Button";
import Card from "@/components/atom/Card";
import Checkbox from "@/components/atom/Checkbox";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import DetailArrow from "@/components/atom/DetailArrow";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import ListItem from "@/components/atom/ListItem";
import Subtitle from "@/components/atom/Subtitle";

export default function InfoRcvAgreePage() {
  const linkRightArrow =
    "before:absolute before:right-0 before:top-1/2 before:w-[6px] before:h-[10px] before:mt-[-4.5px] before:bg-[url('/images/arrow_left.png')] before:bg-[100%_auto] before:rotate-180 before:opacity-40";
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          <span className="font-bold text-mypoint">나에게 딱 알맞는 정보</span>
          를 원한다면!
        </ContentTitle>
        <Subtitle className="!pt-2 !text-sm">
          광고정보 수신동의를 하시면 신세계포인트의
          <br />
          다양한 혜택과 소식을 받으실 수 있습니다.
        </Subtitle>
      </ContentHeader>

      <div className="px-5 pb-10">
        <ListHeader border>등록된 연락처 정보를 확인하세요.</ListHeader>
        <ListBody className="space-y-2">
          <dl>
            <dt>휴대폰 번호</dt>
            <dd>
              <Subtitle className="!pt-1">{`010-49**-89**`}</Subtitle>
            </dd>
          </dl>
          <dl>
            <dt>이메일</dt>
            <dd>
              <Subtitle className="!pt-1">{``}</Subtitle>
            </dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>
              <Subtitle className="!pt-1">{`부산 해운대구 양운로, *****`}</Subtitle>
            </dd>
          </dl>
        </ListBody>
      </div>

      <Card className="mx-5" border shadow>
        <p className="text-[13px]">
          <strong className="text-[14px]">
            연락처 정보 변경이 필요하시나요?
          </strong>
          <br />
          회원정보 수정 메뉴에서 변경하실 수 있습니다.
        </p>
        <button className={`relative text-sm mt-5 pr-3 ${linkRightArrow}`}>
          회원정보 수정
        </button>
      </Card>

      <div>
        <ListBody className="space-y-3 pt-10 px-5">
          <li className="flex justify-between ">
            <Checkbox
              className="text-[11px]"
              id={"_chk"}
              name={`[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의`}
            />
            <Button id="termsbtn_1" className="h-[22px]" type="simple">
              <DetailArrow />
            </Button>
          </li>
          <li className="flex justify-between">
            <Checkbox
              className="text-[11px]"
              id={"_chk"}
              name={`
            [선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의`}
            />
            <Button id="termsbtn_1" className="h-[22px]" type="simple">
              <DetailArrow />
            </Button>
          </li>
        </ListBody>
        {/* TODO: 체크박스 확인 */}
        <ListBody className="ml-[31px] mt-5 mb-10 pl-5 border-black border-l w-[300px]">
          <ListHeader className="text-sm">
            신세계포인트 광고정보 수신동의
          </ListHeader>
          <li>
            <Checkbox
              className="text-[11px] mb-1"
              id={"RvcAll_chk"}
              name={`전체동의`}
            />
          </li>
          <ul className="flex justify-start">
            <li className="w-full">
              <Checkbox
                className="text-[11px]"
                id={"RvcEmail_chk"}
                name={`이메일`}
              />
            </li>
            <li className="w-full">
              <Checkbox
                className="text-[11px]"
                id={"RvcSMS_chk"}
                name={`전체`}
              />
            </li>
            <li className="w-full">
              <Checkbox
                className="text-[11px]"
                id={"RvcDM_chk"}
                name={`전체`}
              />
            </li>
            <li className="w-full">
              <Checkbox
                className="text-[11px]"
                id={"RvcTM_chk"}
                name={`전체`}
              />
            </li>
          </ul>
        </ListBody>

        <ListBody className="px-5">
          <ListItem className="text-xs leading-5 text-gray-500 pt-1">
            당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보,
            소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인
            포함), 제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트
            고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다. ※
            서비스 주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이
            발송됩니다.
          </ListItem>
          <Button className="my-10" bgColor="primary">
            확인
          </Button>
        </ListBody>
      </div>

      <div>유의사항...</div>
    </>
  );
}
