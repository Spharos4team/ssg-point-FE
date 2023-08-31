"use client";
import Tabbar from "@/components/Tabbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import Card from "@/components/Card";
import { staticPageFetch } from "@/utils/StaticFetch";
import Link from "next/link";
export default function Home() {
  const cardPages = staticPageFetch.getPagesByIdList([10, 29, 30, 31, 40]);
  return (
    <>
      <Tabbar type="header" />

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
          {cardPages.map(
            (page) =>
              page && (
                <li key={page.id}>
                  <Link
                    className="block w-full text-xs text-center text-[#505050]"
                    href={page.pathname}
                  >
                    <Image
                      src={page?.tab_icon}
                      width={45}
                      height={45}
                      alt={page.name}
                    />
                    {page.tab_name}
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
