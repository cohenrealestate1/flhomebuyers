// @flow
import { ANCHOR, Drawer } from "baseui/drawer";
import Menu from 'baseui/icon/menu';
import { assetUrl } from "fusion-core";
import React, { useState } from "react";
import styled from "styled-components";
import { Colors, Routes } from "../../constants";
import useWindowDimensions from "../../use-window-dimensions";
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
    const {width, isMobile} = useWindowDimensions();
    console.log(width, isMobile)
    return<Container>
        <LogoContainer href={Routes.Home}><Logo src={assetUrl("../../static/logo.svg")} /></LogoContainer>
        {width > 718 && 
        <RightContainerDesktop>
            <Buttons isMobile={isMobile} />
            <Nav isMobile={isMobile} />
        </RightContainerDesktop>
        }
        {width <= 718 &&  <DrawerContainer>
            <Drawer overrides={Overrides} renderAll anchor={ANCHOR.right} autoFocus isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Buttons isMobile={isMobile} />
                <Nav isMobile={isMobile} />
            </Drawer>
            <Menu size={80} onClick={() => setIsOpen(true)} />
        </DrawerContainer>}
    </Container>
}

export default Header;