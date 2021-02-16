import React from "react";
import { Route, Switch } from "fusion-plugin-react-router";
import Home from "./pages/home";
import styled from "styled-components";
import { Routes } from "./constants/routes";
import { Pages } from "./pages";

const Container = styled.div`
  margin: -8px;
`;

const root = (
  <Container>
    <Switch>
      <Route path={Routes.ContactUs} component={Pages.ContactUs} />
      <Route path={Routes.AboutUs} component={Pages.AboutUs} />
      <Route exact path={Routes.Home} component={Pages.Home} />
    </Switch>
  </Container>
);

export default root;
