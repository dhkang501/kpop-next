import React from "react";
import styles from "./ErrorMessage.module.scss";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className={styles.errorMessageContainer}>
      <GridLoader color="red" />
      <div className={styles.errorTitle}>Oops!</div>
      <div className={styles.errorText}>잠시 후에 확인해 주세요.</div>
    </div>
  );
};

export default ErrorMessage;
