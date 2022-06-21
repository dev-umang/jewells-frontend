import { FC, memo } from "react";
// import Header from "../components/shared_components/Header/header.component";
import styles from "./layouts.module.scss";
import layout from "../theme/layouts/desktopLayout.module.scss";
import dark from "../theme/darkBlue.module.scss";
import Header from "@/shared/Header/header.component";

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout: FC<AuthLayoutProps> = memo(({ children }) => {
  return (
    <div className={`${dark.darkBlue} ${layout.desktopLayout}`}>
      <main className={styles.authSection}>{children}</main>
    </div>
  );
});

AuthLayout.displayName = "Component";
export default AuthLayout;
