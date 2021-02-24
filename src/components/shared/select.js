// @flow
import React from "react";
import TextField2 from "./text-field";

interface Props {
  fieldName: string;
  label: string;
  value: any;
  options: any[];
}

export const Select = (props: Props) => {
  return <TextField2 select={true} variant="outlined" {...props} />;
};

export default Select;
