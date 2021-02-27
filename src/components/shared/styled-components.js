// @flow
import styled from "styled-components";
import { FormControlLabel, Button } from "@material-ui/core";

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 100%;
  }
  & .MuiFormControlLabel-label {
    font-weight: 700;
  }
`;

export const FormStepContainer = styled.div`
  padding: 32px;
  border: 1px solid #e2e2e2;
  background-color: rgb(233, 236, 239);
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border-radius: 4px;
`;

export const FormContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const StyledAdornment = styled.img`
  height: 20px;
  width: 20px;
`;

export const makeMediaQuery = (query: string) => {
  return `
    @media only screen and (max-width: 800px) {
      ${query}
    }
  `;
};

export const FormSideBySideContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  ${makeMediaQuery(`display: block`)}
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    text-transform: none;
  }
`;
