import React, { FC, memo, useState } from "react";
import styles from "./purchaseForm.module.scss";
import GSTInfo from "./_gstInfo";
import PurchaseInfo from "./_purchaseInfo";
import SupplierInfo from "./_supplierInfo";
import { Checkbox } from "primereact/checkbox";

interface PurchaseFormProps {}

const PurchaseForm: FC<PurchaseFormProps> = memo(({}) => {
  const [isGST, setIsGST] = useState(false);

  return (
    <form className={styles.formContainer}>
      <h1 className="mb-3">Make A Purchase</h1>
      <SupplierInfo />
      <PurchaseInfo />
      <div className={styles.checkboxWrapper}>
        <Checkbox
          inputId="cb3"
          value="isGST"
          onChange={() => setIsGST(!isGST)}
          checked={isGST}
        ></Checkbox>
        <label htmlFor="cb3" className={styles.checkLabel}>
          GST Availabel
        </label>
      </div>
      {isGST && <GSTInfo />}
    </form>
  );
});

PurchaseForm.displayName = "PurchaseForm";
export default PurchaseForm;
