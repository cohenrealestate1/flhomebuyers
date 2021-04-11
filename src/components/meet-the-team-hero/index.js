// @flow
import React from "react";
import styled from "styled-components";
import { Colors, Covid19Href, Typographies } from "../../constants";
import { GrayDivider } from "../shared/styled-components";
import Text from "../text";
import Item from "./item";

const Container = styled.div`
    padding: 100px 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 56px;
`

const StyledGrayDivider = styled(GrayDivider)`
    width: 100%;
`

const Title = styled.div`
    height: 228px;
    background-color: ${Colors.Orange};
    display: flex;
    align-items: center;
    justify-content: center;
`

const itemProps = {
    name: "Ben",
    title: "The Behind the Scenes Guy",
    email: "ben@flhomecashbuyers.com",
    favoriteBook: "World Without End by Ken Follet",
    imgHref: Covid19Href
}

export const MeetTheTeamHero = () => {
    return <>
        <Title>
            <Text $fontWeight={800} $typography={Typographies.SubHeaderBig} $color={Colors.White} $uppercase>Meet the Team</Text>
        </Title>
        <Container>
            <Item {...itemProps} />
            <StyledGrayDivider />
            <Item {...itemProps} />
            <StyledGrayDivider />
            <Item {...itemProps} />
        </Container>
    </>
}

export default MeetTheTeamHero;