export interface CompanyDTO {
  address: string;
  company_id: string;
  created_at: string;
  created_by: 1;
  date_of_establishment: string;
  deleted_at?: string;
  email: string;
  gst_number: string;
  id: 1;
  is_approved: 0;
  l_p?: string;
  logo?: string;
  logo_full?: string;
  name: string;
  phone_number: string;
  type: string;
  updated_at: string;
  verified_at?: string;
  verified_by?: string;
  website?: string;
}

export interface CreateCompanyDTO {
  name: string;
  type: string;
  gst_number: string;
  email: string;
  phone_number: string;
  address: string;
  date_of_establishment: string;
}
