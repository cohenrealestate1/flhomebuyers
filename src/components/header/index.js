import React from "react";
import styled from "styled-components";
import Link from "../link";
import { Routes } from "../../constants/routes";
import Top from "./top";
import Bottom from "./bottom";

const Container = styled.nav`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
`;

export const Header = () => {
  return (
    <Container>
      <TopContainer>
        <Top />
      </TopContainer>
      <Bottom />
    </Container>
  );
};

export default Header;
