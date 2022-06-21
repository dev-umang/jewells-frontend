import api from "src/common/config/api.config";
import { CompanyDTO, CreateCompanyDTO } from "src/models/compay.model";
import { getCSRF } from "./csrf.service";

export const CompanyService = () => {
  // show all companies
  const getAllCompanies = async () => {
    const _csrf = await getCSRF();
    if (_csrf.headers) {
      const res = await api.get("/api/companies");
      const _companies: CompanyDTO[] = (res.data?.result as CompanyDTO[]) ?? [];
      return _companies;
    }
    return [];
  };

  // Create new company.
  const createCompany = async (cmp: CreateCompanyDTO) => {
    const _csrf = await getCSRF();
    if (_csrf.headers) {
      const res = await api.post("/api/companies/create", cmp);
      if (res.data.error) {
        console.log({ createError: res.data.error });
        return null;
      }
      return res.data;
    }
  };

  const updateCompany = async (cmp: CreateCompanyDTO) => {
    return [];
  };

  return { getAllCompanies, createCompany, updateCompany };
};
