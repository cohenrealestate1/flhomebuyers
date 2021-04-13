// @flow
import styled from "styled-components";
import { Colors, makeMediaQueryMax } from "../../constants";

export const Container = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.div`
    position: relative;
    background-color: ${Colors.Blue};
    color: ${Colors.White};
    
    width: 78%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    ${makeMediaQueryMax(1000, 'width: 100%;')}
`
export const OrangeContainer = styled.div`
    background-color: ${Colors.Orange};
    z-index: 1;
    width: 100%;
    height: calc(100% + 25px);
    position: absolute;
    top: -25px;
    right: 25px;
    ${makeMediaQueryMax(1000, 'display: none;')}
`
export const GreenContainer = styled.div`
    background-color: ${Colors.Green};
    z-index: 1;
    width: calc(100% + 25px);
    height: 100%;
    position: absolute;
    top: 25px;
    right: -25px;
    ${makeMediaQueryMax(1000, 'display: none;')}
`

const orangeBorder = `25px solid ${Colors.Orange}`;
const greenBorder = `25px solid ${Colors.Green}`;
export const FormContentContainer = styled.div`
    z-index: 1000;
    background-color: ${Colors.White};
    color: ${Colors.Gray3};
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: ${props => props.$paddingSize === "Small" ? "61px" : "8%"};
    padding-right: ${props => props.$paddingSize === "Small" ? "54px" : "8%"};
    padding-top: 59px;
    ${makeMediaQueryMax(1000, `border-left: ${orangeBorder}; border-top: ${orangeBorder}; border-right: ${greenBorder}; border-bottom: ${greenBorder};`)}
    ${makeMediaQueryMax(700, `padding-left: 5px; padding-right: 5px;;`)}
`