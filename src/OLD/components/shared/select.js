// @flow
import React from "react";
import TextField from "./text-field";

interface Props {
  fieldName: string;
  label: string;
  value: any;
  options: any[];
}

export const Select = (props: Props) => {
  return <TextField select={true} variant="outlined" {...props} />;
};

export default Select;
