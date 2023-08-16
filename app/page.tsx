import BodyNav from "./components/BodyNav";
import BodyNavTop from "./components/BodyNavTop";
import MainBanner from "./components/MainBanner";
import MainBannerBox from "./components/MainBannerBox";

/**
 * @pathname "/"
 */
export default function Home() {
  return (
    <>
      <BodyNavTop />
      <div className="notice_top_banner mt-[36px]"></div>
      <MainBanner />
      <BodyNav />
      <MainBannerBox /> {/* Swiper Area */}
      {/* <BannerList /> */}
    </>
  );
}
