// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";
import FormStep from "./form-step";
import styled from "styled-components";
import { assetUrl } from "fusion-core";
import {
  StyledAdornment,
  FormSideBySideContainer,
} from "../../components/shared/styled-components";
import { Routes } from "../../constants";
import { validateStep1 } from "../../components/form/validate";

const EmailInput = styled(TextField)``;

export const FormStep1 = () => {
  const {
    values: {
      formWide: { email, phoneNumber, address },
    },
    errors,
  } = useFormikContext();
  return (
    <FormStep nextRoute={Routes.FormStep2} validate={validateStep1}>
      <TextField
        fieldName="formWide.address"
        label="Property address"
        value={address}
        adornment={<StyledAdornment src={assetUrl("../../static/house.svg")} />}
        error={errors.address}
      />
      <FormSideBySideContainer>
        <PhoneInput
          fieldName="formWide.phoneNumber"
          label="Phone number"
          value={phoneNumber}
          adornment={
            <StyledAdornment src={assetUrl("../../static/phone.svg")} />
          }
          error={errors.phoneNumber}
        />
        <EmailInput
          fieldName="formWide.email"
          label="Email address"
          value={email}
          adornment={
            <StyledAdornment src={assetUrl("../../static/email.svg")} />
          }
          error={errors.email}
        />
      </FormSideBySideContainer>
    </FormStep>
  );
};

export default FormStep1;
