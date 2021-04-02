// @flow
import styled from "styled-components";
import { FormControlLabel, Button } from "@material-ui/core";
import { StyleConstants } from "../../constants";

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-left: 0px;
    margin-right: 0px;
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

export const SideBySideContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  ${makeMediaQuery(`display: block`)}
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    text-transform: none;
  }
  &.MuiButton-contained {
    background-color: ${(props) => props.$color || "unset"};
  }
`;

export const FullWidthCss = `
  padding-left: calc((100% - ${StyleConstants.PageWidth}) / 2);
  padding-right: calc((100% - ${StyleConstants.PageWidth}) / 2);
`;

export const NoTextDecorationCss = `
  text-decoration: none;
  a:visited,hover,active,focus {
    text-decoration: none;
  }
`;

export const NonFormSideBySideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${makeMediaQuery("flex-direction: column;")}
`;

export const InlineContainer = styled.div`
  display: inline;
`;
