import { InputCallback, Sizes } from "@/types/ui.types";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { ChangeEvent, FC, memo } from "react";
import styles from "./dropdown.module.scss";

interface InputFieldProps {
  size?: Sizes;
  value?: string;
  name?: string;
  type?: string;
  label: string;

  placeholder?: string;
  onChange?: (e: InputCallback) => void;
}

const UKDropDown: FC<InputFieldProps> = memo(({ label, size, ...props }) => {
  const handleChange = (e: any) => {
    props.onChange &&
      props.onChange({ name: props.name ?? "", value: e.target.value });
  };
  return (
    <span className={`${styles.inputWrapper}`}>
      <label className={styles.label}>{label}</label>
      <Dropdown
        value={props.value}
        options={[]}
        onChange={handleChange}
        optionLabel="name"
        filter
        showClear
        className="ukDropdown"
        filterBy="name"
        emptyMessage="No suppliers available!"
        placeholder={props.placeholder}
      />
    </span>
  );
});

UKDropDown.displayName = "UKDropDown";
export default UKDropDown;
