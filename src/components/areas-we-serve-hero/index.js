// @flow
import React from "react";
import styled from "styled-components";
import {
    BrowardCities,
    Colors,
    FontFamilies,
    HendryCities,
    LeeCities,
    makeMediaQueryMax,
    MartinCities,
    MiamiCities,
    PalmBeachCities,
    StLucieCities,
    Typographies
} from "../../constants";
import Text from "../text";

const Container = styled.div`
    padding: 82px 186px 117px 141px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    ${makeMediaQueryMax(1000, `
        padding: 20px;
        text-align: center;
    `)}
`;

const CountiesAndCitiesContainer = styled.div`
    column-count: 3;
    ${makeMediaQueryMax(1000, 'column-count: 1; text-align: center;')}
`

type Props = {
    hideTitle: boolean
}

export const AreasWeServeHero = (props: Props) => {
    const {hideTitle} = props;
    return <Container>
        {!hideTitle && <Text $uppercase $margin="0 0 67px 0" $color={Colors.Blue} $hasSpacing $montserrat $typography={Typographies.SubHeaderBig}>Areas We Serve</Text>}
        <CountiesAndCitiesContainer>
            <CountyAndCities countyName="Miami-Dade County" cityObjects={MiamiCities} $noMargin />
            <CountyAndCities countyName="Broward County" cityObjects={BrowardCities} />
            <CountyAndCities countyName="Palm Beach County" cityObjects={PalmBeachCities} />
            <CountyAndCities countyName="Hendry County" cityObjects={HendryCities} />
            <CountyAndCities countyName="Lee County" cityObjects={LeeCities} />
            <CountyAndCities countyName="St Lucie County" cityObjects={StLucieCities} />
            <CountyAndCities countyName="Martin County" cityObjects={MartinCities} />
        </CountiesAndCitiesContainer>
    </Container>
}

const CountyAndCitiesContainer = styled.div`
    ${props => !props.$noMargin ? `margin-top: 37px; ${makeMediaQueryMax(1000, 'margin-top: 10px;')}` : ''}
    ${makeMediaQueryMax(1000, `margin-bottom: 30px;`)}
`;
const CountyAndCities = (props) => {
    const {countyName, cityObjects, $noMargin} = props;
    return <CountyAndCitiesContainer $noMargin={$noMargin}>
        <County name={countyName} />
        <>{cityObjects.map(cityObject => <div key={cityObject.city}><City cityObject={cityObject} /></div>)}</>
    </CountyAndCitiesContainer>
}

const City = (props) => {
    const {cityObject} = props;
    const {city, url} = cityObject;
    return <Text $lineHeight="28px" $style={`
        ${makeMediaQueryMax(1000, Typographies.TextXLarge)}
    `} $hoverColor={Colors.Orange} $color={Colors.Gray3} $montserrat $fontWeight={500} $a $typography={Typographies.TextXSmall} $href={url}>{city}</Text>
}
const County = (props) => {
    const {name} = props;
    return <Text $style={makeMediaQueryMax(1000, `
        ${FontFamilies.M}
        font-size: 40px;
        font-weight: 800;
        line-height: 68px;
    `)} $color={Colors.Green} $fontWeight={800} $uppercase $lineHeight="24px" $margin="0 0 7px 0" $montserrat $typography={Typographies.TextSmall}>{name}</Text>
}

export default AreasWeServeHero;