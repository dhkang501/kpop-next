"use client";
import React, { useEffect, useRef } from "react";
import styles from "./CategoryNavigation.module.scss";
import { useCategoryStore } from "@/store/useCategoryStore";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { categories } from "@/lib/dummydata";

const CategoryNavigation = () => {
  // const categories = ["차트", "Whook", "이벤트", "뉴스", "스토어", "충전소"];
  const { selectCategory, setCategory } = useCategoryStore();
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(selectCategory);
    }
  }, [selectCategory]);

  return (
    <Swiper
      modules={[FreeMode]}
      slidesPerView="auto"
      freeMode={true}
      className={styles.categoryContainer}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {categories.map((category, index) => {
        return (
          <SwiperSlide key={index} className={styles.slideWrapper}>
            <div
              key={index}
              className={`${styles.categoryTabs} ${selectCategory === index ? styles.active : ""}`}
              onClick={() => setCategory(index)}
            >
              <div>{category}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategoryNavigation;
