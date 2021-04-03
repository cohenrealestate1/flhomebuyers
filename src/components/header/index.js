// @flow
import { assetUrl } from "fusion-core";
import React from "react";
import styled from "styled-components";
import Buttons from "./buttons";
import Nav from "./nav";

const Container = styled.div`
    display: flex;
    height: 282px;
    align-items: center;
    box-sizing: border-box;
`

const Logo = styled.img`
    width: 249px;
    height: 231px;
`
const RightContainer = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: column;
`;
const NavContainer = styled.div`
    margin-top: auto;
`

export const Header = () => {
    return <Container>
        <div><Logo src={assetUrl("../../static/logo.svg")} /></div>
        <RightContainer><Buttons /><NavContainer><Nav /></NavContainer></RightContainer>
    </Container>
}

export default Header;