// @flow
import React from "react";
import Page from "../../components/page";
import { withFormik } from "formik";
import getInitialValues from "./initial-values";
import validate from "./validate";
import Form from "./form";
import { compose } from "recompose";

export const ContactUs = () => {
  return <Page content={<Form />} />;
};

export default compose(
  withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit: () => {},
    validate,
  })
)(ContactUs);
