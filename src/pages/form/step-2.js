// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import ZipInput from "../../components/shared/zip-input";
import Select from "../../components/shared/select";
import { StatesOptions } from "../../constants/states";
import FormStep from "./form-step";
import { assetUrl } from "fusion-core";
import { StyledAdornment } from "../../components/shared/styled-components";
import { Routes } from "../../constants/routes";

export const FormStep2 = () => {
  const {
    values: {
      formWide: { address },
      step2: { city, zip, state },
    },
  } = useFormikContext();

  return (
    <FormStep nextRoute={Routes.FormStep3}>
      <TextField
        fieldName="formWide.address"
        label="Street address"
        value={address}
        adornment={<StyledAdornment src={assetUrl("../../static/house.svg")} />}
      />
      <TextField fieldName="step2.city" label="City" value={city} />
      <Select
        fieldName="step2.state"
        label="State"
        value={state}
        options={StatesOptions}
      />
      <ZipInput fieldName="step2.zip" label="Zipcode" value={zip} />
    </FormStep>
  );
};

export default FormStep2;
