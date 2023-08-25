import Link from "next/link";
import { useRef } from "react";
import { useValueContext } from "./ValueContext";
import RoundedButton from "../atoms/Button/RoundedButton";
import MenuListForSidebar from "./MenuListForSidebar";
import { PageProps } from "@/types/PageProps";

// TODO: 모든 페이지 정리
const Pages: PageProps[] = [
  {
    id: 1,
    name: "마이 페이지",
    href: "",
    themeColor: "#ea035c",
    simple_icon: "",
    primary_icon: "",
    children: [
      {
        id: 1,
        name: "마이 포인트",
        href: "",
        simple_icon: "",
        primary_icon: "",
        children: [
          {
            id: 1,
            name: "포인트 내역",
            href: "/myPoint/pntHistory",
            simple_icon: "/images/pagecon_pntHistory.png",
            primary_icon: "/images/pagecon_pntHistory_primary.png",
          },
          {
            id: 2,
            name: "포인트 카드 관리",
            href: "/myPoint/cardManage",
            simple_icon: "/images/pagecon_cardManage.png",
            primary_icon: "/images/pagecon_cardManage_primary.png",
          },
          {
            id: 3,
            name: "포인트 선물",
            href: "/myPoint/pntGiftMain",
            simple_icon: "/images/pagecon_pntGift.png",
            primary_icon: "/images/pagecon_pntGift_primary.png",
          },
          {
            id: 4,
            name: "제휴포인트 카드 관리",
            href: "/myPoint/regAffiliatePntCard",
            simple_icon: "/images/pagecon_pntGift.png",
            primary_icon: "/images/pagecon_regAffiliatePntCard_primary.png",
          },
          {
            id: 5,
            name: "포인트 전환",
            href: "/myPoint/convertPntList",
            simple_icon: "/images/pagecon_convertPnt.png",
            primary_icon: "/images/pagecon_convertPnt_primary.png",
          },
          {
            id: 5,
            name: "영수증으로 적립",
            href: "/myPoint/savePoint",
            simple_icon: "/images/pagecon_savePnt.png",
            primary_icon: "/images/pagecon_savePoint_primary.png",
          },
          {
            id: 6,
            name: "포인트 비밀번호 변경",
            href: "/myPoint/chgPntPwdCert",
            simple_icon: "/images/pagecon_chgPntPwdCert.png",
            primary_icon: "/images/pagecon_chgPntPwdCert_primary.png",
          },
        ],
      },
      {
        id: 2,
        name: "마이 혜택",
        href: "",
        simple_icon: "",
        primary_icon: "",
        children: [
          {
            id: 1,
            name: "포인트 플러스",
            href: "/benefits/pntPlus/attend",
            simple_icon: "/images/pagecon_pntPlus.png",
            primary_icon: "/images/pagecon_pntPlus_primary.png",
          },
          {
            id: 2,
            name: "나의 운세 보기",
            href: "/benefits/benefitMyLuck",
            simple_icon: "/images/pagecon_benefitMyLuck.png",
            primary_icon: "/images/pagecon_benefitMyLuck_primary.png",
          },
          {
            id: 3,
            name: "마이 쿠폰함",
            href: "/benefits/myCoupon",
            simple_icon: "/images/pagecon_myCoupon.png",
            primary_icon: "/images/pagecon_myCoupon_primary.png",
          },
          {
            id: 4,
            name: "마이 이벤트",
            href: "/benefits/myEvent",
            simple_icon: "/images/pagecon_myEvent.png",
            primary_icon: "/images/pagecon_myEvent_primary.png",
          },
          {
            id: 5,
            name: "포인트 꿀팁",
            href: "/benefits/pntTip",
            simple_icon: "/images/pagecon_pntTip.png",
            primary_icon: "/images/pagecon_pntTip_primary.png",
          },
        ],
      },
      {
        id: 3,
        name: "마이 라운지",
        href: "",
        simple_icon: "",
        primary_icon: "",
        children: [
          {
            id: 1,
            name: "쇼핑 히스토리",
            href: "/mylounge/history",
            simple_icon: "/images/pagecon_history.png",
            primary_icon: "/images/pagecon_history_primary.png",
          },
          {
            id: 2,
            name: "추천 서비스",
            href: "/mylounge/recommend",
            simple_icon: "/images/pagecon_recommend.png",
            primary_icon: "/images/pagecon_recommend_primary.png",
          },
          {
            id: 3,
            name: "스마트 영수증",
            href: "/mylounge/receipt",
            simple_icon: "/images/pagecon_receipt.png",
            primary_icon: "/images/pagecon_receipt_primary.png",
          },
          {
            id: 4,
            name: "매장 찾기",
            href: "/mylounge/findstore",
            simple_icon: "/images/pagecon_findstore.png",
            primary_icon: "/images/pagecon_findstore_primary.png",
          },
          {
            id: 5,
            name: "자주 찾는 매장",
            href: "/mylounge/regularstore",
            simple_icon: "/images/pagecon_regularstore.png",
            primary_icon: "/images/pagecon_regularstore_primary",
          },
        ],
      },
      {
        id: 4,
        name: "마이 회원정보",
        href: "",
        simple_icon: "",
        primary_icon: "",
        children: [
          {
            id: 1,
            name: "광고정보 수신관리",
            href: "/myinfo/infoRcvAgree",
            simple_icon: "/images/pagecon_infoRcvAgree.png",
            primary_icon: "/images/pagecon_infoRcvAgree_primary",
          },
          {
            id: 2,
            name: "서비스 동의관리",
            href: "/myinfo/serviceAgree",
            simple_icon: "/images/pagecon_serviceAgree.png",
            primary_icon: "/images/pagecon_serviceAgree_primary",
          },
          {
            id: 3,
            name: "회원정보 수정",
            href: "/myinfo/cert",
            simple_icon: "/images/pagecon_cert.png",
            primary_icon: "/images/pagecon_cert_primary",
          },
          {
            id: 4,
            name: "비밀번호 변경",
            href: "/myinfo/changePwd",
            simple_icon: "/images/pagecon_changePwd.png",
            primary_icon: "images/pagecon_changePwd_primary.png",
          },
          {
            id: 5,
            name: "회원 탈퇴",
            href: "/withdrawal/leavePassword",
            simple_icon: "/images/pagecon_leavePassword.png",
            primary_icon: "/images/pagecon_leavePassword_primary.png",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "신세계포인트",
    href: "",
    themeColor: "#a16c0c",
    simple_icon: "",
    primary_icon: "",
    children: [
      {
        id: 1,
        name: "가맹점 소개",
        href: "/spoint/memberstore",
        simple_icon: "/images/pagecon_memberstore.png",
        primary_icon: "/images/pagecon_memberstore_primary.png",
        children: [],
      },
      {
        id: 2,
        name: "포인트 카드",
        href: "/spoint/pointcard",
        simple_icon: "/images/pagecon_pointcard.png",
        primary_icon: "/images/pagecon_pointcard_primary.png",
        children: [],
      },
      {
        id: 3,
        name: "포인트 서비스",
        href: "/spoint/pointservice",
        simple_icon: "/images/pagecon_pointservice.png",
        primary_icon: "/images/pagecon_pointservice_primary.png",
        children: [],
      },
      {
        id: 4,
        name: "임시 발급 카드 인증",
        href: "/spoint/tempCardCert",
        simple_icon: "/images/pagecon_tempCardCert.png",
        primary_icon: "/images/pagecon_tempCardCert_primary.png",
        children: [],
      },
      {
        id: 5,
        name: "신세계그룹 뉴스레터",
        href: "/spoint/newsLetter",
        simple_icon: "/images/pagecon_newsLetter.png",
        primary_icon: "/images/pagecon_newsLetter_primary.png",
        children: [],
      },
    ],
  },
  {
    id: 3,
    name: "멤버십 서비스",
    href: "",
    themeColor: "#04857f",
    simple_icon: "",
    primary_icon: "",
    children: [
      {
        id: 1,
        name: "신세계포인트 통합 ID 관리",
        href: "/membership/pointId",
        simple_icon: "/images/pagecon_pointId.png",
        primary_icon: "/images/pagecon_pointId_primary.png",
        children: [],
      },
      {
        id: 2,
        name: "클럽",
        href: "/membership/club",
        simple_icon: "/images/pagecon_club.png",
        primary_icon: "/images/pagecon_pointId_primary.png",
        children: [],
      },
      {
        id: 3,
        name: "신세계 유니버스 클럽",
        href: "/membership/combine",
        simple_icon: "/images/pagecon_combine.png",
        primary_icon: "/images/pagecon_combine_primary.png",
        children: [],
      },
    ],
  },
  {
    id: 4,
    name: "고객센터",
    href: "",
    themeColor: "#5c1880",
    simple_icon: "",
    primary_icon: "",
    children: [
      {
        id: 1,
        name: "공지사항",
        href: "/cscenter/notice",
        simple_icon: "/images/pagecon_notice.png",
        primary_icon: "/images/pagecon_notice_primary.png",
        children: [],
      },
      {
        id: 2,
        name: "FAQ",
        href: "/cscenter/faq",
        simple_icon: "/images/pagecon_faq.png",
        primary_icon: "/images/pagecon_faq_primary.png",
        children: [],
      },
      {
        id: 3,
        name: "1:1 상담",
        href: "/cscenter/consult/write",
        simple_icon: "/images/pagecon_consult.png",
        primary_icon: "/images/pagecon_consult_primary.png",
        children: [],
      },
    ],
  },
];

const Sidebar = () => {
  // TODO: handleValue Naming 변경, 컨텍스트 내 useState 추가(범위 내 Ref 관리)
  const { selectedValue, handleValue } = useValueContext();
  const hiddenRef = useRef("");

  //TODO: useEffect 사용해야 할 수도 있다. 사이드이펙트가 염려됨
  const handleHidden = () => {
    handleValue();
    selectedValue &&
      setTimeout(() => {
        hiddenRef.current.className += " hidden";
        document.body.style.overflow = "auto";
      }, 300);
  };

  const underline =
    "after:content-[''] after:inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[12px] after:bg-[#ffdfb5] after:z-[-1]";

  return (
    <nav className={`fixed left-0 top-0`}>
      <div
        className={`fixed block top-0 w-[85%] min-w-[320px] h-full z-[999] bg-white overflow-y-auto ease-in-out duration-300 ${
          selectedValue ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="block h-[60px] pt-[16px] pl-[20px] box-border">
          {/* <NavLogo /> */}
          <Link
            className="inline-block w-[57px] h-[36px] bg-[url('/images/logo_header.840b502c.gif')] bg-[100%_auto] bg-no-repeat"
            href={"/"}
          />
        </div>
        <div className="relative">
          <div className="px-5 pt-[18px] pb-6">
            <div className="flex items-center justify-between">
              <p className="text-[18px] leading-[26px]">
                <strong
                  className={`relative inline-block font-medium pl-1 pr-[1px] ${underline}`}
                >
                  조영일
                </strong>
                님 반갑습니다.
              </p>
            </div>
            <p className="flex items-center mt-[16px] text-xl font-bold after:content-[''] after:inline-block after:ml-[7px] after:w-[27px] after:h-[24px] after:bg-[url('/images/point_gradi.png')] after:bg-no-repeat after:bg-[100%_auto]">
              12
            </p>
            {/* 사용자 버튼 박스 */}
            <div className="flex gap-2 mt-[25px]">
              <RoundedButton className="h-9">로그아웃</RoundedButton>
              <RoundedButton className="h-9" backgroundColor="black">
                마이페이지
              </RoundedButton>
            </div>
          </div>
        </div>

        {/* 즐겨착기 메뉴 */}
        <div className="relative bg-[#fff9ea] box-border pt-[26px] pb-[24px]">
          <div className="flex justify-between px-5">
            {Pages && Pages.map((i) => i.name)}
          </div>

          {/* 즐겨찾기 메뉴 */}
          <p className="relative h-20 w-[calc(100%-48px)] mx-6 pl-[58px] pt-[18px] border border-dashed border-[#f8b404] box-border">
            <button className="absolute left-[10px] top-1/2 -translate-y-1/2 indent-[-999em] w-10 h-10 border border-[#f8b404] rounded-full bg-[url('/images/icon_favorite.png')] bg-center bg-no-repeat bg-[24px_auto]">
              즐겨찾기 메뉴 선택
            </button>
            <span className="text-[12px] leading-[20px] tracking-[-.5px]">
              <button
                className={`relative pr-1 pl-[1px] font-bold tracking-[-.5px] z-[1] ${underline}`}
              >
                즐겨찾기 메뉴 선택
              </button>
              에서
              <br />
              나만의 즐겨찾기 메뉴를 설정할 수 있어요!
            </span>
          </p>
        </div>

        {/* 메뉴리스트 */}
        <MenuListForSidebar pagesJson={Pages} />

        {/* terms */}
        <ul className="space-x-5 mt-[20px] mb-[80px] ml-5">
          <li className="inline-block">
            <Link
              className="block text-[13px] leading-[13px] text-[#767676] py-[5px]"
              href={""}
            >
              서비스 이용약관
            </Link>
          </li>
          <li className="inline-block">
            <Link
              className="block text-[13px] leading-[13px] text-[#eb0000] py-[5px]"
              href={""}
            >
              개인정보 처리방침
            </Link>
          </li>
        </ul>

        {/* Close Button */}
        <button
          className="absolute top-0 right-0 w-[60px] h-[60px] bg-[url('/images/icon_close.png')] bg-[14px_auto] bg-center bg-no-repeat"
          onClick={handleHidden}
        />
      </div>

      {/* Background */}
      <div
        className={`fixed w-full h-full min-w-[320px] bg-black transition-all ease-linear duration-300 ${
          selectedValue ? "bg-opacity-50 duration-300" : "bg-opacity-0 "
        }`}
        onClick={handleHidden}
        ref={hiddenRef}
      ></div>
    </nav>
  );
};
export default Sidebar;
