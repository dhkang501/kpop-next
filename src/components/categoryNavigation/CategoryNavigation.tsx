"use client";
import React from "react";
import styles from "./CategoryNavigation.module.scss";
import { useCategoryStore } from "@/store/useCategoryStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const CategoryNavigation = () => {
  const categories = ["차트", "Whook", "이벤트", "뉴스", "스토어", "충전소"];
  const { selectCategory, setCategory } = useCategoryStore();

  return (
    <Swiper
      modules={[FreeMode]}
      slidesPerView="auto"
      freeMode={true}
      className={styles.categoryContainer}
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
