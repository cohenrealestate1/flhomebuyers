// @flow
import React from "react";
import styled from "styled-components";
import Top from "./top";
import Bottom from "./bottom";
import { StyleConstants, HeaderBackgroundImage } from "../../constants";
import { FullWidthCss } from "../shared/styled-components";

const Container = styled.nav`
  width: ${StyleConstants.PageWidth};
  margin-left: auto;
  margin-right: auto;
  height: calc(100vh);
  z-index: 1;
  color: white;
  padding-top: 20px;
  ${FullWidthCss};
  ::before {
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${HeaderBackgroundImage});
    background-size: cover;
    filter: grayscale(50%);
    transform: translateY(-200px);
    min-height: calc(100% + 200px);
  }
`;

const TopContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
`;

const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = () => {
  return (
    <Container>
      <InsideContainer>
        <TopContainer>
          <Top />
        </TopContainer>
        <BottomContainer>
          <Bottom />
        </BottomContainer>
      </InsideContainer>
    </Container>
  );
};

export default Header;
