import ContentStrong from '../atoms/ContentStrong';
import ListForNoticeBox from '../atoms/ListForNoticeBox';
import Button from '../atoms/Button/Button';

const ClubContentBiz = () => {
  return (
    <>
      <ContentStrong>비즈 클럽</ContentStrong>

      <ul className="pt-[16px] pb-6 px-6">
        <ListForNoticeBox level={2}>
          개인 사업자 고객님들을 위한 편리한 세금계산서 발행 서비스입니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          비즈 클럽 가입 시 등록하신 이메일 주소로 세금계산서가 발송되며, 약 1~2주 정도 소요됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>
          세금계산서 발행 거래의 포인트 적립 건은 개인 포인트 적립내역에 합산됩니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2}>혜택은 이마트 매장에서만 적용됩니다.</ListForNoticeBox>
      </ul>

      <Button className="h-12" backgroundColor="primary">
        비즈 클럽 바로가기
      </Button>
    </>
  );
};

export default ClubContentBiz;
