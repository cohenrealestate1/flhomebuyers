// @flow
import React from "react";
import { TextField as MaterialTextField, MenuItem } from "@material-ui/core";
import { useFormikContext } from "formik";
import styled from "styled-components";
import { StyledFormControlLabel } from "./styled-components";

interface Props {
  fieldName: string;
  label: string;
  value: any;
  multiline?: boolean;
  onChange?: Function;
  select?: boolean;
  options?: any[];
}

const StyledMaterialTextField = styled(MaterialTextField)`
  & .MuiOutlinedInput-root {
    background-color: white;
    border-radius: 0;
    height: 42px;
  }

  & .MuiInputBase-root {
    width: 200px;
  }
`;

// TODO Add adornment
export const TextField = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const {
    fieldName,
    label,
    value,
    multiline = false,
    select = false,
    options = [],
  } = props;
  const onChange = (event) =>
    props.onChange
      ? props.onChange(event)
      : setFieldValue(fieldName, event.target.value, false);

  return (
    <StyledFormControlLabel
      control={
        <StyledMaterialTextField
          value={value}
          variant="outlined"
          select={select}
          multiline={multiline}
          onChange={onChange}
        >
          {" "}
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </StyledMaterialTextField>
      }
      label={label}
    />
  );
};

export default TextField;
