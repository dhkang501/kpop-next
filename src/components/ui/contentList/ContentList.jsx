"use client";
import React, { useEffect, useState, useRef } from "react";
import { dummyContents } from "@/lib/dummyData";
import styles from "./ContentsList.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

const ContentList = () => {
  const listMap = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsAllDataLoaded(true);
    }, 5000);
  }, []);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.contentListWrapper}>
      <div className={styles.contentListContainer}>
        <h4>{dummyContents.title}</h4>
        <div className={styles.contentListScroll} ref={scrollContainerRef}>
          {listMap.map((_, index) => (
            <div className={styles.contentList} key={index}>
              <div className={styles.imgBox}></div>
              <div className={styles.listBox}></div>
            </div>
          ))}
          {isAllDataLoaded ? (
            <div className={styles.loadingBox} onClick={scrollToTop}>
              데이터를 모두 불러왔습니다 🔝
            </div>
          ) : (
            <ClipLoader color="blue" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentList;
