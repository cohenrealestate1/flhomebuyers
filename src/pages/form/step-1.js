// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";

export const FormStep1 = () => {
  const {
    values: {
      formWide: { email, phoneNumber, address },
    },
  } = useFormikContext();
  return (
    <>
      <TextField
        fieldName="formWide.address"
        label="Property address"
        value={address}
      />
      <PhoneInput
        fieldName="formWide.phoneNumber"
        label="Phone number"
        value={phoneNumber}
      />
      <TextField
        fieldName="formWide.email"
        label="Email address"
        value={email}
      />
    </>
  );
};

export default FormStep1;
