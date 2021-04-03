// @flow
import { useFormikContext, withFormik } from "formik";
import React from "react";
import Form from "../form";
import Envelope from "../icons/envelope";
import Pin from "../icons/pin";
import Input from "../shared/input";
import PhoneInput from "../shared/phone-input";
import getInitialValues from "./initial-values";

export const LeadIntakeForm = () => {
    const {values: {email, phoneNumber, address}} = useFormikContext();
    return <Form>
        <Input 
            renderStartEnhancer={active => <Envelope active={active} />}
            fieldName="email"
            value={email}
            placeholder="Your email address"
            />
        <PhoneInput 
            fieldName="phoneNumber"
            value={phoneNumber}
            placeholder="Your phone number"
            />
        <Input 
            renderStartEnhancer={active => <Pin active={active} />}
            fieldName="address"
            value={address}
            placeholder="Your property address"
            />
        </Form>
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit: () => {},
    validate: () => {}
})(LeadIntakeForm);