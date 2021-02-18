// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import ZipInput from "../../components/shared/zip-input";
import Select from "../../components/shared/select";
import { States } from "../../constants/states";

export const FormStep2 = () => {
  const {
    values: {
      step2: { address, city, zip, state },
    },
  } = useFormikContext();

  return (
    <>
      <TextField
        fieldName="step2.address"
        label="Street address"
        value={address}
      />
      <TextField fieldName="step2.city" label="City" value={city} />
      <Select
        fieldName="step2.state"
        label="State"
        value={state}
        options={States}
      />
      <ZipInput fieldName="step2.zip" label="Zipcode" value={zip} />
    </>
  );
};

export default FormStep2;
