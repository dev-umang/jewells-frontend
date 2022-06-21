import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { ROUTES } from "src/common/routes/main.routes";
import { AuthService } from "src/services/auth.service";
import { AtomUser } from "src/store/auth/auth.store";

const IndexPage: NextPage = () => {
  const router = useRouter();
  const user = useRecoilValue(AtomUser);

  useEffect(() => {
    if (user !== undefined && user !== null) {
      router.push(ROUTES.COMPANIES);
    } else {
      router.push(ROUTES.LOGIN);
    }
  }, [user]);

  return <div>Loading...</div>;
};

export default IndexPage;
