// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { StyleConstants } from "../../constants";

interface Props {
  title: string;
  icon: ReactNode;
  description: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px 16px;
  background-color: ${StyleConstants.LightBlue};
  align-items: center;
  flex: 1;
`;

const IconContainer = styled.div`
  margin-bottom: 8px;
`;

const TitleContainer = styled.div`
  text-align: center;
  font-weight: 700;
`;

export const Tile = (props: Props) => {
  const { title, icon, description } = props;
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <TitleContainer>{title}</TitleContainer>
      <div>{description}</div>
    </Container>
  );
};

export default Tile;
