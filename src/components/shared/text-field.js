// @flow
import React, { ReactNode } from "react";
import {
  TextField as MaterialTextField,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
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
  adornment?: ReactNode;
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

export const TextField = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const {
    fieldName,
    label,
    value,
    multiline = false,
    select = false,
    options = [],
    adornment,
  } = props;
  const onChange = (event) =>
    props.onChange
      ? props.onChange(event)
      : setFieldValue(fieldName, event.target.value, false);

  const InputProps = adornment
    ? {
        startAdornment: (
          <InputAdornment position="start">{adornment}</InputAdornment>
        ),
      }
    : {};

  return (
    <StyledFormControlLabel
      control={
        <StyledMaterialTextField
          value={value}
          variant="outlined"
          select={select}
          multiline={multiline}
          onChange={onChange}
          InputProps={InputProps}
        >
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
