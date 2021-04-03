// @flow
import { useFormikContext, withFormik } from "formik";
import React from "react";
import styled from "styled-components";
import { Colors, Typographies, Uppercase } from "../../constants";
import Form from "../form";
import Envelope from "../icons/envelope";
import Pin from "../icons/pin";
import Input from "../shared/input";
import PhoneInput from "../shared/phone-input";
import getInitialValues from "./initial-values";

const TopContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 37px;
`

const ButtonText = styled.div`
    display: inline;
    ${Typographies.FormSubmitButton}
    color: ${Colors.White}
    ${Uppercase}
`
const Underline = styled.div`
    display: inline;
    text-decoration: underline;
`

export const LeadIntakeForm = () => {
    const {values: {email, phoneNumber, address}} = useFormikContext();
    return <Form buttonProps={{
        text: <ButtonText>Get your <Underline>cash offer</Underline> today!</ButtonText>,
        color: Colors.Blue,
        onClick: () => {}
    }}>
        <TopContainer>
        <Input 
            renderStartEnhancer={active => <Envelope active={active} />}
            fieldName="email"
            value={email}
            placeholder="Your email address"
            label="Email address"
            required={true}
            flex={true}
            />
        <PhoneInput 
            fieldName="phoneNumber"
            value={phoneNumber}
            placeholder="Your phone number"
            label="Phone Number"
            required={true}
            flex={true}
            />
        </TopContainer>
        <Input 
            renderStartEnhancer={active => <Pin active={active} />}
            fieldName="address"
            value={address}
            placeholder="Your property address"
            label="Property Address"
            required={true}
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