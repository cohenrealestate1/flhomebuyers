// @flow
import { withFormik } from "formik";
import React from "react";
import Page from "../../components/page";
import Form from "./form";
import getInitialValues from "./initial-values";
import validate from "./validate";

export const ContactUs = () => {
  return <Page content={<Form />} />;
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit: () => {},
    validate,
  })(ContactUs);
