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
`

export const Nav = () => {
    return <Container>
        <NavItem title="How it works" href={Routes.HowItWorks} />
        <NavItem title="Testimonials" href={Routes.Testimonials} />
        <NavItem title="Covid-19" href={Routes.Covid19} />
        <NavItem title="About Us" href={Routes.AboutUs} />
        <NavItem title="Contact Us" href={Routes.ContactUs} />
    </Container>
}

type NavItemProps = {
    title: string,
    href: string
};

const NavItem = withRouter((props: NavItemProps) => {
    const {title, href, location: {pathname}} = props;
    const active = pathname === href;
    return <Text 
        $a 
        $uppercase 
        $typography={Typographies.TextXSmall} 
        $underline={active} 
        $color={Colors.Blue} 
        $hoverColor={Colors.Orange} 
        $lineHeight="22px" 
        $fontWeight={700}
        $href={href}
    >{title}</Text>
})

export default Nav;