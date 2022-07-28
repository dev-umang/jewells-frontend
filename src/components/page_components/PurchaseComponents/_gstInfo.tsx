import { FC, memo, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import UkCard from "@/ui/UkCard/ukCard.component";
import styles from "./purchaseForm.module.scss";
import NumberInput from "@/ui/NumberInput/numberInput.component";
import { InputCallback } from "@/types/ui.types";
import InputField from "@/ui/InputField/inputField.component";
import { Dropdown } from "primereact/dropdown";
import UKDropDown from "@/ui/dropdown/dropdown.component";
import { FaPlus } from "react-icons/fa";

import { InputSwitch } from "primereact/inputswitch";

interface GSTInfoProps {}

const GSTInfo: FC<GSTInfoProps> = memo(({}) => {
  const [test, setTest] = useState(0);

  const handleNumberChange = (e: InputCallback) => {
    console.log({ e });
    setTest(Number(e.value));
  };

  const onOptionsChange = (e: any) => {
    console.log({ e });
  };

  const InfoToggle = (label: string) => {
    return (
      <div className={styles.toggle}>
        <InputSwitch
          checked={false}
          onChange={(e) => {
            e.value = true;
          }}
        />
        <label>{label}</label>
      </div>
    );
  };

  return (
    <UkCard bodyClass={styles.formCard} title="GST Info">
      <div className={styles.inputGrid}>
        <NumberInput
          value={test}
          label="Total Taxable Price"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Total Amount"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Taxable XXX"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Total Weight"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Total Fine Weight"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Total Fine XXX"
          onChange={handleNumberChange}
        />
      </div>
      <div className={styles.billsWrapper}>
        <button className={`${styles.billsBtn} p-button`}>
          {/* <span className="pi pi-plus"></span> */}
          <FaPlus />
        </button>
        <div className={"grid-3"}>
          <UKDropDown label="Options" placeholder="Select Options" />
        </div>
        <div className={styles.togglesWrapper}>
          {InfoToggle("Gross Weight")}
          {InfoToggle("Diamond Weight")}
          {InfoToggle("Kundan Weight")}
          {InfoToggle("Bracelet Weight")}
          {InfoToggle("Fixed Price")}
          {InfoToggle("Mixed Changes")}
          {InfoToggle("Wastage Charges")}
        </div>
      </div>
    </UkCard>
  );
});

GSTInfo.displayName = "PurchaseInfo";
export default GSTInfo;
