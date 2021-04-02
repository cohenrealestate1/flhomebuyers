// @flow
import React from "react";
import Page from "../../components/page";
import HowItWorks from "../../components/how-it-works";
import CashVsRealtor from "../../components/cash-vs-realtor";
import CitiesParagraph from "../../components/cities-paragraph";

export const Home = () => {
  return (
    <Page
      content={
        <>
          <HowItWorks />
          <CashVsRealtor />
          <CitiesParagraph />
        </>
      }
    />
  );
};

export default Home;
