"use client";
import { useRef } from "react";
import CategoryContent from "@/components/categoryContent/CategoryContent";
import { useCategoryStore } from "@/store/useCategoryStore";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const { selectCategory, setCategory } = useCategoryStore();
  const swiperRef = useRef<any>(null);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setCategory(swiper.activeIndex);
      }}
    >
      <SwiperSlide>
        <CategoryContent categoryIndex={selectCategory} />
      </SwiperSlide>
    </Swiper>
  );
}
