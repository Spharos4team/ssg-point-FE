/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_PAGE_TERMS_PARENT: "67", //Terms&Policy
    NEXT_PUBLIC_PAGE_SSGPOINT: "49", // 신세계포인트
    NEXT_PUBLIC_PAGE_MEMSRVCE: "55", // 멤버십 서비스
    NEXT_PUBLIC_PAGE_CSCENTER: "63", // 고객센터

    NEXT_PUBLIC_PAGE_MYPAGE: "14", // 마이페이지
    NEXT_PUBLIC_PAGE_MYPOINT: "19", // 마이포인트
    NEXT_PUBLIC_PAGE_MYBENEFIT: "27", // 마이혜택
    NEXT_PUBLIC_PAGE_MYLOUNGE: "37", // 마이라운지
    NEXT_PUBLIC_PAGE_MYINFO: "43", // 마이회원정보
  },
};

module.exports = nextConfig;
