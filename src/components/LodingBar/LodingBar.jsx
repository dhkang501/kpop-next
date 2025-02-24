"use client";

import React from "react";
import { BarLoader } from "react-spinners";
import styles from "./LodingBar.module.scss";

const LodingBar = () => {
  return (
    <div className={styles.loadingBarContainer}>
      <BarLoader color="red" className={styles.loadingBar} />
    </div>
  );
};

export default LodingBar;
