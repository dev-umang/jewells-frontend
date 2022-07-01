import PurchaseForm from "@/pageCom/PurchaseComponents/purchaseForm.component";
import type { NextPage } from "next";
import Head from "next/head";

const PurchasePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Purchase Page</title>
      </Head>

      <div className="pageWrapper">
        <PurchaseForm />
      </div>
    </div>
  );
};

export default PurchasePage;
