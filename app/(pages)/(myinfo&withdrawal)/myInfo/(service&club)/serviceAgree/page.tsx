import ContentStrong from "@/app/components/atoms/ContentStrong";
import ToggleCard from "@/app/components/modules/ToggleCard";

export default function serviceAgree() {
  return (
    <div>
      <h3 className="hidden">서비스 동의</h3>
      <div className="pb-10">
        <ContentStrong>신세계포인트 제휴사간 통합 서비스</ContentStrong>
        <ToggleCard
          title="[선택] 신세계포인트 ↔ SSG.COM 옴니서비스를 위한 개인정보 제공"
          toggleId="toggle01"
          modified="2023년 7월 27일"
        />
        <ContentStrong>사이트 이용 약관 동의</ContentStrong>
        <ToggleCard
          title="이마트 사이트 이용 약관<br/>emart.com"
          toggleId="toggle02"
          modified=""
        />
        <ToggleCard
          title="신세계백화점 사이트 이용약관<br/>shinsegae.com"
          toggleId="toggle03"
          modified=""
        />
      </div>
    </div>
  );
}
