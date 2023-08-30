"use client";
import Image from "next/image";
// import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

//TODO: swiper 라이브러리 사용할 것.
//swiper-container, swiper-wrapper, swiper-control, swiper-srollbar, swiper-scrollbar-drag, swiper-notification...

const MainBanner = () => {
  return (
    <div className="mt-[36px]">
      <div className="relative z-0">
        <Swiper
          className="mainBannerSwiper"
          pagination={{
            type: "fraction",
          }}
          scrollbar
          modules={[Scrollbar, Pagination]}
        >
          <SwiperSlide className="relative min-h min-h-[90.667vw]">
            <Image
              src={"/images/main-banner-01-universe.jpg"}
              fill={true}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative min-h min-h-[90.667vw]">
            <Image
              src={"/images/main-banner-01-universe.jpg"}
              fill={true}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative min-h min-h-[90.667vw]">
            <Image
              src={"/images/main-banner-01-universe.jpg"}
              fill={true}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative min-h min-h-[90.667vw]">
            <Image
              src={"/images/main-banner-01-universe.jpg"}
              fill={true}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainBanner;
