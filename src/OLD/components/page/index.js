// @flow
import React, { ReactNode } from "react";
import Header from "../header";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import Footer from "../footer";
import { StyleConstants } from "../../constants";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled(Container)`
  &.MuiContainer-root {
    width: ${StyleConstants.PageWidth};
    box-sizing: content-box;
  }
`;

type Props = {
  content: ReactNode,
};

export const Page = (props: Props) => {
  const { content } = props;
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{content}</ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Page;
