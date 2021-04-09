// @flow
import React, { ReactNode } from 'react';
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Text from "../text";

type Props = {
    isFirst: boolean,
    children: ReactNode
}

const RowTitleContainer = styled.div`
    ${props => props.$isFirst ? '' : `border-top: 3px solid ${Colors.Green};`}
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 31px 0px;
    box-sizing: border-box;
    margin: auto 0;
`

export const RowTitle = (props: Props) => {
    const {children, isFirst} = props;
    return <RowTitleContainer $isFirst={isFirst}>
        <Text $uppercase $openSans $color={Colors.Gray3} $typography={Typographies.TextSmall} $lineHeight="24px" $fontWeight={800}>
            {children}
        </Text>
    </RowTitleContainer>;
}

const CashCellContainer = styled.div`
    ${props => props.$isFirst ? '' : `border-top: 3px solid ${Colors.Green};`}
    background: rgba(43,182,115,0.23);
    width: 100%;
    height: 100%;
    padding: 37px 0px;
    box-sizing: border-box;
`
export const CashCell = (props: Props) => {
    const {children, isFirst} = props;
    return <CashCellContainer $isFirst={isFirst}>
        <Text $openSans $center $color={Colors.Green} $typography={Typographies.TextSmall} $lineHeight="27px" $fontWeight={700}>
            {children}
        </Text>
    </CashCellContainer>;
}

const RealtorCellContainer = styled.div`
    ${props => props.$isFirst ? '' : `border-top: 3px solid ${Colors.Green};`}
    width: 100%;
    height: 100%;
    padding: 37px 0px;
    box-sizing: border-box;
`

export const RealtorCell = (props: Props) => {
    const {children, isFirst} = props;
    return <RealtorCellContainer $isFirst={isFirst}>
        <Text $openSans $center $color={Colors.Gray3} $typography={Typographies.TextSmall} $lineHeight="27px" $fontWeight={400}>
            {children}
        </Text>
    </RealtorCellContainer>;
}