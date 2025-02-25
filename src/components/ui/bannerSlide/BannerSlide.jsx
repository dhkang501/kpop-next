"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./BannerSlider.module.scss";
import { banners } from "@/lib/dummyData";

const BannerSlider = () => {
  return (
    <div className={styles.bannerContainer}>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        slidesPerView={1.5} // 3개 배너가 보이도록 설정
        centeredSlides={true} // 가운데 정렬
        spaceBetween={20} // 슬라이드 간 간격
        className={styles.bannerSwiper}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className={styles.bannerSlide}>
            <a href={banner.link} target="_blank" rel="noopener noreferrer">
              {banner.isOngoing && (
                <div className={styles.ongoingBadge}>진행 중</div>
              )}
              <img
                src={banner.image}
                alt={`배너 ${banner.id}`}
                className={styles.bannerImage}
              />
              {banner.contents && (
                <div className={styles.bannerContents}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={styles.bannerTitle}>
                      [{[banner.contents.title]}]{banner.contents.description}
                    </div>
                    {banner.contents.isVote && (
                      <div className={styles.voteBadge}>투표하기</div>
                    )}
                  </div>
                  {banner.contents.startTime && banner.contents.endTime && (
                    <div className={styles.currentTime}>
                      {banner.contents.startTime} ~ {banner.contents.endTime} (
                      {banner.contents.timezone})
                    </div>
                  )}
                </div>
              )}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
