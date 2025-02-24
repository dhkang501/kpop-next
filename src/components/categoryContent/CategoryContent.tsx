import React from "react";

type Props = {
  categoryIndex: number;
};

const CategoryContent = ({ categoryIndex }: Props) => {
  const contents = [
    <div key="chart">📊 차트 데이터</div>,
    <div key="whook">🎤 Whook 콘텐츠</div>,
    <div key="event">🎉 이벤트 소식</div>,
    <div key="news">📰 뉴스 기사</div>,
    <div key="store">🛍 스토어 상품</div>,
    <div key="charge">⚡ 충전소 혜택</div>,
  ];

  return <div>{contents[categoryIndex]}</div>;
};

export default CategoryContent;
