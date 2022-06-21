import type { NextPage } from "next";
import styles from "../../styles/auth.module.scss";
import { Card } from "primereact/card";
import FloatingInput from "@/ui/FloatingInput/floatingInput.component";
import { ChangeEvent, useState } from "react";
import { InputCallback } from "@/types/ui.types";
import { Button } from "primereact/button";
import Link from "next/link";
import { ROUTES } from "src/common/routes/main.routes";

const RegisterPage: NextPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: InputCallback) => {
    setInputs({ ...inputs, [e.name]: e.value });
    console.log(inputs);
  };

  return (
    <div className={styles.authPageWrapper}>
      <Card title="Register Yourself" className={styles.authFormCard}>
        <Link href={ROUTES.LOGIN}>
          <a className="p-1 p-button p-button-text">
            <i className="pi pi-arrow-left"></i> &nbsp;Back To Login
          </a>
        </Link>

        <FloatingInput
          label="Full Name"
          value={inputs.name}
          name="name"
          primeIcon="user"
          onChange={handleChange}
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
        <FloatingInput
          label="Confirm Password"
          value={inputs.confirmPassword}
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
        <Button className="mt-4" label="Register" />
        <Button className="ml-3 p-button-text" label="Log In" />
      </Card>
    </div>
  );
};

export default RegisterPage;
