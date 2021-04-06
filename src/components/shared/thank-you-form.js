// @flow
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, Typographies } from "../../constants";
import Form, { PaddingSizes } from "../form";
import Bottom from "../lead-intake-form/bottom";
import Text from "../text";

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

type Props = {
    topText: ReactNode,
    bottomText: string
}

export const ThankYouForm = (props: Props) => {
    const {topText, bottomText} = props;
    return <Form additionalContent={<Bottom />} paddingSize={PaddingSizes.Small}>
        <TopContainer>
            <Text $inline $uppercase $color={Colors.Blue} $typography={Typographies.PageHeader}>
            {topText}
            </Text>
            <Text $margin="21px 0 0 0" $typography={Typographies.TextXLarge} $color={Colors.Gray3}>{bottomText}</Text>
        </TopContainer>
    </Form>
};

export default ThankYouForm;