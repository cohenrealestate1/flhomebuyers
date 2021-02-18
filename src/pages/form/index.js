// @flow
import React from "react";
import Page from "../../components/page";
import { withFormik, useFormikContext } from "formik";
import getInitialValues from "../../components/form/initial-values";
import Step1 from "./step-1";
import Step2 from "./step-2";
import { FormContainer } from "./styled-components";

export const Form = () => {
  const {
    values: { step },
  } = useFormikContext();
  const getContent = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
      default:
        return <Step2 />;
    }
  };
  return <FormContainer>{getContent()}</FormContainer>;
};

export default withFormik({
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: getInitialValues,
  handleSubmit: () => {},
  validate: () => {},
})(Form);
