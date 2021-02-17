// @flow

import React from "react";
import { FormContainer } from "../../components/shared/styled-components";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";

export const FormStep1 = () => {
  // const { values } = useFormik();
  // const {
  //   step1: { address, phoneNumber, email },
  // } = values;

  // console.log(address, phoneNumber, email);

  // return (
  //   <FormContainer>
  //     <TextField id="step1.address" label="Property address" />
  //   </FormContainer>
  // );
  return "Step 1!";
};

export default FormStep1;
