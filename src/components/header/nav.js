// @flow
import { withRouter } from "fusion-plugin-react-router";
import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, Routes, Typographies, Uppercase } from "../../constants";

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
    </Container>
}

type NavItemProps = {
    title: string,
    href: string
};

const StyledNavItem = styled.a`
    ${Uppercase}
    ${Typographies.TextXSmall}
    text-decoration: ${props => props.$active ? 'underline' : 'none'};
    line-height: 22px;
    font-weight: 700;
    color: ${Colors.Blue};
    :hover {
        color: ${Colors.Orange};
    }
`;

const NavItem = withRouter((props: NavItemProps) => {
    const {title, href, location: {pathname}} = props;
    const active = pathname === href;
    return <StyledNavItem $active={active} href={href}>{title}</StyledNavItem>;
})

export default Nav;