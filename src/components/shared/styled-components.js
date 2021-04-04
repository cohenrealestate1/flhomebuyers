// @flow
import { FormControlLabel } from "@material-ui/core";
import styled from "styled-components";
import { Colors } from "../../constants";

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

export const StyledAdornment = styled.img`
  height: 40px;
  width: 40px;
  color: ${props => props.$active ? Colors.Blue : 'unset'}
`;

export const BlueDivider = styled.div`
  width: 100%;
  height: 11px;
  background-color: ${Colors.Blue};
`