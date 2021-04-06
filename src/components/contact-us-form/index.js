// @flow
import { useFormikContext, withFormik } from "formik";
import React from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Form from "../form";
import Input from "../shared/input";
import { EmailInput } from "../shared/inputs";
import PhoneInput from "../shared/phone-input";
import { FormFlexContainer } from "../shared/styled-components";
import Text from "../text";
// import Bottom from "./bottom";
import getInitialValues from "./initial-values";
import handleSubmit from "./on-submit";
import validate from "./validate";

const TopContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 37px;
`

type Props = {
    sendEmailContactUs: Function
};

export const ContactUsForm = (props: Props) => {
    const {values: {email, phoneNumber, firstName, lastName}, errors} = useFormikContext();
    return <Form 
        buttonProps={{
            text: <Text $typography={Typographies.FormSubmitButton} $color={Colors.White} $uppercase>Submit</Text>,
            color: Colors.Blue,
            onClick: () => {}
        }}
        additionalContent={<></>}
        >
        <FormFlexContainer>
            <Input 
                fieldName="firstName"
                value={firstName} 
                placeholder="Your first name"
                label="First Name"
                error={errors.firstName} 
                required={true} 
                flex={true} 
            />
            <Input 
                fieldName="lastName"
                value={lastName} 
                placeholder="Your last name"
                label="Last Name"
                error={errors.lastName} 
                required={true} 
                flex={true} 
            />
        </FormFlexContainer>
        <FormFlexContainer>
            <EmailInput value={email} error={errors.email} />
            <PhoneInput 
                value={phoneNumber}
                required={true}
                flex={true}
                error={errors.phoneNumber}
            />
        </FormFlexContainer>
    </Form>
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit,
    validate
})(ContactUsForm);