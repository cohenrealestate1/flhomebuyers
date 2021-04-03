// @flow
import {
  InputAdornment, MenuItem, TextField as MaterialTextField
} from "@material-ui/core";
import { useFormikContext } from "formik";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../constants";
import { StyledFormControlLabel } from "./styled-components";

interface Props {
  fieldName: string;
  label: string;
  value: any;
  multiline?: boolean;
  onChange?: Function;
  select?: boolean;
  options?: any[];
  error?: string;
  renderAdornment?: () => ReactNode;
}

const StyledMaterialTextField = styled(MaterialTextField)`
  & .MuiOutlinedInput-root {
    background-color: ${Colors.Gray1};
    border-radius: 10px;
    height: ${(props) => (props.$multiline ? "unset" : "80px")};
    :hover {
      // border: 1px solid ${Colors.Blue};
    }
    border: 1px solid green;
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
  &.MuiInputBase-root {
    border: 3px solid green;
  }

  & .MuiInputBase-formControl {    
    :hover {
      // border: 5px solid blue;
    }

  }
  
  & .MuiTextField-root {
    border: unset;
  }
`;

export const Input = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const {
    fieldName,    label,
    value,
    multiline = false,
    select = false,
    options = [],
    error,
    renderAdornment
  } = props;

  const [active, setActive] = useState(false);

  const onChange = (event) =>
    props.onChange
      ? props.onChange(event)
      : setFieldValue(fieldName, event.target.value, false);

  const InputProps = renderAdornment
    ? {
        startAdornment: (
          <InputAdornment position="start">
            {renderAdornment(active)}
          </InputAdornment>
        ),
      }
    : {};

  return (
    <StyledFormControlLabel
      $select={select}
      control={
        <StyledMaterialTextField
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
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

export default Input;
