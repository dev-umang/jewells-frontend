import AddSupplierForm from "@/pageCom/SupplierComponents/component/addSupplierForm.component";
import { ErrorType } from "@/types/dynamic.types";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "primereact/button";
import { useState } from "react";
import { ROUTES } from "src/common/routes/main.routes";
import { SupplierDTO } from "src/models/supplier.model";
import { SupplierService } from "src/services/suppliers.service";

const CreateSupplierPage: NextPage = () => {
  const { addNewSupplier } = SupplierService();
  const [errors, setErrors] = useState<ErrorType>({});
  const [loading, setLoading] = useState(false);

  const handleAddSupplier = async (supplier: SupplierDTO) => {
    const res = await addNewSupplier({ supplier, setErrors, setLoading });
    console.log({ res });
  };

  return (
    <div>
      <Head>
        <title>Create Supplier</title>
      </Head>

      <div className="pageWrapper">
        <Link href={ROUTES.SUPPLIERS}>
          <Button
            label="Back to Suppliers"
            icon="pi pi-arrow-left"
            className="p-button-text"
          />
        </Link>
        <div className="p-3">
          <h1>Add New Supplier</h1>
          <span>
            Fill out the form about the supplier and click on continue.
          </span>
        </div>

        <AddSupplierForm
          errors={errors}
          loading={loading}
          onSubmit={handleAddSupplier}
        />
      </div>
    </div>
  );
};

export default CreateSupplierPage;
