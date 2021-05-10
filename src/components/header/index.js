// @flow
import { ANCHOR, Drawer } from "baseui/drawer";
import Menu from 'baseui/icon/menu';
import { assetUrl } from "fusion-core";
import React, { useState } from "react";
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import styled from "styled-components";
import { Colors, Routes } from "../../constants";
import Buttons from "./buttons";
import Nav from "./nav";

const Overrides = {
    Root: {
        style: {
            zIndex: 10000,
        }
    },
    Close: {
        style: {
            height: "50px",
            width: "50px",
        },
    },
    DrawerContainer: {
        style: {
            padding: "20px"
        }
    }
}

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    padding-left: 86px;
    padding-top: 44px;
    padding-right: 70px;
    padding-bottom: 54px;
    background-color: ${Colors.White};
    z-index: 100;
`
const LogoContainer = styled.a`
    cursor: pointer;
    margin-right: 50px;
`
const Logo = styled.img`
    width: 184px;
    height: 184px;
`

const ButtonsAndNavContainer = styled.div`
    margin-left: auto;
    display: flex;
    ${!isMobile ? 'margin-top: auto; margin-bottom: auto;' : ''}
`

const RightContainerDesktop = styled.div`
    margin-left: auto;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const DrawerContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items:  center;
    cursor: pointer;
    `

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return<Container>
        <LogoContainer href={Routes.Home}><Logo src={assetUrl("../../static/logo.svg")} /></LogoContainer>

        <ButtonsAndNavContainer>

        <RightContainerDesktop>
            <BrowserView>
                <Buttons />
                <Nav />
            </BrowserView>
        </RightContainerDesktop>
        <DrawerContainer>
            <MobileView>
                <Drawer overrides={Overrides} renderAll anchor={ANCHOR.right} autoFocus isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Buttons />
                    <Nav />
                </Drawer>
                <Menu size={80} onClick={() => setIsOpen(true)} />
            </MobileView>
        </DrawerContainer>

        </ButtonsAndNavContainer>

    </Container>
}

export default Header;