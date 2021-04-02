// @flow
import React from "react";
import {
  HeadingLarge,
  HeadingSmall,
  ParagraphLarge,
  ParagraphMedium,
} from "../../components/shared/typography";
import styled from "styled-components";
import {
  NonFormSideBySideContainer,
  InlineContainer,
} from "../../components/shared/styled-components";
import ThankYouTile from "./thank-you-tile";
import { CompanyName, Routes } from "../../constants";
import PhoneLink from "../../components/shared/phone-link";

const StyledHeadingLarge = styled(HeadingLarge)`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const SideBySideContainer = styled(NonFormSideBySideContainer)`
  gap: 20px;
  align-items: flex-start;
`;

export const ThankYou = () => {
  return (
    <>
      <StyledHeadingLarge>
        Thank you for filling out the form!
      </StyledHeadingLarge>
      <HeadingSmall>Our team has been notified.</HeadingSmall>
      <ParagraphLarge>
        Nava Cohen or Ben Cohen will give you a call soon!
      </ParagraphLarge>
      <ParagraphMedium>
        In the meantime, feel free to check out the following pages:
      </ParagraphMedium>
      <SideBySideContainer>
        <ThankYouTile
          title="Get a cash offer"
          href={Routes.FormStep1}
          description={
            <InlineContainer>
              Get a quick and fair cash offer. Give us a call at <PhoneLink />{" "}
              or submit an inquiry on our Get a Cash Offer page and we&apos;ll
              contact you as soon as possible.
            </InlineContainer>
          }
        />
        <ThankYouTile
          title="How It Works"
          href={Routes.HowItWorks}
          description="It's simple: You contact us. We give you an offer. We close whenever you choose."
        />
      </SideBySideContainer>
      <SideBySideContainer>
        <ThankYouTile
          title="About Us"
          href={Routes.AboutUs}
          description={`Learn about ${CompanyName}'s history and values, and meet the team - Ben, Eli, and Nava.`}
        />
        <ThankYouTile
          title="Contact Us"
          href={Routes.ContactUs}
          description={`Submit any questions or feedback. We're always looking to improve! Quick responses guaranteed.`}
        />
      </SideBySideContainer>
    </>
  );
};

export default ThankYou;
