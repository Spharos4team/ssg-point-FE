import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";

/**
 * @pathname "/"
 */
export default function Home() {
  return (
    <>
      <BodyNavTop />
      <div className="notice_top_banner mt-[36px]"></div>
      <MainBanner />
      <NavBoxForMainBody />
      <BannerListForMain /> {/* Swiper Area */}
      {/* <BannerList /> */}
    </>
  );
}
