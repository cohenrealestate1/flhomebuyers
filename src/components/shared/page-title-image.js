// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../constants";

const TopOffset = '60px';

const Container = styled.div`
    color: ${Colors.White};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: calc(422px + ${TopOffset});
    padding-bottom: 0px;
    box-sizing: border-box;
    z-index: 1;
    font-weight: 800;
    position: relative;
    margin-top: -${TopOffset};
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    ::before {
        z-index: -1;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 86%;
        position: absolute;
        background-image: url('${props => props.$imgHref}');
        background-size: cover;
        transform: translateY(-${TopOffset});
    }
`

const Covid19Info = styled.div`
    background-color: ${props => props.$backgroundColor};
    padding-top: 77px;
    padding-right: 10%;
    padding-bottom: 115px;
    padding-left: 10%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
`

type Props = {
    imgHref: string,
    backgroundColor: string,
    children: ReactNode
}
export const PageTitleImage = (props: Props) => {
    const {imgHref, backgroundColor, children} = props;
    return <Container $imgHref={imgHref} >
        <Covid19Info $backgroundColor={backgroundColor}>
            {children}
        </Covid19Info>
    </Container>
}


export default PageTitleImage;