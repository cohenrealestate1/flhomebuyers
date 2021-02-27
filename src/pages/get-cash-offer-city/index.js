// @flow
import React from "react";
import { withRouter } from "fusion-plugin-react-router";
import { getCityNameFromUrl } from "../../constants";
import Page from "../../components/page";

export const GetCashOfferCity = (props) => {
  const cityName = getCityNameFromUrl(props.history.location.pathname);
  return <Page content={`Get cash offer in ${cityName}`} />;
};

export default withRouter(GetCashOfferCity);
