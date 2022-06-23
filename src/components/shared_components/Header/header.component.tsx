import { Button } from "primereact/button";
import { FC, memo } from "react";
import styles from "./header.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = memo(({}) => {
  return (
    <header className={styles.headerWrapper}>
      <div className="container d-flex justify-content-between align-items-center h-100">
        <span className="h1">Jewells</span>
        <Button className="p-button p-button-danger p-button-text" label="Log Out" />
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
