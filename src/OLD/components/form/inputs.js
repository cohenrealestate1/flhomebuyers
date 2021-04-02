// @flow
import React from "react";
import { assetUrl } from "fusion-core";
import TextField from "../shared/text-field";
import PhoneInput from "../shared/phone-input";

type Props = {
  fieldName: string,
  value: any,
  error: any,
};

export const FirstNameInput = (props: Props) => {
  return (
    <TextField
      label="First name"
      {...props}
      adornmentSrc={assetUrl("../../static/person.svg")}
    />
  );
};
export const LastNameInput = (props: Props) => {
  return (
    <TextField
      label="Last name"
      {...props}
      adornmentSrc={assetUrl("../../static/person.svg")}
    />
  );
};
export const EmailInput = (props: Props) => {
  return (
    <TextField
      {...props}
      label="Email address"
      adornmentSrc={assetUrl("../../static/email.svg")}
    />
  );
};
export const PhoneNumberInput = (props: Props) => {
  return (
    <PhoneInput
      label="Phone number"
      {...props}
      adornmentSrc={assetUrl("../../static/phone.svg")}
    />
  );
};
