import React from "react";
import styled from "styled-components";
import Link from "../link";
import { Routes } from "../../constants/routes";

const Container = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
`;

const Left = styled.div`
  margin-right: auto;
`;

const Right = styled.div`
  margin-left: auto;
`;

export const Header = () => {
  return (
    <Container>
      <Left>Logo</Left>
      <Right>
        CALL US! (954) 661-6317{" "}
        <Link href={Routes.AboutUs} text="About us" color="red" />{" "}
        <Link href={Routes.ContactUs} text="Contact us" color="red" />
      </Right>
    </Container>
  );
};

export default Header;
