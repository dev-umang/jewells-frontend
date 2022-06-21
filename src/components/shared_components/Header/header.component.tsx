import  { FC, memo } from "react";
import styles from "./header.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = memo(({}) => {
  return <header className={styles.headerWrapper}>
    <div className="container">
      LOGO
    </div>
  </header>;
});

Header.displayName = "Header";
export default Header;
