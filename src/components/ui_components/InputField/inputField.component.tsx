import { InputCallback, Sizes } from "@/types/ui.types";
import { InputText } from "primereact/inputtext";
import { ChangeEvent, FC, memo } from "react";
import styles from "./inputField.module.scss";

interface InputFieldProps {
  size?: Sizes;
  value?: string;
  name?: string;
  type?: string;
  label: string;
  placeholder?: string;
  onChange?: (e: InputCallback) => void;
}

const InputField: FC<InputFieldProps> = memo(({ label, size, ...props }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange &&
      props.onChange({ name: props.name ?? "", value: e.target.value });
  };
  return (
    <span className={`${styles.inputWrapper}`}>
      <label className={styles.label}>{label}</label>
      <InputText
        id={label}
        className={`${styles.input} ${styles[size ?? "full"]}`}
        value={props.value ?? ""}
        onChange={handleChange}
        placeholder={props.placeholder}
        type={props.type ?? "text"}
      />
    </span>
  );
});

InputField.displayName = "FloatingInput";
export default InputField;
