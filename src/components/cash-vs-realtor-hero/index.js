// @flow
import { Table } from "baseui/table-semantic";
import React from 'react';
import styled from "styled-components";
import { CashVsRealtorItems, Colors } from "../../constants";
import { CashCell, RealtorCell, RowTitle } from "./table-cells";

const Container = styled.div`
    padding-top: 125px;
    padding-left: 12%;
    padding-right: 12%;
    background-color: ${Colors.Orange};
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

const Overrides = {
    TableBodyCell: {
        style: 
        {
            paddingTop: '0',
            paddingRight: '0',
            paddingBottom: '0',
            paddingLeft: '0',
            height: 'inherit'
        }
    },
    TableBodyRow: {
        style: {
            ':hover': {
                backgroundColor: ''
            },
            height: '1px'
        }
    }
}

export const CashVsRealtorHero = () => {
    return <Container>
        <Table 
            overrides={Overrides}
            columns={["", "Selling to Us", "Selling to an Agent"]}
            data={data}
        />
    </Container>
}

export default CashVsRealtorHero