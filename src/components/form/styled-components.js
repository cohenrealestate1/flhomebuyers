// @flow
import styled from "styled-components";
import { Colors } from "../../constants";

const FormHeight = 800;

export const Container = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.div`
    position: relative;
    background-color: ${Colors.Blue};
    color: ${Colors.White};
    min-height: ${FormHeight}px;
    width: 78%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`
export const OrangeContainer = styled.div`
    background-color: ${Colors.Orange};
    z-index: 1;
    width: 100%;
    height: calc(100% + 25px);
    position: absolute;
    top: -25px;
    right: 25px;
`
export const GreenContainer = styled.div`
    background-color: ${Colors.Green};
    z-index: 1;
    width: calc(100% + 25px);
    height: 100%;
    position: absolute;
    top: 25px;
    right: -25px;
`
export const FormContentContainer = styled.div`
    z-index: 1000;
    background-color: ${Colors.White};
    color: ${Colors.Gray3};
    min-height: ${FormHeight}px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: ${props => props.$paddingSize === "Small" ? "61px" : "8%"};
    padding-right: ${props => props.$paddingSize === "Small" ? "54px" : "8%"};
    padding-top: 59px;

`