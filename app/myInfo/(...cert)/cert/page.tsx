import ListBody from '@/components/atom/ListBody';
import ListHeader from '@/components/atom/ListHeader';
import ListItem from '@/components/atom/ListItem';

export default function CertPage() {
  return (
    <>
      <ListBody className="px-5 pb-20">
        <ListHeader className="text-sm h-auto leading-7 font-medium bg-[#fbfbfb]">
          [유의사항]
        </ListHeader>
        <ListItem bullet className="text-xs text-[#767676]">
          본인 명의의 인증 수단 정보를 정확히 입력해 주세요.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          법인명의 휴대전화(법인폰)는 통신사에서 본인인증 서비스 신청 후 휴대폰 인증을 하실 수
          있습니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          개명하신 회원님의 경우 통신사 등에 등록된 본인인증 정보가 개명하신 이름으로 바뀐 이후부터
          자동으로 변경됩니다.
        </ListItem>
        <ListItem bullet className="text-xs text-[#767676]">
          인증 오류 시 코리아크레딧뷰로 고객센터 02-708-1000에 문의해 주세요.
        </ListItem>
      </ListBody>
    </>
  );
}
