// @flow
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";

export const StyledAdornment = styled.img`
  height: 40px;
  width: 40px;
  color: ${props => props.$active ? Colors.Blue : 'unset'}
`;

export const BlueDivider = styled.div`
  width: 100%;
  height: 11px;
  background-color: ${Colors.Blue};
`;
export const GrayDivider = styled.div`
  width: 77%;
  height: 2px;
  background-color: ${Colors.Gray4};
  margin-left: auto;
  margin-right: auto;
`

export const ButtonContainer = styled.a`
    text-decoration: none;
    background-color: ${Colors.White};
    color: ${Colors.Blue};
    ${Typographies.ButtonBig}
    padding: 18px 21px 13px 23px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 700;
`;

export const ButtonEndEnhancer = styled.div`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormFlexContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 37px;
`

export const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
`
export const CardImg = styled.img`
    max-width: 561px;
    flex: 1;
`
export const CardRightContainer = styled.div`
    background-color: ${props => props.$color};
    padding: 64px 28px 64px 64px;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
`