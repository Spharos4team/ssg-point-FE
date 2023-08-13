import BodyNav from "./component/BodyNav";
import BodyNavTop from "./component/BodyNavTop";
import MainBanner from "./component/MainBanner";
import MainBannerBox from "./component/MainBannerBox";

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
