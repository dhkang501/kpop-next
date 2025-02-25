import React from "react";
import ChartPage from "@/components/chartPage/ChartPage";

type Props = {
  categoryIndex: number;
};

// TODO: api 호출시 Page별 component type 불러오기

const CategoryContent = ({ categoryIndex }: Props) => {
  const categoryPage = [
    ChartPage,
    // WhookPage,
    // EventPage,
    // NewsPage,
    // StorePage,
    // ChargePage,
  ];

  const SelectedPage = categoryPage[categoryIndex];
  if (!SelectedPage) {
    // TODO: Error page
    return <div>잘못된 카테고리입니다.</div>;
  }

  return (
    <div>
      <SelectedPage />
    </div>
  );
};

export default CategoryContent;
