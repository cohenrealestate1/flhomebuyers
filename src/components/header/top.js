// @flow
import React from "react";
import styled from "styled-components";
import Link from "../link";
import { Routes, Typography } from "../../constants";
import PhoneLink from "../shared/phone-link";
import { makeMediaQuery } from "../shared/styled-components";

const StyledSideBySideContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  ${makeMediaQuery("display: flex; flex-direction: column; gap: 0;")}
`;

const Left = styled.div`
  margin-right: auto;
`;

const Right = styled.div`
  margin-left: auto;
  ${Typography.HeadingXSmall}
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Top = () => {
  return (
    <>
      <Left>Logo</Left>
      <Right>
        <div>
          CALL US! <PhoneLink color="chartreuse" />
        </div>
        <StyledSideBySideContainer>
          <Link href={Routes.AboutUs} text="About us" color="white" />{" "}
          <Link href={Routes.ContactUs} text="Contact us" color="white" />
        </StyledSideBySideContainer>
      </Right>
    </>
  );
};

export default Top;
