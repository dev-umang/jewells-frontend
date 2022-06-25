import React, { FC, memo, useEffect } from "react";
// import Header from "../components/shared_components/Header/header.component";
import styles from "./layouts.module.scss";
import layout from "../theme/layouts/desktopLayout.module.scss";
import dark from "../theme/darkBlue.module.scss";
import Header from "@/shared/Header/header.component";
import { useRouter } from "next/router";
import AuthLayout from "./auth.layout";
import { useRecoilValue } from "recoil";
import { AtomUser } from "src/store/auth/auth.store";
import { ROUTES } from "src/common/routes/main.routes";
import FullLoader from "@/shared/Loaders/FullLoader/fullLoader.component";
import CompanyLayout from "./company.layout";

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout: FC<AppLayoutProps> = memo(({ children }) => {
  const user = useRecoilValue(AtomUser);
  const router = useRouter();

  console.log({ user });
  useEffect(() => {
    if (user === null) router.push(ROUTES.LOGIN);
  }, [user]);

  const isAuth = router.pathname.startsWith("/auth");
  const isCmp = router.pathname.startsWith(ROUTES.COMPANIES);
  if (isAuth) return <AuthLayout>{children}</AuthLayout>;
  if (user === undefined) return <FullLoader />;
  if (isCmp)
    return (
      <div className={`${dark.darkBlue} ${layout.desktopLayout}`}>
        <Header />
        <main className={styles.contentWrapper}>{children}</main>
      </div>
    );
  return <CompanyLayout>{children}</CompanyLayout>;
});

AppLayout.displayName = "AppLayout";
export default AppLayout;
