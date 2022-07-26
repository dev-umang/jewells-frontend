import React, { FC, memo } from "react";
import styles from "./purchaseForm.module.scss";
import PurchaseInfo from "./_purchaseInfo";
import SupplierInfo from "./_supplierInfo";

interface PurchaseFormProps {}

const PurchaseForm: FC<PurchaseFormProps> = memo(({}) => {
  return (
    <form className={styles.formContainer}>
      <h1 className="mb-3">Make A Purchase</h1>
      <SupplierInfo />
      <PurchaseInfo />
    </form>
  );
});

PurchaseForm.displayName = "PurchaseForm";
export default PurchaseForm;
