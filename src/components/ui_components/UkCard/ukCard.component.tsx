import { FC, memo, ReactNode } from "react";
import styles from "./ukCard.module.scss";

interface UkCardProps {
  children: ReactNode | ReactNode[];
  title?: string;
  bodyClass?: string;
}

const UkCard: FC<UkCardProps> = memo(({ children, title, ...props }) => {
  return (
    <div className={`${props.bodyClass ?? ""} ${styles.cardWrapper}`}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
});

UkCard.displayName = "UkCard";
export default UkCard;
