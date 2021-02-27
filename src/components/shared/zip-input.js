/* eslint-disable no-self-assign */
// @flow
import React from "react";
import { useFormikContext } from "formik";
import TextField from "./text-field";

interface Props {
  fieldName: string;
  label: string;
  value: any;
}

function zipFormat(input) {
  // Strip all characters from the input except digits
  input = input.replace(/\D/g, "");

  // Trim the remaining input to ten characters, to preserve zip code format
  input = input.substring(0, 9);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if (size == 0) {
    input = input;
  } else if (size <= 5) {
    input = input;
  } else {
    input = input.substring(0, 5) + "-" + input.substring(5, 9);
  }
  return input;
}

export const ZipInput = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const { fieldName } = props;
  return (
    <TextField
      {...props}
      onChange={(event) =>
        setFieldValue(fieldName, zipFormat(event.target.value), false)
      }
    />
  );
};

export default ZipInput;
