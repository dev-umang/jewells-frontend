import { atom, selector } from "recoil";
import { SupplierDTO } from "src/models/supplier.model";
import { SupplierService } from "src/services/suppliers.service";

const SupplierSelector = selector<SupplierDTO[]>({
    key: "supplierSelector",
    get:async () => {
        const {getSuppliers} = SupplierService();
        
        return [];
    }
})

export const AtomSuppliers = atom<SupplierDTO[]>({
  key: "atomSuppliers",
  default: [],
});
