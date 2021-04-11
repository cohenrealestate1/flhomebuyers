// @flow
import React from "react";
import styled from "styled-components";
import { Colors } from "../../constants";
import Table from "./table";

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.Orange};
    padding-top: 115px;
    padding-bottom: 327px;
    padding-left: 175px;
    padding-right: 175px;
`;

export const CashVsRealtorHero = () => {
    return <TableContainer><Table /></TableContainer>
}

export default CashVsRealtorHero;