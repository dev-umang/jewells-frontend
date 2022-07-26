import api from "src/common/config/api.config";
import { SupplierDTO } from "src/models/supplier.model";

interface GetSuppliersParams {
  setSuppliers: (s: SupplierDTO[]) => void;
}

interface AddNewSupplierParams {
  supplier: SupplierDTO;
  setErrors: (e: any) => void;
  setLoading: (b: boolean) => void;
}

export const SupplierService = () => {
  const getSuppliers = async ({ setSuppliers }: GetSuppliersParams) => {
    const res = await api.get("/api/suppliers");
    if (res.data.errors) setSuppliers([]);
    setSuppliers(res.data.result);
  };

  //   Creating new supplier
  const addNewSupplier = async ({
    supplier,
    setLoading,
    setErrors,
  }: AddNewSupplierParams) => {
    setLoading(true);
    const res = await api.post("/api/suppliers/create", supplier);
    debugger;
    if (res.data.error) {
      setErrors(res.data.error);
      console.log(res.data.error);
      setLoading(false);
      return null;
    }
    setErrors({});
    console.log(res.data);
    setLoading(false);
    return res;
  };
  return { getSuppliers, addNewSupplier };
};
