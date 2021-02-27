// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import ZipInput from "../../components/shared/zip-input";
import Select from "../../components/shared/select";
import { StatesOptions, Routes } from "../../constants";
import FormStep from "./form-step";
import { assetUrl } from "fusion-core";
import { FormSideBySideContainer } from "../../components/shared/styled-components";

export const FormStep2 = () => {
  const {
    values: {
      formWide: { address },
      step2: { city, zip, state },
    },
  } = useFormikContext();

  return (
    <FormStep nextRoute={Routes.FormStep3}>
      <FormSideBySideContainer>
        <TextField
          fieldName="formWide.address"
          label="Street address"
          value={address}
          adornmentSrc={assetUrl("../../static/house.svg")}
        />
        <TextField
          fieldName="step2.city"
          label="City"
          value={city}
          adornmentSrc={assetUrl("../../static/city.svg")}
        />
      </FormSideBySideContainer>
      <FormSideBySideContainer>
        <Select
          fieldName="step2.state"
          label="State"
          value={state}
          options={StatesOptions}
          adornmentSrc={assetUrl("../../static/location-pin.svg")}
        />
        <ZipInput
          fieldName="step2.zip"
          label="Zipcode"
          value={zip}
          adornmentSrc={assetUrl("../../static/hashtag.svg")}
        />
      </FormSideBySideContainer>
    </FormStep>
  );
};

export default FormStep2;
