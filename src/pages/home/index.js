// @flow
import React from "react";
import Page from "../../components/page";
import HowItWorks from "../../components/how-it-works";
import CashVsRealtor from "../../components/cash-vs-realtor";

export const Home = () => {
  return (
    <Page
      content={
        <>
          <HowItWorks />
          <CashVsRealtor />
        </>
      }
    />
  );
};

export default Home;
