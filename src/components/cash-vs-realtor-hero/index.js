// @flow
import { Table } from "baseui/table-semantic";
import React from 'react';
import styled from "styled-components";
import { CashVsRealtorItems, Colors } from "../../constants";
import { AgentHeaderCell, CashCell, CashHeaderCell, Overrides, RealtorCell, RowTitle } from "./table-cells";

const Container = styled.div`
    padding-top: 125px;
    padding-left: 12%;
    padding-right: 12%;
    background-color: ${Colors.Orange};
    box-sizing: border-box;
`

const TableContainer = styled.div`
    background-color: white;
    box-sizing: border-box;
    padding-left: 86px;
    padding-right: 86px;
`

const data = CashVsRealtorItems.map((item, index) => [
    <RowTitle isFirst={index === 0} key={`${index}_row`}>
        {item.title}
    </RowTitle>,
    <CashCell isFirst={index === 0} key={`${index}_cash`}>
        {item.cash}
    </CashCell>,
    <RealtorCell isFirst={index === 0} key={`${index}_realtor`}>
        {item.realtor}
    </RealtorCell>,
]);

const columns = [
    "",
    <CashHeaderCell key="cash_heder">Selling to Us</CashHeaderCell>, 
    <AgentHeaderCell key="agent_header">Selling to an Agent</AgentHeaderCell>
]

export const CashVsRealtorHero = () => {
    return <Container>
        <TableContainer>
        <Table 
            overrides={Overrides}
            columns={columns}
            data={data}
            />
        </TableContainer>
    </Container>
}

export default CashVsRealtorHero