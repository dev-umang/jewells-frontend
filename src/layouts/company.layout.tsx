import { FC, memo } from "react";
import styles from "./layouts.module.scss";
import layout from "../theme/layouts/desktopLayout.module.scss";
import dark from "../theme/darkBlue.module.scss";
import CompanyHeader from "@/shared/CompanyHeader/companyHeader.component";
import Sidebar from "@/shared/Sidebar/sidebar.component";

interface CompanyLayoutProps {
  children: JSX.Element;
}

const CompanyLayout: FC<CompanyLayoutProps> = memo(({ children }) => {
  return (
    <div className={`${dark.darkBlue} ${layout.desktopLayout}`}>
      <CompanyHeader />
      <div className={styles.partition}>
        <Sidebar />
        <main className={styles.contentWrapper}>{children}</main>
      </div>
    </div>
  );
});

CompanyLayout.displayName = "Component";
export default CompanyLayout;
