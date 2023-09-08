import ClubContentBeauty from '@/components/organisms/ClubContentBeauty';
import ClubContentBiz from '@/components/organisms/ClubContentBiz';
import ClubContentCarSrv from '@/components/organisms/ClubContentCarSrv';
import ClubContentMomKids from '@/components/organisms/ClubContentMomKids';

export default function clubAgree() {
  return (
    <div>
      <h3 className="hidden">클럽 동의</h3>
      <div className="pb-10">
        <p className="ml-5 mt-5 text-[#eb0000] text-xs leading-5">
          ※ 각 클럽 서비스별 하단 확인 버튼을 눌러야 변경 내용이 저장됩니다.
        </p>
        <ClubContentMomKids />
        <ClubContentCarSrv />
        <ClubContentBeauty />
        <ClubContentBiz />
      </div>
    </div>
  );
}
