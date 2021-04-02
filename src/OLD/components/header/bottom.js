// @flow
import React from "react";
import PhoneLink from "../shared/phone-link";
import {
  HeadingXLarge,
  HeadingMedium,
  HeadingSmall,
} from "../shared/typography";

export const Bottom = () => {
  return (
    <>
      <HeadingXLarge>Get a Cash Offer on Your House ASAP</HeadingXLarge>
      <HeadingMedium>
        Don&apos;t lose money on fees, commissions, and wasted time.
      </HeadingMedium>
      <HeadingSmall>
        Pick a convenient closing date, and let US do all of the work!
      </HeadingSmall>
      <HeadingSmall>We guarantee quick and fair Cash Offers!</HeadingSmall>
      <HeadingSmall $noBold>
        Just call us <PhoneLink color="chartreuse" /> or Fill In The Form For
        Your FREE All-Cash Offer!
      </HeadingSmall>
    </>
  );
};

export default Bottom;
