// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";

export const FormStep1 = () => {
  const {
    values: {
      step1: { phoneNumber },
    },
  } = useFormikContext();
  return (
    <>
      <TextField fieldName="step1.address" label="Property address" />
      <PhoneInput
        fieldName="step1.phoneNumber"
        label="Phone number"
        value={phoneNumber}
      />
    </>
  );
};

export default FormStep1;
