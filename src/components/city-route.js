// @flow
import { Route } from "fusion-plugin-react-router";
import React, { ReactNode } from "react";
import { CityObjects } from "../constants";

export const makeCityRoutes = (component: ReactNode) => CityObjects.map((cityObject) => (
    <Route
      key={cityObject.city}
      path={cityObject.url}
      component={component}
    />
))