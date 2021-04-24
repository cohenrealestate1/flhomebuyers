// @flow
import styled from "styled-components";
import { makeMediaQueryMax } from "../../constants";

export const FooterIconContainer = styled.svg`
    ${props => props.$isHovered ? 'cursor: pointer;' : ''}
`
export const Svg = styled.svg`
    height: 30px;
    width: 38px;
    ${makeMediaQueryMax(1000, `
        height: 70px;
        width: 70px;
    `)}
`