// @flow
import React from "react";
import { PhoneNumber, PhoneNumberHref } from "../../constants";
import styled from "styled-components";
import { NoTextDecorationCss } from "./styled-components";

const StyledLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.$color};
  ${NoTextDecorationCss}
  font-weight: 700;
`;

type Props = {
  color: string,
};
export const PhoneLink = (props: Props) => {
  const { color } = props;
  return (
    <StyledLink href={PhoneNumberHref} $color={color}>
      {PhoneNumber}
    </StyledLink>
  );
};

export default PhoneLink;
