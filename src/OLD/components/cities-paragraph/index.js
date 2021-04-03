// @flow
import React from "react";
import styled from "styled-components";
import { Inline } from "../../../constants";
import { CityObjects, CompanyName, InTheAreas } from "../../constants";
import Link from "../link";

const StyledLink = styled(Link)`
  color: blue;
  font-weight: 700;
  ${Inline}
  cursor: pointer;
`;

const cityObjectsWithoutLast = CityObjects.slice(0, -1);
const lastCityObject = CityObjects[CityObjects.length - 1];

export const CitiesParagraph = () => {
  return (
    <>
      {CompanyName} is a real-estate cash investor working in the {InTheAreas}{" "}
      areas. We buy houses in{" "}
      {cityObjectsWithoutLast.map((cityObject) => (
        <>
          <StyledLink
            href={cityObject.url}
            text={cityObject.city}
            key={cityObject.city}
            color="blue"
          />
          {", "}
        </>
      ))}
      and{" "}
      <StyledLink
        href={lastCityObject.url}
        text={lastCityObject.city}
        key={lastCityObject.city}
        color="blue"
      />
      {"."}
    </>
  );
};

export default CitiesParagraph;
