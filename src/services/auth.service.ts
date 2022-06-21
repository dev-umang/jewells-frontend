import api from "src/common/config/api.config";
import { getCSRF } from "./csrf.service";

export const AuthService = () => {
  //   Called on login button click
  const login = async (userCreds: any) => {
    const _csrf = await getCSRF();

    if (_csrf.headers) {
      const res = await api.post("/login", userCreds);
      console.log({ data: res.data });
      console.log(res.status);
      return res;
    }
  };

  //   Called first time to check if user is authenticated
  const checkUser = async () => {
    const res = await api.get("/api/user");
    return res.data ?? null;
  };

  return { login, checkUser };
};
