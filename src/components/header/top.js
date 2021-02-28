// @flow
import React from "react";
import styled from "styled-components";
import Link from "../link";
import { Routes, Typography } from "../../constants";
import PhoneLink from "../shared/phone-link";

const Left = styled.div`
  margin-right: auto;
`;

const Right = styled.div`
  margin-left: auto;
  ${Typography.HeadingXSmall}
`;

export const Top = () => {
  return (
    <>
      <Left>Logo</Left>
      <Right>
        CALL US! <PhoneLink color="chartreuse" />
        <Link href={Routes.AboutUs} text="About us" color="white" />{" "}
        <Link href={Routes.ContactUs} text="Contact us" color="white" />
      </Right>
    </>
  );
};

export default Top;
