// @flow
import React from "react";
import { FooterIconContainer } from "./styled-components";
import useHoverIcon from "./use-hover-icon";

export const Facebook = (props: Props) => {
    const hoverProps = useHoverIcon();
    return <FooterIconContainer viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" {...hoverProps}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 16.5921C0 24.7954 5.95788 31.6168 13.75 33V21.0829H9.625V16.5H13.75V12.8329C13.75 8.70788 16.4079 6.41712 20.1671 6.41712C21.3579 6.41712 22.6421 6.6 23.8329 6.78288V11H21.725C19.7079 11 19.25 12.0079 19.25 13.2921V16.5H23.65L22.9171 21.0829H19.25V33C27.0421 31.6168 33 24.7968 33 16.5921C33 7.46625 25.575 0 16.5 0C7.425 0 0 7.46625 0 16.5921Z" fill="white"/>
    </FooterIconContainer>
}

export default Facebook;