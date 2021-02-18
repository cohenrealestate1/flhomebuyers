// @flow
import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";
import { useFormikContext } from "formik";

interface Props {
  fieldName: string;
  label: string;
  value: any;
  multiline?: boolean;
}

export const TextField = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const { fieldName, label, value, multiline = false } = props;
  return (
    <MaterialTextField
      label={label}
      value={value}
      multiline={multiline}
      onChange={(event) => setFieldValue(fieldName, event.target.value, false)}
    />
  );
};

export default TextField;
