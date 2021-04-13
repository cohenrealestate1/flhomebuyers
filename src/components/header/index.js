// @flow
import { assetUrl } from "fusion-core";
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, makeMediaQueryMin, Routes } from "../../constants";
import Buttons from "./buttons";
import Nav from "./nav";

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    padding-left: 86px;
    padding-top: 44px;
    padding-right: 70px;
    padding-bottom: 54px;
    background-color: ${Colors.White};
    z-index: 100;
    ${makeMediaQueryMax(1195, 'gap: 50px;')}
`
const LogoContainer = styled.a`
    cursor: pointer;
`
const Logo = styled.img`
    width: 193px;
    height: 184px;
`
const RightContainerDesktop = styled.div`
    margin-left: auto;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;
    // ${makeMediaQueryMax(800, 'display none')}

const RightContainerMobile = styled.div`
    margin-left: auto;
    margin-bottom: auto;
    ${makeMediaQueryMin(800, 'display: none;')}
`;

export const Header = () => {
    return<Container>
        <LogoContainer href={Routes.Home}><Logo src={assetUrl("../../static/logo.svg")} /></LogoContainer>
        <RightContainerDesktop>
            <Buttons />
            <Nav />
        </RightContainerDesktop>
    </Container>
}

export default Header;