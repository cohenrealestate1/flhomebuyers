// @flow
import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.$color};
  a:visited {
    text-decoration: none;
    color: ${(props) => props.$color};
  }
  a:hover {
    text-decoration: none;
    color: ${(props) => props.$color};
  }
  a:focus {
    text-decoration: none;
    color: ${(props) => props.$color};
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: ${(props) => props.$color};
  }
`;

type Props = {
  href: string,
  text: string,
  color: string,
};

export const Link = (props: Props) => {
  const { href, text, color } = props;
  return (
    <StyledLink href={href} $color={color}>
      {text}
    </StyledLink>
  );
};

export default Link;
