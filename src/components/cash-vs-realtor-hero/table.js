// @flow
import { Table } from "baseui/table-semantic";
import React from 'react';
import styled from "styled-components";
import { CashVsRealtorItems, Colors, Typographies } from "../../constants";
import Text from "../text";
import { AgentHeaderCell, CashCell, CashHeaderCell, Overrides, RealtorCell, RowTitle } from "./table-cells";

const TableContainer = styled.div`
    background-color: ${Colors.White};
    padding: 57px 81px 79px 88px;
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

export const CashVsRealtorTable = () => {
    return <TableContainer>
        <Text $center $margin="0 0 40px 0" $uppercase $color={Colors.Green} $fontWeight="bold" $typography={Typographies.SubHeaderBig}>Why Sell To Us</Text>
        <Table 
            overrides={Overrides}
            columns={columns}
            data={data}
            />
        </TableContainer>
}

export default CashVsRealtorTable