import { ErrorType } from "@/types/dynamic.types";
import { InputCallback } from "@/types/ui.types";
import FloatingInput from "@/ui/FloatingInput/floatingInput.component";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React, { FC, memo, useState } from "react";
import { SupplierDTO } from "src/models/supplier.model";
import styles from "./addSupplierForm.module.scss";

interface AddSupplierFormProps {
  onSubmit: (s: SupplierDTO) => void;
  loading: boolean;
  errors: ErrorType;
}

const AddSupplierForm: FC<AddSupplierFormProps> = memo(
  ({ onSubmit, errors, loading }) => {
    const [supplier, setSupplier] = useState({} as SupplierDTO);

    const handleChange = (e: InputCallback) => {
      setSupplier({ ...supplier, [e.name]: e.value });
    };

    return (
      <Card>
        <div className={styles.formGrid}>
          <FloatingInput
            label="User Name"
            name="username"
            value={supplier.username}
            onChange={handleChange}
          />
          <FloatingInput
            label="Supplier Name"
            name="first_name"
            value={supplier.first_name}
            onChange={handleChange}
          />
          <FloatingInput
            label="E-Mail"
            name="email"
            value={supplier.email}
            onChange={handleChange}
          />
          <FloatingInput
            label="Phone Number"
            name="phone_number"
            value={supplier.phone_number}
            onChange={handleChange}
          />
          <FloatingInput
            label="Brand Name"
            name="brand_name"
            value={supplier.brand_name}
            onChange={handleChange}
          />
          <FloatingInput
            label="Village"
            name="village_id"
            value={supplier.village_id?.toString() ?? ""}
            onChange={handleChange}
          />
          <FloatingInput
            label="Address"
            name="address"
            value={supplier.address}
            onChange={handleChange}
          />
        </div>
        <Button
          onClick={() => onSubmit(supplier)}
          label="Add Supplier"
          type="submit"
          className="mt-4"
          icon="pi pi-plus"
          loading={loading}
        />
      </Card>
    );
  }
);

AddSupplierForm.displayName = "AddSupplierForm";
export default AddSupplierForm;
