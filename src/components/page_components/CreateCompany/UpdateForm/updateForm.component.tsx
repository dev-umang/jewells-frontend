import { InputCallback } from "@/types/ui.types";
import FloatingInput from "@/ui/FloatingInput/floatingInput.component";
import { Button } from "primereact/button";
import { FC, memo, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { CreateCompanyDTO } from "src/models/compay.model";
import { AtomEditableCompany } from "src/store/auth/company.store";
import styles from "./updateForm.module.scss";

interface UpdateFormProps {
  onSubmit: (cmp: CreateCompanyDTO) => void;
}

const UpdateForm: FC<UpdateFormProps> = memo(({ onSubmit }) => {
  const [cmp, setCmp] = useState({} as CreateCompanyDTO);
  const _cmp = useRecoilValue(AtomEditableCompany);

  useEffect(() => {
    if (_cmp) {
      setCmp(_cmp);
    }

    return () => {};
  }, [_cmp]);

  const handleChange = (e: InputCallback) =>
    setCmp({ ...cmp, [e.name]: e.value });

  return (
    <div className={styles.createFormWrapper}>
      <div className="row">
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <FloatingInput
            value={cmp.name}
            name="name"
            onChange={handleChange}
            label="Company Name"
          />
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <FloatingInput
            onChange={handleChange}
            value={cmp.type}
            name="type"
            label="Company Type"
          />
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <FloatingInput
            value={cmp.gst_number}
            name="gst_number"
            onChange={handleChange}
            label="GST Number"
          />
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <FloatingInput
            value={cmp.email}
            onChange={handleChange}
            name="email"
            label="Company E-mail"
          />
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <FloatingInput
            value={cmp.phone_number}
            onChange={handleChange}
            name="phone_number"
            label="Company Phone No."
          />
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <FloatingInput
            value={cmp.address}
            onChange={handleChange}
            name="address"
            label="Company Address"
          />
        </div>
      </div>
      <Button
        onClick={() => onSubmit(cmp)}
        className="mt-4"
        label="Update Company"
      />
    </div>
  );
});

UpdateForm.displayName = "UpdateForm";
export default UpdateForm;
