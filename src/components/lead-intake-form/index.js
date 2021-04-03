// @flow
import { useFormikContext, withFormik } from "formik";
import React from "react";
import Form from "../form";
import Envelope from "../icons/envelope";
import Input from "../shared/input";
import getInitialValues from "./initial-values";

export const LeadIntakeForm = () => {
    const {values: {email}} = useFormikContext();
    return <Form>
        <Input fieldName="email" label="Email address" value={email} renderAdornment={active => <Envelope active={active} />} />
        </Form>
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit: () => {},
    validate: () => {}
})(LeadIntakeForm);