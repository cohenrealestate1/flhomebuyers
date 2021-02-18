// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import ZipInput from "../../components/shared/zip-input";
import Select from "../../components/shared/select";
import { StatesOptions } from "../../constants/states";

export const FormStep2 = () => {
  const {
    values: {
      formWide: { address },
      step2: { city, zip, state },
    },
  } = useFormikContext();

  return (
    <>
      <TextField
        fieldName="formWide.address"
        label="Street address"
        value={address}
      />
      <TextField fieldName="step2.city" label="City" value={city} />
      <Select
        fieldName="step2.state"
        label="State"
        value={state}
        options={StatesOptions}
      />
      <ZipInput fieldName="step2.zip" label="Zipcode" value={zip} />
    </>
  );
};

export default FormStep2;
