import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { FC, memo } from "react";
import { useRecoilState } from "recoil";
import api from "src/common/config/api.config";
import { ROUTES } from "src/common/routes/main.routes";
import { CompanyDTO } from "src/models/compay.model";
import { AtomEditableCompany } from "src/store/auth/company.store";
import styles from "./cmpCard.module.scss";

interface CmpCardProps {
  cmp: CompanyDTO;
}

const CmpCard: FC<CmpCardProps> = memo(({ cmp }) => {
  const [selectedCmp, setSelectedCmp] = useRecoilState(AtomEditableCompany);
  const router = useRouter();

  const onCmpEditClick = () => {
    setSelectedCmp(cmp);
    router.push(ROUTES.UPDATE_COMPANY);
  };

  const onManageClick = () => {
    api
      .post("/api/companies/switch_company", { id: cmp.id })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "error") return;
        router.push(`/${ROUTES.COMPANY}`);
      })
      .catch((err) => {
        console.log({ switch_cmp_err0r: err });
      });
  };

  return (
    <div
      className={`${styles.cmpCardWrapper} p-0 col-12 col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12 m-2`}
    >
      <div className={styles.cardHeader}>
        <h4>
          {" "}
          <i
            className={`${styles.verifyIcon} ${
              cmp.is_approved === 0
                ? "bg bg-warning pi pi-info text-dark"
                : "bg bg-success pi pi-check"
            }`}
          ></i>{" "}
          {cmp.name}
        </h4>
        <div>
          <Button
            style={{ height: "25px", width: "25px" }}
            icon="pi pi-pencil"
            className="p-button-rounded p-button-info p-button-text mr-3"
            aria-label="Edit"
            onClick={onCmpEditClick}
          />
          <Button
            style={{ height: "25px", width: "25px" }}
            icon="pi pi-trash"
            className="p-button-rounded p-button-danger p-button-text"
            aria-label="Delete"
          />
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.detailWrapper}>
          <div className={styles.detail}>
            <i className="pi pi-envelope mr-3"></i> {cmp.email}
          </div>
          <div className={styles.detail}>
            <i className="pi pi-phone mr-3"></i> {cmp.phone_number}
          </div>
          <div className={styles.detail}>
            <i className="pi pi-map mr-3"></i> {cmp.address}
          </div>
        </div>
        <div>
          <Button onClick={onManageClick} label="Manage" />
        </div>
      </div>
    </div>
  );
});

CmpCard.displayName = "CmpCard";
export default CmpCard;
