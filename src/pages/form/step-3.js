// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";
import FormStep from "./form-step";
import { assetUrl } from "fusion-core";
import { StyledAdornment } from "./styled-components";
import { Routes } from "../../constants/routes";
import { validateStep3 } from "../../components/form/validate";

export const FormStep3 = () => {
  const {
    values: {
      formWide: { email, phoneNumber },
      step3: { firstName, lastName },
    },
    errors,
  } = useFormikContext();
  return (
    <FormStep nextRoute={Routes.FormStep4} validate={validateStep3}>
      <TextField
        fieldName="step3.firstName"
        label="First name"
        value={firstName}
        error={errors.firstName}
      />
      <TextField
        fieldName="step3.lastName"
        label="Last name"
        value={lastName}
        error={errors.lastName}
      />
      <TextField
        fieldName="formWide.email"
        label="Email address"
        value={email}
        error={errors.email}
        adornment={<StyledAdornment src={assetUrl("../../static/email.svg")} />}
      />
      <PhoneInput
        fieldName="formWide.phoneNumber"
        label="Phone number"
        value={phoneNumber}
        error={errors.phoneNumber}
        adornment={<StyledAdornment src={assetUrl("../../static/phone.svg")} />}
      />
    </FormStep>
  );
};

export default FormStep3;
