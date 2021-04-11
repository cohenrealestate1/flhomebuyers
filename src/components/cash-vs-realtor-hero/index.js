// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Routes } from "../../constants";
import { ButtonContainer } from "../shared/styled-components";
import Text from "../text";
import Table from "./table";

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.Orange};
    padding-top: 115px;
    padding-bottom: 102px;
    padding-left: 175px;
    padding-right: 175px;
`;

const StyledButtonContainer = styled(ButtonContainer)`
    padding: 44px 36px;
    margin-top: 78px;
`

export const CashVsRealtorHero = () => {
    return <TableContainer>
        <Table />
        <StyledButtonContainer href={Routes.GetCashOffer}>
            <Text $uppercase $inline>Click to get your{" "}<Text $underline $inline>Cash offer</Text>{" "}Today!</Text>
        </StyledButtonContainer>
    </TableContainer>
}

export default CashVsRealtorHero;