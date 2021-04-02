// @flow
import React from "react";
import styled from "styled-components";
import { assetUrl } from "fusion-core";
import {
  makeMediaQuery,
  NonFormSideBySideContainer,
  FullWidthCss,
} from "../shared/styled-components";
import {
  SocialMediaLinks,
  ExternalLinkProps,
  CompanyName,
  StyleConstants,
} from "../../constants";
import PhoneLink from "../shared/phone-link";

const Container = styled(NonFormSideBySideContainer)`
  ${FullWidthCss}
  margin-top: auto;
  background-color: blue;
  color: white;
`;

const Section = styled.div`
  width: 100%;
`;
const LeftSection = styled.div`
  display: flex;
  gap: 8px;
`;
const RightSection = styled(Section)`
  text-align: right;
  ${makeMediaQuery("text-align: left")}
`;

const IconContainer = styled.a`
  height: 24px;
  width: 24px;
  padding: 6px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${StyleConstants.LightBlue};
    cursor: pointer;
  }
  text-decoration: none;
  border-radius: 4px;
`;
const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

export const Footer = () => {
  return (
    <Container>
      <LeftSection>
        <IconComponent
          href={SocialMediaLinks.Twitter}
          src={assetUrl("../../static/company-icons/twitter.svg")}
        />
        <IconComponent
          href={SocialMediaLinks.Facebook}
          src={assetUrl("../../static/company-icons/facebook.svg")}
        />
        <IconComponent
          href={SocialMediaLinks.Youtube}
          src={assetUrl("../../static/company-icons/youtube.svg")}
        />
        <IconComponent
          href={SocialMediaLinks.Instagram}
          src={assetUrl("../../static/company-icons/instagram.svg")}
        />
        <IconComponent
          href={SocialMediaLinks.LinkedIn}
          src={assetUrl("../../static/company-icons/linkedin.svg")}
        />
      </LeftSection>
      <RightSection>
        {CompanyName} is a &quot;we buy houses&quot; company. We help people
        sell their houses fash, for cash. If you want a quick cash offer on your
        property, give us a call at <PhoneLink />. &#169; 2021 - {CompanyName}
      </RightSection>
    </Container>
  );
};

type IconComponentProps = {
  href: string,
  src: string,
};
const IconComponent = (props: IconComponentProps) => {
  const { href, src } = props;
  return (
    <IconContainer href={href} {...ExternalLinkProps}>
      <Icon src={src} />
    </IconContainer>
  );
};

export default Footer;
