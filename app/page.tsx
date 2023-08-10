import BannerList from "./component/BannerList";
import BodyNav from "./component/BodyNav";
import BodyNavTop from "./component/BodyNavTop";
import FooterNav from "./component/FooterNav";
import MainBanner from "./component/MainBanner";

export default function Home() {
  return (
    <div>
      <section id="content">
        <BodyNavTop />
        <MainBanner />
        <BodyNav />
        {/* <BannerList /> */}
      </section>
    </div>
  );
}
