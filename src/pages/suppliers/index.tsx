import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { SupplierService } from "src/services/suppliers.service";
import { AtomSuppliers } from "src/store/auth/supplier.store";

const SellersPage: NextPage = () => {
  const [suppliers, setSuppliers] = useRecoilState(AtomSuppliers);
  const { getSuppliers } = SupplierService();
  const path = useRouter().pathname;

  useEffect(() => {
    getSuppliers({ setSuppliers }).then((res) => {
      console.log({ then: suppliers });
    });
    return () => {};
  }, []);

  console.log({ render: suppliers });

  return (
    <div>
      <Head>
        <title>Sellers Page</title>
      </Head>

      <div className="pageWrapper">
        <Link href={"/suppliers/create"}>
          <Button icon="pi pi-plus" className="mb-3" label="Add New Supplier" />
        </Link>
      </div>
    </div>
  );
};

export default SellersPage;
