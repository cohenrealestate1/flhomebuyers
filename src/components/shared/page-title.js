// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, Inline, Typographies } from "../../constants";

const Container = styled.div`
    background-color: ${Colors.Red2};
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
`
const Title = styled.div`
    ${Inline}
    text-align: center;
`
const Title2 = styled.div`
    ${Inline}
    color: ${Colors.Green};
`
const Subtitle = styled.div`
    ${Typographies.TextLarge}
    color: ${Colors.White};
    text-align: center;
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
        <Title>
            {title}
            {title2 && <>&nbsp;<Title2>{title2}</Title2></>}
        </Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
}

export default PageTitle;