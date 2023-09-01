"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import Card from "@/components/Card";
import { staticPageFetch } from "@/utils/StaticFetch";
import Link from "next/link";
import TabbarHeader from "@/components/TabbarHeader";

export default function Home() {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName(["쿠폰", "홈"])}
      />

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
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>

            <SwiperSlide className="relative min-h min-h-[90.667vw]">
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Card className="mt-[-24px] mx-[20px] mb-[24px] h-[88px] z-2" shadow>
        <ul className="flex justify-between items-center px-[19px] py-[10px]">
          {staticPageFetch
            .getPageListByEachName([
              "이벤트",
              "출석체크",
              "럭키룰렛",
              "운세서비스",
              "영수증",
            ])
            .map(
              (page) =>
                page && (
                  <li key={page.id}>
                    <Link
                      className="block w-full text-xs text-center text-[#505050]"
                      href={page.pathname as string}
                    >
                      <Image
                        src={page?.primary_icon as string}
                        width={45}
                        height={45}
                        alt={page.name}
                      />
                      {page.name}
                    </Link>
                  </li>
                )
            )}
        </ul>
      </Card>

      <div className="bg-white">
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
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>

            <SwiperSlide className="relative min-h min-h-[90.667vw]">
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>
          </Swiper>

          <Swiper className="mainBannerSwiper">
            <SwiperSlide className="relative min-h min-h-[90.667vw]">
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>
          </Swiper>

          <Swiper
            className="mainBannerSwiper"
            pagination={{
              type: "fraction",
            }}
            scrollbar
            modules={[Scrollbar, Pagination]}
          >
            <SwiperSlide className="relative min-h min-h-[90.667vw]">
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>

            <SwiperSlide className="relative min-h min-h-[90.667vw]">
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>
          </Swiper>

          <Swiper className="mainBannerSwiper">
            <SwiperSlide className="relative min-h min-h-[90.667vw]">
              <Image src={"/images/main-banners-01.png"} fill={true} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
