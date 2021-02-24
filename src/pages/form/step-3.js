// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";
import FormStep from "./form-step";
import { assetUrl } from "fusion-core";
import { StyledAdornment } from "./styled-components";

export const FormStep3 = () => {
  const {
    values: {
      formWide: { email, phoneNumber },
      step3: { firstName, lastName },
    },
  } = useFormikContext();
  return (
    <FormStep>
      <TextField
        fieldName="step3.firstName"
        label="First name"
        value={firstName}
      />
      <TextField
        fieldName="step3.lastName"
        label="Last name"
        value={lastName}
      />
      <TextField
        fieldName="formWide.email"
        label="Email address"
        value={email}
        adornment={<StyledAdornment src={assetUrl("../../static/email.svg")} />}
      />
      <PhoneInput
        fieldName="formWide.phoneNumber"
        label="Phone number"
        value={phoneNumber}
        adornment={<StyledAdornment src={assetUrl("../../static/phone.svg")} />}
      />
    </FormStep>
  );
};

export default FormStep3;
