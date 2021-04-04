// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

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
        {subtitle && <Text $typography={Typographies.TextLarge} $color={Colors.White} $center>{subtitle}</Text>}
    </Container>
}

export default PageTitle;