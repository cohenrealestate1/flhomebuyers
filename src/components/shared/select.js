// @flow
import React from "react";
import { Select as MaterialSelect, MenuItem } from "@material-ui/core";
import { useFormikContext } from "formik";

interface Props {
  fieldName: string;
  label: string;
  value: any;
  options: { [key: string]: string };
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
      {Object.keys(options).map((optionKey) => (
        <MenuItem key={options[optionKey]} value={options[optionKey]}>
          {options[optionKey]}
        </MenuItem>
      ))}
    </MaterialSelect>
  );
};

export default Select;
