// @flow
import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import styled from "styled-components";
import { Routes, CityObjects, FormRoutes } from "./constants";
import { Pages } from "./pages";

const Container = styled.div`
  margin: -8px;
`;

const root = (
  <Container>
    <Switch>
      <Route path={Routes.ContactUs} component={Pages.ContactUs} />
      <Route path={Routes.AboutUs} component={Pages.AboutUs} />
      <Route path={FormRoutes} component={Pages.Form} />
      {CityObjects.map((cityObject) => (
        <Route
          key={cityObject.city}
          path={cityObject.url}
          component={Pages.GetCashOfferCity}
        />
      ))}
      <Route path={Routes.HowItWorks} component={Pages.HowItWorks} />
      <Route exact path={Routes.Home} component={Pages.Home} />
    </Switch>
  </Container>
);

export default root;
