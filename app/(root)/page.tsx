"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import Card from "@/components/atom/Card";
import { staticPageFetch } from "@/utils/StaticFetch";
import Link from "next/link";
import FallbackImage from "@/components/atom/FallbackImage";

export default function Home() {
  return (
    <>
      <div className="mt-[36px]">
        <div className="relative z-0">
          {/* TODO: swiper 높이 지정 */}
          <Swiper
            className="mainBannerSwiper"
            pagination={{
              type: "fraction",
            }}
            autoHeight
            scrollbar
            modules={[Scrollbar, Pagination]}
          >
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Image
                src={"/images/banners/main-banners-01.png"}
                fill
                alt=""
                onError={() => <FallbackImage />}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Card className="mt-[-24px] mx-5 mb-[24px] h-[88px] z-2" fit shadow>
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
                      className="block w-full text-xs items-center text-center text-gray-600"
                      href={page.pathname as string}
                    >
                      <Image
                        className="block mx-auto"
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
        <div className="relative z-0"></div>
      </div>
    </>
  );
}
