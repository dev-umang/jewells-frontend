import { Button } from "primereact/button";
import { FC, memo } from "react";
import styles from "./companyHeader.module.scss";

const CompanyHeader = memo(() => {
  return (
    <header className={styles.headerWrapper}>
      <div className="px-2 d-flex justify-content-between align-items-center h-100">
        <span className="h2">
          Jewells | <span className="h4">CMP NAME</span>
        </span>
        <Button
          className="p-button p-button-danger p-button-text"
          label="Log Out"
        />
      </div>
    </header>
  );
});

CompanyHeader.displayName = "CompanyHeader";
export default CompanyHeader;
