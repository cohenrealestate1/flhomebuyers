// @flow
import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";
import { useFormikContext } from "formik";

interface Props {
  fieldName: string;
  label: string;
  value: any;
}

export const TextField = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const { fieldName, label, value } = props;
  return (
    <MaterialTextField
      label={label}
      value={value}
      onChange={(event) => setFieldValue(fieldName, event.target.value, false)}
    />
  );
};

export default TextField;
