// @flow
import React from "react";
import { withRouter } from "fusion-plugin-react-router";
import { getCityNameFromUrl } from "../../constants/cities";

export const GetCashOfferCity = (props) => {
  const cityName = getCityNameFromUrl(props.history.location.pathname);
  return `Get cash offer in ${cityName}`;
};

export default withRouter(GetCashOfferCity);
