// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";

export const FormStep1 = () => {
  const {
    values: {
      step1: { address, phoneNumber, email },
    },
  } = useFormikContext();
  return (
    <>
      <TextField
        fieldName="step1.address"
        label="Property address"
        value={address}
      />
      <PhoneInput
        fieldName="step1.phoneNumber"
        label="Phone number"
        value={phoneNumber}
      />
      <TextField fieldName="step1.email" label="Email address" value={email} />
    </>
  );
};

export default FormStep1;
