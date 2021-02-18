// @flow

import React from "react";
// import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";

export const FormStep1 = () => {
  return (
    <>
      <TextField fieldName="step1.address" label="Property address" />
    </>
  );
};

export default FormStep1;
