import { FC, memo, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import UkCard from "@/ui/UkCard/ukCard.component";
import styles from "./purchaseForm.module.scss";
import NumberInput from "@/ui/NumberInput/numberInput.component";
import { InputCallback } from "@/types/ui.types";

interface PurchaseInfoProps {}

const PurchaseInfo: FC<PurchaseInfoProps> = memo(({}) => {
  const [test, setTest] = useState(0);

  const handleNumberChange = (e: InputCallback) => {
    console.log({ e });
    setTest(Number(e.value));
  };
  return (
    <UkCard bodyClass={styles.formCard} title="Purchase Info">
      <div className={styles.inputGrid}>
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
      </div>
    </UkCard>
  );
});

PurchaseInfo.displayName = "PurchaseInfo";
export default PurchaseInfo;
