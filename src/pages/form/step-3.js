// @flow

import React from "react";
import { useFormikContext } from "formik";
import FormStep from "./form-step";
import { Routes } from "../../constants";
import { validateStep3 } from "../../components/form/validate";
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PhoneNumberInput,
} from "../../components/form/inputs";
import { FormSideBySideContainer } from "../../components/shared/styled-components";

export const FormStep3 = () => {
  const {
    values: {
      formWide: { email, phoneNumber },
      step3: { firstName, lastName },
    },
    errors,
  } = useFormikContext();
  return (
    <FormStep nextRoute={Routes.FormStep4} validate={validateStep3}>
      <FormSideBySideContainer>
        <FirstNameInput
          fieldName="step3.firstName"
          value={firstName}
          error={errors.firstName}
        />
        <LastNameInput
          fieldName="step3.lastName"
          value={lastName}
          error={errors.lastName}
        />
      </FormSideBySideContainer>
      <FormSideBySideContainer>
        <EmailInput
          fieldName="formWide.email"
          value={email}
          error={errors.email}
        />
        <PhoneNumberInput
          fieldName="formWide.phoneNumber"
          value={phoneNumber}
          error={errors.phoneNumber}
        />
      </FormSideBySideContainer>
    </FormStep>
  );
};

export default FormStep3;
