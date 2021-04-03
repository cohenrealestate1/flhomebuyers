// @flow
import { assetUrl } from "fusion-core";
import React from "react";
import styled from "styled-components";
import Buttons from "./buttons";
import Nav from "./nav";

const LogoLeftWhiteSpace = 28;
const LogoBottomWhiteSpace = 25;

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    padding-left: calc(80px - ${LogoLeftWhiteSpace}px);
    padding-right: 80px;
    padding-right: calc(56px - ${LogoBottomWhiteSpace}px);
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
        <div><Logo src={assetUrl("../../static/logo.svg")} /></div>
        <RightContainer>
            <Buttons />
            <Nav />
        </RightContainer>
    </Container>
}

export default Header;