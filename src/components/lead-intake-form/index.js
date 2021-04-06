// @flow
import { useFormikContext, withFormik } from "formik";
import React from "react";
import { Colors, Typographies } from "../../constants";
import Form from "../form";
import Pin from "../icons/pin";
import Input from "../shared/input";
import { EmailInput } from "../shared/inputs";
import PhoneInput from "../shared/phone-input";
import { FormFlexContainer } from "../shared/styled-components";
import Text from "../text";
import Bottom from "./bottom";
import getInitialValues from "./initial-values";
import handleSubmit from "./on-submit";
import validate from "./validate";

type Props = {
    sendEmailLead: Function
};

export const LeadIntakeForm = (props: Props) => {
    const {values: {email, phoneNumber, address}, errors} = useFormikContext();
    return <Form 
        buttonProps={{
            text: <Text $typography={Typographies.FormSubmitButton} $color={Colors.White} $uppercase>Get your <Text $inline $underline>cash offer</Text> today!</Text>,
            color: Colors.Blue,
            onClick: () => {}
        }}
        additionalContent={<Bottom />}
        >
        <FormFlexContainer>
            <EmailInput 
                value={email}
                error={errors.email}
            />
        <PhoneInput 
            value={phoneNumber}
            flex={true}
            error={errors.phoneNumber}
            />
        </FormFlexContainer>
        <Input 
            renderStartEnhancer={active => <Pin active={active} />}
            fieldName="address"
            value={address}
            placeholder="Your property address"
            label="Property Address"
            required={true}
            error={errors.address}
            />
        </Form>
};

export default withFormik({
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: getInitialValues,
    handleSubmit,
    validate
})(LeadIntakeForm);