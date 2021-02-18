/* eslint-disable no-self-assign */
// @flow
import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";
import { useFormikContext } from "formik";

interface Props {
  fieldName: string;
  label: string;
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
  const { setFieldValue } = useFormikContext();
  const { fieldName, label, value } = props;
  return (
    <MaterialTextField
      label={label}
      onChange={(event) =>
        setFieldValue(fieldName, phoneFormat(event.target.value), false)
      }
      value={value}
    />
  );
};

export default PhoneInput;
