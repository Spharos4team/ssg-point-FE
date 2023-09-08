import Button from '@/components/atoms/Button/Button';
import RoundedButton from '@/components/atoms/Button/RoundedButton';
import Dropdown from '@/components/atoms/Dropdown';
import { InputText } from '@/components/atoms/InputText';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import Modal from '@/components/atoms/Modal';
import TextBox from '@/components/atoms/TextBox';
import NoticeBox from '@/components/modules/NoticeBox';

export default function savePoint({}) {
  const affilis: string[] = ['이마트', '신세계백화점', '이마트 에브리데이'];
  const brands: string[] = [
    '이마트',
    'PK마켓',
    '트레이더스',
    '노브랜드',
    '데이즈',
    '라이프컨테이너',
    '마몰로',
    '메종티시아',
    '몰리스',
    '베이비서클',
    '삐에로쑈핑',
    '센텐스',
    '쇼앤텔',
    '스톤브릭',
    '일렉트로마트',
    '토이킹덤',
    '토이킹덤플레이',
    '피코크',
    '하우디',
  ];

  return (
    <>
      <div className="box-border px-5 pb-10">
        <h3 className="mb-4">영수증 정보 등록</h3>
        <div className="pb-4 box-border">
          <p className="pb-2 text-xs">제휴사</p>
          <Dropdown id="affilis" options={affilis} />
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-xs">브랜드</p>
          <Dropdown id="brands" options={brands} />
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-xs">매장명</p>
          <Dropdown type="modal" id="affilis" mainTitle="매장을 선택하세요" />
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-xs">
            영수증 일련번호
            <button className="ml-1 indent-[-999em] content-[''] w-[15px] h-[15px] bg-[url('/images/icon_info_line.png')] bg-no-repeat bg-[100%_auto]">
              정보보기
            </button>
          </p>
          <InputText className="rounded-lg" id="reciep" inputType="text" placeholder="" title="" />
        </div>

        <Button className="h-12" backgroundColor="primary">
          등록하기
        </Button>
      </div>

      <NoticeBox type="info" className="mt-[32px]" title="유의사항">
        <ListForNoticeBox level={2}>
          영수증 적립은 이마트, 신세계백화점, 이마트 에브리데이에서 구매한 영수증만 가능합니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          영수증 일련번호는 가맹사별로 상이하며, 자세한 내용은 ⓘ버튼을 클릭하시면 확인하실 수
          있습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          30일 이내 발급된 신세계포인트 미적립 영수증인 경우 등록하실 수 있습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>영수증 적립은 적립 후 취소하실 수 없습니다.</ListForNoticeBox>
        <ListForNoticeBox level={2}>ID당 1일 최대 10개 영수증 등록이 가능합니다.</ListForNoticeBox>
        <ListForNoticeBox level={2}>
          영수증 적립은 등록 후 다음 날 포인트 적립이 완료됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          신세계백화점에서 스마일페이 결제수단 중 스마일캐시를 사용하여 결제한 영수증은 포인트
          적립이 불가능합니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          신세계백화점에서 스마일캐시와 다른 결제수단을 복합결제 했을 시 해당 영수증은 포인트 적립이
          불가능합니다.
        </ListForNoticeBox>
      </NoticeBox>
      {/* <Modal modal={modal} title="점포선택" center></Modal> */}
    </>
  );
}
