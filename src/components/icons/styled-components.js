// @flow
import styled from "styled-components";

export const FooterIconContainer = styled.svg`
    ${props => props.$isHovered ? 'cursor: pointer;' : ''}
`