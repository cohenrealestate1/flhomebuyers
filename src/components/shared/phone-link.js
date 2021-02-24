// @flow
import React from "react";
import { PhoneNumber, PhoneNumberHref } from "../../constants";
import styled from "styled-components";
import GenericLink from "../link";

const Link = styled(GenericLink)`
  cursor: pointer;
`;

export const PhoneLink = () => {
  return <Link href={PhoneNumberHref} text={PhoneNumber} />;
};

export default PhoneLink;
