// @flow
import React from "react";
import Page from "../../components/page";
import HowItWorks from "../../components/how-it-works";
import CashVsRealtor from "../../components/cash-vs-realtor";

export const HowItWorksPage = (props) => {
  return (
    <Page
      content={
        <>
          <HowItWorks /> <CashVsRealtor />
        </>
      }
    />
  );
};

export default HowItWorksPage;
