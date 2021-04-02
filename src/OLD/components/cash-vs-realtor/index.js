// @flow
import React from "react";
import {
  CashVsRealtorItems,
  CompanyName,
  StyleConstants,
} from "../../constants";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import styled from "styled-components";

const StyledTable = styled(Table)`
  border: 1px solid ${StyleConstants.LightGray};
`;
const StyledTableBody = styled(TableBody)`
  tr:nth-child(odd) {
    background: ${StyleConstants.LightBlue};
  }
`;
const StyledTableCell = styled(TableCell)`
  border: 1px solid ${StyleConstants.LightGray};
`;
const StyledTableCellBold = styled(StyledTableCell)`
  &.MuiTableCell-root {
    font-weight: 700;
  }
`;

export const CashVsRealtor = () => {
  return (
    <StyledTable size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <StyledTableCell></StyledTableCell>
          <StyledTableCellBold align="">
            Selling to {CompanyName}
          </StyledTableCellBold>
          <StyledTableCellBold align="">
            Selling with an Agent
          </StyledTableCellBold>
        </TableRow>
      </TableHead>
      <StyledTableBody>
        {CashVsRealtorItems.map(({ title, cash, realtor }) => (
          <TableRow key={title}>
            <StyledTableCellBold component="th" scope="row">
              {title}
            </StyledTableCellBold>
            <StyledTableCell align="">{cash}</StyledTableCell>
            <StyledTableCell align="">{realtor}</StyledTableCell>
          </TableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default CashVsRealtor;
