// @flow
import React, { ReactNode } from "react";
import Header from "../header";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import Footer from "../footer";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

type Props = {
  content: ReactNode,
};

export const Page = (props: Props) => {
  const { content } = props;
  return (
    <LayoutContainer>
      <Header />
      <Container>{content}</Container>
      <Footer />
    </LayoutContainer>
  );
};

export default Page;
