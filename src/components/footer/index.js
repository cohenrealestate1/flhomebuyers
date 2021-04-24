// @flow
import React from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax, makeMediaQueryMin, SocialMediaLinks, Typographies } from "../../constants";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import LinkedIn from "../icons/linkedin";
import Twitter from "../icons/twitter";
import Youtube from "../icons/youtube";
import Text from "../text";

const Container = styled.div`
    display: flex;
    padding: 36px 143px 39px 141px;
    background-color: ${Colors.Green};
    box-sizing: border-box;
    ${makeMediaQueryMax(1000, 'padding: 20px; flex-direction: column; align-items: center;')}
    ${makeMediaQueryMax(500, '')}
`;
const Copyright = styled.div`
    margin-right: auto;
    padding: 6px 0;
    ${makeMediaQueryMax(1000, 'text-align: center; margin-right: unset; width: 80%; margin-bottom: 30px;')}
`
const LogosContainer = styled.div`
    display: flex;
    gap: 11px;
    ${makeMediaQueryMin(1000, 'margin-left: auto;')}
    align-items: center;
`

export const Footer = () => {
    return <Container>
        <Copyright>
            <Text $color={Colors.White} $typography={Typographies.TextXSmall} $lineHeight="25px" $openSans>
                Copyright 2021 Florida Home Cash Buyers. All Rights Reserved. 
            </Text>
        </Copyright>
        <LogosContainer>
            <Text $a $href={SocialMediaLinks.Facebook} $external><Facebook /></Text>
            <Text $a $href={SocialMediaLinks.Youtube} $external><Youtube /></Text>
            <Text $a $href={SocialMediaLinks.LinkedIn} $external><LinkedIn /></Text>
            <Text $a $href={SocialMediaLinks.Twitter} $external><Twitter /></Text>
            <Text $a $href={SocialMediaLinks.Instagram} $external><Instagram /></Text>
        </LogosContainer>
    </Container>
}

export default Footer;