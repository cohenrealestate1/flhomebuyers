import React, { ReactNode } from "react";
import Header from "../header";
import { Container } from "@material-ui/core";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  font-size: 20px;
`;

type Props = {
  content: ReactNode,
};

export const Page = (props: Props) => {
  const { content } = props;
  return (
    <StyledContainer>
      <Header />
      {content}
    </StyledContainer>
  );
};

export default Page;
