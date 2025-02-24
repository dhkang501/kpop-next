"use client";
import { useRef, useEffect } from "react";
import CategoryContent from "@/components/categoryContent/CategoryContent";
import { useCategoryStore } from "@/store/useCategoryStore";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { categories } from "@/lib/dummydata";

export default function Home() {
  const { selectCategory, setCategory } = useCategoryStore();
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(selectCategory);
    }
  }, [selectCategory]);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setCategory(swiper.activeIndex);
      }}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <CategoryContent categoryIndex={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
