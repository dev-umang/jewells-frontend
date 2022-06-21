import React, { FC, memo } from "react";
import styles from "./fullLoader.module.scss";

interface FullLoaderProps {}

const FullLoader: FC<FullLoaderProps> = memo(({}) => {
  return <div className={styles.loaderWrapper}>Loading...</div>;
});

FullLoader.displayName = "FullLoader";
export default FullLoader;
