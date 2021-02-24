// @flow
import React from "react";
import {
  Select as MaterialSelect,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { useFormikContext } from "formik";
import { StyledFormControlLabel } from "./styled-components";
import styled from "styled-components";
import TextField2 from "./text-field";

const StyledMaterialSelect = styled(MaterialSelect)`
  &.MuiInputBase-root {
    background-color: white;
  }
  &.MuiInput-underline:before {
    border-bottom: unset;
  }
`;

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
    <TextField2
      label={label}
      select={true}
      value={value}
      variant="outlined"
      options={options}
      onChange={(event) => setFieldValue(fieldName, event.target.value, false)}
    />
  );
};

export default Select;
