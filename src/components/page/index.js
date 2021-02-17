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

const LayoutContentContainer = styled.div`
  min-height: calc(100vh - 150px);
`;

const StyledContainer = styled(Container)`
  font-size: 20px;
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
