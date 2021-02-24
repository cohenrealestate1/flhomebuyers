// @flow
import styled from "styled-components";
import { FormControlLabel } from "@material-ui/core";

export const FormContainer = styled.form`
  width: 300px;
  border-radius: 4px;
  background-color: gray;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  & .MuiFormControlLabel-label {
    font-weight: 700;
  }
`;
