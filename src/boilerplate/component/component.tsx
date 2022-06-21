import React, { FC, memo } from "react";
import styles from "./component.module.scss";

interface ComponentProps {}

const Component: FC<ComponentProps> = memo(({}) => {
  return <></>;
});

Component.displayName = "Component";
export default Component;
