import { InputCallback, Sizes } from "@/types/ui.types";
import { InputText } from "primereact/inputtext";
import { ChangeEvent, FC, memo } from "react";
import styles from "./floatinInput.module.scss";

interface FloatingInputProps {
  size?: Sizes;
  value?: string;
  name?: string;
  type?: string;
  label: string;
  primeIcon?: string;
  onChange?: (e: InputCallback) => void;
}

const FloatingInput: FC<FloatingInputProps> = memo(
  ({ label, primeIcon, size, ...props }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      props.onChange &&
        props.onChange({ name: props.name ?? "", value: e.target.value });
    };
    return (
      <span
        className={`${styles.inputWrapper} p-float-label ${
          primeIcon && "p-input-icon-left"
        }`}
      >
        {primeIcon && <i className={`pi pi-${primeIcon}`} />}
        <InputText
          id={label}
          className={`${styles.input} ${styles[size ?? "full"]}`}
          value={props.value ?? ""}
          onChange={handleChange}
          type={props.type ?? "text"}
        />
        <label htmlFor={label}>{label}</label>
      </span>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
export default FloatingInput;
