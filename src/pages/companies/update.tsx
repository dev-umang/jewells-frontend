import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { ROUTES } from "src/common/routes/main.routes";
import { Fieldset } from "primereact/fieldset";
import { CreateCompanyDTO } from "src/models/compay.model";
import { CompanyService } from "src/services/company.service";
import UpdateForm from "@/pageCom/CreateCompany/UpdateForm/updateForm.component";

const UpdateCompanyPage: NextPage = () => {
  const router = useRouter();
  const { updateCompany } = CompanyService();

  const onUpdateCompany = async (cmp: CreateCompanyDTO) => {
    const res = await updateCompany(cmp);
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
          <UpdateForm onSubmit={onUpdateCompany} />
        </Fieldset>
      </div>
    </div>
  );
};

export default UpdateCompanyPage;
