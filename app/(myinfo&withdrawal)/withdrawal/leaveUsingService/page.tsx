import ContentHeader from '@/components/atoms/ContentHeader';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';
import NoticeBox from '@/components/modules/NoticeBox';
import RoundCard from '@/components/modules/RoundCard';
import Image from 'next/image';
import Link from 'next/link';

export default function leaveUsingServicePage() {
  const underline =
    'after:inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[12px] after:bg-[#ffdfb5] after:z-[-1]';
  return (
    <>
      <ContentHeader
        main={
          <>
            <strong className="relative font-medium">
              <span className={`${underline} pr-1`}>조영일</span>
            </strong>
            님이 현재 이용 중인
            <br />
            신세계포인트 서비스입니다.
          </>
        }
      />

      <div className="px-5 pb-10">
        <div className="flex gap-x-2 items-center pb-3 border-b border-black">
          <Image
            width={40}
            height={40}
            src={'/images/icon_leave_check.png'}
            alt="가입한 온라인 사이트"
          />
          <p className="text-base leading-[26px] font-medium">가입한 온라인 사이트</p>
        </div>
        {/* --- table --- */}
        <div></div>
      </div>

      <div className="px-5 pb-10">
        <div className="flex gap-x-2 items-center pb-3 border-b border-black">
          <Image
            width={40}
            height={40}
            src={'/images/icon_leave_check.png'}
            alt="이용중인 통합 멤버십​"
          />
          <p className="text-base leading-[26px] font-medium">이용중인 통합 멤버십​</p>
        </div>
        {/* --- table --- */}
        <div>
          <NoValuesInTable message="확인된 온라인 가입 사이트 정보가 없습니다." />
        </div>

        <NoticeBox type="simple" className="!pb-0 !pt-2">
          <ListForNoticeBox level={2} isBullet>
            통합 멤버십을 가입하신 경우, 가입처에서 해당 멤버십을 먼저 탈퇴해 주셔야 신세계포인트
            탈퇴가 가능합니다. 탈퇴는 가입처에 문의해주세요.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            멤버십 가입일자와 혜택이 적용되는 시작일자는 상이할 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            신세계 유니버스 클럽을 탈회 하셔도, 해당 포인트 카드로 신세계포인트 서비스는 계속
            이용하실 수 있습니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            G마켓/옥션의 스마일 클럽에서 신세계 유니버스 클럽으로 전환한 회원의 경우, 스마일 클럽의
            첫 가입일자가 표기됩니다.
          </ListForNoticeBox>
        </NoticeBox>
      </div>

      <div className="pt-10 px-5 pb-20">
        <RoundCard
          className="!p-0 rounded-lg border-[#ea035c]"
          title={
            <>
              <div className="flex gap-x-4 px-5 pt-5 pb-5 box-border">
                <Image
                  className="h-[64px]"
                  src={'/images/icon_integId.png'}
                  width={64}
                  height={64}
                  alt="온라인 통합ID 탈퇴 아이콘"
                />
                <div>
                  <p className="font-medium text-base text-[#ea035c]">
                    <Link
                      className="after:inline-block after:w-[7px] after:h-[13px] after:ml-1 after:clear-both after:bg-[url('/images/arrow_pink.png')] after:bg-[100%_auto] after:bg-no-repeat"
                      href={'/withdrawal/leaveOnline'}
                    >
                      온라인 통합ID 탈퇴
                    </Link>
                  </p>
                  <p className="text-[13px] text-[#505050] leading-[21px]">
                    신세계포인트 통합ID로 이용중인 위의 온라인 서비스들을 더 이상 이용할 수 없게
                    됩니다.
                  </p>
                </div>
              </div>
              <ul className="px-5 pb-5">
                <ListForNoticeBox level={2} isBullet>
                  일부 사이트만 탈퇴를 원하시는 경우 해당 사이트에서 개별적으로 탈퇴하실 수
                  있습니다.
                </ListForNoticeBox>
              </ul>
            </>
          }
        />
        <div className="mt-4 text-right">
          <Link
            className="inline-block text-xs leading-[19px] text-[#767676] after:inline-block after:ml-1 after:h-[10px] after:w-[6px] after:bg-[url('/images/arrow_right_gray.png')] after:bg-[100%_auto] after:bg-no-repeat"
            href={'/withdrawal/leaveOnoffline'}
          >
            신세계포인트 온/오프라인 완전 탈퇴하러 가기
          </Link>
        </div>
      </div>
    </>
  );
}

const NoValuesInTable = ({ message }: { message: string }) => {
  return (
    <div className="py-[28px] border-b">
      <p className="relative pt-16 text-[13px] text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]">
        {message}
      </p>
    </div>
  );
};

// <div class="signup_online_lists">
//     <table>
//         <caption>사이트</caption>
//         <colgroup>
//             <col class="col1" style="width: 101px;">
//                 <col class="col2" style="width: 100%;">
//                     <col class="col3" style="width: 51px;">
//         </colgroup>
//         <thead>
//         <tr>
//             <th><img
//                 src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/group-images/ssg_m_20.png"
//                 alt="SSG.COM 로고"></th>
//             <td class="site_title ff_lato">SSG.COM</td>
//             <td class="shortcuts"><a href="javascript:void(0)"><span>바로가기</span></a></td>
//         </tr>
//         <tr>
//             <th><img
//                 src="https://mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com/shinsegaepoint/public/shinsegaepoint-ext/group-images/emarteveryday_m_20.png"
//                 alt="이마트에브리데이 로고"></th>
//             <td class="site_title ff_lato">이마트에브리데이</td>
//             <td class="shortcuts"><a href="javascript:void(0)"><span>바로가기</span></a></td>
//         </tr>
//         </thead>
//     </table>
// </div>
