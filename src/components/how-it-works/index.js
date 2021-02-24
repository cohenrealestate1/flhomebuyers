// @flow
import React from "react";
import Tile from "./tile";
import styled from "styled-components";
import { assetUrl } from "fusion-core";
import PhoneLink from "../shared/phone-link";
import Link from "../link";
import { Routes } from "../../constants/routes";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  gap: 36px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 12px;
  }
  line-height: 18px;
`;

const Icon = styled.img`
  height: 80px;
  width: 80px;
`;

const StyledLink = styled(Link)`
  color: blue;
  font-weight: 700;
  display: inline;
  cursor: pointer;
`;

const StyledPhoneLink = styled(PhoneLink)`
  color: blue;
  font-weight: 700;
  display: inline;
  cursor: pointer;
`;

export const HowItWorks = () => {
  return (
    <Container>
      <Tile
        title="Step One - Contact us"
        icon={<Icon src={assetUrl("../../static/phone.svg")} />}
        description={
          <div>
            Call Florida Home Buyers at <StyledPhoneLink /> or fill in our{" "}
            <StyledLink
              color="blue"
              href={Routes.FormStep1}
              text="Get Cash Offer NOW"
            />{" "}
            form. Our team will give you a call within 30 minutes GUARANTEED to
            make our highest and best offer.
          </div>
        }
      />
      <Tile
        title="Step Two - Get a cash offer!"
        icon={<Icon src={assetUrl("../../static/house.svg")} />}
        description="We will make you a cash offer on your house. It is entirely free and you are not obligated to accept the offer. We take into account local comps to calculate our offer. No annoying appraisals, mortgage applications and banks needed - we always use our OWN cash for making offers."
      />
      <Tile
        title="Step Three - Close whenever you'd like"
        icon={<Icon src={assetUrl("../../static/calendar.svg")} />}
        description="We will close with whatever timeframe works best for you. You keep so much more of the sale price as you do not need to worry about realtor commissions or home repairs. Maximize your profit as quickly as possible by working with Florida Home Buyers!"
      />
    </Container>
  );
};

export default HowItWorks;
