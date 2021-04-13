// @flow
import { assetUrl } from "fusion-core";
import React from "react";
import styled from "styled-components";
import { Colors, FontFamilies, makeMediaQueryMax, makeMediaQueryMin, Routes, Typographies } from "../../constants";
import EmailButton from "../shared/email-button";
import PhoneButton, { PhoneButtonSizes } from "../shared/phone-button";
import Text from "../text";

const Container = styled.div`
    display: flex;
    padding: 50px 143px 65px 141px;
    background-color: ${Colors.Blue};
    box-sizing: border-box;
    ${makeMediaQueryMax(1350, `padding: 20px; flex-direction: column; gap: 20px; align-items: center; justify-content: center;`)}
`;
const LeftContainer = styled.div`
    ${makeMediaQueryMin(1350, 'margin-right: auto;')}
    display: flex;
    flex-direction: column;
    margin-top: 23px;
`;
const RightContainer = styled.div`
    ${makeMediaQueryMin(1350, 'margin-left: auto;')}
    display: flex;
    gap: 56px;
    align-items: center;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`
const Logo = styled.img`
    height: 184px;
    width: 184px;
    padding-bottom: 10px;
    ${makeMediaQueryMax(1350, 'display: none;')}
`
const LinksContainer = styled.div`
    display: flex;
    gap: 20px;
`
const LinksColumn = styled.div`
    color: ${Colors.White};
    ${Typographies.TextXSmall}
    font-weight: 500;
    line-height: 90%;
    ${FontFamilies.M}
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const Footer = () => {
    return <Container>
        <LeftContainer>
            <Text $color={Colors.White} $typography={Typographies.TextSmall} $lineHeight="24px" $uppercase>Get cash for your home today</Text>
            <LinksContainer>
                <LinksColumn>
                    <Link href={Routes.HowItWorks} text="How it works" />
                    <Link href={Routes.Locations} text="Locations" />
                    <Link href={Routes.Testimonials} text="Testimonials" />
                    <Link href={Routes.Covid19} text="COVID-19" />
                </LinksColumn>
                <LinksColumn>
                    <Link href={Routes.AboutUs} text="About us" />
                    <Link href={Routes.ContactUs} text="Contact us" />
                    <Link href={Routes.GetCashOffer} text="Get Cash Offer Now!" />
                    <Link href={Routes.Blog} text="Blog" />
                </LinksColumn>
            </LinksContainer>
        </LeftContainer>
        <RightContainer>
            <ButtonsContainer>
                <PhoneButton size={PhoneButtonSizes.Medium} color={Colors.White} phoneColor={Colors.Blue} textColor={Colors.Blue}/>
                <EmailButton />
            </ButtonsContainer>
            <Logo src={assetUrl("../../static/logo-white.svg")} />
        </RightContainer>
    </Container>
}

const Link = (props) => {
    const {href, text} = props;
    return <Text $a $lineHeight="28px" $fontWeight={500} $hoverColor={Colors.Orange} $href={href} $color={Colors.White}>{text}</Text>;
}

export default Footer;