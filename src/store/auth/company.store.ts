import { atom, selector } from "recoil";
import { CompanyDTO } from "src/models/compay.model";
import { CompanyService } from "src/services/company.service";

const SelectorCompanies = selector<CompanyDTO[]>({
  key: "selectorCompanyList",
  get: async () => {
    const { getAllCompanies } = CompanyService();
    const companies = await getAllCompanies();
    return companies;
  },
});

export const AtomCompanies = atom<CompanyDTO[]>({
  key: "atomCompanyList",
  default: SelectorCompanies,
});

export const AtomEditableCompany = atom<CompanyDTO | null>({
  key: "atomEditableCompany",
  default: null,
});
