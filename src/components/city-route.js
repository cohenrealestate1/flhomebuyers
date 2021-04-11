// @flow
import React, {ReactNode} from "react";
import {CityObjects} from "../constants"
import { Route } from "fusion-plugin-react-router";

export const makeCityRoutes = (component: ReactNode) => CityObjects.map((cityObject) => (
    <Route
      key={cityObject.city}
      path={cityObject.url}
      component={component}
    />
))