// @flow
import React from "react";
import { assetUrl } from "fusion-core";
import { StyledAdornment } from "../shared/styled-components";
import TextField from "../shared/text-field";
import PhoneInput from "../shared/phone-input";

type Props = {
  fieldName: string,
  value: any,
  error: any,
};

export const FirstNameInput = (props: Props) => {
  return <TextField label="First name" {...props} />;
};
export const LastNameInput = (props: Props) => {
  return <TextField label="Last name" {...props} />;
};
export const EmailInput = (props: Props) => {
  return (
    <TextField
      {...props}
      label="Email address"
      adornment={<StyledAdornment src={assetUrl("../../static/email.svg")} />}
    />
  );
};
export const PhoneNumberInput = (props: Props) => {
  return (
    <PhoneInput
      label="Phone number"
      {...props}
      adornment={<StyledAdornment src={assetUrl("../../static/phone.svg")} />}
    />
  );
};
