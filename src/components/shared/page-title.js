// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, HouseImageHref, Typographies } from "../../constants";
import Text from "../text";

const Container = styled.div`
    ${Typographies.PageHeader}
    color: ${Colors.White};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: ${props => props.$hasForm ? '40px' : '0px'};
    box-sizing: border-box;
    z-index: 1;
    font-weight: 800;
    position: relative;
    ::before {
        z-index: -1;
        content: "";
        top: 0;
        left: -200px;
        width: calc(100% + 200px);
        height: calc(100% + 139px);
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
    subtitle?: ReactNode,
    hasForm?: boolean
}

export const PageTitle = (props: Props) => {
    const {title, title2, subtitle, hasForm} = props;
    return <Container $hasForm={hasForm}>
        <Text $inline $center>
            {title}
            {title2 && <>&nbsp;<Text $inline $color={Colors.Green}>{title2}</Text></>}
        </Text>
        {subtitle && <SubtitleContainer><Text $typography={Typographies.TextLarge} $color={Colors.White} $center $fontWeight={700}>{subtitle}</Text></SubtitleContainer>}
    </Container>
}

export default PageTitle;