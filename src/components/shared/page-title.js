// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, HouseImageHref, makeMediaQueryMax, Typographies } from "../../constants";
import Text from "../text";

const Container = styled.div`
    ${Typographies.PageHeader}
    ${makeMediaQueryMax(1000, Typographies.SubHeaderBig)}
    color: ${Colors.White};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${props => props.$hasForm ? '80px' : '47px'};
    padding-left: 15%;
    padding-right: 15%;
    ${makeMediaQueryMax(1000, `padding-top: 10px; padding-left: 10px; padding-right: 10px; padding-bottom: 10px;`)}
    padding-bottom: ${props => props.$hasForm ? '40px' : '0px'};
    box-sizing: border-box;
    z-index: 1;
    font-weight: ${props => props.$titleFontWeight || 800};
    position: relative;
    ::before {
        z-index: -1;
        content: "";
        top: 0;
        left: -200px;
        width: calc(100% + 200px);
        height: calc(100% + ${props => props.$hasForm ? '139px' : '47px'});
        position: absolute;
        background-image: url('${HouseImageHref}');
        background-size: cover;
        box-shadow: inset 0 0 0 1000px rgba(21, 98, 171, 0.9);
    }
`

const SubtitleContainer = styled.div`
    margin-left: -20%;
    margin-right: -20%;
`

type Props = {
    title: string,
    title2?: string,
    title3?: string,
    titleFontWeight?: string;
    subtitle?: ReactNode,
    hasForm?: boolean
}

export const PageTitle = (props: Props) => {
    const {title, title2, title3, subtitle, hasForm, titleFontWeight} = props;
    return <Container $hasForm={hasForm} $titleFontWeight={titleFontWeight}>
        <Text $inline $center>
            {title}
            {title2 && <>&nbsp;<Text $inline $color={Colors.Green}>{title2}</Text></>}
            {title3}
        </Text>
        {subtitle && <SubtitleContainer><Text $typography={Typographies.TextLarge} $style={makeMediaQueryMax(1000, Typographies.TextSmall)} $color={Colors.White} $center $fontWeight={700}>{subtitle}</Text></SubtitleContainer>}
    </Container>
}

export default PageTitle;