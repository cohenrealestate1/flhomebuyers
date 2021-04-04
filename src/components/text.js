// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { ExternalLinkProps } from "../constants";

type Props = {
    children: ReactNode,
    $hasSpacing: boolean,
    $uppercase: boolean,
    $inline: boolean,
    $underline: boolean,
    $typography: string,
    $color: string,
    $hoverColor: string,
    $montserrat: boolean,
    $openSans: boolean,
    $fontWeight: number,
    $lineHeight: string,
    $a: boolean,
    $margin: string,
    $center: boolean,
    $href: string,
    $maxWidth: string,
    $wrap: boolean,
    $external: boolean
}

const ContainerA = styled.a`
    ${props => props.$hasSpacing ? `letter-spacing: 2px;` : ''}
    ${props => props.$uppercase ? `text-transform: uppercase;` : ''}
    ${props => props.$inline ? `display: inline;` : ''}
    ${props => props.$a ? 'text-decoration: none; cursor: pointer;' : ''}
    ${props => props.$underline ? `text-decoration: underline; text-decoration-skip-ink: none;` : ''}
    ${props => props.$typography}
    ${props => props.$color ? `color: ${props.$color};` : ''}
    ${props => props.$color || props.$hoverColor ? `:hover { color: ${props.$hoverColor || props.$color}; }` : '' }
    ${props => props.$montserrat ? `font-family: Montserrat;` : ''}
    ${props => props.$openSans ? `font-family: Open sans;` : ''}
    ${props => props.$fontWeight ? `font-weight: ${props.$fontWeight};` : ''}
    ${props => props.$lineHeight ? `line-height: ${props.$lineHeight};` : ''}
    ${props => props.$margin ? `margin: ${props.$margin};` : ''}
    ${props => props.$center ? `text-align: center;` : ''}
    ${props => props.$maxWidth ? `max-width: ${props.$maxWidth};` : ''}
    ${props => props.$wrap ? `word-wrap: break-word;` : ''}
`;
const ContainerDiv = styled.div`
    ${props => props.$hasSpacing ? `letter-spacing: 2px;` : ''}
    ${props => props.$uppercase ? `text-transform: uppercase;` : ''}
    ${props => props.$inline ? `display: inline;` : ''}
    ${props => props.$a ? 'text-decoration: none; cursor: pointer;' : ''}
    ${props => props.$underline ? `text-decoration: underline; text-decoration-skip-ink: none;` : ''}
    ${props => props.$typography}
    ${props => props.$color ? `color: ${props.$color};` : ''}
    ${props => props.$color || props.$hoverColor ? `:hover { color: ${props.$hoverColor || props.$color}; }` : '' }
    ${props => props.$montserrat ? `font-family: Montserrat;` : ''}
    ${props => props.$openSans ? `font-family: Open sans;` : ''}
    ${props => props.$fontWeight ? `font-weight: ${props.$fontWeight};` : ''}
    ${props => props.$lineHeight ? `line-height: ${props.$lineHeight};` : ''}
    ${props => props.$margin ? `margin: ${props.$margin};` : ''}
    ${props => props.$center ? `text-align: center;` : ''}
    ${props => props.$maxWidth ? `max-width: ${props.$maxWidth};` : ''}
    ${props => props.$wrap ? `word-wrap: break-word;` : ''}
`

export const Text = (props: Props) => {
    const {children, ...rest} = props;
    const {$a, $href, $external} = props;

    const aProps = $a ? {href: $href} : {};
    return $a ? <ContainerA {...aProps} {...rest} {...$external ? ExternalLinkProps : {}}>{children}</ContainerA> : <ContainerDiv {...rest}>{children}</ContainerDiv>;
}

export default Text;