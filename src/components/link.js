// @flow
import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: ${(props) => props.$underline || "none"};
  color: ${(props) => props.$color};
  a:visited {
    text-decoration: ${(props) => props.$underline || "none"};
    color: ${(props) => props.$color};
  }
  a:hover {
    text-decoration: ${(props) => props.$underline || "none"};
    color: ${(props) => props.$color};
  }
  a:focus {
    text-decoration: ${(props) => props.$underline || "none"};
    color: ${(props) => props.$color};
  }
  a:hover,
  a:active {
    text-decoration: ${(props) => props.$underline || "none"};
    color: ${(props) => props.$color};
  }
`;

type Props = {
  href: string,
  text: string,
  color: string,
  underline?: boolean,
};

export const Link = (props: Props) => {
  const { href, text, color, underline } = props;
  return (
    <StyledLink href={href} $color={color} $underline={underline}>
      {text}
    </StyledLink>
  );
};

export default Link;
