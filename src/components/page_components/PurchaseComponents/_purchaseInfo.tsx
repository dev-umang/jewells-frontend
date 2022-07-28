import { FC, memo, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import UkCard from "@/ui/UkCard/ukCard.component";
import styles from "./purchaseForm.module.scss";
import NumberInput from "@/ui/NumberInput/numberInput.component";
import { InputCallback } from "@/types/ui.types";
import InputField from "@/ui/InputField/inputField.component";
import { Dropdown } from "primereact/dropdown";
import UKDropDown from "@/ui/dropdown/dropdown.component";

interface PurchaseInfoProps {}

const PurchaseInfo: FC<PurchaseInfoProps> = memo(({}) => {
  const [test, setTest] = useState(0);

  const handleNumberChange = (e: InputCallback) => {
    console.log({ e });
    setTest(Number(e.value));
  };

  const onOptionsChange = (e: any) => {
    console.log({ e });
  };

  return (
    <UkCard bodyClass={styles.formCard} title="Purchase Info">
      <div className={styles.inputGrid}>
        <InputField label="Name" placeholder="Enter Name..." />

        <UKDropDown placeholder="Select Quality" label="Quality" />
        <UKDropDown placeholder="Select Quantity" label="Quantity" />

        <NumberInput
          value={test}
          label="Gross Weight"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Net Weight"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Diamond Weight"
          onChange={handleNumberChange}
        />

        <NumberInput
          value={test}
          label="Kundan Weight"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Bracelet Weight"
          onChange={handleNumberChange}
        />
        <NumberInput
          value={test}
          label="Fixed Price"
          onChange={handleNumberChange}
        />

        <NumberInput
          value={test}
          label="Making Charges"
          onChange={handleNumberChange}
        />

        <NumberInput
          value={test}
          label="Westage"
          onChange={handleNumberChange}
        />

        <NumberInput
          value={test}
          label="Diamond Chain"
          onChange={handleNumberChange}
        />

        <NumberInput
          value={test}
          label="Amount"
          onChange={handleNumberChange}
        />

        <NumberInput
          value={test}
          label="Token Amount"
          onChange={handleNumberChange}
        />

        <NumberInput
          value={test}
          label="Token Weight"
          onChange={handleNumberChange}
        />
      </div>
    </UkCard>
  );
});

PurchaseInfo.displayName = "PurchaseInfo";
export default PurchaseInfo;
