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
  error?: string;
}

const StyledMaterialTextField = styled(MaterialTextField)`
  & .MuiOutlinedInput-root {
    background-color: white;
    border-radius: 0;
    height: ${(props) => (props.$multiline ? "unset" : "42px")};
  }

  & .MuiFormHelperText-contained {
    margin-left: 0;
    margin-right: 0;
  }

  textarea {
    height: calc(42px * 4);
  }

  &.MuiFormControl-root {
    width: 100%;
  }

  & .MuiFormControl-root {
    width: 100%;
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
    error,
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
          error={Boolean(error)}
          helperText={error || ""}
          multiline={multiline}
          $multiline={multiline}
          rows={4}
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
