"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import FallbackImage from "../atom/FallbackImage";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";

export async function fetchEventMain(display?: string) {
  const queryPath = "/detail?eventId";
  const res = await fetch(
    `http://localhost:3030/event${"?display=" + display}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export default function MainBanner() {
  const router = useRouter();
  const [mainBanners, setMainBanners] = useState([]);

  const mainBannersPromise = fetchEventMain("main");
  useEffect(() => {
    mainBannersPromise
      .then((v) => setMainBanners(v))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="relative z-0">
      {/* TODO: 이벤트 리스트 표시(api) */}
      <Swiper
        className="mainBannerSwiper group "
        pagination={{
          type: "fraction",
        }}
        autoHeight
        scrollbar
        modules={[Scrollbar, Pagination]}
      >
        {mainBanners &&
          mainBanners.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative w-full min-h-[90.667vw]"
            >
              <Image
                src={`https://storage.googleapis.com/ssg-images${slide.banner_thumb}`}
                fill
                alt={`${slide.name} 배너 이미지`}
                onError={() => <FallbackImage />}
                onClick={() =>
                  router.push(`/ingevents/detail?eventNo=${slide.id}`)
                }
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
