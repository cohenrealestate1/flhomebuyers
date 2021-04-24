// @flow
import React, { ReactNode } from 'react';
import styled from "styled-components";
import { Colors, FontFamilies, makeMediaQueryMax, Typographies, Uppercase } from "../../constants";
import Text from "../text";

type Props = {
    isFirst: boolean,
    children: ReactNode
}

const textProps = {
    $openSans: true,
    $typography: Typographies.TextSmall,
    $style: makeMediaQueryMax(1000, Typographies.ButtonMedium)
}

const RowTitleContainer = styled.div`
    ${props => props.$isFirst ? '' : `border-top: 3px solid ${Colors.Green};`}
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 31px 39px 31px 0px;
    box-sizing: border-box;
    margin: auto 0;
`

export const RowTitle = (props: Props) => {
    const {children, isFirst} = props;
    return <RowTitleContainer $isFirst={isFirst}>
        <Text {...textProps} $uppercase $color={Colors.Gray3} $lineHeight="24px" $fontWeight={800}>
            {children}
        </Text>
    </RowTitleContainer>;
}

const CashCellContainer = styled.div`
    ${props => props.$isFirst ? '' : `border-top: 3px solid ${Colors.Green};`}
    background: rgba(43,182,115,0.23);
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    padding: 37px 38px;
    ${makeMediaQueryMax(1000, `background: unset; padding: unset;`)}
    `
export const CashCell = (props: Props) => {
    const {children, isFirst} = props;
    return <CashCellContainer $isFirst={isFirst}>
        <Text {...textProps} $margin="37px 38px" $center $color={Colors.Green} $lineHeight="27px" $fontWeight={700}>
            {children}
        </Text>
    </CashCellContainer>;
}

const RealtorCellContainer = styled.div`
    ${props => props.$isFirst ? '' : `border-top: 3px solid ${Colors.Green};`}
    width: 100%;
    height: 100%;
    padding: 37px 55px;
    box-sizing: border-box;
`

export const RealtorCell = (props: Props) => {
    const {children, isFirst} = props;
    return <RealtorCellContainer $isFirst={isFirst}>
        <Text {...textProps} $center $color={Colors.Gray3} $lineHeight="27px" $fontWeight={400}>
            {children}
        </Text>
    </RealtorCellContainer>;
}

export const CashHeaderCell = styled.div`
    width: 100%;
    height: 100%;
    padding: 23px 0;
    background-color: ${Colors.Green};
    ${Typographies.TextSmall};
    color: ${Colors.White};
    ${FontFamilies.M}
    font-weight: 800;
    line-height: 24px;
    ${Uppercase}
    border-top-left-radius: 10px;
    border-top-radius-radius: 10px;
`

export const AgentHeaderCell = styled.div`
    width: 100%;
    height: 100%;
    padding: 23px 0;
    background: rgba(21, 98, 171, 0.08);
    ${Typographies.TextSmall};
    color: ${Colors.Blue};
    ${FontFamilies.M}
    font-weight: 800;
    line-height: 24px;
    ${Uppercase}
    border-top-left-radius: 10px;
    border-top-radius-radius: 10px;
`

export const Overrides = {
    Root: {
        style: {
            overflow: '',
            borderRightColor: '',
            borderRightStyle: '',
            borderRightWidth: '',
            borderLeftColor: '',
            borderLeftStyle: '',
            borderLeftWidth: '',
            borderTopColor: '',
            borderTopStyle: '',
            borderTopWidth: '',
            borderBottomColor: '',
            borderBottomStyle: '',
            borderBottomWidth: '',
            position: '',
            transform: ''
        }
    },
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
    },
    TableHeadCell: {
        style: {
            position: '',
            textAlign: '',
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            '::after': {
                backgroundImage: `
                    linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.00),
                    rgba(0, 0, 0, 0)
                )`,
            }
        }
    }
}