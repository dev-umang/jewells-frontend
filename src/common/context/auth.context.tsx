import React, { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserDTO } from "src/models/admin.model";
import { AuthService } from "src/services/auth.service";
import { AtomUser } from "src/store/auth/auth.store";

export interface AuthContextDTO {
  user: UserDTO | null | undefined;
}

export const AuthContext = React.createContext<AuthContextDTO>(
  {} as AuthContextDTO
);

const AuthProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useRecoilState(AtomUser);
  const { checkUser } = AuthService();

  useEffect(() => {
    checkUser()
      .then((user) => {
        if (user) setUser(user);
        else setUser(null);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
