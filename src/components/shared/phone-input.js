/* eslint-disable no-self-assign */
// @flow
import React from "react";
import Phone from "../icons/phone";
import Input from "./input";

interface Props {
  fieldName: string;
  value: any;
}

function phoneFormat(input) {
  // Strip all characters from the input except digits
  input = input.replace(/\D/g, "");

  // Trim the remaining input to ten characters, to preserve phone number format
  input = input.substring(0, 10);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if (size == 0) {
    input = input;
  } else if (size < 4) {
    input = "(" + input;
  } else if (size < 7) {
    input = "(" + input.substring(0, 3) + ") " + input.substring(3, 6);
  } else {
    input =
      "(" +
      input.substring(0, 3) +
      ") " +
      input.substring(3, 6) +
      "-" +
      input.substring(6, 10);
  }
  return input;
}

export const PhoneInput = (props: Props) => {
  return (
    <Input
        fieldName="phoneNumber"
        placeholder="Your phone number"
        label="Phone Number"
        required={true}
        renderStartEnhancer={active => <Phone active={active} />}
        onChangeMapper={phoneFormat}
        type="tel"
        inputMode="numeric"
      {...props}
    />
  );
};

export default PhoneInput;
