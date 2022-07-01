import UkCard from "@/ui/UkCard/ukCard.component";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import React, { FC, memo } from "react";
import styles from "./purchaseForm.module.scss";
import { Dropdown } from "primereact/dropdown";
interface SupplierInfoProps {}

const SupplierInfo: FC<SupplierInfoProps> = memo(({}) => {
  const onOptionsChange = (e: any) => {
    console.log({ e });
  };
  return (
    <UkCard bodyClass={styles.formCard} title="Supplier Info">
      <div className={styles.inputGrid}>
        <Dropdown
          value={""}
          options={[]}
          onChange={onOptionsChange}
          optionLabel="name"
          filter
          showClear
          className="ukDropdown"
          filterBy="name"
          emptyMessage="No suppliers available!"
          placeholder="Select Suppplier"
        />
        <Dropdown
          value={""}
          options={[]}
          className="ukDropdown"
          onChange={onOptionsChange}
          optionLabel="name"
          filter
          showClear
          filterBy="name"
          emptyMessage="Types Not Available!"
          placeholder="Select Type"
        />
        <Dropdown
          value={""}
          options={[]}
          className="ukDropdown"
          onChange={onOptionsChange}
          optionLabel="name"
          filter
          showClear
          filterBy="name"
          emptyMessage="Prices Not Available"
          placeholder="Prices"
        />
      </div>
    </UkCard>
  );
});

SupplierInfo.displayName = "SupplierInfo";
export default SupplierInfo;
