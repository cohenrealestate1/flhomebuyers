// @flow
import React from "react";
import { Select as MaterialSelect, MenuItem } from "@material-ui/core";
import { useFormikContext } from "formik";

interface Props {
  fieldName: string;
  label: string;
  value: any;
  options: any[];
}

export const Select = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const { fieldName, label, value, options } = props;
  return (
    <MaterialSelect
      label={label}
      value={value}
      onChange={(event) => setFieldValue(fieldName, event.target.value, false)}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </MaterialSelect>
  );
};

export default Select;
