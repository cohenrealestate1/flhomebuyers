// @flow
import { assetUrl } from "fusion-core";
import React from "react";
import styled from "styled-components";
import { Routes } from "../../constants";
import Buttons from "./buttons";
import Nav from "./nav";

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    padding-left: 87px;
    padding-top: 45px;
    padding-right: 80px;
    padding-bottom: 54px;
`
const LogoContainer = styled.a`
    cursor: pointer;
`
const Logo = styled.img`
    width: 249px;
    height: 231px;
`
const RightContainer = styled.div`
    margin-left: auto;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Header = () => {
    return <Container>
        <LogoContainer href={Routes.Home}><Logo src={assetUrl("../../static/logo.svg")} /></LogoContainer>
        <RightContainer>
            <Buttons />
            <Nav />
        </RightContainer>
    </Container>
}

export default Header;