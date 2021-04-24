// @flow
import React from "react";
import styled from "styled-components";
import { Ben, Colors, Eli, makeMediaQueryMax, Nava, Typographies } from "../../constants";
import { GrayDivider } from "../shared/styled-components";
import Text from "../text";
import Item from "./item";

const Container = styled.div`
    padding: 100px 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    ${makeMediaQueryMax(1000, `padding: 100px 0;`)}
`

const StyledGrayDivider = styled(GrayDivider)`
    width: 100%;
    margin: 56px 0;
`

const Title = styled.div`
    height: 228px;
    background-color: ${Colors.Orange};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const MeetTheTeamHero = () => {
    return <>
        <Title>
            <Text $fontWeight={800} $typography={Typographies.SubHeaderBig} $color={Colors.White} $uppercase>Meet the Team</Text>
        </Title>
        <Container>
            <Item {...Ben} />
            <StyledGrayDivider />
            <Item {...Eli} />
            <StyledGrayDivider />
            <Item {...Nava} />
        </Container>
    </>
}

export default MeetTheTeamHero;