import NavBoxForMainBody from "@/components/templates/NavBoxForMainBody";
import BodyNavTop from "@/components/BodyNavTop";
import MainBanner from "@/components/templates/MainBanner";
import BannerListForMain from "@/components/templates/BannerListForMain";
import RoundedButton from "@/components/atoms/Button/RoundedButton";

export default function NewsLetter() {
  return (
    <div className="px-5 pb-1-">
      <RoundedButton className="h-12" backgroundColor={'primary'}>보러가기</RoundedButton>
    </div>
  );
}
