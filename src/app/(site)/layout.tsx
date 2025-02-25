import CategoryNavigation from "@/components/categoryNavigation/CategoryNavigation";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CategoryNavigation />
      {children}
    </div>
  );
};

export default layout;
