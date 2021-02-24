// @flow
import React from "react";
import styled from "styled-components";
import Link from "../link";
import { Routes } from "../../constants/routes";
import { PhoneNumber } from "../../constants";

const Left = styled.div`
  margin-right: auto;
`;

const Right = styled.div`
  margin-left: auto;
`;

export const Top = () => {
  return (
    <>
      <Left>Logo</Left>
      <Right>
        CALL US! {PhoneNumber}{" "}
        <Link href={Routes.AboutUs} text="About us" color="red" />{" "}
        <Link href={Routes.ContactUs} text="Contact us" color="red" />
      </Right>
    </>
  );
};

export default Top;
