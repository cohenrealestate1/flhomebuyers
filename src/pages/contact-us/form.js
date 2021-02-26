// @flow
import React from "react";
import {
  FormContainer,
  FormStepContainer,
} from "../../components/shared/styled-components";
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PhoneNumberInput,
} from "../../components/form/inputs";
import TextField from "../../components/shared/text-field";
import { useFormikContext } from "formik";
import { Button } from "@material-ui/core";
import validate from "./validate";
import { useRPCRedux } from "fusion-plugin-rpc-redux-react";

export const Form = () => {
  const {
    values,
    values: { firstName, lastName, phoneNumber, email, freeFormText },
    errors,
    setSubmitting,
    isSubmitting,
    setErrors,
  } = useFormikContext();
  const sendEmailContactUs = useRPCRedux("sendEmailContactUs");
  const onSubmit = async () => {
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      setSubmitting(true);
      await sendEmailContactUs(values);
      setSubmitting(false);
    }
  };
  return (
    <FormContainer>
      <FormStepContainer>
        <FirstNameInput
          fieldName="firstName"
          value={firstName}
          error={errors.firstName}
        />
        <LastNameInput
          fieldName="lastName"
          value={lastName}
          error={errors.lastName}
        />
        <EmailInput fieldName="email" value={email} error={errors.email} />
        <PhoneNumberInput
          fieldName="phoneNumber"
          value={phoneNumber}
          error={errors.phoneNumber}
        />
        <TextField
          fieldName="freeFormText"
          label="Please leave any questions or comments"
          value={freeFormText}
          multiline={true}
          error={errors.freeFormText}
        />
        <Button type="submit" disabled={isSubmitting} onClick={onSubmit}>
          Submit your questions and comments
        </Button>
      </FormStepContainer>
    </FormContainer>
  );
};

export default Form;
