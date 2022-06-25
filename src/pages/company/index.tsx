import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { ROUTES } from "src/common/routes/main.routes";

const CmpManagePage: NextPage = () => {
  const router = useRouter();
  const { cmpId } = router.query;
  return (
    <div>
      <Head>
        <title>Jewellls - Company Management</title>
      </Head>

      <div className=" p-3">
        <Button
          label="Back To Companies"
          onClick={() => router.push(ROUTES.COMPANIES)}
          className="p-button p-button-text"
          icon="pi pi-arrow-left"
        />

        <h1 className="p-2">Company {cmpId}</h1>
      </div>
    </div>
  );
};

export default CmpManagePage;
