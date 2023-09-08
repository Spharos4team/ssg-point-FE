import DefListSimple from '@/components/atoms/DefListSimple';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import Tab from '@/components/atoms/Tab';
import TabContent from '@/components/atoms/TabContent';
import { FormProvider } from '@/components/hooks/FormProvider';
import { RadioProvider } from '@/components/hooks/RadioProvider';
import NoticeBox from '@/components/modules/NoticeBox';
import AffiliForm from '@/components/organisms/AffiliForm';
import LinkImageWithFallback from '@/components/ui/LinkImageWithFallback';
import { ImageProp } from '@/types/LinkProps';

export default function regAffiliatePntCard() {
  const image: ImageProp = {
    _src: '',
    type: 'image',
    size: { h: 32, w: 112 },
  };

  return (
    <>
      <div>
        <RadioProvider defaultValue="samsung">
          {/* Tabs */}
          <div className="flex border border-t">
            <Tab className="h-[60px]" type="context" id="samsung" name="삼성전자<br/>멤버십" />
            <Tab className="h-[60px]" type="context" id="koreanAir" name="대한항공" />
            <Tab className="h-[60px]" type="context" id="asianaAir" name="아시아나항공" />
            <Tab className="h-[60px]" type="context" id="asianaAir2" name="아시아나항공2" />
          </div>

          {/* Tab Content */}
          <TabContent id="samsung" name="삼성전자 멤버십">
            <p className="pb-4">
              <LinkImageWithFallback _href="" image={image} name="test" />
            </p>
            <DefListSimple
              dt="적용상품"
              dd={'삼성전자가 공급한 제품<br />(이마트 내 삼성전자 매장)'}
            />
            <DefListSimple dt="적립" dd={'구매 금액의 0.2% 신세계포인트와 동시적립'} />
          </TabContent>

          <TabContent id="koreanAir" name="대한항공">
            <p className="pb-4">
              <LinkImageWithFallback _href="" image={image} name="test" />
            </p>
            <DefListSimple
              dt="적립"
              dd={
                "최종 7만원 이상 결제 시 3,000원당<br/>1마일 신세계포인트와 동시 적립<p class='text-[11px] text-[#666]'>※ 항공사 마일리지간 선택 적립/월 1,000마일 한도</p>"
              }
            />
          </TabContent>

          <TabContent id="asianaAir" name="아시아나항공">
            <p className="pb-4">
              <LinkImageWithFallback _href="" image={image} name="test" />
            </p>
            <DefListSimple
              dt="적립"
              dd={
                "최종 7만원 이상 결제 시 3,000원당<br/>1마일 신세계포인트와 동시 적립<p class='text-[11px] text-[#666]'>※ 항공사 마일리지간 선택 적립/월 1,000마일 한도</p>"
              }
            />
          </TabContent>
        </RadioProvider>

        <FormProvider>
          <AffiliForm />
        </FormProvider>

        {/* TODO: NoticeBox theme 설정 */}
        <NoticeBox type="info" className="mx-5 mt-[32px] mb-[80px]" title="유의사항">
          <ListForNoticeBox level={2}>
            제휴 멤버십 동시 적립 서비스는 이마트에서만 제공되는 서비스입니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            해당 제휴사에서 승인된 멤버십 카드 번호만 등록하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            제휴사당 최대 1개의 카드만 등록하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            잘못된 제휴 멤버십 카드번호 등록 시 제휴 포인트는 적립되지 않으며 잘못된 정보 등록에
            대한 책임은 등록한 회원에게 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            제휴 멤버십의 상태가 정상일 경우에만 포인트가 적립됩니다. (휴면/탈퇴 시 적립불가)
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            이미 등록된 제휴 멤버십 카드는 다른 ID로 중복 등록할 수 없습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            동시 적립 서비스만 제공되며, 제휴 포인트 사용을 원할 경우에는 해당 제휴사 카드를
            제시해야 합니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2}>
            제휴 종료 시 사전 공지드리며, 기존에 등록된 제휴 멤버십 카드번호는 종료일 기준으로 일괄
            삭제됩니다.
          </ListForNoticeBox>
        </NoticeBox>
      </div>
    </>
  );
}
