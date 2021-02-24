// @flow
import React from "react";
import { CashVsRealtorItems } from "../../constants";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import styled from "styled-components";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
const StyledTableBody = styled(TableBody)`
  tr:nth-child(odd) {
    background: #b0dfe5;
  }
`;
const StyledTableCell = styled(TableCell)`
  border: 1px solid rgba(224, 224, 224, 1);
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
            Selling to Florida Home Buyers
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
