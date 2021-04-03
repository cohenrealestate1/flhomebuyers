// @flow
import styled from "styled-components";
import { Colors } from "../../constants";

export const Container = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.Blue};
`

export const FormContainer = styled.div`
    position: relative;
    background-color: ${Colors.Blue};
    color: ${Colors.White};
    min-height: 600px;
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
    min-height: 625px;
    position: absolute;
    top: -25px;
    right: 25px;
`
export const GreenContainer = styled.div`
    background-color: ${Colors.Green};
    z-index: 1;
    width: calc(100% + 25px);
    min-height: 600px;
    position: absolute;
    top: 25px;
    right: -25px;
`
export const FormContentContainer = styled.div`
    z-index: 1000;
    background-color: ${Colors.White};
    color: ${Colors.Gray3};
    min-height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 155px;
    padding-right: 164px;
    padding-top: 59px;

`