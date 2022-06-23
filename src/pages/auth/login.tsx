import type { NextPage } from "next";
import styles from "../../styles/auth.module.scss";
import { Card } from "primereact/card";
import FloatingInput from "@/ui/FloatingInput/floatingInput.component";
import { ChangeEvent, useState } from "react";
import { InputCallback } from "@/types/ui.types";
import { Button } from "primereact/button";
import Link from "next/link";
import { ROUTES } from "src/common/routes/main.routes";
import { AuthService } from "src/services/auth.service";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { login } = AuthService();
  const router = useRouter();

  const handleChange = (e: InputCallback) => {
    setInputs({ ...inputs, [e.name]: e.value });
  };

  const onLogin = async () => {
    console.log({ inputs });
    const res = await login(inputs);
    console.log(res?.status);

    if (res?.data) {
      router.push(ROUTES.COMPANIES);
    }
  };

  return (
    <div className={styles.authPageWrapper}>
      <Card title="Log In" className={styles.authFormCard}>
        <Button
          onClick={() =>
            setInputs({
              email: "admin@gatraljewellers.com",
              password: "Sakariya",
            })
          }
          className="p-1 p-button p-button-text"
          label="Auto Fill"
        />

        <FloatingInput
          label="E-mail"
          value={inputs.email}
          name="email"
          primeIcon="envelope"
          onChange={handleChange}
        />
        <FloatingInput
          label="Password"
          value={inputs.password}
          name="password"
          primeIcon="lock"
          type="password"
          onChange={handleChange}
        />
        {/* <div>
          <Link href={""}>
            <a className="py-2 pl-1 inline-block">Forgot Password?</a>
          </Link>
        </div> */}
        <Button onClick={onLogin} className="mt-4" label="Log In" />
        <Link href={ROUTES.REGISTER}>
          <a className="ml-3 p-button p-button-text">Register</a>
        </Link>
      </Card>
    </div>
  );
};

export default LoginPage;
