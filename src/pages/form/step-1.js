// @flow

import React from "react";
import { useFormikContext } from "formik";
import TextField from "../../components/shared/text-field";
import PhoneInput from "../../components/shared/phone-input";
import FormStep from "./form-step";
import styled from "styled-components";

const EmailInputContainer = styled.div`
  margin-left: auto;
`;
const BottomContainer = styled.div`
  display: flex;
`;

export const FormStep1 = () => {
  const {
    values: {
      formWide: { email, phoneNumber, address },
    },
  } = useFormikContext();
  return (
    <FormStep>
      <TextField
        fieldName="formWide.address"
        label="Property address"
        value={address}
      />
      <BottomContainer>
        <PhoneInput
          fieldName="formWide.phoneNumber"
          label="Phone number"
          value={phoneNumber}
        />
        <EmailInputContainer>
          <TextField
            fieldName="formWide.email"
            label="Email address"
            value={email}
          />
        </EmailInputContainer>
      </BottomContainer>
    </FormStep>
  );
};

export default FormStep1;
