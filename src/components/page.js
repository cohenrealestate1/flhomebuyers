// @flow
import React from "react";
import styled from "styled-components";
import Header from "./header";

const Container = styled.div`
    margin: -8px;
`

export const Page = () => {
    return <Container><Header/></Container>
}

export default Page;