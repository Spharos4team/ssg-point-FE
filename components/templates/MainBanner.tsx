"use client";
import Image from "next/image";
// import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";

//TODO: swiper 라이브러리 사용할 것.
//swiper-container, swiper-wrapper, swiper-control, swiper-srollbar, swiper-scrollbar-drag, swiper-notification...

const MainBanner = () => {
  return (
    <div className="mt-[36px]">
      <div className="relative min-h-[90.667vw]">
        <Image src={"/images/main-banner-01-universe.jpg"} fill={true} alt="" />
      </div>
    </div>
  );
};

export default MainBanner;
