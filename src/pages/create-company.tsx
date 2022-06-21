import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { ROUTES } from "src/common/routes/main.routes";
import { Fieldset } from "primereact/fieldset";
import CreateForm from "@/pageCom/CreateCompany/CreateForm/createForm.component";
import { CreateCompanyDTO } from "src/models/compay.model";
import { CompanyService } from "src/services/company.service";
import { format } from "date-fns";

const CreateCompanyPage: NextPage = () => {
  const router = useRouter();
  const { createCompany } = CompanyService();
  const onCreateCompany = async (cmp: CreateCompanyDTO) => {
    cmp.date_of_establishment = format(new Date(), "yyyy-MM-dd");
    const res = await createCompany(cmp);
    if (res) {
      console.log({ res });
      router.push(ROUTES.COMPANIES);
    } else {
      console.log("Something Went Wrong");
    }
  };

  return (
    <div>
      <Head>
        <title>Jewells - Create Company</title>
      </Head>

      <div className="container py-3">
        <Button
          label="Back To Companies"
          icon="pi pi-arrow-left"
          className="p-button-text"
          onClick={() => router.push(ROUTES.COMPANIES)}
        />
        <Fieldset legend="Register Your Company">
          <CreateForm onSubmit={onCreateCompany} />
        </Fieldset>
      </div>
    </div>
  );
};

export default CreateCompanyPage;
