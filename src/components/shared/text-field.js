// @flow
import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";
import { useFormikContext } from "formik";

interface Props {
  fieldName: string;
  label: string;
}

export const TextField = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const { fieldName, label } = props;
  return (
    <MaterialTextField
      id="outlined"
      label={label}
      onChange={(event) => setFieldValue(fieldName, event.target.value, false)}
    />
  );
};

export default TextField;
