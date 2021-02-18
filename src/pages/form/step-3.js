// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";

export const FormStep3 = () => {
  const {
    values: {
      formWide: { email, phoneNumber },
      step3: { firstName, lastName },
    },
  } = useFormikContext();
  return (
    <>
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
      />
      <PhoneInput
        fieldName="formWide.phoneNumber"
        label="Phone number"
        value={phoneNumber}
      />
    </>
  );
};

export default FormStep3;
