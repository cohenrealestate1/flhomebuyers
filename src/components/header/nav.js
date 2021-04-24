// @flow
import { withRouter } from "fusion-plugin-react-router";
import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, Routes, Typographies } from "../../constants";
import Text from "../text";

const Container = styled.div`
    display: flex;
    gap: 22px;
    ${FontFamilies.M}
    margin-left: auto;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex-direction: ${props => props.$isMobile ? 'column' : 'row'}
    `

type Props = {
    isMobile: boolean;
}
export const Nav = (props: Props) => {
    const {isMobile} = props;
    return <Container $isMobile={isMobile}>
        <NavItem isMobile={isMobile} title="How it works" href={Routes.HowItWorks} />
        <NavItem isMobile={isMobile} title="Locations" href={Routes.Locations} />
        <NavItem isMobile={isMobile} title="Testimonials" href={Routes.Testimonials} />
        <NavItem isMobile={isMobile} title="Covid-19" href={Routes.Covid19} />
        <NavItem isMobile={isMobile} title="About Us" href={Routes.AboutUs} />
        <NavItem isMobile={isMobile} title="Contact Us" href={Routes.ContactUs} />
        <NavItem isMobile={isMobile} title="Blog" href={Routes.Blog} />
    </Container>
}

type NavItemProps = {
    title: string,
    href: string,
    isMobile: boolean
};

const NavItemContainer = styled.div`
    ${props => props.$active ? `border-bottom: 5px solid ${Colors.Blue}; :hover {border-bottom: 5px solid ${Colors.Orange}}` : ''}
`

const NavItem = withRouter((props: NavItemProps) => {
    const {title, href, location: {pathname}, isMobile} = props;
    const active = pathname.includes(href);
    return <NavItemContainer $active={active}>
        <Text 
        $a 
        $uppercase 
        $typography={isMobile ? Typographies.TextXLarge : Typographies.TextXSmall} 
        $color={Colors.Blue} 
        $hoverColor={Colors.Orange} 
        $lineHeight="22px" 
        $fontWeight={700}
        $href={href}
        >{title}</Text>
    </NavItemContainer>
})

export default Nav;