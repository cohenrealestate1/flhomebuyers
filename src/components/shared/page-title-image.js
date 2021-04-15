// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, makeMediaQueryMax } from "../../constants";

const TopOffset = '60px';

const Container = styled.div`
    color: ${Colors.White};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: calc(422px + ${TopOffset});
    ${makeMediaQueryMax(1000, `padding-top: 0;);`)}
    padding-bottom: 0px;
    box-sizing: border-box;
    z-index: 1;
    font-weight: 800;
    position: relative;
    margin-top: -${TopOffset};
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
        // ${makeMediaQueryMax(1000, `display: none; transform: translateY(0);`)}
    }
`

const Info = styled.div`
    background-color: ${props => props.$backgroundColor};
    padding-top: 77px;
    padding-right: 10%;
    padding-bottom: 115px;
    padding-left: 10%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
    ${makeMediaQueryMax(1000, `
        padding-right: 0;
        padding-bottom: 0;
        padding-left: 0;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
    `)}
`

type Props = {
    imgHref: string,
    backgroundColor: string,
    children: ReactNode
}
export const PageTitleImage = (props: Props) => {
    const {imgHref, backgroundColor, children} = props;
    return <Container $imgHref={imgHref} >
        <Info $backgroundColor={backgroundColor}>
            {children}
        </Info>
    </Container>
}


export default PageTitleImage;