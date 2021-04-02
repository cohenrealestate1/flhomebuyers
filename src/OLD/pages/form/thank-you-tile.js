// @flow
import React from "react";
import { withRouter } from "fusion-plugin-react-router";
import styled from "styled-components";
import { StyleConstants } from "../../constants";
import { HeadingSmall } from "../../components/shared/typography";
import {
  NoTextDecorationCss,
  InlineContainer,
} from "../../components/shared/styled-components";
import Link from "../../components/link";

const TopContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid ${StyleConstants.LightBlue};
  padding: 4px;
  ${NoTextDecorationCss}
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

type Props = {
  title: string,
  href: string,
  description: string,
};
export const ThankYouTile = (props: Props) => {
  const { title, href, description } = props;
  return (
    <Container>
      <TopContainer href={href}>
        <HeadingSmall>{title}</HeadingSmall>
      </TopContainer>
      <div>
        <Link
          href={href}
          text={title}
          color={StyleConstants.LightBlue}
          underline
        />
        <InlineContainer>{description}</InlineContainer>
      </div>
    </Container>
  );
};

export default withRouter(ThankYouTile);
