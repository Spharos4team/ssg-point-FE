import Button from '@/components/atoms/Button/Button';
import ContentHeader from '@/components/atoms/ContentHeader';
import RoundCard from '@/components/modules/RoundCard';

export default function FindIdResultPage() {
  return (
    <>
      <ContentHeader
        main={
          <>
            이미 <strong className="font-bold">신세계포인트 회원</strong>
            이시군요!
          </>
        }
        sub="본인인증 수단을 선택해주세요."
      />

      <div className="px-5 pb-[60px]">
        <div className="pt-6 pb-10 border-t border-black">
          <dl className="flex gap-2 items-center">
            <dt>아이디</dt>
            <dd className="font-medium">creativehorn</dd>
          </dl>
        </div>
        <Button backgroundColor="primary" className="h-12">
          로그인
        </Button>
      </div>

      <RoundCard
        className="mx-5 mb-20 rounded-[8px]"
        title={<strong className="text-black text-[14px]">비밀번호가 생각나지 않으세요?</strong>}
        subtitle="본인인증 후 비밀번호를 변경하실 수 있습니다."
        link="/member/findPw"
        linkName="비밀번호 찾기"
      />
    </>
  );
}
