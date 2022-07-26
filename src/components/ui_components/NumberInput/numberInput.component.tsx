import { InputCallback, Sizes } from "@/types/ui.types";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { ChangeEvent, FC, memo } from "react";
import styles from "./numberInput.module.scss";

interface NumberInputProps {
  size?: Sizes;
  value: number;
  name?: string;
  type?: string;
  label: string;
  primeIcon?: string;
  onChange: (e: InputCallback) => void;
}

const NumberInput: FC<NumberInputProps> = memo(
  ({ label, primeIcon, size, ...props }) => {
    const handleChange = (e: any) => {
      props.onChange &&
        props.onChange({ name: props.name ?? "", value: e.target.value });
    };
    return (
      <div className={`${styles.inputWrapper} `}>
        <label className={styles.label} htmlFor={label}>{label}</label>
        <InputNumber
          inputId="minmaxfraction"
          value={props.value}
          id={"id"}
          min={0}
          suffix=" gm"
          className={styles.input}
          onValueChange={handleChange}
          mode="decimal"
          minFractionDigits={2}
          maxFractionDigits={2}
        />
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";
export default NumberInput;
